// This file contains the mapping between wilaya names and their codes
const wilayaData = {
    "Adrar": 1,
    "Chlef": 2,
    "Laghouat": 3,
    "Oum-El-Bouaghi": 4,
    "Batna": 5,
    "Bejaia": 6,
    "Biskra": 7,
    "Bechar": 8,
    "Blida": 9,
    "Bouira": 10,
    "Tamanrasset": 11,
    "Tebessa": 12,
    "Tlemcen": 13,
    "Tiaret": 14,
    "Tizi-Ouzou": 15,
    "Algiers": 16,
    "Djelfa": 17,
    "Jijel": 18,
    "Setif": 19,
    "Saida": 20,
    "Skikda": 21,
    "Sidi-Bel-Abes": 22,
    "Annaba": 23,
    "Guelma": 24,
    "Constantine": 25,
    "Medea": 26,
    "Mostaganem": 27,
    "M'Sila": 28,
    "Mascara": 29,
    "Ouargla": 30,
    "Oran": 31,
    "El-Bayadh": 32,
    "Illizi": 33,
    "Bordj-Bou-Arreridj": 34,
    "Boumerdes": 35,
    "El-Taref": 36,
    "Tindouf": 37,
    "Tissemsilt": 38,
    "El-Oued": 39,
    "Khenchela": 40,
    "Souk-Ahras": 41,
    "Tipaza": 42,
    "Mila": 43,
    "Ain-Defla": 44,
    "Naama": 45,
    "Ain-Timouchent": 46,
    "Ghardaia": 47,
    "Relizane": 48,
    // New wilayas
    "Timimoun": 49,
    "Bordj-Badji-Mokhtar": 50,
    "Ouled-Djellal": 51,
    "Beni-Abbes": 52,
    "In-Salah": 53,
    "In-Guezzam": 54,
    "Touggourt": 55,
    "Djanet": 56,
    "El-Meghaier": 57,
    "El-Meniaa": 58
};

