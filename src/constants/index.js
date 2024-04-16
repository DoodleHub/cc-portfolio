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
    title: 'Software Engineer',
    company_name: 'Coinbase',
    icon: coinbase,
    iconBg: '#fff',
    date: 'Feb 2024 - Present',
    points: [
      'Lead the development of web and mobile applications from conception to deployment.',
      'Implement localization support and develope dynamic language-switching feature across Coinbase platforms.',
    ],
  },
  {
    title: 'Senior Software Engineer',
    company_name: 'Launch by NTT DATA',
    icon: launch,
    iconBg: '#fff',
    date: 'Jan 2023 - Feb 2024',
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
    link: 'https://join-huddle.vercel.app',
  },
  {
    iconUrl: estate,
    theme: 'btn-back-black',
    name: 'Admin Dashboard',
    description:
      'Built an admin dashboard, allowing users to track business metrics and manage internal tasks.',
    link: 'https://lumos-board.vercel.app',
  },
];
