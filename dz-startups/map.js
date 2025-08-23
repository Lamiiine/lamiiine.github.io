document.addEventListener('DOMContentLoaded', function() {
    // Initialize Leaflet map
    const map = L.map('startup-map', {
        center: [36.73, 3.08],
        zoom: 11,
        minZoom: 4,
        maxZoom: 1000,
        zoomControl: false
    });
    
    // Add zoom control to top-right
    L.control.zoom({
        position: 'topright'
    }).addTo(map);
    
    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    // Variables
    const startupCard = document.getElementById('startup-card');
    const closeBtn = document.querySelector('.close-btn');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const mobileToggle = document.getElementById('mobile-toggle');
    const sidebar = document.getElementById('sidebar');
    const addStartupForm = document.getElementById('add-startup-form');
    
    let markers = [];
    let currentFilter = 'all';
    
    // Mobile sidebar toggle
    mobileToggle.addEventListener('click', function() {
        sidebar.classList.toggle('open');
    });
    
    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768 && 
            !sidebar.contains(e.target) && 
            !mobileToggle.contains(e.target) && 
            sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
        }
    });
    
    // Category filter functionality
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Apply filter
            const category = this.dataset.category;
            currentFilter = category;
            applyFilter(category);
        });
    });
    
    // Apply filter to markers
    function applyFilter(category) {
        markers.forEach(markerData => {
            const markerElement = markerData.marker.getElement().querySelector('.startup-marker');
            
            if (category === 'all' || markerData.startup.category === category) {
                markerElement.classList.remove('hidden');
                markerData.marker.addTo(map);
            } else {
                markerElement.classList.add('hidden');
                // Don't remove from map, just hide visually
            }
        });
    }
    
    // Create marker icon
    function createStartupMarker(startup) {
        const markerElement = document.createElement('div');
        markerElement.className = `startup-marker ${startup.category}`;
        
        if (startup.founder && startup.founder.avatar) {
            const avatarImg = document.createElement('img');
            avatarImg.src = startup.founder.avatar;
            avatarImg.alt = startup.founder.name;
            avatarImg.className = 'founder-avatar';
            markerElement.appendChild(avatarImg);
            markerElement.title = `${startup.founder.name} - ${startup.name}`;
        } else {
            const logoImg = document.createElement('img');
            logoImg.src = startup.logo;
            logoImg.alt = startup.name;
            logoImg.className = 'company-logo';
            markerElement.appendChild(logoImg);
            markerElement.title = startup.name;
        }
        
        const icon = L.divIcon({
            className: 'custom-div-icon',
            html: markerElement,
            iconSize: [50, 50],
            iconAnchor: [25, 25]
        });
        
        return icon;
    }
    
    // Populate startup card
    function populateStartupCard(startup) {
        document.getElementById('startup-logo').src = startup.logo;
        document.getElementById('startup-logo').alt = startup.name;
        document.getElementById('startup-name').textContent = startup.name;
        document.getElementById('startup-description').textContent = startup.description;
        document.getElementById('startup-founded').textContent = `Founded: ${startup.founded}`;
        document.getElementById('startup-location').textContent = startup.location;
        document.getElementById('startup-category').textContent = 
            startup.category.charAt(0).toUpperCase() + startup.category.slice(1);
        
        // Add founder information
        const founderInfo = document.getElementById('founder-info');
        if (startup.founder && founderInfo) {
            founderInfo.style.display = 'block';
            const founderAvatar = document.getElementById('founder-avatar');
            if (founderAvatar) {
                founderAvatar.src = startup.founder.avatar;
                founderAvatar.alt = startup.founder.name;
            }
        } else if (founderInfo) {
            founderInfo.style.display = 'none';
        }
        
        // Social links
        const socialLinksContainer = document.getElementById('social-links');
        socialLinksContainer.innerHTML = '';
        
        for (const [platform, url] of Object.entries(startup.social)) {
            const socialLink = document.createElement('a');
            socialLink.href = url;
            socialLink.target = '_blank';
            socialLink.rel = 'noopener noreferrer';
            socialLink.className = `social-icon ${platform}`;
            
            let icon;
            switch(platform) {
                case 'twitter': icon = 'fa-twitter'; break;
                case 'facebook': icon = 'fa-facebook-f'; break;
                case 'linkedin': icon = 'fa-linkedin-in'; break;
                case 'instagram': icon = 'fa-instagram'; break;
                case 'youtube': icon = 'fa-youtube'; break;
                default: icon = 'fa-globe';
            }
            
            socialLink.innerHTML = `<i class="fab ${icon}"></i>`;
            socialLinksContainer.appendChild(socialLink);
        }
        
        // Website link
        if (startup.website && startup.website !== '#' && startup.website !== '') {
            const websiteLink = document.createElement('a');
            websiteLink.href = startup.website;
            websiteLink.target = '_blank';
            websiteLink.rel = 'noopener noreferrer';
            websiteLink.className = 'social-icon website';
            websiteLink.innerHTML = '<i class="fas fa-globe"></i>';
            socialLinksContainer.appendChild(websiteLink);
        }
        
        // Jobs list
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
    
    // Position card near marker
    function positionCardNearMarker(marker) {
        const markerPoint = map.latLngToContainerPoint(marker.getLatLng());
        const mapContainer = document.getElementById('map-container');
        const mapRect = mapContainer.getBoundingClientRect();
        
        const mapWidth = mapRect.width;
        const mapHeight = mapRect.height;
        const cardWidth = 340;
        const cardHeight = 500;
        
        let left, top;
        
        if (markerPoint.x > mapWidth / 2) {
            left = Math.max(10, markerPoint.x - cardWidth - 20);
        } else {
            left = Math.min(mapWidth - cardWidth - 10, markerPoint.x + 20);
        }
        
        if (markerPoint.y > mapHeight / 2) {
            top = Math.max(10, markerPoint.y - cardHeight - 10);
        } else {
            top = Math.min(mapHeight - cardHeight - 10, markerPoint.y + 20);
        }
        
        startupCard.style.left = `${left}px`;
        startupCard.style.top = `${top}px`;
    }
    
    // Show startup card
    function showStartupCard(startup, marker) {
        populateStartupCard(startup);
        positionCardNearMarker(marker);
        
        startupCard.classList.remove('hidden');
        setTimeout(() => {
            startupCard.classList.add('visible');
        }, 10);
    }
    
    // Hide startup card
    function hideStartupCard() {
        startupCard.classList.remove('visible');
        setTimeout(() => {
            startupCard.classList.add('hidden');
        }, 300);
    }
    
    // Close button event
    closeBtn.addEventListener('click', hideStartupCard);
    
    // Load markers
    async function loadMarkersSequentially() {
        // Sort startups by founded date
        startups.sort((a, b) => parseInt(a.founded) - parseInt(b.founded));
        
        let initialDelay = 200;
        let fastDelay = 100;
        
        for (let i = 0; i < startups.length; i++) {
            const startup = startups[i];
            
            const marker = L.marker(startup.coords, {
                icon: createStartupMarker(startup)
            }).addTo(map);
            
            marker.on('click', function() {
                showStartupCard(startup, marker);
            });
            
            markers.push({ marker, startup });
            
            const markerElement = marker.getElement().querySelector('.startup-marker');
            
            await new Promise(resolve => {
                setTimeout(() => {
                    markerElement.classList.add('loaded');
                    resolve();
                }, i < 5 ? initialDelay : fastDelay);
            });
        }
    }
    
    // Add startup form submission
    addStartupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const startupData = {
            name: formData.get('startupName'),
            wilaya: formData.get('wilaya'),
            linkedin: formData.get('linkedin'),
            address: formData.get('address')
        };
        
        // Here you would typically send this data to a server
        alert(`Thank you for suggesting ${startupData.name}! We'll review and add it to the map.`);
        
        // Reset form
        this.reset();
        
        // Close sidebar on mobile
        if (window.innerWidth <= 768) {
            sidebar.classList.remove('open');
        }
    });
    
    // Start loading markers
    setTimeout(() => {
        loadMarkersSequentially();
    }, 500);
    
    // Close card when clicking on map
    map.on('click', function() {
        hideStartupCard();
    });
    
    // Prevent map clicks from propagating through card
    startupCard.addEventListener('click', function(e) {
        e.stopPropagation();
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            sidebar.classList.remove('open');
        }
    });
}); 