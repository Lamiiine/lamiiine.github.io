// Level 2 Game Logic
let level2 = {
    lives: 5,  // Start with 5 lives instead of 10
    score: 0,
    gameActive: false,
    currentWilaya: null,
    incorrectGuesses: new Set(), // Track incorrect guesses for the current wilaya
    allWilayas: [], // Will store all wilaya names
    usedWilayas: new Set(), // Track wilayas that have been used
    correctlyAnsweredWilayas: new Set(), // Track wilayas that were correctly answered
    previousInput: null, // Track the previous input for repeated wrong answers
    streak: 0, // Track consecutive correct answers for bonus lives
    
    // Initialize the game
    init: function() {
        // Get all wilaya names from wilayaData
        this.allWilayas = Object.keys(wilayaData);
        
        // Reset game state
        this.lives = 5;
        this.score = 0;
        this.streak = 0;
        this.gameActive = true;
        this.usedWilayas.clear();
        this.correctlyAnsweredWilayas.clear();
        this.incorrectGuesses.clear();
        this.previousInput = null;
        
        // Remove blurred class from game container
        const gameContainer = document.querySelector('.game-container');
        if (gameContainer) {
            gameContainer.classList.remove('blurred');
        }
        
        // Reset all wilayas on the map
        const wilayaPaths = document.querySelectorAll('#features path');
        wilayaPaths.forEach(path => {
            path.classList.remove('correct', 'highlighted', 'wrong');
        });
        
        // Update UI
        this.updateLives();
        this.updateScore();
        
        // Clear any existing messages
        this.clearMessages();
        
        // Show welcome message
        
        // Set up input handler
        const wilayaInput = document.getElementById('wilaya-input');
      
        wilayaInput.disabled = false;
        wilayaInput.focus();
        wilayaInput.placeholder = "Type the highlighted wilaya name...";
        wilayaInput.value = "";
        
        // Remove existing event listener to prevent duplicates
        wilayaInput.removeEventListener('keydown', this.handleKeyDown);
        
        // Set up the enter key handler
        wilayaInput.addEventListener('keydown', this.handleKeyDown.bind(this));
        
        // Select first wilaya
        this.selectRandomWilaya();
        
        // Make sure the timer display shows lives instead of time
        const livesDisplay = document.getElementById('time');
        livesDisplay.textContent = `Lives: ${this.lives}`;
    },
    
    // Handle keydown events in the input field
    handleKeyDown: function(e) {
        if (e.key === 'Enter' && this.gameActive) {
            this.checkAnswer();
        }
    },
    
    // Select a random wilaya to highlight
    selectRandomWilaya: function() {
        // Get all available wilayas that haven't been used yet
        const availableWilayas = Object.keys(wilayaData).filter(wilaya => 
            !this.usedWilayas.has(wilaya)
        );
        
        if (availableWilayas.length === 0) {
            // All wilayas have been used, end the game with victory
            this.endGame(true);
            return;
        }
        
        // Select a random wilaya from the available ones
        const randomIndex = Math.floor(Math.random() * availableWilayas.length);
        this.currentWilaya = availableWilayas[randomIndex];
        
        // Add to used wilayas
        this.usedWilayas.add(this.currentWilaya);
        
        // Highlight it on the map
        this.highlightWilaya(this.currentWilaya);
    },
    
    // Highlight a wilaya on the map
    highlightWilaya: function(wilayaName) {
        // Reset all wilayas first
        const wilayaPaths = document.querySelectorAll('#features path');
        wilayaPaths.forEach(path => {
            path.classList.remove('highlighted', 'wrong', 'correct');
        });
  
        // Get the wilaya ID from our mapping
        const wilayaId = wilayaSvgIds[wilayaName];
        
        if (wilayaId) {
            // Try to find the path element
            const path = document.getElementById(wilayaId);
            
            if (path) {
                // Add the highlighted class
                path.classList.add('highlighted');
                console.log(`Successfully highlighted wilaya: ${wilayaName} (ID: ${wilayaId})`);
            } else {
                console.warn(`Path element not found for wilaya: ${wilayaName} (ID: ${wilayaId})`);
            }
        } else {
            console.warn(`No ID mapping found for wilaya: ${wilayaName}`);
        }
    },
    
    // Check the player's answer
    checkAnswer: function() {
        if (!this.gameActive) return;
        
        const wilayaInput = document.getElementById('wilaya-input');
        const userAnswer = wilayaInput.value.trim();
        
        // Skip empty answers
        if (!userAnswer) return;
        
        // Store the input for duplicate checking
        this.previousInput = userAnswer;
        
        // Clear the input field
        wilayaInput.value = '';
        
        // Normalize the user's answer and the correct answer for comparison
        const normalizedUserAnswer = this.normalizeAnswer(userAnswer);
        const normalizedCorrectAnswer = this.normalizeAnswer(this.currentWilaya);
        
        // Check for alternative spellings
        const isCorrect = this.checkAlternativeSpellings(userAnswer, this.currentWilaya);
        
        if (isCorrect) {
            // Correct answer
            this.handleCorrectAnswer();
        } else {
            // Wrong answer
            this.handleWrongAnswer(userAnswer);
        }
        
        // Focus the input field again
        wilayaInput.focus();
    },
    
    // Handle correct answer
    handleCorrectAnswer: function() {
        // Mark the wilaya as correctly answered
        this.correctlyAnsweredWilayas.add(this.currentWilaya);
        
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
            this.showMessage(`Correct! "${this.currentWilaya}" is right.`, "success");
        }
        
        // Mark the wilaya as correct on the map
        this.markWilayaCorrect(this.currentWilaya);
        
        // Show score popup
        this.showScorePopup();
        
        // Select the next wilaya after a short delay
        setTimeout(() => {
            this.selectRandomWilaya();
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
        
        // Mark the wilaya as wrong on the map
        this.markWilayaWrong();
        
        // Show loss popup
        this.showLossPopup();
        
        // Check if game over
        if (this.lives <= 0) {
            this.endGame();
            return;
        }
        
        // Check if hint should be shown (after 3 wrong guesses)
        if (this.incorrectGuesses.size === 3) {
            const firstLetter = this.currentWilaya.charAt(0);
            this.showMessage(`Hint: The wilaya name starts with "${firstLetter}"`, "info");
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
        const standardName = window.wilayaAlternativesLookup[userAnswer.toLowerCase()];
        
        // If the standardized name matches the correct answer, it's valid
        return standardName === correctAnswer;
    },
    
    // Mark the current wilaya as correct on the map
    markWilayaCorrect: function(wilayaName) {
        const wilayaId = wilayaSvgIds[wilayaName];
        
        if (wilayaId) {
            const path = document.getElementById(wilayaId);
            
            if (path) {
                path.classList.remove('highlighted', 'wrong');
                path.classList.add('correct');
            }
        }
    },
    
    // Mark the current wilaya as wrong on the map
    markWilayaWrong: function() {
        const wilayaId = wilayaSvgIds[this.currentWilaya];
        
        if (wilayaId) {
            const path = document.getElementById(wilayaId);
            
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
        // Clear any existing messages
        this.clearMessages();
        
        // Create message element
        const messageElement = document.createElement('div');
        messageElement.className = `game-message ${type}`;
        messageElement.textContent = message;
        
        // Add to the DOM - insert before the input area
        const inputArea = document.querySelector('.input-area');
        if (inputArea) {
            inputArea.insertBefore(messageElement, inputArea.firstChild);
        }
        
        // Auto-clear success and error messages after a delay
        if (type === 'success' || type === 'error') {
            setTimeout(() => {
                messageElement.remove();
            }, 3000);
        }
    },
    
    // Clear all messages
    clearMessages: function() {
        const messages = document.querySelectorAll('.game-message');
        messages.forEach(message => message.remove());
    },
    
    // Show score popup
    showScorePopup: function() {
        // Remove any existing popup
        const existingPopup = document.querySelector('.score-popup');
        if (existingPopup) {
            existingPopup.remove();
        }
        
        // Create new popup
        const popup = document.createElement('div');
        popup.className = 'score-popup';
        popup.innerHTML = `<span class="plus">+1</span>: ${this.currentWilaya}`;
        document.body.appendChild(popup);
        
        // Trigger animation
        setTimeout(() => {
            popup.classList.add('show');
        }, 10);
        
        // Remove popup after animation
        setTimeout(() => {
            popup.remove();
        }, 1500);
    },
    
    // Show loss popup
    showLossPopup: function() {
        // Remove any existing popup
        const existingPopup = document.querySelector('.loss-popup');
        if (existingPopup) {
            existingPopup.remove();
        }
        
        // Create new popup
        const popup = document.createElement('div');
        popup.className = 'loss-popup';
        popup.innerHTML = `<span class="minus">-1</span>`;
        document.body.appendChild(popup);
        
        // Trigger animation
        setTimeout(() => {
            popup.classList.add('show');
        }, 10);
        
        // Remove popup after animation
        setTimeout(() => {
            popup.remove();
        }, 1500);
    },
    
    // Win game
    winGame: function() {
        this.gameActive = false;
        
        // Blur the game container
        const gameContainer = document.querySelector('.game-container');
        if (gameContainer) {
            gameContainer.classList.add('blurred');
        }
        
        // Show results in a styled popup
        const resultsDiv = document.getElementById('results');
        if (resultsDiv) {
            resultsDiv.classList.remove('hidden');
            resultsDiv.innerHTML = `
                <div class="results-container">
                    <h2 class="results-title win">Victory!</h2>
                    <p class="results-message">Congratulations! You've identified all wilayas!</p>
                    <div class="results-stats">
                        <div class="stat">
                            <span class="stat-value">${this.score}</span>
                            <span class="stat-label">Score</span>
                        </div>
                        <div class="stat">
                            <span class="stat-value">${this.lives}</span>
                            <span class="stat-label">Lives Left</span>
                        </div>
                    </div>
                    <div class="results-buttons">
                        <button id="play-again-btn" class="play-again-button">Play Again</button>
                        <button id="return-to-menu-btn" class="return-button">Return to Menu</button>
                    </div>
                </div>
            `;
            
            // Add event listener to the play again button
            const playAgainBtn = document.getElementById('play-again-btn');
            if (playAgainBtn) {
                playAgainBtn.addEventListener('click', () => {
                    resultsDiv.classList.add('hidden');
                    this.init(); // Restart level 2
                });
            }
            
            // Add event listener to the return to menu button
            const returnToMenuBtn = document.getElementById('return-to-menu-btn');
            if (returnToMenuBtn) {
                returnToMenuBtn.addEventListener('click', () => {
                    resultsDiv.classList.add('hidden');
                    
                    // Reset Level 2 state
                    this.gameActive = false;
                    
                    // Call the complete reset function
                    completeGameReset();
                    
                    // Show level selection
                    const levelSelection = document.getElementById('level-selection');
                    if (levelSelection) {
                        levelSelection.style.display = 'flex';
                    }
                    
                    // Blur the game container
                    const gameContainer = document.querySelector('.game-container');
                    if (gameContainer) {
                        gameContainer.classList.add('blurred');
                    }
                });
            }
        }
        
        // Disable input
        const wilayaInput = document.getElementById('wilaya-input');
        if (wilayaInput) {
            wilayaInput.disabled = true;
        }
        
        // Show victory message
        this.showMessage("Congratulations! You've identified all wilayas!", "success");
    },
    
    // End the game
    endGame: function(victory = false) {
        this.gameActive = false;
        
        // Blur the game container
        const gameContainer = document.querySelector('.game-container');
        if (gameContainer) {
            gameContainer.classList.add('blurred');
        }
        
        // Disable the input field
        const inputField = document.getElementById('wilaya-input');
        if (inputField) {
            inputField.disabled = true;
            inputField.placeholder = victory ? 'Victory!' : 'Game Over';
        }
        
        // Create final results popup
        this.showFinalResults();
    },
    
    // Show final results with map and buttons
    showFinalResults: function() {
        console.log("Showing final results for Level 2");
        
        // Create overlay
        const overlay = document.createElement('div');
        overlay.className = 'results-overlay';
        document.body.appendChild(overlay);
        
        // Create popup
        const popup = document.createElement('div');
        popup.className = 'final-results-popup';
        
        // Create title
        const title = document.createElement('h2');
        title.textContent = this.lives > 0 ? 'Victory!' : 'Game Over!';
        title.className = this.lives > 0 ? 'win' : 'lose';
        
        // Create message
        const message = document.createElement('p');
        message.textContent = this.lives > 0 
            ? `Congratulations! You identified all wilayas with ${this.lives} lives remaining.` 
            : `You identified ${this.score} wilayas before running out of lives.`;
        
        // Create map container for the results
        const mapCloneContainer = document.createElement('div');
        mapCloneContainer.className = 'result-map-container';
        
        // Clone the map to show in the results
        const mapClone = document.getElementById('algeria-map').cloneNode(true);
        mapClone.id = 'result-map';
        mapCloneContainer.appendChild(mapClone);
        
        // Create social sharing buttons container
        const shareContainer = document.createElement('div');
        shareContainer.className = 'social-links';
        
        // Add share text
        const shareText = document.createElement('p');
        shareText.className = 'share-text';
        shareText.textContent = 'Share your result:';
        
        // Create social container
        const socialContainer = document.createElement('div');
        socialContainer.className = 'social-container';
        
        // Twitter/X button
        const twitterBtn = document.createElement('button');
        twitterBtn.className = 'social-button twitter';
        twitterBtn.innerHTML = '<img src="assets/icons/twitter-icon.svg" alt="X (Twitter)">';
        twitterBtn.addEventListener('click', () => this.shareOnTwitter());
        socialContainer.appendChild(twitterBtn);
        
        // Download button
        const downloadBtn = document.createElement('button');
        downloadBtn.className = 'social-button download';
        downloadBtn.innerHTML = '<img src="assets/icons/download-icon.svg" alt="Download">';
        downloadBtn.addEventListener('click', () => this.downloadResult());
        socialContainer.appendChild(downloadBtn);
        
        shareContainer.appendChild(shareText);
        shareContainer.appendChild(socialContainer);
        
        const playAgainButton = document.createElement('button');
        playAgainButton.textContent = 'Play Again';
        playAgainButton.className = 'play-again-btn';
        playAgainButton.addEventListener('click', () => {
            // Remove popup and overlay
            popup.remove();
            overlay.remove();
            
            // Reset game
            this.init();
        });
        
        // Append elements to popup
        popup.appendChild(title);
        popup.appendChild(message);
        popup.appendChild(mapCloneContainer);
        popup.appendChild(shareContainer);
        popup.appendChild(playAgainButton);
        
        // Add popup to body
        document.body.appendChild(popup);
    },
    
    // Share result on Twitter
    shareOnTwitter: function() {
        const text = this.lives > 0 
            ? `I identified all wilayas in Algeria with ${this.lives} lives remaining in Level 2!` 
            : `I identified ${this.score} wilayas in Algeria before running out of lives in Level 2!`;
        
        const url = window.location.href;
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
        
        window.open(twitterUrl, '_blank');
    },
    
    // Download result as image
    downloadResult: function() {
        const popup = document.querySelector('.final-results-popup');
        
        if (popup) {
            html2canvas(popup).then(canvas => {
                const link = document.createElement('a');
                link.download = 'algeria-game-result.png';
                link.href = canvas.toDataURL('image/png');
                link.click();
            });
        }
    }
};

// Initialize level selection when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get level selection elements
    const levelSelection = document.getElementById('level-selection');
    const levelOptions = document.querySelectorAll('.level-option');
    const startGameBtn = document.getElementById('start-game-btn');
    
    let selectedLevel = null;
    
    // Add click handlers to level options
    levelOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove selected class from all options
            levelOptions.forEach(opt => opt.classList.remove('selected'));
            
            // Add selected class to clicked option
            this.classList.add('selected');
            
            // Store selected level
            selectedLevel = this.getAttribute('data-level');
            console.log("Selected level:", selectedLevel);
        });
    });
    
    // Add click handler to start game button
    startGameBtn.addEventListener('click', function() {
        if (!selectedLevel) {
            alert('Please select a level first');
            return;
        }
        
        // Hide level selection
        const levelSelection = document.getElementById('level-selection');
        if (levelSelection) {
            levelSelection.style.display = 'none';
        }
        
        // Remove the blurred class from game container
        const gameContainer = document.querySelector('.game-container');
        if (gameContainer) {
            gameContainer.classList.remove('blurred');
        }
        
        // Remove start overlay if it exists
        const startOverlay = document.querySelector('.start-overlay');
        if (startOverlay) {
            startOverlay.remove();
        }
        
        console.log("Starting game with level:", selectedLevel);
        
        // Start the appropriate game
        if (selectedLevel === '1') {
            try {
                // Make sure we're using the global startGame function
                window.startGame();
            } catch (error) {
                console.error("Error starting Level 1:", error);
            }
        } else if (selectedLevel === '2') {
            try {
                // Start level 2
                level2.init();
            } catch (error) {
                console.error("Error starting Level 2:", error);
            }
        }
    });
    
    // Modify the original startBtn to show level selection instead of starting the game
    const startBtn = document.getElementById('start-btn');
    if (startBtn) {
        startBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Show level selection
            if (levelSelection) {
                levelSelection.style.display = 'flex';
            }
        });
    }
}); 