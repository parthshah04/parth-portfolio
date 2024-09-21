import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  solidity,
  python,
  expensetrend,
  riipen,
  spreadd,
  adrixus,
  sannibh,
  GraphQL,
  sparsh,
  Chainpals,
  Apexagro,
  Enlock,
  sohil,
  nk,
  ankit,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Blockchain Developer",
    icon: mobile,
  },
  {
    title: "DevOps",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "GraphQL",
    icon: GraphQL,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Solidity",
    icon: solidity,
  },
];

const experiences = [
  {
    title: "Backend Developer",
    company_name: "Expense Trend Inc.",
    icon: expensetrend,
    iconBg: "#E6DEDD",
    date: "August 2024 - Present",
    points: [
      "Developed and managed backend APIs for a mobile application, integrating various financial aggregators to retrieve and process institutional data.",
      "Streamlined data handling processes, enabling more efficient analysis and enhanced presentation of users' financial insights.",
    ],
  },
  {
    title: "Website Developer",
    company_name: "Advance Ontario, powered by Riipen",
    icon: riipen,
    iconBg: "#E6DEDD",
    date: "March 2024 - April 2024",
    points: [
      "Developed a comprehensive Blog feature for SelfJustice Inc., based on Figma designs.",
      "Implemented key functionalities including blog listing, category filtering, search, detailed post views, related blog suggestions, author profiles, and social media sharing.",
    ],
  },
  {
    title: "Back End Developer (Part-time)",
    company_name: "Spreadd.io",
    icon: spreadd,
    iconBg: "#E6DEDD",
    date: "January 2022 - December 2023",
    points: [
      "Managed 6+ microservices for an influencer marketing platform, improving overall system efficiency by 25%.",
      "Designed and implemented a multi-tenant framework with white-labelling capabilities, increasing platform scalability by 50%.",
      "Integrated key features including WhatsApp communication and analytics from Instagram and YouTube, resulting in a 35% increase in user engagement.",
      "Implemented payment solutions with Razorpay and Stripe, streamlining monthly subscriptions and improving revenue management by 20%.",
      "Successfully migrated legacy databases, ensuring data integrity and improving system performance.",
    ],
  },
  {
    title: "Backend and Blockchain Developer",
    company_name: "Adrixus Tech Studio Pvt Ltd",
    icon: adrixus,
    iconBg: "#E6DEDD",
    date: "January 2021 - December 2023",
    points: [
      "Led end-to-end communication with clients, resulting in a 85% client satisfaction rate across 4+ product development cycles.",
      "Prepared detailed project estimations that ensured smooth execution and timely delivery of new projects.",
      "Provided innovative business solutions for blockchain-based projects and products that resulted in significant success.",
      "Utilized multiple chains and Web3 packages to develop decentralized applications and marketplaces, ensuring high-performance and seamless integration.",
      "Implemented DeFi protocols, DEXs, and NFTs, staying current with emerging trends and technologies.",
      "Managed AWS setup for CI/CD development and experienced in manual deployment of applications on instances, ensuring smooth and efficient project workflows.",
      "Led backend development and blockchain integration for diverse projects, including B2B Custom Mobile Application Platform, Blockchain-based Escrow Service, Crypto Crowdfunding Platform, Crypto Trading Bot, and Crypto-based MLM Platform.",
    ],
  },
  {
    title: "Associate Web Intern",
    company_name: "Adrixus Tech Studio Pvt Ltd",
    icon: adrixus,
    iconBg: "#E6DEDD",
    date: "July 2020 - December 2020",
    points: [
      "Developed Stealthy: An Asset Tracking and Threat Detection Tool using OSINT (Open-source Intelligence) principles, with a React-based UI and Django framework for backend RESTful APIs.",
      "Implemented functionality to verify emails, IP addresses, and phone numbers for potential malicious activities.",
    ],
  },
  {
    title: "Associate Web Intern",
    company_name: "Sannibh Technologies",
    icon: sannibh,
    iconBg: "#E6DEDD",
    date: "May 2019 - June 2019",
    points: [
      "Developed a web application for Chartered Accountants using PHP and MySQL, featuring a user-friendly interface for tax forms.",
      "Streamlined the tax filing process by integrating users' historical records.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Parth's expertise in software development and blockchain has been crucial to our growth. His innovative solutions consistently surpass client expectations, driving our success.",
    name: "Sohil Shah",
    designation: "CO-MD",
    company: "Adrixus Tech Studio Pvt Ltd",
    image: sohil,
  },
  {
    testimonial:
      "Parth's precise project estimations and ability to translate client needs into scalable solutions have markedly improved our delivery success.",
    name: "Nikunj Kachhiya",
    designation: "Product Manager",
    company: "Spreadd.io",
    image: nk,
  },
  {
    testimonial:
      "Parth excels in solving complex technical challenges, particularly in multi-tenant frameworks and blockchain integration.",
    name: "Ankit Chauhan",
    designation: "Sr. Fullstack Developer ",
    company: "Adrixus Tech Studio Pvt Ltd",
    image: ankit,
  },
];

const projects = [
  {
    name: "Apexagro.in",
    description:
      "Developed a comprehensive website and PWA application for an agriculture industry company, integrating multiple management systems and GPS tracking functionality.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: Apexagro,
    source_code_link: "https://github.com/",
  },
  {
    name: "EnLock: Encrypter Locker",
    description:
      "Designed and developed a secure file storage application with advanced encryption and decentralized storage capabilities, ensuring the confidentiality and integrity of stored files.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "encryption",
        color: "green-text-gradient",
      },
      {
        name: "decentralized",
        color: "pink-text-gradient",
      },
    ],
    image: Enlock,
    source_code_link: "https://enlock.in",
  },
  {
    name: "B2B Custom Mobile Application Platform",
    description:
      "Designed scalable, multi-tenant architecture for white-label solutions. Implemented dynamic form builder based on business type, their products, inventory management, CRM module, and introduced API integrations service for plug and play model.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: sparsh,
    source_code_link: "https://github.com/",
  },
  {
    name: "Blockchain-based Escrow Service",
    description:
      "Developed smart contracts with advanced token functionalities for secure cryptocurrency transactions, ensuring trust and transparency in digital asset exchanges.",
    tags: [
      {
        name: "solidity",
        color: "blue-text-gradient",
      },
      {
        name: "web3",
        color: "green-text-gradient",
      },
      {
        name: "blockchain",
        color: "pink-text-gradient",
      },
    ],
    image: Chainpals,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
