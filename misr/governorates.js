// This file contains the mapping between Egypt governorate names and their IDs
const governorateData = {
    "Shamal Sina'": "North Sinai",
    "Aswan": "Aswan",
    "Al Bahr al Ahmar": "Red Sea",
    "Matruh": "Matrouh",
    "Al Wadi at Jadid": "New Valley",
    "As Suways": "Suez",
    "Janub Sina'": "South Sinai",
    "Bur Sa`id": "Port Said",
    "Ad Daqahliyah": "Dakahlia",
    "Ash Sharqiyah": "Sharqia",
    "Al Isma`iliyah": "Ismailia",
    "Dumyat": "Damietta",
    "Kafr ash Shaykh": "Kafr El Sheikh",
    "Al Buhayrah": "Beheira",
    "Al Iskandariyah": "Alexandria",
    "Al Qahirah": "Cairo",
    "Al Jizah": "Giza",
    "Al Minya": "Minya",
    "Al Fayyum": "Faiyum",
    "Bani Suwayf": "Beni Suef",
    "Al Minufiyah": "Monufia",
    "Al Qalyubiyah": "Qalyubia",
    "Al Gharbiyah": "Gharbia",
    "Suhaj": "Sohag",
    "Qina": "Qena",
    "Asyut": "Assiut",
    "Luxor": "Luxor"
};

// Add variations for governorate names
const governorateVariations = {
    "Shamal Sina'": ["Shamal Sina'", "North Sinai", "Northern Sinai", "Shamal Sina", "Shamal", "شمال سيناء", "شمال سينا", "الشمال", "سيناء الشمالية", "شمال"],
    
    "Aswan": ["Aswan", "Aswān", "أسوان", "اسوان", "محافظة أسوان", "محافظة اسوان"],
    
    "Al Bahr al Ahmar": ["Al Bahr al Ahmar", "Red Sea", "Al-Bahr Al-Ahmar", "Red Sea Governorate", "البحر الأحمر", "البحر الاحمر", "محافظة البحر الأحمر", "محافظة البحر الاحمر"],
    
    "Matruh": ["Matruh", "Matrouh", "Marsa Matruh", "Maṭrūḥ", "مطروح", "مرسى مطروح", "محافظة مطروح", "مرسي مطروح"],
    
    "Al Wadi at Jadid": ["Al Wadi at Jadid", "New Valley", "El Wadi El Gedid", "Al-Wadi Al-Jadid", "الوادي الجديد", "الوادى الجديد", "محافظة الوادي الجديد", "محافظة الوادى الجديد"],
    
    "As Suways": ["As Suways", "Suez", "Al-Suways", "El-Seweis", "السويس", "محافظة السويس"],
    
    "Janub Sina'": ["Janub Sina'", "South Sinai", "Southern Sinai", "Ganub Sina", "Janub", "جنوب سيناء", "جنوب سينا", "سيناء الجنوبية", "الجنوب", "جنوب"],
    
    "Bur Sa`id": ["Bur Sa`id", "Port Said", "Bor Said", "Būr Sa'īd", "بورسعيد", "بور سعيد", "محافظة بورسعيد", "محافظة بور سعيد"],
    
    "Ad Daqahliyah": ["Ad Daqahliyah", "Dakahlia", "El-Dakahleya", "Ad-Daqahlīyah", "الدقهلية", "محافظة الدقهلية", "دقهلية"],
    
    "Ash Sharqiyah": ["Ash Sharqiyah", "Sharqia", "Al Sharqia", "El-Sharqeya", "Ash-Sharqīyah", "الشرقية", "محافظة الشرقية", "شرقية"],
    
    "Al Isma`iliyah": ["Al Isma`iliyah", "Ismailia", "Al-Ismā'īlīyah", "El-Ismaileya", "الإسماعيلية", "الاسماعيلية", "محافظة الإسماعيلية", "محافظة الاسماعيلية"],
    
    "Dumyat": ["Dumyat", "Damietta", "Dumyāṭ", "Domiat", "دمياط", "محافظة دمياط"],
    
    "Kafr ash Shaykh": ["Kafr ash Shaykh", "Kafr El Sheikh", "Kafr Al Sheikh", "Kafr El-Shaykh", "Kafr ash-Shaykh", "كفر الشيخ", "محافظة كفر الشيخ"],
    
    "Al Buhayrah": ["Al Buhayrah", "Beheira", "Al-Buḥayrah", "El-Beheara", "البحيرة", "محافظة البحيرة"],
    
    "Al Iskandariyah": ["Al Iskandariyah", "Alexandria", "Al-Iskandarīyah", "El-Eskandareya", "الإسكندرية", "الاسكندرية", "محافظة الإسكندرية", "محافظة الاسكندرية", "اسكندرية"],
    
    "Al Qahirah": ["Al Qahirah", "Cairo", "Al-Qāhirah", "El-Qahera", "القاهرة", "محافظة القاهرة"],
    
    "Al Jizah": ["Al Jizah", "Giza", "Al-Jīzah", "El-Giza", "الجيزة", "محافظة الجيزة", "جيزه"],
    
    "Al Minya": ["Al Minya", "Minya", "Al-Minyā", "El-Menya", "المنيا", "المنيه", "محافظة المنيا", "محافظة المنيه"],
    
    "Al Fayyum": ["Al Fayyum", "Faiyum", "Fayoum", "Al-Fayyūm", "El-Fayoum", "الفيوم", "محافظة الفيوم"],
    
    "Bani Suwayf": ["Bani Suwayf", "Beni Suef", "Banī Suwayf", "Beni-Suef", "بني سويف", "محافظة بني سويف", "بنى سويف", "محافظة بنى سويف"],
    
    "Al Minufiyah": ["Al Minufiyah", "Monufia", "Menufia", "Al-Minūfīyah", "El-Menofeya", "المنوفية", "محافظة المنوفية", "منوفية"],
    
    "Al Qalyubiyah": ["Al Qalyubiyah", "Qalyubia", "Al-Qalyūbīyah", "El-Qalyobeya", "القليوبية", "محافظة القليوبية", "قليوبية"],
    
    "Al Gharbiyah": ["Al Gharbiyah", "Gharbia", "Al-Gharbīyah", "El-Gharbeya", "الغربية", "محافظة الغربية", "غربية"],
    
    "Suhaj": ["Suhaj", "Sohag", "Sawhāj", "Sohag Governorate", "سوهاج", "محافظة سوهاج"],
    
    "Qina": ["Qina", "Qena", "Qinā", "Kena", "قنا", "محافظة قنا"],
    
    "Asyut": ["Asyut", "Assiut", "Asyūṭ", "Assyout", "أسيوط", "اسيوط", "محافظة أسيوط", "محافظة اسيوط"],
    
    "Luxor": ["Luxor", "Al-Uqsur", "El-Uksur", "Luxor Governorate", "الأقصر", "الاقصر", "محافظة الأقصر", "محافظة الاقصر"]
};