// Add variations for wilaya names
const wilayaVariations = {
    // Common variations with diacritics, spacing, and spelling differences
    "Adrar": ["Adrar"],
    "Chlef": ["Chlef", "Chelef", "Chelif", "El Chlef", "Ash Shalif"],
    "Laghouat": ["Laghouat", "Laghwat", "El Aghouat", "Al Aghwat"],
    "Oum-El-Bouaghi": ["Oum-El-Bouaghi", "Oum El Bouaghi", "Oum El-Bouaghi", "Oum El Bouagui", "Umm al Bawāqī"],
    "Batna": ["Batna"],
    "Bejaia": ["Bejaia", "Béjaïa", "Bejaya", "Bougie", "Bgayet", "Vgaiet"],
    "Biskra": ["Biskra", "Beskra"],
    "Bechar": ["Bechar", "Béchar", "Béchar"],
    "Blida": ["Blida", "El Blida", "Al Bulayda"],
    "Bouira": ["Bouira", "Bouïra", "Tubirett", "Al Buwaira"],
    "Tamanrasset": ["Tamanrasset", "Tamanghasset", "Tamenghest", "Tamanghasset"],
    "Tebessa": ["Tebessa", "Tbessa", "Tébessa"],
    "Tlemcen": ["Tlemcen", "Tlemsen", "Tilimsan", "Tilimsen"],
    "Tiaret": ["Tiaret", "Tihert", "Tahert", "Tiharet"],
    "Tizi-Ouzou": ["Tizi-Ouzou", "Tizi Ouzou", "Tizi-Wezzu", "Tizi Wezzu","Tizi"],
    "Algiers": ["Algiers", "Alger", "Algier", "Dzayer", "El Djazair", "Al Jazair", "Algers", "Algier"],
    "Djelfa": ["Djelfa", "Jelfa", "Al Jelfa"],
    "Jijel": ["Jijel", "Jijelli", "Djidjelli"],
    "Setif": ["Setif", "Sétif", "Stif", "Sitif"],
    "Saida": ["Saida", "Saïda", "Saada"],
    "Skikda": ["Skikda", "Skikida", "Sikda"],
    "Sidi-Bel-Abes": ["Sidi-Bel-Abes", "Sidi Bel Abbes", "Sidi Bel-Abbes", "Sidi-Bel-Abbès", "Sidi Bel Abbès"],
    "Annaba": ["Annaba", "Anaba", "Annabah", "Bone", "Bona"],
    "Guelma": ["Guelma", "Gelma", "Qalima"],
    "Constantine": ["Constantine", "Qusantina", "Qacentina"],
    "Medea": ["Medea", "Médéa", "Lemdiya"],
    "Mostaganem": ["Mostaganem", "Mostaghanem", "Mustaghanim"],
    "M'Sila": ["M'Sila", "M'sila", "Msila", "Msila", "El M'sila","M sila"],
    "Mascara": ["Mascara", "Maskara", "Maaskar"],
    "Ouargla": ["Ouargla", "Wargla", "Warqla"],
    "Oran": ["Oran", "Wahran", "Ouahran"],
    "El-Bayadh": ["El-Bayadh", "El Bayadh", "El Bayad", "Bayadh"],
    "Illizi": ["Illizi", "Ilizi", "Illizi"],
    "Bordj-Bou-Arreridj": ["Bordj-Bou-Arreridj", "Bordj Bou Arreridj", "Bordj-Bou-Arréridj", "BBA", "Bordj"],
    "Boumerdes": ["Boumerdes", "Boumerdès", "Boumerdas"],
    "El-Taref": ["El-Taref", "El Taref", "El Tarf", "Tarf","Taref"],
    "Tindouf": ["Tindouf", "Tinduf"],
    "Tissemsilt": ["Tissemsilt", "Tissemssilt", "Tissemselt"],
    "El-Oued": ["El-Oued", "El Oued", "El Wad", "Wadi", "Souf"],
    "Khenchela": ["Khenchela", "Khenchla", "Khanchla"],
    "Souk-Ahras": ["Souk-Ahras", "Souk Ahras", "Soukaras", "Soukahras"],
    "Tipaza": ["Tipaza", "Tipasa", "Tefessedt"],
    "Mila": ["Mila", "Milla"],
    "Ain-Defla": ["Ain-Defla", "Ain Defla", "Aïn Defla", "Ain-Eddefla"],
    "Naama": ["Naama", "Naâma", "Naama"],
    "Ain-Timouchent": ["Ain-Timouchent", "Ain Timouchent", "Aïn Témouchent", "Ain Temouchent"],
    "Ghardaia": ["Ghardaia", "Ghardaïa", "Ghardaya", "Tagherdayt"],
    "Relizane": ["Relizane", "Relizene", "Ghilizan", "Rlizane"],
    "Timimoun": ["Timimoun", "Timimun"],
    "Bordj-Badji-Mokhtar": ["Bordj-Badji-Mokhtar", "Bordj Badji Mokhtar", "BBM"],
    "Ouled-Djellal": ["Ouled-Djellal", "Ouled Djellal", "Awlad Jallal"],
    "Beni-Abbes": ["Beni-Abbes", "Beni Abbes", "Beni-Abbès", "Beni Abbès"],
    "In-Salah": ["In-Salah", "In Salah", "Ain Salah", "Aïn Salah"],
    "In-Guezzam": ["In-Guezzam", "In Guezzam", "Tin Guezzam"],
    "Touggourt": ["Touggourt", "Tuggurt", "Tugurt"],
    "Djanet": ["Djanet", "Janet"],
    "El-Meghaier": ["El-Meghaier", "El Meghaier", "El-Mghair", "El Mghair", "Meghaier"],
    "El-Meniaa": ["El-Meniaa", "El Meniaa", "El-Menia", "El Menia", "Meniaa"]
};

// Function to find the wilaya code from input, including variations
function findWilayaCode(input) {
    // Normalize input: trim whitespace, convert to lowercase
    const normalizedInput = input.trim().toLowerCase();
    
    // First check direct match with standard names
    for (const wilaya in wilayaVariations) {
        if (wilaya.toLowerCase() === normalizedInput) {
            return wilaya;
        }
    }
    
    // Then check variations
    for (const [wilaya, variations] of Object.entries(wilayaVariations)) {
        if (variations.some(variation => variation.toLowerCase() === normalizedInput)) {
            return wilaya;
        }
    }
    
    return null;
}

// Function to find the standard wilaya name from any variation
function findStandardWilayaName(input) {
    return findWilayaCode(input);
}

// Create a lookup object for faster access during gameplay
const wilayaAlternativesLookup = {};

// Populate the lookup object with all variations
for (const [standardName, variations] of Object.entries(wilayaVariations)) {
    // Add the standard name itself
    wilayaAlternativesLookup[standardName.toLowerCase()] = standardName;
    
    // Add all variations
    variations.forEach(variation => {
        wilayaAlternativesLookup[variation.toLowerCase()] = standardName;
    });
}

