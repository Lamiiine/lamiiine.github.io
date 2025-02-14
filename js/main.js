document.addEventListener('DOMContentLoaded', () => {
    // Navigation items hover effect
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('mousemove', (e) => {
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const distance = Math.sqrt(
                Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)
            );
            
            const scale = Math.max(1, 2 - (distance / 40));
            item.style.transform = `scale(${scale})`;
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'scale(1)';
        });
    });

    // Experience items focus effect
    const experienceItems = document.querySelectorAll('.experience-item');
    
    experienceItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            experienceItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.style.filter = 'blur(2px)';
                    otherItem.style.transform = 'scale(0.98)';
                    otherItem.style.opacity = '0.8';
                }
            });
        });

        item.addEventListener('mouseleave', () => {
            experienceItems.forEach(otherItem => {
                otherItem.style.filter = '';
                otherItem.style.transform = '';
                otherItem.style.opacity = '';
            });
        });
    });

    // Social items animation
    const socialItems = document.querySelectorAll('.social-item');
    
    socialItems.forEach(item => {
        item.addEventListener('mousemove', (e) => {
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            // Calculate rotation based on mouse position
            const xRotation = (y / rect.height) * 20;
            const yRotation = (x / rect.width) * -20;
            
            item.style.transform = `
                scale(1.1)
                translateY(-5px)
                rotateX(${xRotation}deg)
                rotateY(${yRotation}deg)
            `;
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = '';
        });
    });

    // Update quote container effects
    const highlightText = document.querySelector('.highlight-text');
    if (highlightText) {
        const sparklesContainer = document.createElement('div');
        sparklesContainer.className = 'sparkles-container';
        const beamsContainer = document.createElement('div');
        beamsContainer.className = 'beams-container';
        
        highlightText.appendChild(sparklesContainer);
        highlightText.appendChild(beamsContainer);

        highlightText.addEventListener('mouseenter', () => {
            createSparkles(sparklesContainer);
            createBeams(beamsContainer, highlightText);
        });
    }

    // Update createSparkles and createBeams functions to accept container parameter
    function createSparkles(container) {
        container.innerHTML = '';
        const numberOfSparkles = 30;
        
        for (let i = 0; i < numberOfSparkles; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            
            sparkle.style.left = `${Math.random() * 100}%`;
            sparkle.style.top = `${Math.random() * 100}%`;
            
            const size = Math.random() * 2 + 1;
            sparkle.style.width = `${size}px`;
            sparkle.style.height = `${size}px`;
            
            sparkle.style.animationDelay = `${Math.random() * 2}s`;
            
            container.appendChild(sparkle);
        }
    }

    function createBeams(container, parent) {
        container.innerHTML = '';
        const numberOfBeams = 5;
        const containerHeight = parent.offsetHeight;
        const spacing = containerHeight / (numberOfBeams + 1);

        for (let i = 0; i < numberOfBeams; i++) {
            const beam = document.createElement('div');
            beam.className = 'beam';
            beam.style.top = `${spacing * (i + 1)}px`;
            beam.style.animationDelay = `${Math.random() * 2}s`;
            beam.style.animation = `beam ${Math.random() * 2 + 1}s linear infinite`;
            container.appendChild(beam);
        }
    }

    function initGlareCards() {
        const cards = document.querySelectorAll('.glare-card');
        
        cards.forEach(card => {
            let isPointerInside = false;
            const state = {
                glare: { x: 50, y: 50 },
                background: { x: 50, y: 50 },
                rotate: { x: 0, y: 0 }
            };

            function updateStyles() {
                card.style.setProperty('--m-x', `${state.glare.x}%`);
                card.style.setProperty('--m-y', `${state.glare.y}%`);
                card.style.setProperty('--r-x', `${state.rotate.x}deg`);
                card.style.setProperty('--r-y', `${state.rotate.y}deg`);
                card.style.setProperty('--bg-x', `${state.background.x}%`);
                card.style.setProperty('--bg-y', `${state.background.y}%`);
            }

            card.addEventListener('pointermove', (event) => {
                const rotateFactor = 0.4;
                const rect = card.getBoundingClientRect();
                const position = {
                    x: event.clientX - rect.left,
                    y: event.clientY - rect.top
                };
                
                const percentage = {
                    x: (100 / rect.width) * position.x,
                    y: (100 / rect.height) * position.y
                };
                
                const delta = {
                    x: percentage.x - 50,
                    y: percentage.y - 50
                };

                state.background.x = 50 + percentage.x / 4 - 12.5;
                state.background.y = 50 + percentage.y / 3 - 16.67;
                state.rotate.x = -(delta.x / 3.5) * rotateFactor;
                state.rotate.y = (delta.y / 2) * rotateFactor;
                state.glare.x = percentage.x;
                state.glare.y = percentage.y;

                updateStyles();
            });

            card.addEventListener('pointerenter', () => {
                isPointerInside = true;
                setTimeout(() => {
                    if (isPointerInside) {
                        card.style.setProperty('--duration', '0s');
                    }
                }, 300);
            });

            card.addEventListener('pointerleave', () => {
                isPointerInside = false;
                card.style.removeProperty('--duration');
                state.rotate.x = 0;
                state.rotate.y = 0;
                updateStyles();
            });
        });
    }

    // Initialize glare cards
    initGlareCards();
}); 