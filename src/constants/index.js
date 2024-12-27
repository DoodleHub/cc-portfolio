import { coinbase, launch, postlight, transperfect } from '../assets/images';
import {
  car,
  contact,
  css,
  estate,
  github,
  html,
  javascript,
  linkedin,
  nextjs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from '../assets/icons';

export const skills = [
  {
    imageUrl: css,
    name: 'CSS',
    type: 'Frontend',
  },
  {
    imageUrl: html,
    name: 'HTML',
    type: 'Frontend',
  },
  {
    imageUrl: javascript,
    name: 'JavaScript',
    type: 'Frontend',
  },
  {
    imageUrl: nextjs,
    name: 'Next.js',
    type: 'Frontend',
  },
  {
    imageUrl: react,
    name: 'React',
    type: 'Frontend',
  },
  {
    imageUrl: redux,
    name: 'Redux',
    type: 'State Management',
  },
  {
    imageUrl: sass,
    name: 'Sass',
    type: 'Frontend',
  },
  {
    imageUrl: tailwindcss,
    name: 'Tailwind CSS',
    type: 'Frontend',
  },
  {
    imageUrl: typescript,
    name: 'TypeScript',
    type: 'Frontend',
  },
];

export const experiences = [
  {
    title: 'Software Engineer II',
    company_name: 'Coinbase',
    icon: coinbase,
    iconBg: '#fff',
    date: 'Feb 2024 - Present',
    points: [
      'Lead the development of web and mobile applications from conception to deployment.',
      'Implement localization support and develope dynamic language-switching feature across Coinbase platforms.',
      'Work closely with product managers and content creators to align SEO strategies with business goals.',
      'Develop server-side rendering (SSR) solutions to enhance SEO.',
    ],
  },
  {
    title: 'Senior Software Engineer',
    company_name: 'Launch by NTT DATA',
    icon: launch,
    iconBg: '#fff',
    date: 'Jun 2023 - Feb 2024',
    points: [
      'Led the design and implementation of responsive and intuitive user interfaces for insurance applications, ensuring optimal user experience across various devices.',
      'Demonstrated mastery in frontend frameworks such as React, utilizing component-based architectures to streamline development and enhance code maintainability.',
      'Spearheaded the migration of legacy frontend systems such as Backbone.js and jQuery to React, resulting in improvements in development efficiency.',
      'Collaborated with backend teams to optimize API calls and improve overall frontend responsiveness.',
    ],
  },
  {
    title: 'Software Engineer',
    company_name: 'Postlight',
    icon: postlight,
    iconBg: '#fff',
    date: 'Jan 2022 - Jun 2023',
    points: [
      'Developed and maintained responsive and user-friendly web applications using React, ensuring a seamless and intuitive user experience.',
      'Implemented UI features, leveraging state management libraries like Redux for efficient data flow and state synchronization.',
      'Implemented unit tests using tools like Jest and React Testing Library, resulting in reductions in production bugs.',
    ],
  },
  {
    title: 'Solutions Engineer',
    company_name: 'Transperfect Legal Solutions',
    icon: transperfect,
    iconBg: '#fff',
    date: 'Jul 2017 - Jan 2022',
    points: [
      'Led the development of frontend and backend features for an in-house processing application, excelling in data conversion from platforms like Slack, Asana, Zendesk, Mobile, and Social Media into attorney-reviewed documents.',
      'Utilized third-party API services from providers such as Slack, Asana, and Zendesk for efficient data collection, contributing to the integration of relevant information.',
    ],
  },
  {
    title: 'Data Analyst',
    company_name: 'Transperfect Legal Solutions',
    icon: transperfect,
    iconBg: '#fff',
    date: 'Mar 2016 - Jul 2017',
    points: [
      'Developed and implemented ETL pipelines for data processing, encompassing extraction, transformation, and loading of diverse datasets.',
      'Utilized SQL to query databases, optimized performance, and conducted data analysis',
    ],
  },
];

export const socialLinks = [
  {
    name: 'Contact',
    iconUrl: contact,
    link: '/contact',
  },
  {
    name: 'GitHub',
    iconUrl: github,
    link: 'https://github.com/doodlehub',
  },
  {
    name: 'LinkedIn',
    iconUrl: linkedin,
    link: 'https://www.linkedin.com/in/chao-chen-12b1a0110/',
  },
];

export const projects = [
  {
    iconUrl: snapgram,
    theme: 'btn-back-pink',
    name: 'Video Conference App',
    description:
      'Built a complete video conference app, allowing users to create and schedule meetings.',
    techStack: [
      'next.js',
      'clerk',
      'shadcn',
      'stream-io',
      'tailwind css',
      'typescript',
    ],
    link: 'https://join-huddle.vercel.app',
    githubLink: 'https://github.com/DoodleHub/huddle',
  },
  {
    iconUrl: estate,
    theme: 'btn-back-blue',
    name: 'Admin Dashboard',
    description:
      'Built an admin dashboard, allowing users to track business metrics and manage internal tasks.',
    techStack: ['react', 'ant-design', 'refinedev', 'graphql', 'typescript'],
    link: 'https://lumos-board.vercel.app',
    githubLink: 'https://github.com/DoodleHub/lumos',
  },
  {
    iconUrl: pricewise,
    theme: 'btn-back-black',
    name: 'Tech E-Commerce App',
    description:
      'Built a tech e-commerce app, allowing users to shop various tech accessories.',
    techStack: ['next.js', 'sanity.io', 'stripe', 'typescript'],
    link: 'https://techie-mart.vercel.app/',
    githubLink: 'https://github.com/DoodleHub/techie-mart',
  },
  {
    iconUrl: summiz,
    theme: 'btn-back-orange',
    name: 'Fitness App',
    description:
      'Built a fitness app, allowing users to explore different types of exercises.',
    techStack: ['react', 'material ui', 'typescript'],
    link: 'https://fit-vibes.vercel.app/',
    githubLink: 'https://github.com/DoodleHub/fit-vibes',
  },
  {
    iconUrl: threads,
    theme: 'btn-back-green',
    name: 'Healthcare Management App',
    description:
      'Built a healthcare management app, allowing users to request appointments with various doctors and admins to oversee all appointments to decide whether to schedule or cancel.',
    techStack: ['next.js', 'appwrite', 'shadcn', 'tailwind css', 'typescript'],
    link: 'https://care-pulse-health.vercel.app/',
    githubLink: 'https://github.com/DoodleHub/care-pulse',
  },
  {
    iconUrl: snapgram,
    theme: 'btn-back-pink',
    name: 'Social Media App',
    description:
      'Built a social media app, allowing users to create, like, save posts and stay connected with others.',
    techStack: ['react', 'appwrite', 'shadcn', 'tailwind css', 'typescript'],
    link: 'https://explore-snapgram.vercel.app/',
    githubLink: 'https://github.com/DoodleHub/snapgram',
  },
  {
    iconUrl: estate,
    theme: 'btn-back-orange',
    name: 'Document Storage App',
    description:
      'Built a document storage app, allowing users to store files online and access them from any device.',
    techStack: ['next.js', 'appwrite', 'shadcn', 'tailwind css', 'typescript'],
    link: 'https://store-it-cloud.vercel.app/',
    githubLink: 'https://github.com/DoodleHub/store-it',
  },
];