// Export the lookup object for use in other files
window.wilayaAlternativesLookup = wilayaAlternativesLookup;

// Alternative spellings and common variations for wilaya names
const wilayaAlternatives = {
    "adrar": "Adrar",
    "chlef": "Chlef",
    "ech cheliff": "Chlef",
    "el cheliff": "Chlef",
    "laghouat": "Laghouat",
    "el aghouat": "Laghouat",
    "oum el bouaghi": "Oum-El-Bouaghi",
    "oum-el-bouaghi": "Oum-El-Bouaghi",
    "batna": "Batna",
    "bejaia": "Bejaia",
    "béjaïa": "Bejaia",
    "bejaya": "Béjaïa",
    "biskra": "Biskra",
    "bechar": "Bechar",
    "béchar": "Bechar",
    "blida": "Blida",
    "bouira": "Bouira",
    "tamanrasset": "Tamanrasset",
    "tamanghasset": "Tamanrasset",
    "tebessa": "Tebessa",
    "tébessa": "Tebessa",
    "tlemcen": "Tlemcen",
    "tiaret": "Tiaret",
    "tizi ouzou": "Tizi-Ouzou",
    "tizi-ouzou": "Tizi-Ouzou",
    "alger": "Algiers",
    "algiers": "Algiers",
    "djelfa": "Djelfa",
    "jijel": "Jijel",
    "setif": "Setif",
    "sétif": "Setif",
    "saida": "Saida",
    "saïda": "Saida",
    "skikda": "Skikda",
    "sidi bel abbes": "Sidi-Bel-Abes",
    "sidi-bel-abes": "Sidi-Bel-Abes",
    "sidi bel-abbes": "Sidi-Bel-Abes",
    "annaba": "Annaba",
    "guelma": "Guelma",
    "constantine": "Constantine",
    "medea": "Medea",
    "médéa": "Medea",
    "mostaganem": "Mostaganem",
    "msila": "M'Sila",
    "m'sila": "M'Sila",
    "mascara": "Mascara",
    "ouargla": "Ouargla",
    "oran": "Oran",
    "wahran": "Oran",
    "el bayadh": "El-Bayadh",
    "el-bayadh": "El-Bayadh",
    "illizi": "Illizi",
    "bordj bou arreridj": "Bordj-Bou-Arreridj",
    "bordj-bou-arreridj": "Bordj-Bou-Arreridj",
    "boumerdes": "Boumerdes",
    "boumerdès": "Boumerdes",
    "el tarf": "El-Taref",
    "el-tarf": "El-Taref",
    "tindouf": "Tindouf",
    "tissemsilt": "Tissemsilt",
    "el oued": "El-Oued",
    "el-oued": "El-Oued",
    "khenchela": "Khenchela",
    "souk ahras": "Souk-Ahras",
    "souk-ahras": "Souk-Ahras",
    "tipaza": "Tipaza",
    "mila": "Mila",
    "ain defla": "Ain-Defla",
    "aïn defla": "Ain-Defla",
    "ain-defla": "Ain-Defla",
    "naama": "Naama",
    "naâma": "Naama",
    "ain temouchent": "Ain-Timouchent",
    "aïn témouchent": "Ain-Timouchent",
    "ain-timouchent": "Ain-Timouchent",
    "ghardaia": "Ghardaia",
    "ghardaïa": "Ghardaia",
    "relizane": "Relizane",
    "el mghair": "El-Meghaier",
    "el m'ghair": "El-Meghaier",
    "el meghaier": "El-Meghaier",
    "el-meghaier": "El-Meghaier",
    "el meniaa": "El-Meniaa",
    "el-meniaa": "El-Meniaa",
    "ouled djellal": "Ouled-Djellal",
    "ouled-djellal": "Ouled-Djellal",
    "bordj badji mokhtar": "Bordj-Badji-Mokhtar",
    "bordj-badji-mokhtar": "Bordj-Badji-Mokhtar",
    "bordj baji mokhtar": "Bordj-Badji-Mokhtar",
    "beni abbes": "Beni-Abbes",
    "béni abbès": "Beni-Abbes",
    "beni-abbes": "Beni-Abbes",
    "timimoun": "Timimoun",
    "touggourt": "Touggourt",
    "djanet": "Djanet",
    "in salah": "In-Salah",
    "in-salah": "In-Salah",
    "in guezzam": "In-Guezzam",
    "in-guezzam": "In-Guezzam",
    "أدرار": "Adrar",
    "الشلف": "Chlef",
    "الأغواط": "Laghouat",
    "أم البواقي": "Oum-El-Bouaghi",
    "باتنة": "Batna",
    "بجاية": "Bejaia",
    "بسكرة": "Biskra",
    "بشار": "Bechar",
    "البليدة": "Blida",
    "البويرة": "Bouira",
    "تمنراست": "Tamanrasset",
    "تبسة": "Tebessa",
    "تلمسان": "Tlemcen",
    "تيارت": "Tiaret",
    "تيزي وزو": "Tizi-Ouzou",
    "الجزائر": "Algiers",
    "الجلفة": "Djelfa",
    "جيجل": "Jijel",
    "سطيف": "Setif",
    "سعيدة": "Saida",
    "سكيكدة": "Skikda",
    "سيدي بلعباس": "Sidi-Bel-Abes",
    "عنابة": "Annaba",
    "قالمة": "Guelma",
    "قسنطينة": "Constantine",
    "المدية": "Medea",
    "مستغانم": "Mostaganem",
    "المسيلة": "M'Sila",
    "معسكر": "Mascara",
    "ورقلة": "Ouargla",
    "وهران": "Oran",
    "البيض": "El-Bayadh",
    "إليزي": "Illizi",
    "برج بوعريريج": "Bordj-Bou-Arreridj",
    "بومرداس": "Boumerdes",
    "الطارف": "El-Taref",
    "تندوف": "Tindouf",
    "تيسمسيلت": "Tissemsilt",
    "الوادي": "El-Oued",
    "خنشلة": "Khenchela",
    "سوق أهراس": "Souk-Ahras",
    "تيبازة": "Tipaza",
    "ميلة": "Mila",
    "عين الدفلى": "Ain-Defla",
    "النعامة": "Naama",
    "عين تموشنت": "Ain-Timouchent",
    "غرداية": "Ghardaia",
    "غليزان": "Relizane",
    // Arabic equivalents for the last 10 wilayas
    "تيميمون": "Timimoun",
    "برج باجي مختار": "Bordj-Badji-Mokhtar",
    "أولاد جلال": "Ouled-Djellal",
    "بني عباس": "Beni-Abbes",
    "عين صالح": "In-Salah",
    "عين قزام": "In-Guezzam",
    "تقرت": "Touggourt",
    "جانت": "Djanet",
    "المغير": "El-Meghaier",
    "المنيعة": "El-Meniaa"
};

