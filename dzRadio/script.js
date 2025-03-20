// Extended radio stations covering more wilayas
const allRadioStations = [
    // Original stations
    {
        id: 1,
        name: "Radio Algérie",
        frequency: "87.5 FM",
        city: "Algiers",
        coords: [36.7525, 3.0420],
        streamUrl: "https://webradio.tda.dz/Chaine1_64K.mp3",
        color: "#FF3B30", // Apple red
        description: "The national radio station of Algeria"
    },
    {
        id: 2,
        name: "Jil FM",
        frequency: "94.7 FM",
        city: "Algiers",
        coords: [36.7762, 3.0589],
        streamUrl: "https://webradio.tda.dz/Jeunesse_64K.mp3",
        color: "#FF9500", // Apple orange
        description: "Youth-focused radio station"
    },
    {
        id: 3,
        name: "Radio Oran",
        frequency: "96.0 FM",
        city: "Oran",
        coords: [35.6969, -0.6331],
        streamUrl: "https://webradio.tda.dz/Oran_64K.mp3",
        color: "#5856D6", // Apple purple
        description: "Regional broadcast for Oran"
    },
    {
        id: 4,
        name: "Radio Constantine",
        frequency: "93.5 FM",
        city: "Constantine",
        coords: [36.3650, 6.6147],
        streamUrl: "https://webradio.tda.dz/Constantine_64K.mp3",
        color: "#30B0C7", // Apple blue
        description: "Local station for Constantine region"
    },
    {
        id: 5,
        name: "Radio Soummam",
        frequency: "100.2 FM",
        city: "Béjaïa",
        coords: [36.7528, 5.0567],
        streamUrl: "https://webradio.tda.dz/Bejaia_64K.mp3",
        color: "#4CD964", // Apple green
        description: "Serving the Kabylie region"
    },
    {
        id: 6,
        name: "Radio Sahara",
        frequency: "88.3 FM",
        city: "Tamanrasset",
        coords: [22.7903, 5.5193],
        streamUrl: "https://webradio.tda.dz/Adrar_64K.mp3",
        color: "#FFCC00", // Apple yellow
        description: "Broadcasting for the Sahara region"
    },
    {
        id: 7,
        name: "Quran Radio",
        frequency: "98.7 FM",
        city: "Algiers",
        coords: [36.7322, 3.0861],
        streamUrl: "https://webradio.tda.dz/Coran_64K.mp3",
        color: "#34C759", // Apple green
        description: "Islamic and Quran broadcasts"
    },
    {
        id: 8,
        name: "Radio Culture",
        frequency: "104.2 FM",
        city: "Algiers",
        coords: [36.7755, 3.0160],
        streamUrl: "https://webradio.tda.dz/Culture_64K.mp3",
        color: "#AF52DE", // Apple purple
        description: "Cultural programming and traditional music"
    },
    
    // Additional stations for more wilayas
    {
        id: 9,
        name: "Radio Adrar",
        frequency: "91.9 FM",
        city: "Adrar",
        coords: [27.8742, -0.2939],
        streamUrl: "https://webradio.tda.dz/Adrar_64K.mp3",
        color: "#30B0C7",
        description: "Local station for Adrar wilaya"
    },
    {
        id: 10,
        name: "Radio Chlef",
        frequency: "92.8 FM",
        city: "Chlef",
        coords: [36.1647, 1.3317],
        streamUrl: "https://webradio.tda.dz/Chlef_64K.mp3",
        color: "#FF3B30",
        description: "Regional broadcast for Chlef"
    },
    {
        id: 11,
        name: "Radio Laghouat",
        frequency: "94.2 FM",
        city: "Laghouat",
        coords: [33.8000, 2.8600],
        streamUrl: "https://webradio.tda.dz/Laghouat_64K.mp3",
        color: "#FF9500",
        description: "Local radio from Laghouat wilaya"
    },
    {
        id: 12,
        name: "Radio Oum El Bouaghi",
        frequency: "95.4 FM",
        city: "Oum El Bouaghi",
        coords: [35.8772, 7.1139],
        streamUrl: "https://webradio.tda.dz/OumElBouaghi_64K.mp3",
        color: "#5856D6",
        description: "Community radio for Oum El Bouaghi"
    },
    {
        id: 13,
        name: "Radio Batna",
        frequency: "90.0 FM",
        city: "Batna",
        coords: [35.5550, 6.1750],
        streamUrl: "https://webradio.tda.dz/Batna_64K.mp3",
        color: "#4CD964",
        description: "Local broadcasting from Batna"
    },
    {
        id: 14,
        name: "Radio Biskra",
        frequency: "93.0 FM",
        city: "Biskra",
        coords: [34.8512, 5.7282],
        streamUrl: "https://webradio.tda.dz/Biskra_64K.mp3",
        color: "#FFCC00",
        description: "Regional station for Biskra"
    },
    {
        id: 15,
        name: "Radio Bechar",
        frequency: "96.5 FM",
        city: "Bechar",
        coords: [31.6111, -2.2200],
        streamUrl: "https://webradio.tda.dz/Bechar_64K.mp3",
        color: "#34C759",
        description: "Local programming from Bechar"
    },
    {
        id: 16,
        name: "Radio Blida",
        frequency: "95.5 FM",
        city: "Blida",
        coords: [36.4700, 2.8300],
        streamUrl: "https://webradio.tda.dz/Blida_64K.mp3",
        color: "#AF52DE",
        description: "Community radio for Blida region"
    },
    {
        id: 17,
        name: "Radio Bouira",
        frequency: "97.0 FM",
        city: "Bouira",
        coords: [36.3800, 3.9000],
        streamUrl: "https://webradio.tda.dz/Bouira_64K.mp3",
        color: "#30B0C7",
        description: "Local station in Bouira wilaya"
    },
    {
        id: 18,
        name: "Radio Tamanrasset",
        frequency: "98.2 FM",
        city: "Tamanrasset",
        coords: [22.7850, 5.5228],
        streamUrl: "https://webradio.tda.dz/Tamanrasset_64K.mp3",
        color: "#FF3B30",
        description: "Broadcasting from the southern region"
    },
    {
        id: 19,
        name: "Radio Tebessa",
        frequency: "93.7 FM",
        city: "Tebessa",
        coords: [35.4000, 8.1200],
        streamUrl: "https://webradio.tda.dz/Tebessa_64K.mp3",
        color: "#FF9500",
        description: "Regional radio from Tebessa"
    },
    {
        id: 20,
        name: "Radio Tlemcen",
        frequency: "99.6 FM",
        city: "Tlemcen",
        coords: [34.8883, -1.3167],
        streamUrl: "https://webradio.tda.dz/Tlemcen_64K.mp3",
        color: "#5856D6",
        description: "Local programming for Tlemcen region"
    },
    {
        id: 21,
        name: "Radio Tiaret",
        frequency: "92.3 FM",
        city: "Tiaret",
        coords: [35.3800, 1.3200],
        streamUrl: "https://webradio.tda.dz/Tiaret_64K.mp3",
        color: "#4CD964",
        description: "Community radio in Tiaret wilaya"
    },
    {
        id: 22,
        name: "Radio Tizi Ouzou",
        frequency: "91.0 FM",
        city: "Tizi Ouzou",
        coords: [36.7169, 4.0476],
        streamUrl: "https://webradio.tda.dz/TiziOuzou_64K.mp3",
        color: "#FFCC00",
        description: "Broadcasting for Tizi Ouzou region"
    },
    {
        id: 23,
        name: "Radio Djelfa",
        frequency: "97.9 FM",
        city: "Djelfa",
        coords: [34.6703, 3.2500],
        streamUrl: "https://webradio.tda.dz/Djelfa_64K.mp3",
        color: "#34C759",
        description: "Regional broadcasts from Djelfa"
    },
    {
        id: 24,
        name: "Radio Jijel",
        frequency: "95.7 FM",
        city: "Jijel",
        coords: [36.8210, 5.7666],
        streamUrl: "https://webradio.tda.dz/Jijel_64K.mp3",
        color: "#AF52DE",
        description: "Local station for Jijel wilaya"
    },
    {
        id: 25,
        name: "Radio Setif",
        frequency: "94.4 FM",
        city: "Setif",
        coords: [36.1900, 5.4100],
        streamUrl: "https://webradio.tda.dz/Setif_64K.mp3",
        color: "#30B0C7",
        description: "Regional programming for Setif"
    },
    {
        id: 26,
        name: "Radio Saida",
        frequency: "96.2 FM",
        city: "Saida",
        coords: [34.8300, 0.1500],
        streamUrl: "https://webradio.tda.dz/Saida_64K.mp3",
        color: "#FF3B30",
        description: "Local radio for Saida region"
    },
    {
        id: 27,
        name: "Radio Skikda",
        frequency: "98.0 FM",
        city: "Skikda",
        coords: [36.8800, 6.9000],
        streamUrl: "https://webradio.tda.dz/Skikda_64K.mp3",
        color: "#FF9500",
        description: "Broadcasting from Skikda province"
    },
    {
        id: 28,
        name: "Radio Sidi Bel Abbes",
        frequency: "90.8 FM",
        city: "Sidi Bel Abbes",
        coords: [35.2000, -0.6300],
        streamUrl: "https://webradio.tda.dz/SidiBelAbbes_64K.mp3",
        color: "#5856D6",
        description: "Community radio for Sidi Bel Abbes"
    },
    {
        id: 29,
        name: "Radio Annaba",
        frequency: "97.6 FM",
        city: "Annaba",
        coords: [36.9000, 7.7700],
        streamUrl: "https://webradio.tda.dz/Annaba_64K.mp3",
        color: "#4CD964",
        description: "Regional station broadcasting from Annaba"
    },
    {
        id: 30,
        name: "Radio Guelma",
        frequency: "94.9 FM",
        city: "Guelma",
        coords: [36.4660, 7.4330],
        streamUrl: "https://webradio.tda.dz/Guelma_64K.mp3",
        color: "#FFCC00",
        description: "Local radio from Guelma wilaya"
    },
    {
        id: 31,
        name: "Radio Medea",
        frequency: "91.4 FM",
        city: "Medea",
        coords: [36.2641, 2.7700],
        streamUrl: "https://webradio.tda.dz/Medea_64K.mp3",
        color: "#34C759",
        description: "Regional broadcasts for Medea province"
    },
    {
        id: 32,
        name: "Radio Mostaganem",
        frequency: "89.7 FM",
        city: "Mostaganem",
        coords: [35.9900, 0.0900],
        streamUrl: "https://webradio.tda.dz/Mostaganem_64K.mp3",
        color: "#AF52DE",
        description: "Local station from Mostaganem"
    },
    {
        id: 33,
        name: "Radio M'Sila",
        frequency: "92.2 FM",
        city: "M'Sila",
        coords: [35.7056, 4.5431],
        streamUrl: "https://webradio.tda.dz/MSila_64K.mp3",
        color: "#30B0C7",
        description: "Community radio in M'Sila wilaya"
    },
    {
        id: 34,
        name: "Radio Mascara",
        frequency: "93.4 FM",
        city: "Mascara",
        coords: [35.4000, 0.1400],
        streamUrl: "https://webradio.tda.dz/Mascara_64K.mp3",
        color: "#FF3B30",
        description: "Local broadcasting from Mascara"
    },
    {
        id: 35,
        name: "Radio Ouargla",
        frequency: "88.6 FM",
        city: "Ouargla",
        coords: [31.9500, 5.3300],
        streamUrl: "https://webradio.tda.dz/Ouargla_64K.mp3",
        color: "#FF9500",
        description: "Regional radio for Ouargla province"
    },
    {
        id: 36,
        name: "Radio El Bayadh",
        frequency: "89.2 FM",
        city: "El Bayadh",
        coords: [33.6900, 1.0200],
        streamUrl: "https://webradio.tda.dz/ElBayadh_64K.mp3",
        color: "#5856D6",
        description: "Local station in El Bayadh"
    },
    {
        id: 37,
        name: "Radio Illizi",
        frequency: "95.1 FM",
        city: "Illizi",
        coords: [26.5000, 8.4800],
        streamUrl: "https://webradio.tda.dz/Illizi_64K.mp3",
        color: "#4CD964",
        description: "Broadcasting from Illizi province"
    },
    {
        id: 38,
        name: "Radio Bordj Bou Arreridj",
        frequency: "97.3 FM",
        city: "Bordj Bou Arreridj",
        coords: [36.0700, 4.7600],
        streamUrl: "https://webradio.tda.dz/BordjBouArreridj_64K.mp3",
        color: "#FFCC00",
        description: "Community radio in Bordj Bou Arreridj"
    },
    {
        id: 39,
        name: "Radio Boumerdes",
        frequency: "90.6 FM",
        city: "Boumerdes",
        coords: [36.7600, 3.4800],
        streamUrl: "https://webradio.tda.dz/Boumerdes_64K.mp3",
        color: "#34C759",
        description: "Local programming from Boumerdes"
    },
    {
        id: 40,
        name: "Radio El Tarf",
        frequency: "92.9 FM",
        city: "El Tarf",
        coords: [36.7667, 8.3131],
        streamUrl: "https://webradio.tda.dz/ElTarf_64K.mp3",
        color: "#AF52DE",
        description: "Regional broadcasts for El Tarf province"
    },
    {
        id: 41,
        name: "Radio Tindouf",
        frequency: "94.1 FM",
        city: "Tindouf",
        coords: [27.6765, -8.1470],
        streamUrl: "https://webradio.tda.dz/Tindouf_64K.mp3",
        color: "#30B0C7",
        description: "Local station from Tindouf wilaya"
    },
    {
        id: 42,
        name: "Radio Tissemsilt",
        frequency: "95.8 FM",
        city: "Tissemsilt",
        coords: [35.6072, 1.8103],
        streamUrl: "https://webradio.tda.dz/Tissemsilt_64K.mp3",
        color: "#FF3B30",
        description: "Community radio for Tissemsilt"
    },
    {
        id: 43,
        name: "Radio El Oued",
        frequency: "96.9 FM",
        city: "El Oued",
        coords: [33.3683, 6.8675],
        streamUrl: "https://webradio.tda.dz/ElOued_64K.mp3",
        color: "#FF9500",
        description: "Regional programming for El Oued province"
    },
    {
        id: 44,
        name: "Radio Khenchela",
        frequency: "89.9 FM",
        city: "Khenchela",
        coords: [35.4300, 7.1500],
        streamUrl: "https://webradio.tda.dz/Khenchela_64K.mp3",
        color: "#5856D6",
        description: "Local broadcasting from Khenchela"
    },
    {
        id: 45,
        name: "Radio Souk Ahras",
        frequency: "91.3 FM",
        city: "Souk Ahras",
        coords: [36.2800, 7.9500],
        streamUrl: "https://webradio.tda.dz/SoukAhras_64K.mp3",
        color: "#4CD964",
        description: "Community station in Souk Ahras wilaya"
    },
    {
        id: 46,
        name: "Radio Tipaza",
        frequency: "94.8 FM",
        city: "Tipaza",
        coords: [36.5894, 2.4492],
        streamUrl: "https://webradio.tda.dz/Tipaza_64K.mp3",
        color: "#FFCC00",
        description: "Regional broadcasts from Tipaza"
    },
    {
        id: 47,
        name: "Radio Mila",
        frequency: "93.2 FM",
        city: "Mila",
        coords: [36.4500, 6.2600],
        streamUrl: "https://webradio.tda.dz/Mila_64K.mp3",
        color: "#34C759",
        description: "Local radio for Mila province"
    },
    {
        id: 48,
        name: "Radio Ain Defla",
        frequency: "95.3 FM",
        city: "Ain Defla",
        coords: [36.2650, 1.9680],
        streamUrl: "https://webradio.tda.dz/AinDefla_64K.mp3",
        color: "#AF52DE",
        description: "Community station from Ain Defla"
    },
    {
        id: 49,
        name: "Radio Naama",
        frequency: "90.4 FM",
        city: "Naama",
        coords: [33.2669, -0.3093],
        streamUrl: "https://webradio.tda.dz/Naama_64K.mp3",
        color: "#30B0C7",
        description: "Local programming for Naama wilaya"
    },
    {
        id: 50,
        name: "Radio Ain Temouchent",
        frequency: "92.6 FM",
        city: "Ain Temouchent",
        coords: [35.3000, -1.1400],
        streamUrl: "https://webradio.tda.dz/AinTemouchent_64K.mp3",
        color: "#FF3B30",
        description: "Regional radio from Ain Temouchent"
    },
    {
        id: 51,
        name: "Radio Ghardaia",
        frequency: "89.0 FM",
        city: "Ghardaia",
        coords: [32.4900, 3.6700],
        streamUrl: "https://webradio.tda.dz/Ghardaia_64K.mp3",
        color: "#FF9500",
        description: "Local station in Ghardaia province"
    },
    {
        id: 52,
        name: "Radio Relizane",
        frequency: "96.7 FM",
        city: "Relizane",
        coords: [35.7372, 0.5556],
        streamUrl: "https://webradio.tda.dz/Relizane_64K.mp3",
        color: "#5856D6",
        description: "Community radio for Relizane wilaya"
    },
    {
        id: 53,
        name: "Radio Internationale",
        frequency: "102.6 FM",
        city: "Algiers",
        coords: [36.7538, 3.0588],
        streamUrl: "https://webradio.tda.dz/Internationale_64K.mp3",
        color: "#4CD964",
        description: "International broadcasting from Algeria"
    },
    {
        id: 54,
        name: "Radio Dzair",
        frequency: "100.9 FM",
        city: "Algiers",
        coords: [36.7378, 3.0400],
        streamUrl: "https://radiodzair.net:8000/stream",
        color: "#FFCC00",
        description: "Independent station based in Algiers"
    },
    {
        id: 55,
        name: "Radio M",
        frequency: "105.5 FM",
        city: "Algiers",
        coords: [36.7650, 3.0321],
        streamUrl: "https://radio-dzair.com/radiom",
        color: "#34C759",
        description: "Independent news and discussion station"
    }
];

