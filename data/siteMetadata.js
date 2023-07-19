import { GiBanana } from 'react-icons/gi'
import { RiShoppingBagLine, RiCarLine } from 'react-icons/ri'
import { IoFastFoodOutline } from 'react-icons/io5'

const siteMetadata = {
  title: 'Lamine | Software Engineer ',
  description:
    'This is where you can learn about me and my work. I am a full stack developer and I love to build things.',
  author: 'Lamine Abdellaoui',
  authorHeadline: 'Sotfware Engineer, ECM consultant and I help people find visa sponsored jobs',
  authorAbout:
    "Hi, I'm Lamine, a full stack developer & ECM Consultant. I created this to help recruiters get a better glimpse of what I do and what projects I am working on. I hope you like it!",
  authorAboutExtended:
    "Lamine is an Algerian-born, living by the beautiful mediterranean. \n \n In his personal life, Lamine is an avid swimmer, football lover and trying-to-be-good frisbee player. He enjoys long walks, making meal preps.",
  socials: {
    twitter: 'https://twitter.com/Lamiiiiiine',
    github: 'https://github.com/Lamiiine',
    linkedin: 'https://www.linkedin.com/in/mlamine08/',
    instagram: 'https://www.instagram.com/curtiswarcup/',
    facebook: 'https://www.facebook.com/curtiswarcup',
  },
  email: 'mlamine.abdellaoui@aucegypt.edu',
  phoneNumber: '+213 782036582',
  contactTitle: 'Get in touch',
  contactSubtitle:
    "I am currently working as an ECM consultant. If you want to get in touch, please use the form below.",
  analytics: {
    plausibleDataDomain: 'https://cwarcup.com/', // e.g. tailwind-nextjs-starter-blog.vercel.app
    googleAnalyticsId: 'G-XXXXXXX', // e.g. UA-000000-2 or G-XXXXXXX
  },
  // TODO: Add the name of the navbar items and the corresponding page. Used in the Header and Footer components.
  siteNavLinks: [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'About',
      href: '/about',
    },
    {
      name: 'Experience',
      href: '/experience',
    },
    {
      name: 'Contact',
      href: '/contact',
    },
    {
      name: 'Projects',
      href: '/projects',
    },
  ],
  siteRepo: 'https://github.com/Lamiiine/',
  testimonial: {
    comment:
      '“Curtis is a great pizza delivery person. He helped me to understand my strengths and weaknesses and how to improve my performance. I would highly recommend him to anyone looking to improve their performance.”',
    author: 'Elon Musk',
    authorTitle: 'CEO at Dumpster Fire, Inc.',
    imgUrl:
      'https://images.unsplash.com/photo-1579047917338-a6a69144fe63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80',
    imageAttribution: 'Photo by @johanemanuel on Unsplash',
  },
  featureSection: {
    title: 'Why Choose Me?',
    description:
      'I am a full stack developer and I love to build things.',
    //TODO also need to update the features array in the FeatureSection component
  },
  experience: {
    title: 'Things I’ve done trying to put my dent in the universe.',
    intro:
      "I am a coder, my mom says I am good at it. I also help people find visa sponsored jobs via my job board",
    education: [
      {
        schoolName: 'The American University in Cairo - Egypt',
        degree: 'Computer Science',
        description:
          'Fully funded scholarship with 2% acceptance rate.',
        startDate: '2016',
        endDate: '2020',
        typeofDegree: 'Bachelor Degree',
      },
      {
        schoolName: 'James Madison University - USA',
        degree: 'Computer Science',
        description:
          'Merit-based, fully funded scholarship to do a semester abroad',
        startDate: '2019',
        endDate: '2019',
        typeofDegree: 'Semester Abroad',
      },
    ],
  },

}

export default siteMetadata
