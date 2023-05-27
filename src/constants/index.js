import {
  frontend,
  backend,
  mobile,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  fantasy,
  margarita,
  pos,
  math,
  ecommerce,
} from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
]

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Mobile App Developer',
    icon: frontend,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
]

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Rails',
    icon: rubyrails,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
]

const experiences = [
  {
    title: 'Software Engineering Student',
    company_name: 'Addis Ababa Science and Technology University',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Oct 2018 - Jun 2022',
  },
  {
    title: 'Front-End Development [Internship]',
    company_name: 'Orange Digital Center',
    icon: microverse,
    iconBg: '#333333',
    date: 'Nov 2021 - Jan 2022',
  },
  {
    title: 'Back-End & Mobile App Development',
    company_name: 'Private',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Nov 2022 - Feb 2023',
  },
  {
    title: 'Web Development',
    company_name: 'Personal',
    icon: dcc,
    iconBg: '#333333',
    date: 'Mar 2023 - Present',
  },
]

const projects = [
  {
    id: 'project-1',
    name: 'Fantasy Football',
    description: 'An online game in which users create an imaginary team.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: fantasy,
    repo:
      'https://github.com/endx-star/Ethiopian-Premier-League-Fantasy-Football',
  },
  {
    id: 'project-2',
    name: 'Margarita App',
    description: 'It is a Social Media Application.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: margarita,
    repo: 'https://github.com/endx-star/Margarita-Web-Application',
  },
  {
    id: 'project-3',
    name: 'POS System',
    description:
      'It is a system to accept payments from customers and keep track of sales for drug store company.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: pos,
    repo: 'https://github.com/endx-star/POS-System',
  },
  {
    id: 'project-4',
    name: 'Math Solver',
    description: 'This is a single-page calculator app built with React',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/endx-star/Math-Solver',
    // demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  },
  {
    id: 'project-5',
    name: 'E-Commerce Site',
    description: `Website for selling and buying different goods and commodities online.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: ecommerce,
    repo: 'https://github.com/endx-star/Ecommerce-Website-with-React',
    // demo: 'https://movie-metro.netlify.app/',
  },
]

export { services, technologies, experiences, projects }