// Function to check if a radio stream is accessible
async function checkStreamAvailability(url) {
    try {
        const response = await fetch(url, { method: 'HEAD', timeout: 3000 });
        return response.ok;
    } catch (error) {
        console.log(`Stream check failed for ${url}: ${error.message}`);
        return false;
    }
}

// Initialize available radio stations array
let radioStations = [];

// Initialize the map centered on Algeria with no restrictions
const map = L.map('map', {
    center: [28.0339, 1.6596],
    zoom: 5,
    minZoom: 1,  // Allow maximum zoom out to see the whole world
    maxBoundsViscosity: 0, // Disable bounds enforcement
    worldCopyJump: true,   // Allows seamless wrapping of the world
    bounceAtZoomLimits: false
}).setView([28.0339, 1.6596], 5);

// Remove any maxBounds that might have been set
map.setMaxBounds(null);

// Add OpenStreetMap tiles with no bounds restrictions
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19,
    noWrap: false // Allow the map to wrap around the world
}).addTo(map);

// Add custom location button
const locateControl = L.control({ position: 'bottomright' });

locateControl.onAdd = function(map) {
    const div = L.DomUtil.create('div', 'locate-button');
    div.innerHTML = '<i class="fas fa-location-arrow text-apple-blue"></i>';
    div.onclick = function() {
        map.locate({ setView: true, maxZoom: 13 });
    };
    return div;
};