// SVG IDs mapping to governorate names
const governorateSvgIds = {
    "Shamal Sina'": "EGSIN",
    "Aswan": "EGASN",
    "Al Bahr al Ahmar": "EGBA",
    "Matruh": "EGMT",
    "Al Wadi at Jadid": "EGWAD",
    "As Suways": "EGSUZ",
    "Janub Sina'": "EGJS",
    "Bur Sa`id": "EGPTS",
    "Ad Daqahliyah": "EGDK",
    "Ash Sharqiyah": "EGSHR",
    "Al Isma`iliyah": "EGIS",
    "Dumyat": "EGDT",
    "Kafr ash Shaykh": "EGKFS",
    "Al Buhayrah": "EGBH",
    "Al Iskandariyah": "EGALX",
    "Al Qahirah": "EGC",
    "Al Jizah": "EGGZ",
    "Al Minya": "EGMN",
    "Al Fayyum": "EGFYM",
    "Bani Suwayf": "EGBNS",
    "Al Minufiyah": "EGMNF",
    "Al Qalyubiyah": "EGKB",
    "Al Gharbiyah": "EGGH",
    "Suhaj": "EGSHG",
    "Qina": "EGKN",
    "Asyut": "EGAST",
    "Luxor": "EGLX"
};

// Create a lookup object for faster access during gameplay
const governorateAlternativesLookup = {};

// Populate the lookup object with all variations
for (const [standardName, variations] of Object.entries(governorateVariations)) {
    // Add the standard name itself
    governorateAlternativesLookup[standardName.toLowerCase()] = standardName;
    
    // Add all variations
    variations.forEach(variation => {
        governorateAlternativesLookup[variation.toLowerCase()] = standardName;
    });
}

// Export the lookup object for use in other files
window.governorateAlternativesLookup = governorateAlternativesLookup;
window.governorateSvgIds = governorateSvgIds; 