// Level 2 Game Logic
let level2 = {
    lives: 5,  // Start with 5 lives
    score: 0,
    gameActive: false,
    currentGovernorate: null,
    incorrectGuesses: new Set(), // Track incorrect guesses for the current governorate
    allGovernorates: [], // Will store all governorate names
    usedGovernorates: new Set(), // Track governorates that have been used
    correctlyAnsweredGovernorates: new Set(), // Track governorates that were correctly answered
    previousInput: null, // Track the previous input for repeated wrong answers
    streak: 0, // Track consecutive correct answers for bonus lives
    
    // Initialize the game
    init: function() {
        // Get all governorate names from governorateData
        this.allGovernorates = Object.keys(governorateData);
        
        // Reset game state
        this.lives = 5;
        this.score = 0;
        this.streak = 0;
        this.gameActive = true;
        this.usedGovernorates.clear();
        this.correctlyAnsweredGovernorates.clear();
        this.incorrectGuesses.clear();
        this.previousInput = null;
        
        // Remove blurred class from game container
        const gameContainer = document.querySelector('.game-container');
        if (gameContainer) {
            gameContainer.classList.remove('blurred');
        }
        
        // Reset all governorates on the map
        const governoratePaths = document.querySelectorAll('#features path');
        governoratePaths.forEach(path => {
            path.classList.remove('correct', 'highlighted', 'wrong');
        });
        
        // Update UI
        this.updateLives();
        this.updateScore();
        
        // Clear any existing messages
        this.clearMessages();
        
        // Set up input handler
        const governorateInput = document.getElementById('wilaya-input');
      
        governorateInput.disabled = false;
        governorateInput.focus();
        governorateInput.placeholder = "Type the highlighted governorate name...";
        governorateInput.value = "";
        
        // Remove existing event listener to prevent duplicates
        governorateInput.removeEventListener('keydown', this.handleKeyDown);
        
        // Set up the enter key handler
        governorateInput.addEventListener('keydown', this.handleKeyDown.bind(this));
        
        // Load the SVG map
        this.loadMap().then(() => {
            // Select first governorate
            this.selectRandomGovernorate();
        });
    },
    
    // Load the Egypt SVG map
    loadMap: function() {
        return new Promise((resolve, reject) => {
            const mapContainer = document.getElementById('egypt-map');
            
            // Check if map is already loaded
            if (mapContainer.querySelector('svg')) {
                resolve();
                return;
            }
            
            // Load the SVG file
            fetch('eg.svg')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.text();
                })
                .then(svgData => {
                    // Insert the SVG into the container
                    mapContainer.innerHTML = svgData;
                    
                    // Configure SVG for responsive display
                    const svgElement = document.querySelector('#egypt-map svg');
                    if (svgElement) {
                        // Set attributes for responsive scaling
                        svgElement.setAttribute('width', '100%');
                        svgElement.setAttribute('height', '100%');
                        svgElement.setAttribute('preserveAspectRatio', 'xMidYMid meet');
                    }
                    
                    resolve();
                })
                .catch(error => {
                    console.error('Error loading the SVG map:', error);
                    mapContainer.innerHTML = '<p>Error loading the map. Please refresh the page.</p>';
                    reject(error);
                });
        });
    },
    
    // Handle keydown events in the input field
    handleKeyDown: function(e) {
        if (e.key === 'Enter' && this.gameActive) {
            this.checkAnswer();
        }
    },
    
    // Select a random governorate to highlight
    selectRandomGovernorate: function() {
        // Get all available governorates that haven't been used yet
        const availableGovernorates = Object.keys(governorateData).filter(governorate => 
            !this.usedGovernorates.has(governorate)
        );
        
        if (availableGovernorates.length === 0) {
            // All governorates have been used, end the game with victory
            this.endGame(true);
            return;
        }
        
        // Select a random governorate from the available ones
        const randomIndex = Math.floor(Math.random() * availableGovernorates.length);
        this.currentGovernorate = availableGovernorates[randomIndex];
        
        // Add to used governorates
        this.usedGovernorates.add(this.currentGovernorate);
        
        // Clear incorrect guesses for the new governorate
        this.incorrectGuesses.clear();
        
        // Highlight it on the map
        this.highlightGovernorate(this.currentGovernorate);
    },
    
    // Highlight a governorate on the map
    highlightGovernorate: function(governorateName) {
        // Reset all governorates first
        const governoratePaths = document.querySelectorAll('#features path');
        governoratePaths.forEach(path => {
            path.classList.remove('highlighted', 'wrong', 'correct');
        });
  
        // Get the governorate ID from our mapping
        const governorateId = governorateSvgIds[governorateName];
        
        if (governorateId) {
            // Try to find the path element
            const path = document.getElementById(governorateId);
            
            if (path) {
                // Add the highlighted class
                path.classList.add('highlighted');
                console.log(`Successfully highlighted governorate: ${governorateName} (ID: ${governorateId})`);
            } else {
                console.warn(`Path element not found for governorate: ${governorateName} (ID: ${governorateId})`);
            }
        } else {
            console.warn(`No ID mapping found for governorate: ${governorateName}`);
        }
    },
    
    // Check the player's answer
    checkAnswer: function() {
        if (!this.gameActive) return;
        
        const governorateInput = document.getElementById('wilaya-input');
        const userAnswer = governorateInput.value.trim();
        
        // Skip empty answers
        if (!userAnswer) return;
        
        // Store the input for duplicate checking
        this.previousInput = userAnswer;
        
        // Clear the input field
        governorateInput.value = '';
        
        // Normalize the user's answer and the correct answer for comparison
        const normalizedUserAnswer = this.normalizeAnswer(userAnswer);
        const normalizedCorrectAnswer = this.normalizeAnswer(this.currentGovernorate);
        
        // Check for alternative spellings
        const isCorrect = this.checkAlternativeSpellings(userAnswer, this.currentGovernorate);
        
        if (isCorrect) {
            // Correct answer
            this.handleCorrectAnswer();
        } else {
            // Wrong answer
            this.handleWrongAnswer(userAnswer);
        }
        
        // Focus the input field again
        governorateInput.focus();
    },
    
    // Handle correct answer
    handleCorrectAnswer: function() {
        // Mark the governorate as correctly answered
        this.correctlyAnsweredGovernorates.add(this.currentGovernorate);
        
        // Increment score
        this.score++;
        this.updateScore();
        
        // Increment streak
        this.streak++;
        
        // Check if player earned a bonus life (every 5 consecutive correct answers)
        if (this.streak % 5 === 0) {
            this.lives++;
            this.updateLives();
            this.showMessage(`Streak bonus! +1 life for ${this.streak} correct answers in a row!`, "success");
        } else {
            this.showMessage(`Correct! "${governorateData[this.currentGovernorate]}" is right.`, "success");
        }
        
        // Mark the governorate as correct on the map
        this.markGovernorateCorrect(this.currentGovernorate);
        
        // Show score popup
        this.showScorePopup();
        
        // Select the next governorate after a short delay
        setTimeout(() => {
            this.selectRandomGovernorate();
        }, 1000);
    },
    
    // Handle wrong answer
    handleWrongAnswer: function(userAnswer) {
        // Reset streak
        this.streak = 0;
        
        // Add to incorrect guesses
        this.incorrectGuesses.add(userAnswer.toLowerCase());
        
        // Decrease lives
        this.lives--;
        this.updateLives();
        
        // Mark the governorate as wrong on the map
        this.markGovernorateWrong();
        
        // Show loss popup
        this.showLossPopup();
        
        // Check if game over
        if (this.lives <= 0) {
            this.endGame(false);
            return;
        }
        
        // Check if hint should be shown (after 3 wrong guesses)
        if (this.incorrectGuesses.size === 3) {
            const firstLetter = governorateData[this.currentGovernorate].charAt(0);
            this.showMessage(`Hint: The governorate name starts with "${firstLetter}"`, "info");
        }
    },
    
    // Normalize answer for comparison
    normalizeAnswer: function(answer) {
        return answer.toLowerCase()
            .replace(/[^\w\s]/g, '') // Remove punctuation
            .replace(/\s+/g, ' ')    // Normalize whitespace
            .trim();
    },
    
    // Check for alternative spellings
    checkAlternativeSpellings: function(userAnswer, correctAnswer) {
        // Use the global lookup object to check if this is a valid variation
        const standardName = window.governorateAlternativesLookup[userAnswer.toLowerCase()];
        
        // If the standardized name matches the correct answer, it's valid
        return standardName === correctAnswer;
    },
    
    // Mark the current governorate as correct on the map
    markGovernorateCorrect: function(governorateName) {
        const governorateId = governorateSvgIds[governorateName];
        
        if (governorateId) {
            const path = document.getElementById(governorateId);
            
            if (path) {
                path.classList.remove('highlighted', 'wrong');
                path.classList.add('correct');
            }
        }
    },
    
    // Mark the current governorate as wrong on the map
    markGovernorateWrong: function() {
        const governorateId = governorateSvgIds[this.currentGovernorate];
        
        if (governorateId) {
            const path = document.getElementById(governorateId);
            
            if (path) {
                path.classList.remove('highlighted');
                path.classList.add('wrong');
                
                // Reset back to highlighted after a short delay
                setTimeout(() => {
                    if (this.gameActive && path) {
                        path.classList.remove('wrong');
                        path.classList.add('highlighted');
                    }
                }, 500);
            }
        }
    },
    
    // Update the lives display
    updateLives: function() {
        const livesDisplay = document.getElementById('time');
        if (livesDisplay) {
            livesDisplay.textContent = `Lives: ${this.lives}`;
        }
    },
    
    // Update the score display
    updateScore: function() {
        const scoreDisplay = document.getElementById('score');
        if (scoreDisplay) {
            scoreDisplay.textContent = this.score;
        }
    },
    
    // Show a message to the player
    showMessage: function(message, type) {
        // Remove any existing messages
        this.clearMessages();
        
        // Create a new message
        const messageElement = document.createElement('div');
        messageElement.className = `game-message ${type || 'info'}`;
        messageElement.textContent = message;
        
        // Add to the document
        document.body.appendChild(messageElement);
        
        // Remove after a delay
        setTimeout(() => {
            if (messageElement.parentNode) {
                messageElement.parentNode.removeChild(messageElement);
            }
        }, 3000);
    },
    
    // Clear all messages
    clearMessages: function() {
        const messages = document.querySelectorAll('.game-message');
        messages.forEach(message => {
            message.parentNode.removeChild(message);
        });
    },
    
    // Show score popup
    showScorePopup: function() {
        // Create popup if it doesn't exist
        let popup = document.querySelector('.score-popup');
        if (!popup) {
            popup = document.createElement('div');
            popup.className = 'score-popup';
            document.body.appendChild(popup);
        }
        
        // Set content
        popup.innerHTML = `<span class="plus">+1</span> ${this.score}/${Object.keys(governorateData).length}`;
        
        // Show it
        popup.classList.add('show');
        
        // Hide after animation
        setTimeout(() => {
            popup.classList.remove('show');
        }, 1500);
    },
    
    // Show loss popup
    showLossPopup: function() {
        // Create popup if it doesn't exist
        let popup = document.querySelector('.loss-popup');
        if (!popup) {
            popup = document.createElement('div');
            popup.className = 'loss-popup';
            document.body.appendChild(popup);
        }
        
        // Set content
        popup.innerHTML = `<span class="minus">-1</span> ${this.lives} lives left`;
        
        // Show it
        popup.classList.add('show');
        
        // Hide after animation
        setTimeout(() => {
            popup.classList.remove('show');
        }, 1500);
    },
    
    // End the game
    endGame: function(isVictory = false) {
        this.gameActive = false;
        
        // Disable input
        const governorateInput = document.getElementById('wilaya-input');
        governorateInput.disabled = true;
        
        // Update final score
        const finalScoreDisplay = document.getElementById('final-score');
        if (finalScoreDisplay) {
            finalScoreDisplay.textContent = this.score;
        }
        
        // Show appropriate message
        if (isVictory) {
            this.showMessage(`Congratulations! You've identified all ${Object.keys(governorateData).length} governorates!`, "success");
        } else {
            this.showMessage("Game over! You've run out of lives.", "error");
        }
        
        // Create results map
        this.createResultsMap();
        
        // Create overlay
        const overlay = document.createElement('div');
        overlay.className = 'results-overlay';
        document.body.appendChild(overlay);
        
        // Show results
        const resultsDiv = document.getElementById('results');
        if (resultsDiv) {
            resultsDiv.classList.remove('hidden');
        }
        
        // Add blur to game container
        const gameContainer = document.querySelector('.game-container');
        if (gameContainer) {
            gameContainer.classList.add('blurred');
        }
    },
    
    // Create the results map showing correct and missed governorates
    createResultsMap: function() {
        const resultMapContainer = document.getElementById('result-map');
        if (!resultMapContainer) return;
        
        // Clone the original SVG
        const originalMap = document.querySelector('#egypt-map svg');
        if (!originalMap) return;
        
        const clonedMap = originalMap.cloneNode(true);
        resultMapContainer.innerHTML = '';
        resultMapContainer.appendChild(clonedMap);
        
        // Get all governorates
        const allGovernorates = Object.keys(governorateData);
        
        // Color each governorate based on whether it was answered correctly
        allGovernorates.forEach(governorateName => {
            const governorateId = governorateSvgIds[governorateName];
            if (governorateId) {
                const path = resultMapContainer.querySelector(`#${governorateId}`);
                if (path) {
                    if (this.correctlyAnsweredGovernorates.has(governorateName)) {
                        // Correctly answered
                        path.style.fill = '#2ecc71';
                        path.style.stroke = '#27ae60';
                        path.style.strokeWidth = '1';
                    } else {
                        // Missed
                        path.style.fill = '#e74c3c';
                        path.style.stroke = '#c0392b';
                        path.style.strokeWidth = '1';
                    }
                }
            }
        });
    }
};

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Start the game
    level2.init();
    
    // Set up play again button
    const playAgainBtn = document.getElementById('play-again');
    if (playAgainBtn) {
        playAgainBtn.addEventListener('click', function() {
            // Hide results and remove overlay
            const resultsDiv = document.getElementById('results');
            if (resultsDiv) {
                resultsDiv.classList.add('hidden');
            }
            
            // Remove overlay
            const overlay = document.querySelector('.results-overlay');
            if (overlay) {
                overlay.remove();
            }
            
            // Start a new game
            level2.init();
        });
    }
}); 