locateControl.addTo(map);

// Add loading indicator to the map
function addLoadingIndicator() {
    const loadingControl = L.control({ position: 'topright' });
    
    loadingControl.onAdd = function(map) {
        const div = L.DomUtil.create('div', 'loading-indicator');
        div.innerHTML = `
            <div class="bg-white p-3 rounded-lg shadow-md flex items-center">
                <div class="animate-spin rounded-full h-5 w-5 border-b-2 border-apple-blue mr-2"></div>
                <span class="text-sm">Loading radio stations...</span>
            </div>
        `;
        return div;
    };
    
    return loadingControl.addTo(map);
}

// Create custom icon for each station
function createStationIcon(station) {
    const markerHtml = `
        <div class="station-marker" style="--ping-color: ${station.color}">
            <div class="station-icon" style="background-color: ${station.color}">
                <i class="fas fa-broadcast-tower"></i>
            </div>
        </div>
    `;
    
    return L.divIcon({
        html: markerHtml,
        className: 'station-marker-container',
        iconSize: [20, 20]
    });
}

// Player functionality
const audioPlayer = document.getElementById('audio-player');
const playerCard = document.getElementById('player-card');
const stationName = document.getElementById('station-name');
const stationLocation = document.getElementById('station-location');
const playButton = document.getElementById('play-button');
const closeButton = document.getElementById('close-player');
const progressBar = document.getElementById('progress-bar');
const currentTime = document.getElementById('current-time');
const stationLogo = document.getElementById('station-logo');

