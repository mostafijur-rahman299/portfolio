'use client'

import React from 'react'
import { useParams } from 'next/navigation';
import ProjectDetails from './ProjectDetails';

const projectData = [
  {
    id: 1,
    title: "WhatsApp API Integration & Customer Management",
    slug: "whatsapp-integration",
    description: "A system that integrates WhatsApp API for customer communication and management.",
    longDescription: "The WhatsApp API Integration & Customer Management System is a streamlined solution that empowers businesses to enhance customer communication through WhatsApp. Developed with Django and React, it enables users to send messages, create and manage message templates, and set reminders for timely follow-ups, ensuring no customer interaction is missed. The platform’s Customer Management module stores detailed profiles, allowing for personalized interactions based on customer history and preferences. A scheduling feature automates communication workflows, saving time and improving efficiency. The React-based interface offers a user-friendly experience, while Django ensures robust backend performance for scalability. This system ultimately strengthens customer relationships and optimizes communication, making it ideal for businesses aiming to enhance engagement.",
    myRole: "As the lead full-stack developer, I designed and built the WhatsApp API Integration & Customer Management System to streamline customer communication for businesses. Focusing on the backend, I implemented the chat feature using Django, enabling seamless message sending and real-time interactions through WhatsApp. In addition, I developed a Customer Management module for storing detailed profiles, supporting personalized communications based on customer history and preferences.",
    key_features: [
      "WhatsApp API Integration",
      "Customer Management",
      "Message Sending",
      "Message Templates",
      "Scheduling",
    ],
    project_goals: [
      "To integrate WhatsApp API for customer communication and management.",
      "To create a Customer Management module for storing detailed profiles.",
      "To automate communication workflows and improve efficiency.",
    ],
    images: [
      "/projects/whatsapp-integration/appears/dashboard.gif",
      "/projects/whatsapp-integration/appears/templates.gif",
      "/projects/whatsapp-integration/appears/chat.gif",
      "/projects/whatsapp-integration/appears/marketing.gif",
      "/projects/whatsapp-integration/appears/reminder.gif",
      "/projects/whatsapp-integration/appears/meta.gif",
      "/projects/whatsapp-integration/appears/tag.gif",
      "/projects/whatsapp-integration/appears/customer.gif",
      "/projects/whatsapp-integration/appears/kanban-board.gif",
    ],
    link: "https://app.whatsupseller.com/",
    // github: "#",
    teamSize: "4",
    startDate: "February 2023",
    endDate: "Still Running",
    skills: ["Django", "Django Rest Framework", "React", "Docker", "PostgreSQL", "WhatsApp API", "Celery", "Django Channels", "RabbitMQ"]
  },
  {
    id: 2,
    title: "Telemedicine Consultation System",
    slug: "telemedicine",
    description: "A digital platform enabling patients to connect with licensed doctors for convenient, secure online consultations, access personalized medical advice, and manage their health records.",
    longDescription: "Patients can submit detailed consultation requests that accurately convey their symptoms and medical histories, ensuring thorough communication with healthcare professionals. Powered by a robust Django backend and a dynamic React frontend, the system allows doctors to review requests, provide accurate diagnoses, and recommend treatment plans. Key features include secure messaging for direct communication, appointment scheduling for convenient follow-ups, and a streamlined user interface that ensures easy navigation. Integration with the OpenAI API enhances the consultation experience by generating tailored responses based on patient symptoms, offering valuable insights and personalized suggestions. This innovative system bridges the gap between patients and providers, transforming healthcare delivery through advanced technology to ensure quality care and improved patient engagement.",
    myRole: "As a full-stack developer, I spearheaded the development of the Telemedicine Consultation System, ensuring a smooth and secure patient-doctor interaction through a Django backend and React frontend. I implemented essential features such as one time messaging, appointment scheduling, and secure data management, focusing on reliability and ease of use. Additionally, I integrated the OpenAI API for tailored, symptom-based responses, enhancing the accuracy and value of each consultation.",
    key_features: [
      "One Time Messaging",
      "Appointment Scheduling",
      "Secure Data Management",
      "OpenAI API Integration",
    ],
    project_goals: [
      "To enable patients to connect with licensed doctors for convenient, secure online consultations.",
      "To access personalized medical advice and manage their health records.",
      "To bridge the gap between patients and providers through advanced technology.",
    ],
    images: [
      "/projects/telemedicine/appears/home-page.gif",
      "/projects/telemedicine/appears/patient.gif",
      "/projects/telemedicine/appears/doctor-response.gif",
      "/projects/telemedicine/appears/post-advice-query.gif",
      "/projects/telemedicine/appears/doctor-response-to-post-query.gif",
      "/projects/telemedicine/appears/patient-rating.gif",
    ],
    link: "https://9jatelemedicine.com/",
    // github: "#",
    teamSize: "5",
    startDate: "June 2022",
    endDate: "Still Running",
    skills: ["Django", "Django Rest Framework", "React", "Docker", "PostgreSQL", "OpenAI API", "Celery", "Redis"]
  },
  {
    id: 3,
    title: "Poll & PTC Earn Platform",
    slug: "poll-ptc-earn",
    description: "A versatile online platform that enables users to earn money by participating in polls, pay-to-click (PTC) ads, and third-party surveys, with options for ad creation and personalized earnings management.",
    longDescription: "The Poll & PTC Earn Platform is an interactive earning platform that empowers users to earn money by engaging in activities such as polls, pay-to-click (PTC) advertisements, and third-party surveys. Users can participate in various polls and complete PTC ads to generate earnings directly from the platform. Additionally, the system allows users to create their own ads, enabling a dual opportunity for both ad creators and participants to benefit. Designed with a user-centric interface and built using a robust Django backend, the platform ensures efficient management of user activities, secure transactions, and accurate tracking of earnings. The seamless integration of these features makes it easy for users to navigate, participate in activities, and manage their earnings, creating a straightforward and rewarding experience.",
    myRole: "As the dedicated backend developer for the Poll & PTC Earn Platform, I focused on building a secure and efficient system using Django, implementing essential features for managing polls, PTC ads, and user earnings. I prioritized security by implementing measures against XSS, clickjacking, and other vulnerabilities, ensuring a safe experience for all users. Additionally, I optimized the backend for scalability and reliability, allowing the platform to handle high volumes of user activity seamlessly.",
    key_features: [
      "Polls",
      "PTC Ads",
      "Third-Party Surveys",
      "Ad Creation",
      "Earnings Management",
    ],
    project_goals: [
      "To enable users to earn money by participating in polls, pay-to-click (PTC) ads, and third-party surveys.",
      "To allow users to create their own ads, enabling a dual opportunity for both ad creators and participants to benefit.",
      "To ensure efficient management of user activities, secure transactions, and accurate tracking of earnings.",
    ],
    images: [
      "/projects/crinf/crinf-net.gif",
    ],
    link: "https://crinf.net/",
    // github: "#",
    teamSize: "5",
    startDate: "March 2020",
    endDate: "Still Running",
    skills: ["Django", "Django Rest Framework", "PostgreSQL", "VanillaJS", "jQuery", "Third Party API Integration", "Celery", "Redis"]
  },
  {
    id: 4,
    title: "Property Management System",
    slug: "property-management",
    description: "An advanced platform that streamlines property management, allowing users to manage rentals, while enabling buyers to explore listings, view 360-degree property tours, and search with Google Maps integration.",
    longDescription: "The Property Management System is a powerful platform designed to simplify property management and property purchasing. It caters to property owners, managers, and prospective buyers by offering comprehensive tools for managing rentals, leases, and tenant requests. For buyers, the system provides an interactive experience with advanced search options, Google Maps integration for location-based searches, and immersive 360-degree property tours, allowing users to explore properties virtually. Developed with a secure Django backend and a vanilla JS frontend, the platform allows seamless property data handling, automated notifications, and secure transaction processing. Property managers benefit from tools to track tenant details, maintenance requests, and occupancy rates, while buyers can explore and assess properties with ease. By bridging property management and purchasing in one unified system, this platform transforms the property experience for all stakeholders.",
    myRole: "As the dedicated full-stack developer for the Property Management System, I built a secure and scalable Django backend that supports property listings, rental management, and buyer engagement features. Additionally, I worked closely on implementing features for buyers, including search with Google Maps integration, 360-degree video tours, and seamless data flow for property exploration, ensuring a reliable and user-friendly experience across the platform.",
    key_features: [
      "Property Listings",
      "Rental Management",
      "Buyer Engagement",
      "Google Maps Integration",
      "360-Degree Video Tours",
    ],
    project_goals: [
      "To streamline property management and property purchasing.",
      "To provide a user-friendly experience for property owners, managers, and buyers.",
      "To enable seamless property data handling and secure transaction processing.",
    ],
    images: [
      "/projects/property-management/wz.gif",
    ],
    link: "https://wizerproperties.com/",
    // github: "#",
    teamSize: "5",
    startDate: "July 2023",
    endDate: "Still Running",
    skills: ["Django", "React", "Docker", "MySQL", "Stripe API", "Google Map", "Google Place API"]
  },
  {
    id: 5,
    title: "Enterprise Resource Planning (ERP)",
    slug: "erp",
    description: "It's designed to streamline business processes, including finance, inventory, human resources, and sales, within a single, integrated platform.",
    longDescription: "The ERP system project is a comprehensive solution aimed at centralizing and optimizing various operational functions such as finance, inventory management, human resources, and sales. The system is designed to automate processes and enable seamless information flow across departments, leading to enhanced productivity and reduced redundancies. This ERP solution facilitates real-time data insights, allowing the company to make data-driven decisions that align with strategic goals. The project involved phases of requirement gathering, design, development, testing, and deployment to ensure robust functionality and user satisfaction. Key features include custom dashboards, role-based access, automated reporting, and integration with third-party services for extended capabilities.",
    myRole: "I joined the team at the beginning of my journey in this company, contributing to the ERP project from its initial stages. My responsibilities included collaborating with stakeholders to define requirements, designing and implementing key modules, and ensuring data security and integrity within the system. I played an instrumental role in the back-end development, ensuring the ERP system’s scalability and smooth integration across various departments.",
    key_features: [
      "Custom Dashboards",
      "Role-Based Access",
      "Automated Reporting",
      "Third-Party Integration",
    ],
    project_goals: [
      "To streamline business processes and optimize operational efficiency.",
      "To provide real-time data insights for strategic decision-making.",
      "To automate processes and reduce redundancies.",
    ],
    images: [
      "/projects/erp/erp-system-demo.gif",
    ],
    link: "",
    // github: "#",
    teamSize: "5",
    startDate: "April 2020",
    endDate: "November 2021",
    skills: ["Django", "Django Rest Framework", "PostgreSQL", "jQuery"]
  },
  {
    id: 6,
    title: "Anonymous Chat App",
    slug: "anonymous-chat",
    description: "A chat app that allows users to chat anonymously with each other. It's end-to-end encrypted and secure app.",
    longDescription: "The Anonymous Chat App is a secure and anonymous communication platform that allows users to chat with each other without revealing their identities. The app uses end-to-end encryption to ensure that the messages are secure and cannot be intercepted by third parties. The app also has a feature that allows users to delete their messages after they have been sent, ensuring that no one can access them after they have been sent.",
    myRole: "I was responsible for the development of the backend of the app. I also worked on the integration of the end-to-end encryption library and the database.",
    key_features: [
      "End-to-end encryption",
      "Secure and anonymous communication",
      "Delete messages after sending",
      "User-friendly interface"
    ],
    project_goals: [
      "To create a secure and anonymous communication platform that allows users to chat with each other without revealing their identities.",
      "To use end-to-end encryption to ensure that the messages are secure and cannot be intercepted by third parties.",
      "To have a user-friendly interface"
    ],
    images: [
      "/projects/anonymous-chat/banner.jpg"
    ],
    link: "",
    // github: "#",
    teamSize: "5",
    startDate: "April 2020",
    endDate: "November 2021",
    skills: ["Django", "Django Rest Framework", "PostgreSQL", "jQuery", "End-to-End Encryption"]
  },
  {
    id: 7,
    title: "Shipper-Carrier Logistics Platform",
    slug: "shipper-carrier-logistics-platform",
    description: "A platform for shippers and carriers to manage logistics and transportation.",
    longDescription: "The Shipper-Carrier Logistics Platform is a comprehensive solution designed to streamline the logistics and transportation process for shippers and carriers. This platform provides a seamless interface for managing shipments, tracking deliveries, and optimizing transportation routes, all in one centralized system.",
    myRole: "I was responsible for the development of the backend of the app. I also worked on the integration of the end-to-end encryption library and the database.",
    key_features: [
      "Shipment Management",
      "Tracking and Monitoring",
      "Route Optimization",
      "Payment Integration",
      "User Authentication",
      "Admin Dashboard",
      "Real-Time Notifications",
      "Analytics and Reporting",
    ],
    project_goals: [
      "To streamline the logistics and transportation process for shippers and carriers.",
      "To provide a seamless interface for managing shipments, tracking deliveries, and optimizing transportation routes.",
      "To optimize transportation routes and reduce costs.",
      "To provide a user-friendly interface for shippers and carriers.",
    ],
    images: [
      "/projects/poncore/banner.png",
    ],
    link: "",
    // github: "#",
    teamSize: "5",
    startDate: "April 2020",
    endDate: "November 2021",
    skills: ["Django", "Django Rest Framework", "React", "Docker", "PostgreSQL", "Celery", "Redis", "React Native", "React Native CLI"]
  },
  {
    id: 8,
    title: "Todo App",
    slug: "todo-app",
    description: "A todo app that allows users to manage their tasks and projects.",
    longDescription: "The Todo App is a simple and intuitive platform designed to help users manage their tasks and projects efficiently. With a clean and user-friendly interface, the app allows users to create, edit, and delete tasks, set reminders, and track their progress. The app is built with React Native and Expo, and uses a SQLite database for storage.",
    myRole: "I was responsible for the development of the backend of the app. I also worked on the integration of the database and the frontend.",
    key_features: [
      "Task Management",
      "Reminder",
      "User Authentication",
      "Real-Time Notifications",
      "Analytics and Reporting",
    ],
    project_goals: [
      "To help users manage their tasks and projects efficiently.",
      "To provide a clean and user-friendly interface.",
      "To use a SQLite database for storage.",
      "To use React Native and Expo for the frontend.",
    ],
    images: [
      "/projects/todox/banner.jpeg",
    ],
    link: "",
    // github: "#",
    teamSize: "5",
    startDate: "April 2020",
    endDate: "November 2021",
    skills: ["Django", "Django Rest Framework", "React", "Docker", "PostgreSQL", "React Native", "Expo"]
  } 
]


export default function Details() {
  const { slug } = useParams();

  const project = projectData.find(project => project.slug === decodeURIComponent(slug as string));

  return (
    <ProjectDetails projectData={project} />
  )
}