const startups = [
    {
        id: 1,
        name: "Yassir",
        description: "Ride-hailing and delivery super app, connecting drivers with passengers and couriers with customers.",
        logo: "https://play-lh.googleusercontent.com/A5cRTzNu6WHtTbYTQZ8RETmlPW6MEJjH74xoY2v5TG0KSgJJ1yM9Q7G3lFDZBtSS3Q=w240-h480-rw",
        founded: "2017",
        category: "ecommerce",
        location: "Zone d'Activité de Saïd Hamdine, Lot 11, Bir Mourad Raïs 16000, Algiers",
        coords: [36.7322, 3.0292],
        website: "https://yassir.com/",
        social: {
            twitter: "https://twitter.com/yassirapp",
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
        logo: "https://yt3.googleusercontent.com/ytc/APkrFKYBW5ThBVFKQiIShRNg1tQvuqcJXmfVX7_-a1IcPQ=s900-c-k-c0x00ffffff-no-rj",
        founded: "2018",
        category: "ecommerce",
        location: "11 Boulevard du 11 Décembre 1960, El Biar, Algiers 16000",
        coords: [36.7535, 3.0050],
        website: "https://temtem.one/",
        social: {
            facebook: "https://www.facebook.com/temtemone/",
            linkedin: "https://www.linkedin.com/company/temtemone/",
            instagram: "https://www.instagram.com/temtem.one/"
        },
        jobs: [
            { title: "Full Stack Developer", type: "Full-time", location: "Algiers", applyLink: "#" },
            { title: "Marketing Specialist", type: "Full-time", location: "Algiers", applyLink: "#" }
        ]
    },
    {
        id: 3,
        name: "Fatoura by Brainiac",
        description: "SaaS solution for billing, taxation, and business management for Algerian companies.",
        logo: "https://fatoura.app/assets/images/logo-fatoura.png",
        founded: "2019",
        category: "fintech",
        location: "Algiers",
        coords: [36.753768, 3.058756],
        website: "https://fatoura.app/",
        social: {
            linkedin: "https://www.linkedin.com/company/fatoura-by-brainiac/",
            facebook: "https://www.facebook.com/fatouraapp/"
        },
        jobs: [
            { title: "Software Engineer", type: "Full-time", location: "Algiers", applyLink: "#" }
        ]
    },
    {
        id: 4,
        name: "Legal Doctrine",
        description: "Legaltech platform offering access to legislation, regulations, and case law for legal research.",
        logo: "https://legal-doctrine.com/wp-content/uploads/2023/03/logo-LD-noir.png",
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
            { title: "Legal Content Manager", type: "Full-time", location: "Algiers", applyLink: "#" }
        ]
    },
    {
        id: 6,
        name: "Freehali",
        description: "Dynamic advertising solutions to boost brand visibility and engagement.",
        logo: "https://freehali.com/wp-content/uploads/2021/03/freehali-logo.png",
        founded: "2018",
        category: "adtech",
        location: "Algiers", // Updated from "Blida"
        coords: [36.750028, 3.039719], // Updated coordinates
        website: "https://freehali.com/",
        social: {
            facebook: "https://www.facebook.com/freehali/"
        },
        jobs: [
            { title: "Ad Campaign Manager", type: "Full-time", location: "Blida", applyLink: "#" }
        ]
    },
    {
        id: 7,
        name: "Opticharge",
        description: "B2B logistics platform connecting shippers and carriers in real-time.",
        logo: "https://opticharge.dz/wp-content/uploads/2022/09/opticharge-logo.png",
        founded: "2020",
        category: "logistics",
        location: "Algiers",
        coords: [36.7162895, 3.1973464],
        website: "https://opticharge.dz/",
        social: {
            linkedin: "https://www.linkedin.com/company/opticharge/"
        },
        jobs: [
            { title: "Logistics Coordinator", type: "Full-time", location: "Algiers", applyLink: "#" }
        ]
    },
    {
        id: 8,
        name: "Guiddini",
        description: "E-commerce leader specializing in online sales and purchases.",
        logo: "#",
        founded: "2009",
        category: "ecommerce",
        location: "Algiers",
        coords: [36.7356372, 3.1752699], // Updated coordinates
        website: "https://guiddini.com/",
        social: {
            facebook: "https://www.facebook.com/guiddini/"
        },
        jobs: [
            { title: "E-commerce Specialist", type: "Full-time", location: "Algiers", applyLink: "#" }
        ]
    },
    {
        id: 9,
        name: "EmploiTic",
        description: "Job search platform for tech professionals in Algeria.",
        logo: "#",
        founded: "2016",
        category: "hrtech",
        location: "Algiers",
        coords: [36.7170771, 2.9987959], // Updated coordinates
        website: "https://emploi-tic.dz/",
        social: {
            facebook: "https://www.facebook.com/emploitic/"
        },
        jobs: [
            { title: "HR Specialist", type: "Full-time", location: "Algiers", applyLink: "#" }
        ]
    },
    {
        id: 10,
        name: "Ouedkniss",
        description: "Online classifieds platform for buying and selling goods and services.",
        logo: "#",
        founded: "2006",
        category: "ecommerce",
        location: "Algiers",
        coords: [36.7262211, 3.0970326], // Updated coordinates
        website: "https://ouedkniss.com/",
        social: {
            facebook: "https://www.facebook.com/ouedkniss/"
        },
        jobs: [
            { title: "Customer Support Agent", type: "Full-time", location: "Algiers", applyLink: "#" }
        ]
    },
    {
        id: 11,
        name: "Moufid Business Intelligence",
        description: "Financial analysis and business intelligence for accounting and tax compliance.",
        logo: "https://moufid-bi.com/wp-content/uploads/2022/10/logo-moufid.png",
        founded: "2020",
        category: "fintech",
        location: "Bordj Bou Arreridj", // Updated location
        coords: [36.0706098, 4.7628683], // Updated coordinates
        website: "https://moufid-bi.com/",
        social: {
            linkedin: "https://www.linkedin.com/company/moufid-business-intelligence/"
        },
        jobs: [
            { title: "Financial Analyst", type: "Full-time", location: "Algiers", applyLink: "#" }
        ]
    },
    {
        id: 12,
        name: "Jumia Algeria",
        description: "E-commerce platform offering a wide range of products and services.",
        logo: "https://group.jumia.com/wp-content/uploads/2020/06/jumia-logo.png",
        founded: "2012",
        category: "ecommerce",
        location: "Algiers",
        coords: [36.761465, 2.990773], // Updated coordinates
        website: "https://www.jumia.dz/",
        social: {
            facebook: "https://www.facebook.com/JumiaAlgeria/",
            instagram: "https://www.instagram.com/jumia_algeria/"
        },
        jobs: [
            { title: "Logistics Coordinator", type: "Full-time", location: "Algiers", applyLink: "#" }
        ]
    },
    {
        id: 13,
        name: "Djezzy",
        description: "Mobile telecom operator offering digital services and solutions.",
        logo: "assets/djezzy_logo.svg",
        founded: "2001",
        category: "telecom",
        location: "Baba Ali Business Park, Birkhadem, Algiers",
        coords: [36.7102826, 3.2080752],
        website: "https://www.djezzy.dz/",
        social: {
            facebook: "https://www.facebook.com/Djezzy/",
            twitter: "https://twitter.com/Djezzy"
        },
        jobs: [
            { title: "Network Engineer", type: "Full-time", location: "Algiers", applyLink: "#" }
        ]
    },
    {
        id: 14,
        name: "Ooredoo Algeria",
        description: "Telecom provider with digital and startup support services.", // Corrected typo "andTcp" to "and"
        logo: "https://www.ooredoo.dz/wp-content/uploads/2021/03/ooredoo-logo.png",
        founded: "2004",
        category: "telecom",
        location: "Route de Ouled Fayet, Chéraga, Algiers 16000",
        coords: [36.7450412, 2.9498207],
        website: "https://www.ooredoo.dz/",
        social: {
            facebook: "https://www.facebook.com/OoredooAlgeria/",
            twitter: "https://twitter.com/OoredooAlgeria"
        },
        jobs: [
            { title: "Digital Marketing Specialist", type: "Full-time", location: "Algiers", applyLink: "#" }
        ]
    },
    {
        id: 15,
        name: "ATM Mobilis",
        description: "Algeria's national mobile service provider, offering voice and data services across the country.",
        logo: "#",
        founded: "2003",
        category: "telecom",
        location: "Val d’Hydra, El Madania, Algiers",
        coords: [36.714906, 3.2039738],
        website: "https://www.mobilis.dz/",
        social: {
            facebook: "https://www.facebook.com/MobilisOfficiel/"
        },
        jobs: [
            { title: "Telecom Engineer", type: "Full-time", location: "Algiers", applyLink: "#" }
        ]
    },
    {
        id: 16,
        name: "Maystro Delivery",
        description: "Delivery and logistics service focused on last-mile fulfillment in Algeria.",
        logo: "#",
        founded: "2019",
        category: "logistics",
        location: "Zone industrielle Oued Smar, Algiers",
        coords: [36.7010019, 3.1955852],
        website: "https://maystro.delivery/",
        social: {
            facebook: "https://www.facebook.com/maystro.delivery/"
        },
        jobs: [
            { title: "Operations Manager", type: "Full-time", location: "Algiers", applyLink: "#" }
        ]
    },
    {
        id: 17,
        name: "SAA Assurances",
        description: "State-owned insurance company offering a wide range of services for individuals and businesses.",
        logo: "#",
        founded: "1963",
        category: "insurtech",
        location: "Rue Didouche Mourad, El Madania, Algiers",
        coords: [36.7143733, 3.1996157],
        website: "https://saa.dz/",
        social: {
            facebook: "https://www.facebook.com/saa.dz/"
        },
        jobs: [
            { title: "Insurance Advisor", type: "Full-time", location: "Algiers", applyLink: "#" }
        ]
    },
    {
        id: 18,
        name: "KPMG Algérie",
        description: "Member of the global KPMG network, offering audit, tax, and advisory services.",
        logo: "#",
        founded: "2002",
        category: "consulting",
        location: "Rue Mohamed Boudiaf, Hydra, Algiers",
        coords: [36.7094904, 3.1923252],
        website: "https://home.kpmg/dz/",
        social: {
            linkedin: "https://www.linkedin.com/company/kpmg-algeria/"
        },
        jobs: [
            { title: "Audit Consultant", type: "Full-time", location: "Algiers", applyLink: "#" }
        ]
    }
];