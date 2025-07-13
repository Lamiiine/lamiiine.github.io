const startups = [
    {
        id: 1,
        name: "Yassir",
        description: "Ride-hailing and delivery super app, connecting drivers with passengers and couriers with customers.",
        logo: "assets/yassir_logo.jpg",
        founded: "2017",
        category: "ecommerce",
        location: "Zone d'Activité de Saïd Hamdine, Lot 11, Bir Mourad Raïs 16000, Algiers",
        coords: [36.7519591, 2.9507675],
        website: "https://yassir.com/",
        social: {
            twitter: "https://web.facebook.com/Yassir.Algerie",
            facebook: "https://www.facebook.com/yassir/",
            linkedin: "https://www.linkedin.com/company/yassir/",
            instagram: "https://www.instagram.com/yassir/"
        },
        jobs: [
            { title: "Mobile Developer (Android)", type: "Full-time", location: "Algiers", applyLink: "#" },
            { title: "Backend Engineer", type: "Full-time", location: "Algiers", applyLink: "#" },
            { title: "Product Manager", type: "Full-time", location: "Algiers", applyLink: "#" }
        ]
    },
    {
        id: 2,
        name: "TemTem",
        description: "On-demand delivery service and marketplace, offering everything from food delivery to grocery shopping.",
        logo: "assets/temtem.jpg",
        founded: "2018",
        category: "ecommerce",
        location: "11 Boulevard du 11 Décembre 1960, El Biar, Algiers 16000",
        coords: [36.7615676, 3.0242948],
        website: "https://temtemone.com/",
        social: {
            facebook: "https://web.facebook.com/temtemalgerie",
            linkedin: "https://www.linkedin.com/company/temtem/",
        },
        jobs: [
        ]
    },
    {
        id: 3,
        name: "Fatoura by Brainiac",
        description: "SaaS solution for billing, taxation, and business management for Algerian companies.",
        logo: "assets/fatoura_app_logo.jpg",
        founded: "2019",
        category: "fintech",
        location: "Algiers",
        coords: [36.7503033, 3.0211074],
        website: "https://fatoura.app/",
        social: {
            linkedin: "https://www.linkedin.com/company/fatoura-by-brainiac/",
            facebook: "https://www.facebook.com/fatouraapp/"
        },
        jobs: [
        ]
    },
    {
        id: 4,
        name: "Legal Doctrine",
        description: "Legaltech platform offering access to legislation, regulations, and case law for legal research.",
        logo: "assets/legalD.jpg",
        founded: "2019",
        category: "legaltech",
        location: "Algiers",
        coords: [36.7522257, 2.9948764],
        website: "https://legal-doctrine.com/",
        social: {
            linkedin: "https://www.linkedin.com/company/legal-doctrine/",
            facebook: "https://www.facebook.com/LegalDoctrine/"
        },
        jobs: [
        ]
    },
    
    {
        id: 5,
        name: "Opticharge",
        description: "B2B logistics platform connecting shippers and carriers in real-time.",
        logo: "assets/opticharge_logo.jpg",
        founded: "2020",
        category: "logistics",
        location: "Algiers",
        coords: [36.7162895, 3.1973464],
        website: "https://opticharge.dz/",
        social: {
            linkedin: "https://www.linkedin.com/company/opticharge/"
        },
        jobs: [
        ]
    },
    {
        id: 6,
        name: "Guiddini",
        description: "E-commerce leader specializing in online sales and purchases.",
        logo: "assets/guiddini_logo.jpg",
        founded: "2009",
        
        category: "ecommerce",
        location: "Algiers",
        coords: [36.7356372, 3.1752699], // Updated coordinates
        website: "https://guiddini.com/",
        social: {
            facebook: "https://www.facebook.com/guiddini/",
            linkedin: "https://www.linkedin.com/company/guiddini/"
        },
        jobs: [
        ]
    },
    {
        id: 7,
        name: "Talenteo",
        description: "Job search platform for tech professionals in Algeria.",
        logo: "assets/talenteo_hr_logo.jpg",
        founded: "2016",
        category: "hrtech",
        location: "Algiers",
        coords: [36.7170771, 2.9987959], // Updated coordinates
        website: "https://talenteo.com/",
        social: {
            facebook: "https://web.facebook.com/talenteo.hr/",
            linkedin: "https://www.linkedin.com/company/talenteo-hr/"
        },
        jobs: [
        ]
    },
    {
        id: 8,
        name: "Maystro Delivery",
        description: "Delivery and logistics service focused on last-mile fulfillment in Algeria.",
        logo: "assets/maystro_delivery_logo.jpg",
        founded: "2019",
        category: "logistics",
        location: "Zone industrielle Oued Smar, Algiers",
        coords: [36.7010019, 3.1955852],
        website: "https://maystro-delivery.com/",
        
        social: {
            facebook: "https://web.facebook.com/maystro.delivery/",
            linkedin: "https://www.linkedin.com/company/maystro-delivery/"
        },
        jobs: [
        ]
    },
   
    {
        id: 9,
        name: "Snai3i | صنايعي",
        description: "University for kids",
        logo: "assets/snai3i_logo.jpg",
        founded: "2020",
        category: "education",
        location: "Algiers",
        coords: [36.7430714, 3.0794023],
        website: "https://www.snai3i.org/",
        
        social: {
            facebook: "https://web.facebook.com/snai3i.dz",
            linkedin: "https://www.linkedin.com/company/snai3i/"
        },
        jobs: [
        ]
    },
    {
        id: 10,
        name: "Heetch El Djazaïr",
        description: "Ride-hailing service providing convenient transportation solutions in Algeria.",
        logo: "assets/heetch_logo.jpg",
        founded: "2019",
        category: "mobility",
        location: "Algiers",
        coords: [36.7462631, 3.0875112],
        website: "#",
        
        social: {
            facebook: "https://web.facebook.com/HeetchDjazair",
            linkedin: "https://www.linkedin.com/company/heetch/"
        },
        jobs: [
        ]
    },
    {
        id: 11,
        name: "instaclean dz",
        description: "On-demand car cleaning services platform connecting customers with professional cleaners.",
        logo: "assets/instaclean_logo.jpg",
        founded: "2020",
        category: "services",
        location: "Algiers",
        coords: [36.7252361, 3.054745],
        
        social: {
            instagram: "https://www.instagram.com/instacleandz",
            facebook: "https://web.facebook.com/instaclean23/",
        },
        jobs: [
        ]
    },
    {
        id: 12,
        name: "Volz",
        description: "Technology solutions and software development company.",
        logo: "assets/volz_logo.jpg",
        founded: "2019",
        category: "technology",
        location: "Algiers",
        coords: [36.4699884, 2.8287371],
        website: "https://volz.app/en",
        social: {
            facebook: "https://web.facebook.com/volzdz",
            linkedin: "https://www.linkedin.com/company/volz-dz/"
        },
        jobs: [
        ]
    },
    
    {
        id: 13,
        name: "Bricoram سوق الخدمات في الجزائر",
        description: "Marketplace for home services and maintenance connecting customers with service providers.",
        logo: "assets/bricoram_logo.jpg",
        founded: "2019",
        category: "marketplace",
        location: "Algiers",
        coords: [36.897375, 7.7500122],
        website: "#",
        social: {
            facebook: "https://web.facebook.com/bricoram",
            linkedin: "https://www.linkedin.com/company/bricoram/"
        },
        jobs: [
        ]
    },
    {
        id: 14,
        name: "Ayor.ai",
        description: "AI-powered e-commerce solutions for simplified online sales.",
        logo: "assets/ayor-ai_logo.jpg",
        founded: "2024",
        category: "ecommerce",
        location: "Algiers",
        coords: [28.0948734,1.6656943],
        website: "https://www.ayor.ai/",
        social: {
            linkedin: "https://www.linkedin.com/company/ayor-ai/"
        },
        jobs: [
        ]
    },
    {
        id: 15,
        name: "فلحانوت FelHanout",
        description: "E-commerce platform specializing in traditional and local products.",
        logo: "#",
        founded: "2020",
        category: "ecommerce",
        location: "Algiers",
        coords: [36.7522257, 2.9948764],
        website: "#",
        social: {
            facebook: "#",
            linkedin: "#"
        },
        jobs: [
            { title: "E-commerce Manager", type: "Full-time", location: "Algiers", applyLink: "#" }
        ]
    },
    {
        id: 16,
        name: "Okadoo",
        description: "Digital services platform offering various online solutions for businesses and individuals.",
        logo: "assets/okadoo_logo.jpg",
        founded: "2020",
        category: "ecommerce",
        location: "Algiers",
        coords: [36.7522257, 2.9948764],
        website: "https://okadoo.com/",
        social: {
            linkedin: "https://www.linkedin.com/company/okadoo/"
        },
        jobs: [
            
        ]
    },
    {
        id: 17,
        name: "Techmology",
        description: "Technology consulting and software development services.",
        logo: "assets/techmology_logo.jpg",
        founded: "2019",
        category: "technology",
        location: "Algiers",
        coords: [36.7372458,3.1749625],
        
        website: "https://techmology-dz.com/",
        social: {
            facebook: "https://web.facebook.com/techmlg",
            linkedin: "https://www.linkedin.com/company/techmology/"
        },
        jobs: [
            
        ]
    },
    {
        id: 18,
        name: "CiRTA iT",
        description: "IT services and solutions provider.",
        logo: "assets/cirtait_logo.jpg",
        founded: "2005",
        category: "technology",
        location: "Constantine",
        coords: [36.2587981,6.5994697],
        website: "https://www.cirta-it.com/",
        social: {
            linkedin: "https://www.linkedin.com/company/cirtait/"
        },
        jobs: [
            
        ]
    },
    {
        id: 19,
        name: "SlickPay",
        description: "Payment processing and e-commerce solutions for businesses.",
        logo: "assets/slick_pay_logo.jpg",
        founded: "2022",
        category: "fintech",
        location: "Algiers",
        coords: [36.7628132,2.9882884],
        website: "https://www.slick-pay.com/",
        social: {
            linkedin: "https://www.linkedin.com/company/slick-pay/"
        },
        jobs: [
            
        ]
    },
    {
        id: 20,
        name: "Sihhatech",
        description: "Online appointment scheduling platform for medical services.",
        logo: "assets/sihhatech_logo.jpg",
        founded: "2017",
        category: "technology",
        location: "Algiers",
        coords: [36.7555115,3.4487816],
        website: "https://sihhatech.com/",
        social: {
            linkedin: "https://www.linkedin.com/company/sihhatech-algerie/",
            facebook: "https://web.facebook.com/sihhatech/"
        },
        jobs: [
            
        ]
    }
];