// Update the validateWilayaMapping function to handle different ID formats
function validateWilayaMapping() {
    // Get all paths from the SVG
    const wilayaPaths = document.querySelectorAll('#features path[id]');
    
    // Create a mapping from path IDs to wilaya names
    const pathIdToName = {};
    wilayaPaths.forEach(path => {
        const id = path.getAttribute('id');
        const name = path.getAttribute('name');
        if (id && name) {
            pathIdToName[id] = name;
        }
    });
    
    // Check if our wilayaData matches the SVG paths
    for (const wilayaName in wilayaData) {
        const wilayaNumber = wilayaData[wilayaName];
        // Try both formats: with and without leading zero
        const wilayaId1 = `DZ${wilayaNumber.toString().padStart(2, '0')}`;
        const wilayaId2 = `DZ${wilayaNumber}`;
        
        if (!pathIdToName[wilayaId1] && !pathIdToName[wilayaId2]) {
            console.warn(`No SVG path found for wilaya: ${wilayaName} (ID: ${wilayaId1} or ${wilayaId2})`);
        }
    }
    
    // Check if all SVG paths are in our wilayaData
    for (const pathId in pathIdToName) {
        const pathName = pathIdToName[pathId];
        let found = false;
        
        for (const wilayaName in wilayaData) {
            const wilayaNumber = wilayaData[wilayaName];
            // Try both formats
            const wilayaId1 = `DZ${wilayaNumber.toString().padStart(2, '0')}`;
            const wilayaId2 = `DZ${wilayaNumber}`;
            
            if (wilayaId1 === pathId || wilayaId2 === pathId) {
                found = true;
                break;
            }
        }
        
        if (!found) {
            console.warn(`SVG path not mapped in wilayaData: ${pathId} (${pathName})`);
        }
    }
}

// Call this function after the SVG is loaded
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(validateWilayaMapping, 1500);
});

