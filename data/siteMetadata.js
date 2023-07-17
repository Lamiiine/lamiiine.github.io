import { GiBanana } from 'react-icons/gi'
import { RiShoppingBagLine, RiCarLine } from 'react-icons/ri'
import { IoFastFoodOutline } from 'react-icons/io5'

const siteMetadata = {
  title: 'Best Nextjs Tailwind Portfolio',
  description:
    'This is where you can learn about me and my work. I am a full stack developer and I love to build things.',
  author: 'Lamine Abdellaoui',
  authorHeadline: 'Sotfware Engineer, ECM consultant and I help people find visa sponsored jobs',
  authorAbout:
    "Hi, I'm Curtis, a full stack developer. I created this to help my mom create a website for all her crazy business ideas. I hope you like it!",
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
  phoneNumber: '123-456-7890',
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
      name: 'Offerings',
      href: '/offerings',
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
  offerings: [
    {
      title: 'Pizza Delivery',
      description:
        'I will teach you how to properly deliver pizza, ensuring that your customers are happy and your tips are high. Most pizza delivery drivers are not taught how to properly deliver pizza, and as a result, they are not making the most money they could be. Have you ever received a pizza that was cold, soggy, or missing toppings? Hire me to teach you how to deliver pizza properly, and you will never have to worry about that again.',
      testimonial:
        '“Curtis is a great pizza delivery person. He helped me to understand my strengths and weaknesses and how to improve my performance. I would highly recommend him to anyone looking to improve their performance.”',
      testimonialAuthor: 'Elon Musk',
      testimonialAuthorTitle: 'CEO at Dumpster Fire, Inc.',
      imgUrl:
        'https://images.unsplash.com/photo-1594392175511-30eca83d51c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80',
      imageAttribution: 'Photo by @dan__burton on Unsplash',
    },
    {
      title: 'Pizza Making',
      description:
        'This three-hour pizza class will offer our attendees the opportunity to craft homemade dough, prepare the pizza and cook a delicious meal to enjoy at the end of class. Attendees will get to take home extra dough, the secret recipe, and an ingredients list so they can independently recreate this pizza at home.',
      testimonial: '',
      testimonialAuthor: '',
      testimonialAuthorTitle: '',
      imgUrl:
        'https://images.unsplash.com/photo-1532460734809-e7f8475ca917?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3237&q=80',
      imageAttribution: 'Photo by @juanmanunez on Unsplash',
    },
  ],
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
      "I am a coder, my mon says I am good at it. I also help people find visa sponsored jobs via my job board",
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
