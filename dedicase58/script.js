document.addEventListener('DOMContentLoaded', function() {
    const startBtn = document.getElementById('start-btn');
    const playAgainBtn = document.getElementById('play-again');
    const wilayaInput = document.getElementById('wilaya-input');
    const timeDisplay = document.getElementById('time');
    const scoreDisplay = document.getElementById('score');
    const finalScoreDisplay = document.getElementById('final-score');
    const resultsDiv = document.getElementById('results');
    const mapContainer = document.getElementById('algeria-map');
    
    let timer;
    let timeLeft = 180;
    let score = 0;
    let gameActive = false;
    let correctWilayas = new Set();
    
    // Add this near the top of your script, after the DOM content loaded event
    console.log("wilayaAlternatives defined:", typeof wilayaAlternatives !== 'undefined');
    if (typeof wilayaAlternatives !== 'undefined') {
        console.log("Number of wilaya alternatives:", Object.keys(wilayaAlternatives).length);
        console.log("Sample wilaya alternatives:", Object.keys(wilayaAlternatives).slice(0, 5));
    }

    // Also check wilayaData
    console.log("wilayaData defined:", typeof wilayaData !== 'undefined');
    if (typeof wilayaData !== 'undefined') {
        console.log("Number of wilaya data entries:", Object.keys(wilayaData).length);
    }
    
    // Load the Algeria SVG map
    fetch('dz.svg')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(svgData => {
            // Insert the SVG into the container
            mapContainer.innerHTML = svgData;
            
            // Get all wilaya paths from the SVG
            const wilayaPaths = document.querySelectorAll('#features path[id]');
            
            // Add this function to extract wilaya information from the path
            function getWilayaInfoFromPath(path) {
                const wilayaId = path.getAttribute('id');
                const wilayaName = path.getAttribute('name');
                
                // Extract the numeric part from the ID if it follows the pattern "DZ##"
                let wilayaNumber = null;
                if (wilayaId && wilayaId.startsWith('DZ')) {
                    wilayaNumber = parseInt(wilayaId.substring(2), 10);
                }
                
                return {
                    id: wilayaId,
                    name: wilayaName,
                    number: wilayaNumber
                };
            }
            
            // Then use this function when processing paths
            wilayaPaths.forEach(path => {
                const wilayaInfo = getWilayaInfoFromPath(path);
                
                // Now you can use wilayaInfo.id, wilayaInfo.name, and wilayaInfo.number
                
                // Add hover effect
                path.classList.add('wilaya');
                
                // Add click handler or other functionality
                path.addEventListener('click', function() {
                    handleWilayaClick(wilayaInfo);
                });
            });
            
            // Configure SVG for responsive display
            const svgElement = document.querySelector('#algeria-map svg');
            if (svgElement) {
                // Set attributes for responsive scaling
                svgElement.setAttribute('width', '100%');
                svgElement.setAttribute('height', '100%');
                svgElement.setAttribute('preserveAspectRatio', 'xMidYMid meet');
                
                // Set the viewBox to show the entire map
                // Use the actual dimensions from the SVG
                const bbox = svgElement.getBBox();
                const padding = 10; // Add some padding
                
                svgElement.setAttribute('viewBox', 
                    `${bbox.x - padding} ${bbox.y - padding} ${bbox.width + padding*2} ${bbox.height + padding*2}`);
            }
            
            // Debug the wilaya mapping
            setTimeout(debugWilayaMapping, 1000);
            
            // Add this line after the SVG is loaded
            preventWilayaClicks();
        })
        .catch(error => {
            console.error('Error loading the SVG map:', error);
            // Fallback to a simple message
            mapContainer.innerHTML = '<p>Error loading the map. Please refresh the page.</p>';
        });
    
    // Create start overlay
    const gameContainer = document.querySelector('.game-container');
    const startOverlay = document.createElement('div');
    startOverlay.className = 'start-overlay';
    startOverlay.appendChild(startBtn);
    
    // Add the overlay to the document
    gameContainer.parentNode.insertBefore(startOverlay, gameContainer);
    
    // Add blurred class to game container
    gameContainer.classList.add('blurred');
    
    // Start the game
    startBtn.addEventListener('click', startGame);
    
    // Play again
    playAgainBtn.addEventListener('click', resetGame);
    
    // Check input for correct wilaya names
    wilayaInput.addEventListener('input', checkInput);

    // Add this new event listener for keyup to catch every keystroke
    wilayaInput.addEventListener('keyup', checkInput);
    
    // Start game when Enter is pressed in the input field
    wilayaInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && !gameActive) {
            startGame();
        }
    });
    
    // Add this after the other event listeners
    const languageToggleBtn = document.getElementById('language-toggle');
    let isArabic = false;

    languageToggleBtn.addEventListener('click', function() {
        isArabic = !isArabic;
        document.body.classList.toggle('rtl', isArabic);
        
        // Update UI text based on language
        if (isArabic) {
            document.querySelector('.header h1').textContent = 'اختبار ولايات الجزائر';
            document.querySelector('.header p').textContent = 'كم عدد الولايات التي يمكنك تسميتها في دقيقة واحدة؟';
            startBtn.textContent = 'ابدأ الاختبار';
            playAgainBtn.textContent = 'العب مرة أخرى';
            wilayaInput.placeholder = 'أدخل اسم الولاية...';
            document.querySelector('.results h2').textContent = 'انتهى الاختبار!';
            document.querySelector('.results p').textContent = `لقد حددت <span id="final-score">${score}</span> من أصل 58 ولاية.`;
            finalScoreDisplay = document.getElementById('final-score'); // Reassign after changing HTML
        } else {
            document.querySelector('.header h1').textContent = 'Algeria Wilaya Quiz';
            document.querySelector('.header p').textContent = 'How many wilayas can you name in 1 minute?';
            startBtn.textContent = gameActive ? 'Game in Progress' : 'Start Quiz';
            playAgainBtn.textContent = 'Play Again';
            wilayaInput.placeholder = 'Enter wilaya name...';
            document.querySelector('.results h2').textContent = 'Quiz Complete!';
            document.querySelector('.results p').textContent = `You identified <span id="final-score">${score}</span> out of 58 wilayas.`;
            finalScoreDisplay = document.getElementById('final-score'); // Reassign after changing HTML
        }
        
        // Focus on input field after language change
        wilayaInput.focus();
    });
    
    function startGame() {
        if (gameActive) return;
        
        startOverlay.remove();
        gameContainer.classList.remove('blurred');
        
        gameActive = true;
        wilayaInput.disabled = false;
        wilayaInput.focus();
        
        startBtn.textContent = 'Quiz Running...';
        startBtn.disabled = true;
        startBtn.classList.add('fade-out');
        
        timer = setInterval(updateTimer, 1000);
        updateScore();
    }
    
    function updateTimer() {
        timeLeft--;
        
        // Format time as MM:SS
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timeDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        if (timeLeft <= 0) {
            endGame();
        }
    }
    
    // Add this function to normalize Arabic text
    function normalizeArabicText(text) {
        // Remove diacritics (tashkeel)
        text = text.replace(/[\u064B-\u065F]/g, '');
        
        // Normalize alef variations
        text = text.replace(/[أإآا]/g, 'ا');
        
        // Normalize yaa variations
        text = text.replace(/[يى]/g, 'ي');
        
        // Normalize taa marbuta
        text = text.replace(/ة/g, 'ه');
        
        return text;
    }
    
    // Add this function to create and show the score popup
    function showScorePopup(wilayaName) {
        // Remove any existing popup
        const existingPopup = document.querySelector('.score-popup');
        if (existingPopup) {
            existingPopup.remove();
        }
        
        // Create new popup
        const popup = document.createElement('div');
        popup.className = 'score-popup';
        popup.innerHTML = `<span class="plus">+1</span>: ${wilayaName}`;
        document.body.appendChild(popup);
        
        // Trigger animation
        setTimeout(() => {
            popup.classList.add('show');
        }, 10);
        
        // Remove popup after animation
        setTimeout(() => {
            popup.remove();
        }, 1500);
    }
    
    // Add this function to map wilaya names to SVG IDs
    function getWilayaPathId(wilayaName) {
        // Get the wilaya number from our data
        const wilayaNumber = wilayaData[wilayaName];
        
        if (wilayaNumber) {
            // Standard format: DZ## (e.g., DZ01, DZ16)
            const standardId = `DZ${wilayaNumber.toString().padStart(2, '0')}`;
            let path = document.getElementById(standardId);
            
            if (path) return standardId;
            
            // Try without leading zero for single-digit wilayas
            const shortId = `DZ${wilayaNumber}`;
            path = document.getElementById(shortId);
            
            if (path) return shortId;
            
            // Try other possible formats
            const possibleIds = [
                `DZ-${wilayaNumber}`,
                `dz${wilayaNumber}`,
                `dz-${wilayaNumber}`,
                `${wilayaNumber}`,
                wilayaName.replace(/\s+/g, '-'),
                wilayaName.toLowerCase().replace(/\s+/g, '-')
            ];
            
            for (const id of possibleIds) {
                path = document.getElementById(id);
                if (path) return id;
            }
            
            // Log if we can't find a matching path
            console.log(`Could not find path for wilaya: ${wilayaName} (Number: ${wilayaNumber})`);
            return null;
        }
        
        return null;
    }
    
    // Update the updateScore function to be more robust
    function updateScore() {
        // Update both score elements
        const scoreElement = document.getElementById('score');
        const scoreDisplay = document.querySelector('.score span');
        
        if (scoreElement) {
            scoreElement.textContent = score;
        }
        
        if (scoreDisplay) {
            scoreDisplay.textContent = score;
        }
        
        console.log("Score updated:", score); // Debug log
    }
    
    // Modify the checkInput function to ensure score updates are triggered
    function checkInput() {
        if (!gameActive) return;
        
        let input = wilayaInput.value.trim().toLowerCase();
        
        // For Arabic input, normalize the text
        if (/[\u0600-\u06FF]/.test(input)) {
            input = normalizeArabicText(input);
        }
        
        for (const key in wilayaAlternatives) {
            let normalizedKey = key.toLowerCase().trim();
            
            if (/[\u0600-\u06FF]/.test(key)) {
                normalizedKey = normalizeArabicText(key);
            }
            
            if (input === normalizedKey) {
                const wilayaName = wilayaAlternatives[key];
                
                if (!correctWilayas.has(wilayaName)) {
                    correctWilayas.add(wilayaName);
                    
                    const svgId = getWilayaPathId(wilayaName);
                    if (svgId) {
                        const wilayaPath = document.getElementById(svgId);
                        if (wilayaPath) {
                            wilayaPath.classList.add('correct');
                            wilayaPath.style.animation = 'none';
                            setTimeout(() => {
                                wilayaPath.style.animation = 'glowPulse 1s infinite alternate';
                            }, 10);
                        }
                    }
                    
                    // Play success sound
                    playSuccessSound();
                    
                    // Show score popup
                    showScorePopup(wilayaName);
                    
                    // Update score - simplified and more direct
                    score++;
                    
                    // Update both score displays
                    document.getElementById('score').textContent = score;
                    document.querySelector('.score span').textContent = score;
                    
                    console.log("Score updated to:", score); // Debug log
                    
                    wilayaInput.value = '';
                    return;
                }
                wilayaInput.value = '';
                return;
            }
        }
    }
    
    function playSuccessSound() {
        const context = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = context.createOscillator();
        const gainNode = context.createGain();
        
        oscillator.type = 'triangle';
        oscillator.frequency.setValueAtTime(1000, context.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(500, context.currentTime + 0.1);
        
        // Fix the gain value to avoid the error
        gainNode.gain.setValueAtTime(0.2, context.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.3); // Changed from 0 to 0.001
        
        oscillator.connect(gainNode);
        gainNode.connect(context.destination);
        oscillator.start();
        oscillator.stop(context.currentTime + 0.3);
    }
    
    function endGame() {
        clearInterval(timer);
        gameActive = false;
        wilayaInput.disabled = true;
        
        // Create overlay
        const overlay = document.createElement('div');
        overlay.className = 'overlay';
        document.body.appendChild(overlay);
        
        // Create final results popup
        const popup = document.createElement('div');
        popup.className = 'final-results-popup';
        
        // Add content to popup
        const title = document.createElement('h2');
        title.textContent = isArabic ? 'انتهى الاختبار!' : 'Quiz Complete!';
        
        const message = document.createElement('p');
        message.innerHTML = isArabic 
            ? `لقد حددت <span class="final-score">${score}</span> من أصل 58 ولاية.`
            : `You identified <span class="final-score">${score}</span> out of 58 wilayas.`;
        
        const playAgainButton = document.createElement('button');
        playAgainButton.textContent = isArabic ? 'العب مرة أخرى' : 'Play Again';
        playAgainButton.addEventListener('click', function() {
            // Remove popup and overlay
            popup.remove();
            overlay.remove();
            
            // Reset game
            resetGame();
        });
        
        // Append elements to popup
        popup.appendChild(title);
        popup.appendChild(message);
        popup.appendChild(playAgainButton);
        
        // Add popup to body
        document.body.appendChild(popup);
        
        // Hide the original results div
        resultsDiv.classList.add('hidden');
    }
    
    function resetGame() {
        // Reset game state
        score = 0;
        timeLeft = 180;
        correctWilayas.clear();
        
        // Reset UI
        timeDisplay.textContent = '03:00';
        updateScore();
        wilayaInput.value = '';
        
        // Reset map
        document.querySelectorAll('.wilaya.correct').forEach(el => {
            el.classList.remove('correct');
        });
        
        // Hide results
        resultsDiv.classList.add('hidden');
        
        // Restore overlay and blur
        gameContainer.classList.add('blurred');
        document.body.appendChild(startOverlay);
        
        // Start a new game
        startGame();
    }

    // Add this after your other event listeners
    window.addEventListener('resize', adjustMapSize);

    // Add this function to handle map sizing
    function adjustMapSize() {
        const svgElement = document.querySelector('#algeria-map svg');
        if (svgElement) {
            // Adjust zoom factor based on screen width and height
            let zoomOutFactor = 1.40;
            
            if (window.innerWidth < 768) {
                zoomOutFactor = 1.25;
            }
            
            // Additional adjustment for height
            if (window.innerHeight < 800) {
                zoomOutFactor = 1.15;
            }
            
            if (window.innerHeight < 700) {
                zoomOutFactor = 1.05;
            }
            
            const originalWidth = 286.086;
            const originalHeight = 298.332;
            const newWidth = originalWidth * zoomOutFactor;
            const newHeight = originalHeight * zoomOutFactor;
            const newX = -(newWidth - originalWidth) / 2;
            const newY = -(newHeight - originalHeight) / 2;
            
            svgElement.setAttribute('viewBox', `${newX} ${newY} ${newWidth} ${newHeight}`);
        }
    }

    // Add this function to handle wilaya clicks
    function handleWilayaClick(wilayaInfo) {
        if (!gameActive) return;
        
        // Get the wilaya name from the info
        const wilayaName = wilayaInfo.name;
        
        // Check if this wilaya hasn't been found yet
        if (wilayaName && !correctWilayas.has(wilayaName)) {
            // Mark as correct
            correctWilayas.add(wilayaName);
            
            // Find the corresponding path in the SVG
            const wilayaPath = document.getElementById(wilayaInfo.id);
            if (wilayaPath) {
                wilayaPath.classList.add('correct');
                console.log(`Successfully highlighted wilaya by click: ${wilayaName} (ID: ${wilayaInfo.id})`);
                
                // Play a success sound
                playSuccessSound();
                
                // Show score popup with wilaya name
                showScorePopup(wilayaName);
                
                // Update score
                score++;
                document.getElementById('score').textContent = score;
                updateScore();
            }
        }
    }

    // Update the debugWilayaMapping function to be more thorough
    function debugWilayaMapping() {
        console.log("Debugging wilaya mapping...");
        
        // Get all paths from the SVG
        const wilayaPaths = document.querySelectorAll('#features path');
        console.log(`Found ${wilayaPaths.length} paths in the SVG`);
        
        // Check which paths have IDs and names
        let pathsWithId = 0;
        let pathsWithName = 0;
        
        wilayaPaths.forEach(path => {
            const id = path.getAttribute('id');
            const name = path.getAttribute('name');
            
            if (id) pathsWithId++;
            if (name) pathsWithName++;
            
            console.log(`Path: ID=${id || 'none'}, Name=${name || 'none'}`);
        });
        
        console.log(`Paths with ID: ${pathsWithId}, Paths with Name: ${pathsWithName}`);
        
        // Check if our wilayaData matches any paths
        for (const wilayaName in wilayaData) {
            const wilayaNumber = wilayaData[wilayaName];
            const wilayaPathId = getWilayaPathId(wilayaName);
            
            if (!wilayaPathId) {
                console.warn(`No path found for wilaya: ${wilayaName} (Number: ${wilayaNumber})`);
            } else {
                console.log(`Found path for wilaya: ${wilayaName} (ID: ${wilayaPathId})`);
            }
        }
    }

    // Add this line to adjust map size on load
    adjustMapSize();

    // In the event listener where you handle clicks on wilayas
    function setupWilayaInteractions(wilayaElement, wilayaName) {
        wilayaElement.addEventListener('click', function(e) {
            // Prevent the click from turning the wilaya green during gameplay
            if (gameActive) {
                e.preventDefault();
                return;
            }
            
            // This code will only run when the game is not active (for debugging or other purposes)
            console.log(`Clicked on ${wilayaName}`);
        });

        // Keep the mouseover/mouseout effects for visual feedback
        wilayaElement.addEventListener('mouseover', function() {
            if (!this.classList.contains('correct')) {
                this.classList.add('hover');
            }
        });

        wilayaElement.addEventListener('mouseout', function() {
            this.classList.remove('hover');
        });
    }

    // Add this function to prevent clicks on wilayas from marking them correct
    function preventWilayaClicks() {
        // Get all path elements in the SVG
        const paths = document.querySelectorAll('#features path');
        
        // Remove any existing click handlers and add a new one that prevents the default action
        paths.forEach(path => {
            // Clone the node to remove all event listeners
            const newPath = path.cloneNode(true);
            path.parentNode.replaceChild(newPath, path);
            
            // Add a click handler that does nothing (or shows a message)
            newPath.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                // Optional: Show a hint message
                // console.log("Type the name in the input box instead!");
            });
        });
    }
}); 