// Update the wilayaSvgIds mapping to match the actual SVG structure
const wilayaSvgIds = {
    "Adrar": "DZ01",
    "Chlef": "DZ02",
    "Laghouat": "DZ03",
    "Oum-El-Bouaghi": "DZ04",
    "Batna": "DZ05",
    "Bejaia": "DZ06",
    "Biskra": "DZ07",
    "Bechar": "DZ08",
    "Blida": "DZ09",
    "Bouira": "DZ10",
    "Tamanrasset": "DZ11",
    "Tebessa": "DZ12",
    "Tlemcen": "DZ13",
    "Tiaret": "DZ14",
    "Tizi-Ouzou": "DZ15",
    "Algiers": "DZ16",
    "Djelfa": "DZ17",
    "Jijel": "DZ18",
    "Setif": "DZ19",
    "Saida": "DZ20",
    "Skikda": "DZ21",
    "Sidi-Bel-Abes": "DZ22",
    "Annaba": "DZ23",
    "Guelma": "DZ24",
    "Constantine": "DZ25",
    "Medea": "DZ26",
    "Mostaganem": "DZ27",
    "M'Sila": "DZ28",
    "Mascara": "DZ29",
    "Ouargla": "DZ30",
    "Oran": "DZ31",
    "El-Bayadh": "DZ32",
    "Illizi": "DZ33",
    "Bordj-Bou-Arreridj": "DZ34",
    "Boumerdes": "DZ35",
    "El-Taref": "DZ36",
    "Tindouf": "DZ37",
    "Tissemsilt": "DZ38",
    "El-Oued": "DZ39",
    "Khenchela": "DZ40",
    "Souk-Ahras": "DZ41",
    "Tipaza": "DZ42",
    "Mila": "DZ43",
    "Ain-Defla": "DZ44",
    "Naama": "DZ45",
    "Ain-Timouchent": "DZ46",
    "Ghardaia": "DZ47",
    "Relizane": "DZ48",
    // Fix the problematic wilayas based on the SVG circle IDs
    "Timimoun": "DZ54",
    "Bordj-Badji-Mokhtar": "DZ52",
    "Ouled-Djellal": "DZ51",
    "Beni-Abbes": "DZ53",
    "In-Salah": "DZ57",
    "In-Guezzam": "DZ58",
    "Touggourt": "DZ55",
    "Djanet": "DZ56",
    "El-Meghaier": "DZ49",
    "El-Meniaa": "DZ50"
};

// Update the getWilayaPathId function to use this mapping
function getWilayaPathId(wilayaName) {
    // First check our direct mapping
    if (wilayaSvgIds[wilayaName]) {
        return wilayaSvgIds[wilayaName];
    }
    
    // If not found, try the original approach
    const wilayaNumber = wilayaData[wilayaName];
    
    if (wilayaNumber) {
        // Try different formats
        const possibleIds = [
            `DZ${wilayaNumber.toString().padStart(2, '0')}`,
            `DZ${wilayaNumber}`,
            `DZ-${wilayaNumber}`,
            `dz${wilayaNumber}`,
            `dz-${wilayaNumber}`,
            `${wilayaNumber}`
        ];
        
        for (const id of possibleIds) {
            const path = document.getElementById(id);
            if (path) return id;
        }
    }
    
    return null;
}

