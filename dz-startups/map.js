document.addEventListener('DOMContentLoaded', function() {
    // Initialize Leaflet map centered on Algiers metropolitan area where most startups are located
    const map = L.map('startup-map', {
        center: [36.73, 3.08], // Center on Algiers startup cluster
        zoom: 11, // Higher zoom level to focus on the metropolitan area
        minZoom: 8, // Allow some zoom out but keep focus on the region
        maxZoom: 18,
        zoomControl: false // We'll add zoom control in a custom position
    });
    
    // Add zoom control to top-right
    L.control.zoom({
        position: 'topright'
    }).addTo(map);
    
    // Add tile layer (Mapbox Streets - replace with your Mapbox access token or use OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    // Variables to store startup and card elements
    const startupCard = document.getElementById('startup-card');
    const closeBtn = document.querySelector('.close-btn');
    const loadedCountEl = document.getElementById('loaded-count');
    const totalCountEl = document.getElementById('total-count');
    const progressBar = document.getElementById('loading-progress');
    
    // Set total count in the counter
    totalCountEl.textContent = startups.length;
    
    // Sort startups by founded date (oldest first)
    startups.sort((a, b) => parseInt(a.founded) - parseInt(b.founded));
    
    // Function to create marker icon
    function createStartupMarker(startup) {
        // Create a custom marker HTML element
        const markerElement = document.createElement('div');
        markerElement.className = `startup-marker ${startup.category}`;
        
        // Check if startup has founder with avatar, otherwise use company logo
        if (startup.founder && startup.founder.avatar) {
            // Create founder avatar
            const avatarImg = document.createElement('img');
            avatarImg.src = startup.founder.avatar;
            avatarImg.alt = startup.founder.name;
            avatarImg.className = 'founder-avatar';
            markerElement.appendChild(avatarImg);
            
            // Add founder name tooltip
            markerElement.title = `${startup.founder.name} - ${startup.name}`;
        } else {
            // Fallback to company logo
            const logoImg = document.createElement('img');
            logoImg.src = startup.logo;
            logoImg.alt = startup.name;
            logoImg.className = 'company-logo';
            markerElement.appendChild(logoImg);
            markerElement.title = startup.name;
        }
        
        // Create the marker icon
        const icon = L.divIcon({
            className: 'custom-div-icon',
            html: markerElement,
            iconSize: [50, 50],
            iconAnchor: [25, 25]
        });
        
        return icon;
    }
    
    // Function to update progress
    function updateProgress(loaded) {
        loadedCountEl.textContent = loaded;
        const percentage = (loaded / startups.length) * 100;
        progressBar.style.width = `${percentage}%`;
    }
    
    // Function to populate startup card
    function populateStartupCard(startup) {
        // Set logo and company info
        document.getElementById('startup-logo').src = startup.logo;
        document.getElementById('startup-logo').alt = startup.name;
        document.getElementById('startup-name').textContent = startup.name;
        document.getElementById('startup-description').textContent = startup.description;
        document.getElementById('startup-founded').textContent = `Founded: ${startup.founded}`;
        document.getElementById('startup-location').textContent = startup.location;
        document.getElementById('startup-category').textContent = 
            startup.category.charAt(0).toUpperCase() + startup.category.slice(1);
        
        // Add founder information if available
        const founderInfo = document.getElementById('founder-info');
        if (startup.founder && founderInfo) {
            founderInfo.style.display = 'block';
            const founderAvatar = document.getElementById('founder-avatar');
            const founderName = document.getElementById('founder-name');
            
            if (founderAvatar) {
                founderAvatar.src = startup.founder.avatar;
                founderAvatar.alt = startup.founder.name;
            }
            if (founderName) {
                founderName.textContent = startup.founder.name;
            }
        } else if (founderInfo) {
            founderInfo.style.display = 'none';
        }
        
        // Set website link
        const visitWebsiteElem = document.getElementById('visit-website');
        if (visitWebsiteElem) {
            visitWebsiteElem.href = startup.website;
        }
        
        // Clear and populate social links
        const socialLinksContainer = document.getElementById('social-links');
        socialLinksContainer.innerHTML = '';
        
        for (const [platform, url] of Object.entries(startup.social)) {
            const socialLink = document.createElement('a');
            socialLink.href = url;
            socialLink.target = '_blank';
            socialLink.rel = 'noopener noreferrer';
            socialLink.className = `social-icon ${platform}`;
            
            // Add appropriate icon based on platform
            let icon;
            switch(platform) {
                case 'twitter':
                    icon = 'fa-twitter';
                    break;
                case 'facebook':
                    icon = 'fa-facebook-f';
                    break;
                case 'linkedin':
                    icon = 'fa-linkedin-in';
                    break;
                case 'instagram':
                    icon = 'fa-instagram';
                    break;
                case 'youtube':
                    icon = 'fa-youtube';
                    break;
                default:
                    icon = 'fa-globe';
            }
            
            socialLink.innerHTML = `<i class="fab ${icon}"></i>`;
            socialLinksContainer.appendChild(socialLink);
        }
        
        // Add the website link to another location if needed
        // For example, add it to the social links section:
        const websiteLink = document.createElement('a');
        websiteLink.href = startup.website;
        websiteLink.target = '_blank';
        websiteLink.rel = 'noopener noreferrer';
        websiteLink.className = 'social-icon website';
        websiteLink.innerHTML = '<i class="fas fa-globe"></i>';
        socialLinksContainer.appendChild(websiteLink);
        
        // Clear and populate jobs list
        const jobsListContainer = document.getElementById('jobs-list');
        jobsListContainer.innerHTML = '';
        
        if (startup.jobs.length === 0) {
            jobsListContainer.innerHTML = '<p class="no-jobs">No open positions at the moment.</p>';
        } else {
            startup.jobs.forEach(job => {
                const jobItem = document.createElement('div');
                jobItem.className = 'job-item';
                
                jobItem.innerHTML = `
                    <div class="job-title">${job.title}</div>
                    <div class="job-meta">
                        <span>${job.type}</span>
                        <span>${job.location}</span>
                    </div>
                    <a href="${job.applyLink}" target="_blank" class="apply-btn">Apply Now</a>
                `;
                
                jobsListContainer.appendChild(jobItem);
            });
        }
    }
    
    // Function to position card near marker
    function positionCardNearMarker(marker) {
        const markerPoint = map.latLngToContainerPoint(marker.getLatLng());
        const mapContainer = document.getElementById('map-container');
        const mapRect = mapContainer.getBoundingClientRect();
        
        // Get map dimensions
        const mapWidth = mapRect.width;
        const mapHeight = mapRect.height;
        
        // Card dimensions (with some buffer)
        const cardWidth = 340;
        const cardHeight = 500;
        
        // Calculate position to ensure card stays within map bounds
        // and appears near the marker
        let left, top;
        
        // Check horizontal placement
        if (markerPoint.x > mapWidth / 2) {
            // Marker is on the right side, place card to the left
            left = Math.max(10, markerPoint.x - cardWidth - 20);
        } else {
            // Marker is on the left side, place card to the right
            left = Math.min(mapWidth - cardWidth - 10, markerPoint.x + 20);
        }
        
        // Check vertical placement
        if (markerPoint.y > mapHeight / 2) {
            // Marker is on the bottom half, place card above
            top = Math.max(10, markerPoint.y - cardHeight - 10);
        } else {
            // Marker is on the top half, place card below
            top = Math.min(mapHeight - cardHeight - 10, markerPoint.y + 20);
        }
        
        // Set the card position
        startupCard.style.left = `${left}px`;
        startupCard.style.top = `${top}px`;
    }
    
    // Function to show startup card
    function showStartupCard(startup, marker) {
        // Populate card with startup data
        populateStartupCard(startup);
        
        // Position card near marker
        positionCardNearMarker(marker);
        
        // Show the card with animation
        startupCard.classList.remove('hidden');
        // Delay to ensure transition works
        setTimeout(() => {
            startupCard.classList.add('visible');
        }, 10);
    }
    
    // Function to hide startup card
    function hideStartupCard() {
        startupCard.classList.remove('visible');
        setTimeout(() => {
            startupCard.classList.add('hidden');
        }, 300); // Match this time with CSS transition duration
    }
    
    // Close button event listener
    closeBtn.addEventListener('click', hideStartupCard);
    
    // Function to load markers with sequential animation
    async function loadMarkersSequentially() {
        const markers = [];
        let loadedCount = 0;
        
        // Initial slow pace for the first 3 startups
        let initialDelay = 800;
        // Fast pace for remaining startups
        let fastDelay = 150;
        
        for (let i = 0; i < startups.length; i++) {
            const startup = startups[i];
            
            // Create marker with custom icon
            const marker = L.marker(startup.coords, {
                icon: createStartupMarker(startup)
            }).addTo(map);
            
            // Add click event to show info card
            marker.on('click', function() {
                showStartupCard(startup, marker);
            });
            
            markers.push(marker);
            
            // Update the DOM marker element to apply animation
            const markerElement = marker.getElement().querySelector('.startup-marker');
            
            // Wait for the appropriate delay before revealing the marker
            await new Promise(resolve => {
                setTimeout(() => {
                    // Add loaded class to animate marker
                    markerElement.classList.add('loaded');
                    
                    // Update progress
                    loadedCount++;
                    updateProgress(loadedCount);
                    
                    resolve();
                }, i < 3 ? initialDelay : fastDelay);
            });
        }
        
        // No need to fit bounds here since we're already showing the whole country
        // Just leave this commented for reference
        /*
        if (markers.length > 0) {
            const group = new L.featureGroup(markers);
            map.fitBounds(group.getBounds().pad(0.1));
        }
        */
    }
    
    // Start loading markers after a short delay to ensure map is ready
    setTimeout(() => {
        loadMarkersSequentially();
    }, 500);
    
    // Close card when clicking outside of it on the map
    map.on('click', function() {
        hideStartupCard();
    });
    
    // Prevent map clicks from propagating through the card
    startupCard.addEventListener('click', function(e) {
        e.stopPropagation();
    });
    
    // Update copyright year dynamically
    document.getElementById('last-updated').textContent = new Date().toLocaleDateString('en-US', { 
        month: 'long', 
        year: 'numeric' 
    });
}); 