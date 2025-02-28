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
    "el mghair": "El M'Ghair",
    "el m'ghair": "El M'Ghair",
    "el meniaa": "El Meniaa",
    "ouled djellal": "Ouled Djellal",
    "bordj baji mokhtar": "Bordj Baji Mokhtar",
    "beni abbes": "Béni Abbès",
    "béni abbès": "Béni Abbès",
    "timimoun": "Timimoun",
    "touggourt": "Touggourt",
    "djanet": "Djanet",
    "in salah": "In Salah",
    "in guezzam": "In Guezzam",
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
    "غليزان": "Relizane"
};

// Add this function to check if the SVG paths match our wilaya data
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
        const wilayaId = `DZ${wilayaNumber}`;
        
        if (!pathIdToName[wilayaId]) {
            console.warn(`No SVG path found for wilaya: ${wilayaName} (ID: ${wilayaId})`);
        }
    }
    
    // Check if all SVG paths are in our wilayaData
    for (const pathId in pathIdToName) {
        const pathName = pathIdToName[pathId];
        let found = false;
        
        for (const wilayaName in wilayaData) {
            const wilayaNumber = wilayaData[wilayaName];
            const wilayaId = `DZ${wilayaNumber}`;
            
            if (wilayaId === pathId) {
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

// Add a mapping between wilaya names and their SVG IDs
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
    "Timimoun": "DZ49",
    "Bordj-Badji-Mokhtar": "DZ50",
    "Ouled-Djellal": "DZ51",
    "Beni-Abbes": "DZ52",
    "In-Salah": "DZ53",
    "In-Guezzam": "DZ54",
    "Touggourt": "DZ55",
    "Djanet": "DZ56",
    "El-Meghaier": "DZ57",
    "El-Meniaa": "DZ58"
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