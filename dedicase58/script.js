let isArabic = false; // Define isArabic globally
let currentGameLevel = '1'; // Default to level 1

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
    let timeLeft = 600;
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
    
    // Move the getWilayaInfoFromPath function outside the SVG loading callback
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
            
            // Then use this function when processing paths
            wilayaPaths.forEach(path => {
                const wilayaInfo = getWilayaInfoFromPath(path);
                
                // Add wilaya class for styling
                path.classList.add('wilaya');
                
                // Store the wilaya name as a data attribute for easier access
                if (wilayaInfo.name) {
                    path.setAttribute('data-name', wilayaInfo.name);
                }
                
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
    if (languageToggleBtn) {
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
                playAgainBtn.textContent = 'زيد العب';
                wilayaInput.placeholder = 'Enter wilaya name...';
                document.querySelector('.results h2').textContent = 'Sahaaaaa';
                document.querySelector('.results p').textContent = ` <span id="final-score">${score}</span> men 58 wilayas.`;
                finalScoreDisplay = document.getElementById('final-score'); // Reassign after changing HTML
            }
            
            // Focus on input field after language change
            wilayaInput.focus();
        });
    } else {
        console.warn("Language toggle button not found in the DOM");
    }
    
    function updateTimer() {
        if (!gameActive) return;
        
        // Check if we're in Level 1 (only count down in Level 1)
        if (currentGameLevel === '1') {
            timeLeft--;
            
            // Format the time as MM:SS
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            
            // Update the display
            const timeDisplay = document.getElementById('time');
            if (timeDisplay) {
                timeDisplay.textContent = formattedTime;
            }
            
            // Check if time is up
            if (timeLeft <= 0) {
                clearInterval(timer);
                endGame();
            }
            
            console.log("Timer updated: " + formattedTime); // Debug log
        }
    }
    
    function startGame() {
        if (gameActive) return;
        
        // Get the selected level from the data attribute of the selected level option
        const selectedLevelOption = document.querySelector('.level-option.selected');
        currentGameLevel = selectedLevelOption ? selectedLevelOption.getAttribute('data-level') : '1';
        
        // Check if Level 2 is active - if so, don't start Level 1
        if (currentGameLevel === '2' && level2 && level2.gameActive) {
            return;
        }
        
        // Reset score for Level 1 explicitly
        if (currentGameLevel === '1') {
            score = 0;
            updateScore(); // Make sure this updates the UI immediately
        }
        
        gameActive = true;
        
        // Reset timer for Level 1
        if (currentGameLevel === '1') {
            timeLeft = 600; // Reset to 10 minutes
            const timeDisplay = document.getElementById('time');
            if (timeDisplay) {
                timeDisplay.textContent = '10:00';
            }
            
            // Start the timer - make sure we clear any existing timer first
            clearInterval(timer);
            timer = setInterval(updateTimer, 1000);
            console.log("Timer started for Level 1");
        }
        
        // Hide level selection
        const levelSelection = document.getElementById('level-selection');
        if (levelSelection) {
            levelSelection.style.display = 'none';
        }
        
        // Show game interface - check if element exists first
        const gameInterface = document.getElementById('game-interface');
        if (gameInterface) {
            gameInterface.classList.remove('hidden');
        } else {
            console.log("Game interface element not found");
        }
        
        // Focus on the input field - check if element exists first
        if (wilayaInput) {
            wilayaInput.focus();
        } else {
            console.log("Wilaya input element not found");
        }
        
        // Force an immediate update of the timer display for Level 1
        if (currentGameLevel === '1') {
            console.log("Level 1 started, timer should be running");
            updateTimer();
        }
    }
    
    // Make the function globally accessible
    window.startGame = startGame;
    
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
    
    // Modify the checkInput function to ensure wilayas are highlighted
    function checkInput() {
        if (!gameActive) return;
        
        let input = wilayaInput.value.trim();
        
        // For Arabic input, normalize the text
        if (/[\u0600-\u06FF]/.test(input)) {
            // Handle Arabic input
        }
        
        // Skip if input is too short
        if (input.length < 2) return;
        
        // Check if the input matches a wilaya name using our lookup
        const standardName = window.wilayaAlternativesLookup[input.toLowerCase()];
        
        if (standardName && !correctWilayas.has(standardName)) {
            // Valid wilaya name that hasn't been used yet
            correctWilayas.add(standardName);
            score++;
            updateScore();
            
            // Mark the wilaya on the map
            markWilayaCorrect(standardName);
            
            // Clear the input field
            wilayaInput.value = '';
            
            // Check if all wilayas have been found
            if (correctWilayas.size === Object.keys(wilayaData).length) {
                endGame();
            }
        }
    }
    
    function playSuccessSound() {
        // Silent version - no sound will play
        console.log("Success marked silently");
    }
    
    // Add this function to play different sounds based on score brackets
    function playScoreBracketSound() {
        // Create audio element
        const audio = new Audio();
        
        // Set the source based on score bracket
        if (score <= 17) {
            audio.src = 'sounds/harki.mp3';
        } else if (score <= 30) {
            audio.src = 'sounds/9iw.mp3';
        } else {
            audio.src = 'sounds/best.mp3';
        }
        
        // Add error handling
        audio.onerror = function() {
            console.error('Error playing sound for score bracket:', score);
        };
        
        // Play the sound
        audio.play().catch(error => {
            console.error('Could not play sound:', error);
        });
    }
    
    // Update the endGame function to play the appropriate sound
    function endGame() {
        clearInterval(timer);
        gameActive = false;
        wilayaInput.disabled = true;
        
        // Play sound based on score bracket
        playScoreBracketSound();
        
        // Create overlay
        const overlay = document.createElement('div');
        overlay.className = 'overlay';
        document.body.appendChild(overlay);
        
        // Create final results popup
        const popup = document.createElement('div');
        popup.className = 'final-results-popup';
        
        // Add content to popup
        const title = document.createElement('h2');
        title.textContent = isArabic ? 'انتهى الاختبار!' : 'Sahaaaaaa';
        
        const message = document.createElement('p');
        message.innerHTML = isArabic 
            ? `لقد حددت <span class="final-score">${score}</span> من أصل 58 ولاية.`
            : `rak jebt <span class="final-score">${score}</span> out of 58 wilayas.`;
        
        // Create a container for the map
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
        shareText.textContent = isArabic ? 'شارك نتيجتك:' : 'Share your result:';
        
        // Create social container like in the portfolio
        const socialContainer = document.createElement('div');
        socialContainer.className = 'social-container';
        
        // Twitter/X button
        const twitterBtn = createSocialButton('twitter', 'X (Twitter)');
        socialContainer.appendChild(twitterBtn);
        
        // Download button - now using the download-icon.svg
        const downloadBtn = createSocialButton('download', 'Download');
        socialContainer.appendChild(downloadBtn);
        
        shareContainer.appendChild(shareText);
        shareContainer.appendChild(socialContainer);
        
        const playAgainButton = document.createElement('button');
        playAgainButton.textContent = isArabic ? 'العب مرة أخرى' : 'Play Again';
        playAgainButton.className = 'play-again-btn';
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
        popup.appendChild(mapCloneContainer);
        popup.appendChild(shareContainer);
        popup.appendChild(playAgainButton);
        
        // Add popup to body
        document.body.appendChild(popup);
        
        // Hide the original results div
        resultsDiv.classList.add('hidden');
        
        // Set up social sharing functionality
        setupSocialSharing();
    }
    
    // Update the adjustMapSize function to be more robust and consistent
    function adjustMapSize() {
        const svgElement = document.querySelector('#algeria-map svg');
        if (svgElement) {
            // Reset the viewBox before applying adjustments
            svgElement.removeAttribute('viewBox');
            svgElement.setAttribute('width', '100%');
            svgElement.setAttribute('height', '100%');
            
            // Ensure map is centered and scaled correctly
            const bbox = svgElement.getBBox();
            const padding = 10;
            
            svgElement.setAttribute('viewBox', 
                `${bbox.x - padding} ${bbox.y - padding} ${bbox.width + padding * 2} ${bbox.height + padding * 2}`
            );
    
            console.log("Map size adjusted with viewBox:", svgElement.getAttribute('viewBox'));
        }
    }
    

    // Replace the complex resetGame function with this simplified version
    function resetGame() {
        score = 0;
        timeLeft = 600;
        correctWilayas.clear();
        
        timeDisplay.textContent = '10:00';
        updateScore();
        wilayaInput.value = '';
        wilayaInput.disabled = false;
    
        // Reset the map by removing styles
        const wilayaPaths = document.querySelectorAll('#features path');
        wilayaPaths.forEach(path => {
            path.classList.remove('correct', 'highlighted', 'wrong');
            path.style.animation = '';
        });
    
        // Delay map resizing to allow DOM updates
        setTimeout(adjustMapSize, 300);
        
        resultsDiv.classList.add('hidden');
    
        // Show level selection instead of immediately starting the game
        const levelSelection = document.getElementById('level-selection');
        if (levelSelection) {
            levelSelection.style.display = 'flex';
        } else {
            startGame();
        }
    }
    

    // Add this after your other event listeners
    window.addEventListener('resize', () => {
        setTimeout(adjustMapSize, 200);
    });

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

    // Helper function to create social media buttons
    function createSocialButton(platform, name) {
        const button = document.createElement('a');
        button.className = 'social-item';
        button.setAttribute('data-platform', platform);
        button.setAttribute('data-tooltip', name);
        
        // Special case for download button - use inline SVG
        if (platform === 'download') {
            const svgContainer = document.createElement('div');
            svgContainer.className = 'social-icon';
            
            // Inline SVG for download with simpler path
            svgContainer.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" fill="currentColor"></path>
                </svg>
            `;
            
            button.appendChild(svgContainer);
            return button;
        }
        
        // For other social platforms, continue using external SVG files
        if (platform === 'facebook' || platform === 'linkedin' || platform === 'twitter') {
            const iconFileName = `${platform}-icon.svg`;
            
            fetch(iconFileName)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Failed to load ${platform} icon: ${response.status}`);
                    }
                    return response.text();
                })
                .then(svgText => {
                    const svgContainer = document.createElement('div');
                    svgContainer.className = 'social-icon';
                    svgContainer.innerHTML = svgText;
                    
                    const svgElement = svgContainer.querySelector('svg');
                    if (svgElement) {
                        svgElement.setAttribute('width', '24px');
                        svgElement.setAttribute('height', '24px');
                        svgElement.style.fill = 'currentColor';
                    }
                    
                    button.appendChild(svgContainer);
                })
                .catch(error => {
                    console.error(`Error loading ${platform} icon:`, error);
                    // Fallback to simple SVG paths
                    const icon = document.createElement('svg');
                    icon.className = 'social-icon';
                    icon.setAttribute('viewBox', '0 0 24 24');
                    icon.setAttribute('width', '24');
                    icon.setAttribute('height', '24');
                    
                    const path = document.createElement('path');
                    let pathData = '';
                    
                    switch(platform) {
                        case 'linkedin':
                            pathData = 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z';
                            break;
                        case 'twitter':
                            pathData = 'M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z';
                            break;
                        case 'facebook':
                            pathData = 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z';
                            break;
                    }
                    
                    path.setAttribute('d', pathData);
                    path.setAttribute('fill', 'currentColor');
                    icon.appendChild(path);
                    button.appendChild(icon);
                });
        } else if (platform === 'github') {
            // Handle GitHub icon
            const icon = document.createElement('svg');
            icon.className = 'social-icon';
            icon.setAttribute('viewBox', '0 0 24 24');
            icon.setAttribute('width', '24');
            icon.setAttribute('height', '24');
            
            const path = document.createElement('path');
            path.setAttribute('d', 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z');
            path.setAttribute('fill', 'currentColor');
            icon.appendChild(path);
            button.appendChild(icon);
        }
        
        return button;
    }

    // Function to set up social sharing functionality
    function setupSocialSharing() {
        const socialButtons = document.querySelectorAll('[data-platform]');
        
        socialButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const platform = this.getAttribute('data-platform');
                if (platform === 'download') {
                    shareResultWithImage('download');
                } else {
                    shareResultWithImage(platform);
                }
            });
        });
    }

    // Function to share results on social media
    function shareResult(platform) {
        // Create the share text
        const shareText = `I identified ${score} out of 58 wilayas in the Algeria Wilaya Quiz!`;
        const shareUrl = window.location.href;
        
        // Generate the share URL based on the platform
        let shareLink;
        
        switch(platform) {
            case 'linkedin':
                shareLink = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}&summary=${encodeURIComponent(shareText)}`;
                break;
            case 'twitter':
                shareLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
                break;
            case 'facebook':
                shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`;
                break;
        }
        
        // Open a new window for sharing
        window.open(shareLink, '_blank', 'width=600,height=400');
    }

    // Function to capture the result as an image for better sharing
    function captureResultImage() {
        return new Promise((resolve, reject) => {
            const resultMap = document.getElementById('result-map');
            
            html2canvas(resultMap, {
                backgroundColor: null,
                scale: 2, // Higher quality
                logging: false
            }).then(canvas => {
                const imageDataUrl = canvas.toDataURL('image/png');
                resolve(imageDataUrl);
            }).catch(error => {
                console.error('Error capturing result image:', error);
                reject(error);
            });
        });
    }

    // Enhanced share function with image
    async function shareResultWithImage(platform) {
        try {
            // Capture the map as an image
            const imageDataUrl = await captureResultImage();
            
            // Create the share text
            const shareText = `I identified ${score} out of 58 wilayas in the Algeria Wilaya Quiz!`;
            const shareUrl = window.location.href;
            
            // For platforms that support image sharing directly
            if (platform === 'download') {
                // Create a download link
                const link = document.createElement('a');
                link.href = imageDataUrl;
                link.download = 'algeria-wilaya-quiz-result.png';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                return;
            }
            
            // For social media platforms
            let shareLink;
            
            switch(platform) {
                case 'linkedin':
                    shareLink = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}&summary=${encodeURIComponent(shareText)}`;
                    break;
                case 'twitter':
                    shareLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
                    break;
                case 'facebook':
                    shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`;
                    break;
            }
            
            // Open a new window for sharing
            window.open(shareLink, '_blank', 'width=600,height=400');
            
        } catch (error) {
            console.error('Error sharing with image:', error);
            // Fall back to regular sharing
            shareResult(platform);
        }
    }

    // Add this at the end of your DOMContentLoaded event handler
    // Initial map sizing with a delay to ensure SVG is loaded
    setTimeout(function() {
        adjustMapSize();
        console.log("Initial map sizing applied");
    }, 500);

    // Add this debugging function
    function debugMapState() {
        const svgElement = document.querySelector('#algeria-map svg');
        if (svgElement) {
            const viewBox = svgElement.getAttribute('viewBox');
            console.log("Current SVG viewBox:", viewBox);
            console.log("SVG dimensions:", {
                width: svgElement.getBoundingClientRect().width,
                height: svgElement.getBoundingClientRect().height
            });
        } else {
            console.log("SVG element not found");
        }
    }

    // Call this at key points
    setTimeout(debugMapState, 1000); // Initial state
    
    function searchWilayas() {
        const searchInput = document.getElementById('search-input').value.toLowerCase();
        const wilayas = document.querySelectorAll('.wilaya');
        let count = 0;

        wilayas.forEach(wilaya => {
            const wilayaName = wilaya.getAttribute('data-name').toLowerCase();
            const wilayaNameAr = wilaya.getAttribute('data-name-ar').toLowerCase();
            
            if (wilayaName.includes(searchInput) || wilayaNameAr.includes(searchInput)) {
                wilaya.classList.add('highlighted');
                count++;
            } else {
                wilaya.classList.remove('highlighted');
            }
        });

        document.getElementById('count').textContent = count > 0 ? `+${count}` : '';
    }

    // Add this function to your script.js file
    function completeGameReset() {
        // Reset all game state variables
        score = 0;
        timeLeft = 600;
        correctWilayas.clear();
        gameActive = false;
        
        // Reset UI elements
        const timeDisplay = document.getElementById('time');
        if (timeDisplay) {
            timeDisplay.textContent = '10:00';
        }
        
        const scoreDisplay = document.getElementById('score');
        if (scoreDisplay) {
            scoreDisplay.textContent = '0 / 58';
        }
        
        // Thoroughly reset all wilayas on the map
        const wilayaPaths = document.querySelectorAll('#features path');
        wilayaPaths.forEach(path => {
            path.classList.remove('correct', 'highlighted', 'wrong', 'current');
            path.removeAttribute('style');
        });
        
        // Clear any hint messages
        const hintContainer = document.querySelector('.hint-container');
        if (hintContainer) {
            hintContainer.innerHTML = '';
        }
        
        // Remove any game over text
        const gameOverText = document.querySelector('.game-over-text');
        if (gameOverText) {
            gameOverText.remove();
        }
        
        // Reset input field
        const wilayaInput = document.getElementById('wilaya-input');
        if (wilayaInput) {
            wilayaInput.value = '';
        }
        
        // Hide results
        const resultsDiv = document.getElementById('results');
        if (resultsDiv) {
            resultsDiv.classList.add('hidden');
        }
        
        // Force a redraw of the map to ensure changes take effect
        const mapContainer = document.getElementById('algeria-map');
        if (mapContainer) {
            void mapContainer.offsetWidth;
        }
    }

    // Update the startBtn event listener to use the complete reset
    startBtn.addEventListener('click', function() {
        if (!selectedLevel) {
            alert('Please select a level first');
            return;
        }
        
        // Reset game state completely before starting a new game
        completeGameReset();
        
        // Hide level selection
        const levelSelection = document.getElementById('level-selection');
        if (levelSelection) {
            levelSelection.style.display = 'none';
        }
        
        // Start the appropriate game
        if (selectedLevel === '1') {
            startGame(); // Ensure this is specific to level 1
        } else if (selectedLevel === '2') {
            level2.init(); // Ensure this is specific to level 2
        }
    });
}); 
