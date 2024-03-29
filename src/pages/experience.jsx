import Image from 'next/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { RiLinksLine } from 'react-icons/ri'
import siteMetadata from '@/data/siteMetadata'
import logoApple from '@/images/logos/apple.svg'
import its from '@/images/logos/its.jpg'
import rocket from '@/images/logos/rocket.jpg'

// TODO: If you want to include the logo of the company, I suggesting importing the svg from Remix-Design's repo: https://github.com/Remix-Design/RemixIcon/tree/master/icons/Logos

// TODO: Add your own work experience here
const experiences = [
  {
    title: 'FullStack Developer',
    company: 'Relocate-with-us',
    date: '2023 - Present',
    description: [
      'Developed a fully functioning job board with a search feature and an interactive map that serves thousands of users with no costs',
      'Grow the list of subscribers to +5000 job seekers and recruiters across mutliple media outlets with 0$',
      'Increased data loading time by 100% with no pagination and external load balancer',
    ],
    location: 'Algeria',
    link: { url: 'https://relocate-with-us.github.io/', label: 'relocate-with-us' },
    logo: rocket,
  },
  {
    title: 'ECM Consultant',
    company: 'ItSolutions',
    date: '2022 - Present',
    description: [
      'Successfully planned, implemented, and deployed Document Management System projects with 100% on-time delivery, while also estimating costs and managing project scopes.',
      'Decreased the cost of maintenance and system administration by 40\% by virtualizing and automating OpenText client installation, along with creating comprehensive manuals.',
      'Designed and implemented training plans, as well as coordinated the creation of end-user and support staff training materials for an interdisciplinary teams in the Oil and Gaz, and Pharmaceutical sectors.',
    ],
    location: 'Algeria',
    link: { url: 'https://itsolutions.dz/', label: 'ItSolution' },
    logo: its,
  },
]

export default function Resume() {
  return (
    <>
      <Head>
        <title>Experience - {siteMetadata.author}</title>
        <meta
          name={`Work experience of ${siteMetadata.author}`}
          content={siteMetadata.experience.title}
        />
      </Head>
      <SimpleLayout
        title={siteMetadata.experience.title}
        intro={siteMetadata.experience.intro}
      >
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-primaryText-800 dark:text-primaryText-100 sm:text-4xl">
          Work Experience
        </h2>
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {experiences.map((experience, index) => (
            <Card key={index}>
              <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md shadow-primaryText-800/5 ring-1 ring-primaryText-900/5 dark:border dark:border-primaryText-700/50 dark:bg-primaryText-800 dark:ring-0">
                <Image
                  src={experience.logo}
                  alt={experience.company}
                  className="w-8 h-8"
                  unoptimized
                  width={32}
                  height={32}
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-primaryText-800 dark:text-primaryText-100">
                <Card.Link href={experience.link.url}>
                  {experience.title} at {experience.company}
                </Card.Link>
              </h2>
              <Card.Description>
                {experience.description.map((item, index) => (
                  <li className="ml-4 list-disc" key={`description-${index}`}>
                    {item}
                  </li>
                ))}
              </Card.Description>
              <p className="relative z-10 flex mt-6 text-sm font-medium transition text-primaryText-400 group-hover:text-accent-500 dark:text-primaryText-200">
                <RiLinksLine className="flex-none w-6 h-6" />
                <span className="ml-2">{experience.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>

        <div className="relative max-w-lg mx-auto mt-24 lg:max-w-7xl">
          <div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-primaryText-800 dark:text-primaryText-100 sm:text-4xl">
              Education
            </h2>
          </div>
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
            {siteMetadata.experience.education.map((item, index) => (
              <Card key={`education-${index}`}>
                <p className="text-sm text-primaryText-600 dark:text-primaryText-400">
                  {item.startDate} - {item.endDate}
                </p>
                <div className="block mt-2">
                  <p className="text-xl font-semibold text-primaryText-800 dark:text-primaryText-100">
                    {item.degree}
                  </p>
                  <p className="text-base font-semibold text-primaryText-800 dark:text-primaryText-100">
                    {item.schoolName}
                  </p>
                  <p className="mt-3 text-base text-primaryText-600 dark:text-primaryText-400">
                    {item.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}