// Add this function to mark a wilaya as correct on the map
function markWilayaCorrect(wilayaName) {
    // First, get the standardized wilaya name
    const standardName = wilayaAlternatives[wilayaName.toLowerCase()] || wilayaName;
    
    // Special case handling for problematic wilayas
    let lookupName = standardName;
    
    // Fix the problematic mappings
    if (standardName === "El M'Ghair" || standardName === "El Meghaier") lookupName = "El-Meghaier";
    if (standardName === "El Meniaa") lookupName = "El-Meniaa";
    if (standardName === "In Salah") lookupName = "In-Salah";
    if (standardName === "In Guezzam") lookupName = "In-Guezzam";
    if (standardName === "Bordj Badji Mokhtar") lookupName = "Bordj-Badji-Mokhtar";
    if (standardName === "Béni Abbès" || standardName === "Beni Abbes") lookupName = "Beni-Abbes";
    
    // Debug the lookup
    console.log(`Looking up wilaya: ${wilayaName} → ${standardName} → ${lookupName}`);
    
    // Check if this wilaya has already been marked
    const alreadyMarked = document.querySelector(`#features path.correct[id="${wilayaSvgIds[lookupName]}"]`) ||
                          document.querySelector(`circle.correct[id="${wilayaSvgIds[lookupName]}"]`);
    
    if (alreadyMarked) {
        console.log(`Wilaya ${lookupName} has already been marked as correct`);
        return 'duplicate';
    }
    
    // Get the wilaya ID from our mapping
    const wilayaId = wilayaSvgIds[lookupName];
    
    if (wilayaId) {
        console.log(`Found ID for ${lookupName}: ${wilayaId}`);
        
        // Try to find the path element first
        const path = document.getElementById(wilayaId);
        
        if (path) {
            // Add the correct class to highlight it
            path.classList.add('correct');
            console.log(`Successfully highlighted wilaya path: ${lookupName} (ID: ${wilayaId})`);
            return true;
        } 
        
        // If path not found, try to find a circle element with this ID
        const circle = document.querySelector(`circle[id="${wilayaId}"]`);
        if (circle) {
            circle.classList.add('correct');
            console.log(`Successfully highlighted wilaya circle: ${lookupName} (ID: ${wilayaId})`);
            return true;
        }
        
        // If still not found, try to find by name attribute
        const elementByName = document.querySelector(`[name="${lookupName}"]`) || 
                             document.querySelector(`[name="${standardName}"]`);
        if (elementByName) {
            elementByName.classList.add('correct');
            console.log(`Successfully highlighted wilaya by name: ${lookupName}`);
            return true;
        }
        
        // Try with class name
        const elementByClass = document.querySelector(`.${lookupName}`) || 
                              document.querySelector(`.${standardName}`);
        if (elementByClass) {
            elementByClass.classList.add('correct');
            console.log(`Successfully highlighted wilaya by class: ${lookupName}`);
            return true;
        }
        
        console.warn(`Element not found for wilaya: ${lookupName} (ID: ${wilayaId})`);
    } else {
        console.warn(`No ID mapping found for wilaya: ${lookupName}`);
    }
    
    // If we get here, we couldn't find the element using our mapping
    // Try the original approach with wilaya numbers
    const wilayaNumber = wilayaData[lookupName] || wilayaData[standardName];
    
    if (wilayaNumber) {
        console.log(`Found wilaya number: ${wilayaNumber} for ${lookupName}`);
        // Try different formats
        const possibleIds = [
            `DZ${wilayaNumber.toString().padStart(2, '0')}`,
            `DZ${wilayaNumber}`,
            `DZ-${wilayaNumber}`,
            `dz${wilayaNumber}`,
            `dz-${wilayaNumber}`,
            `${wilayaNumber}`
        ];
        
        for (const id of possibleIds) {
            const element = document.getElementById(id) || document.querySelector(`[id="${id}"]`);
            if (element) {
                element.classList.add('correct');
                console.log(`Successfully highlighted wilaya using alternative ID: ${id}`);
                return true;
            }
        }
        console.warn(`Tried all possible IDs for ${lookupName} but none worked: ${possibleIds.join(', ')}`);
    } else {
        console.warn(`No wilaya number found for: ${lookupName}`);
    }
    
    return false;
}

// Add this function to debug the SVG structure
function debugSvgStructure() {
    console.log("Debugging SVG structure...");
    
    // Get all elements with IDs from the SVG
    const svgElements = document.querySelectorAll('#features *[id]');
    console.log(`Found ${svgElements.length} elements with IDs in the SVG`);
    
    // Create a mapping from element IDs to their types and names
    const elementInfo = {};
    svgElements.forEach(element => {
        const id = element.getAttribute('id');
        const name = element.getAttribute('name') || element.getAttribute('data-name') || element.getAttribute('class');
        const type = element.tagName;
        console.log(`Element: ${type}, ID: ${id}, Name/Class: ${name}`);
        if (id) {
            elementInfo[id] = { type, name };
        }
    });
    
    // Print all IDs for reference
    console.log("All element IDs in the SVG:", Object.keys(elementInfo).join(", "));
    
    // Check our wilaya mappings against the SVG
    console.log("Validating wilaya mappings against SVG elements...");
    for (const [wilayaName, id] of Object.entries(wilayaSvgIds)) {
        const element = document.getElementById(id);
        if (element) {
            console.log(`✓ ${wilayaName} -> ${id} (Found: ${element.tagName})`);
        } else {
            console.warn(`✗ ${wilayaName} -> ${id} (Not found in SVG)`);
        }
    }
}

// Call this function after the SVG is loaded
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(debugSvgStructure, 1000);
}); 