let isPlaying = false;
let currentStation = null;

function showPlayerCard(station) {
    currentStation = station;
    
    // Update player card info
    stationName.textContent = station.name;
    stationLocation.textContent = `${station.frequency} • ${station.city}`;
    stationLogo.style.backgroundColor = station.color;
    
    // Set the icon in the station logo
    stationLogo.innerHTML = '<i class="fas fa-broadcast-tower"></i>';
    
    // Set audio source
    audioPlayer.src = station.streamUrl;
    
    // Reset player state
    isPlaying = false;
    playButton.innerHTML = '<i class="fas fa-play"></i>';
    progressBar.style.width = '0%';
    currentTime.textContent = '0:00';
    
    // Show the player card with animation
    playerCard.classList.remove('hidden');
    
    // Add animation class
    playerCard.classList.add('show');
    
    // Remove animation class after animation completes
    setTimeout(() => {
        playerCard.classList.remove('show');
    }, 500);
}

// Play/Pause button click
playButton.addEventListener('click', function() {
    if (isPlaying) {
        audioPlayer.pause();
        playButton.innerHTML = '<i class="fas fa-play"></i>';
        isPlaying = false;
    } else {
        audioPlayer.play()
            .then(() => {
                playButton.innerHTML = '<i class="fas fa-pause"></i>';
                isPlaying = true;
            })
            .catch(error => {
                console.error("Error playing audio:", error);
                alert("Unable to play this station. It may be temporarily offline.");
            });
    }
});

// Close player button
closeButton.addEventListener('click', function() {
    audioPlayer.pause();
    playerCard.classList.add('hidden');
    isPlaying = false;
});

// Update progress (for non-live stations that have duration)
audioPlayer.addEventListener('timeupdate', function() {
    if (audioPlayer.duration) {
        const percent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        progressBar.style.width = `${percent}%`;
        
        // Format current time
        const minutes = Math.floor(audioPlayer.currentTime / 60);
        const seconds = Math.floor(audioPlayer.currentTime % 60);
        currentTime.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
});

// Add this CSS at the beginning of your script or in the style tag
const buttonStyle = document.createElement('style');
buttonStyle.textContent = `
    #random-station-btn {
        display: none; /* Initially hide the button completely */
        opacity: 0;
        transform: translateY(20px);
        pointer-events: none; /* Prevent clicking while hidden */
        transition: opacity 0.5s ease, transform 0.5s ease;
    }
    
    #random-station-btn.show {
        display: block; /* Show the button */
        opacity: 1;
        transform: translateY(0);
        pointer-events: auto; /* Re-enable clicking */
    }
`;
document.head.appendChild(buttonStyle);

// Add station markers to the map after checking stream availability
async function initializeRadioStations() {
    // Show loading indicator
    const loadingIndicator = addLoadingIndicator();
    
    // Check all streams and only add working ones
    for (const station of allRadioStations) {
        try {
            // We can't use fetch with HEAD method in a browser context due to CORS restrictions
            // Instead, we'll add a dummy audio element to check if the stream is available
            const audio = new Audio();
            
            // Create a promise to track the stream testing
            const testPromise = new Promise((resolve) => {
                // Set a timeout to prevent waiting too long
                const timeout = setTimeout(() => {
                    audio.removeEventListener('canplay', handleCanPlay);
                    audio.removeEventListener('error', handleError);
                    resolve(false);
                }, 3000);
                
                const handleCanPlay = () => {
                    clearTimeout(timeout);
                    audio.removeEventListener('error', handleError);
                    audio.pause();
                    audio.src = '';
                    resolve(true);
                };
                
                const handleError = () => {
                    clearTimeout(timeout);
                    audio.removeEventListener('canplay', handleCanPlay);
                    resolve(false);
                };
                
                audio.addEventListener('canplay', handleCanPlay);
                audio.addEventListener('error', handleError);
            });
            
            // Start loading the audio to test
            audio.src = station.streamUrl;
            
            // Check if the stream is available
            const isAvailable = await testPromise;
            
            if (isAvailable) {
                radioStations.push(station);
                
                // Add the marker to the map
                const marker = L.marker(station.coords, {
                    icon: createStationIcon(station),
                    title: station.name
                }).addTo(map);
                
                marker.on('click', function() {
                    showPlayerCard(station);
                    
                    // Auto play after a short delay to allow the card to appear
                    setTimeout(() => {
                        audioPlayer.play()
                            .then(() => {
                                playButton.innerHTML = '<i class="fas fa-pause"></i>';
                                isPlaying = true;
                                
                                // Show equalizer animation
                                const barsHTML = `
                                    <div class="flex h-8 items-end justify-center space-x-1">
                                        <div class="eq-bar w-1 bg-white" style="height: 30%; animation: eq-animation 0.5s ease infinite alternate;"></div>
                                        <div class="eq-bar w-1 bg-white" style="height: 60%; animation: eq-animation 0.5s ease 0.1s infinite alternate;"></div>
                                        <div class="eq-bar w-1 bg-white" style="height: 100%; animation: eq-animation 0.5s ease 0.2s infinite alternate;"></div>
                                        <div class="eq-bar w-1 bg-white" style="height: 40%; animation: eq-animation 0.5s ease 0.3s infinite alternate;"></div>
                                        <div class="eq-bar w-1 bg-white" style="height: 80%; animation: eq-animation 0.5s ease 0.4s infinite alternate;"></div>
                                    </div>
                                `;
                                stationLogo.innerHTML = barsHTML;
                            })
                            .catch(error => {
                                console.error("Error playing audio:", error);
                                alert("Unable to play this station. It may be temporarily offline.");
                            });
                    }, 300); // Short delay to allow the card animation to start
                });
            } else {
                console.log(`Stream not available: ${station.name} (${station.streamUrl})`);
            }
        } catch (error) {
            console.error(`Error testing stream for ${station.name}:`, error);
        }
    }
    
    // Remove loading indicator
    map.removeControl(loadingIndicator);
    
    // Show message if no stations are available
    if (radioStations.length === 0) {
        alert("No radio stations are currently available. Please try again later.");
    } else {
        console.log(`Loaded ${radioStations.length} available radio stations`);
        updateStationCount(radioStations.length);
        
        // Show the surprise me button with animation
        const randomButton = document.getElementById('random-station-btn');
        if (randomButton) {
            // Delay slightly for a nicer effect after loading completes
            setTimeout(() => {
                randomButton.classList.add('show');
            }, 300);
        }
    }
    
    // Add our fun features after stations are loaded
    addFunFeatures();
}

// Start loading radio stations
initializeRadioStations();

// Handle location errors
map.on('locationerror', function(e) {
    alert("Location access denied or unavailable.");
});

// Random station selector functionality
function setupRandomSelector() {
    const randomButton = document.getElementById('random-station-btn');
    
    if (!randomButton) return;
    
    randomButton.addEventListener('click', () => {
        // Only select from available stations
        if (radioStations.length === 0) {
            alert("No stations available to play!");
            return;
        }
        
        // Choose random station
        const randomIndex = Math.floor(Math.random() * radioStations.length);
        const randomStation = radioStations[randomIndex];
        
        // Animate the map to zoom to the station
        map.flyTo(randomStation.coords, 10, {
            duration: 1.5,
            easeLinearity: 0.25
        });
        
        // Find the marker and highlight it
        const markers = document.querySelectorAll('.station-marker-container');
        setTimeout(() => {
            markers.forEach(marker => {
                const markerLatLng = marker._leaflet_pos;
                const stationPoint = map.latLngToLayerPoint(randomStation.coords);
                
                // If positions are close, this is likely our marker
                if (Math.abs(markerLatLng.x - stationPoint.x) < 5 && 
                    Math.abs(markerLatLng.y - stationPoint.y) < 5) {
                    marker.classList.add('station-selected');
                    
                    // Remove the class after animation completes
                    setTimeout(() => {
                        marker.classList.remove('station-selected');
                    }, 500);
                }
            });
            
            // Show the player and start playing
            showPlayerCard(randomStation);
            
            // Auto play after a short delay
            setTimeout(() => {
                if (!isPlaying) {
                    playButton.click();
                }
            }, 800);
            
            // Show confetti!
            createConfetti();
        }, 1500); // Time to wait for map to fly to location
    });
}

// Confetti animation
function createConfetti() {
    const confettiContainer = document.getElementById('confetti-container');
    confettiContainer.classList.remove('hidden');
    confettiContainer.innerHTML = '';
    
    // Colors inspired by Apple's palette
    const colors = ['#FF3B30', '#FF9500', '#FFCC00', '#4CD964', '#5AC8FA', '#0071e3', '#5856D6', '#AF52DE'];
    
    // Create confetti pieces
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.width = Math.random() * 10 + 5 + 'px';
        confetti.style.height = Math.random() * 10 + 5 + 'px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        confettiContainer.appendChild(confetti);
    }
    
    // Remove confetti after animation completes
    setTimeout(() => {
        confettiContainer.classList.add('hidden');
    }, 4000);
}

// Add a funky visualization when playing
audioPlayer.addEventListener('play', function() {
    // Add animated equalizer bars to the station logo
    const barsHTML = `
        <div class="flex h-8 items-end justify-center space-x-1">
            <div class="eq-bar w-1 bg-white" style="height: 30%; animation: eq-animation 0.5s ease infinite alternate;"></div>
            <div class="eq-bar w-1 bg-white" style="height: 60%; animation: eq-animation 0.5s ease 0.1s infinite alternate;"></div>
            <div class="eq-bar w-1 bg-white" style="height: 100%; animation: eq-animation 0.5s ease 0.2s infinite alternate;"></div>
            <div class="eq-bar w-1 bg-white" style="height: 40%; animation: eq-animation 0.5s ease 0.3s infinite alternate;"></div>
            <div class="eq-bar w-1 bg-white" style="height: 80%; animation: eq-animation 0.5s ease 0.4s infinite alternate;"></div>
        </div>
    `;
    stationLogo.innerHTML = barsHTML;
});

audioPlayer.addEventListener('pause', function() {
    // Restore the original icon
    stationLogo.innerHTML = '<i class="fas fa-broadcast-tower"></i>';
});

// Add this to your existing CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes eq-animation {
        0% { height: 10%; }
        100% { height: 100%; }
    }
`;
document.head.appendChild(style);

// Call this after initializing radio stations
function addFunFeatures() {
    setupRandomSelector();
    
    // Add fun hover effects to station count
    const stationCount = document.getElementById('station-count');
    if (stationCount) {
        stationCount.addEventListener('mouseenter', () => {
            stationCount.style.transform = 'scale(1.1)';
        });
        stationCount.addEventListener('mouseleave', () => {
            stationCount.style.transform = 'scale(1)';
        });
    }
    
    // Update the updateStationCount function to be more fun
    window.updateStationCount = function(count) {
        const countElement = document.getElementById('count-value');
        
        let message;
        if (count === 0) {
            message = "No stations available 😢";
        } else if (count === 1) {
            message = "1 lonely station available 🎵";
        } else if (count < 5) {
            message = `${count} stations available 🎵`;
        } else if (count < 10) {
            message = `${count} awesome stations! 🎵`;
        } else {
            message = `${count} stations - music paradise! 🎉`;
        }
        
        countElement.textContent = message;
    };
}

// Add a fade-in animation for the button
const fadeInStyle = document.createElement('style');
fadeInStyle.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    .animate-fade-in {
        animation: fadeIn 0.5s ease forwards;
    }
`;
document.head.appendChild(fadeInStyle); 