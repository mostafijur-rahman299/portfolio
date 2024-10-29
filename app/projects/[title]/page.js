'use client'

import React from 'react'
import { useParams } from 'next/navigation';
import ComingSoon from './CommingSoon';
import ProjectDetails from './ProjectDetail';
const projectData = [
  {
    id: 1,
    title: "WhatsApp API Integration & Customer Management",
    description: "A system that integrates WhatsApp API for customer communication and management.",
    longDescription: "The WhatsApp API Integration & Customer Management System is a streamlined solution that empowers businesses to enhance customer communication through WhatsApp. Developed with Django and React, it enables users to send messages, create and manage message templates, and set reminders for timely follow-ups, ensuring no customer interaction is missed. The platform’s Customer Management module stores detailed profiles, allowing for personalized interactions based on customer history and preferences. A scheduling feature automates communication workflows, saving time and improving efficiency. The React-based interface offers a user-friendly experience, while Django ensures robust backend performance for scalability. This system ultimately strengthens customer relationships and optimizes communication, making it ideal for businesses aiming to enhance engagement.",
    myRole: "As the lead full-stack developer, I designed and built the WhatsApp API Integration & Customer Management System to streamline customer communication for businesses. Focusing on the backend, I implemented the chat feature using Django, enabling seamless message sending and real-time interactions through WhatsApp. In addition, I developed a Customer Management module for storing detailed profiles, supporting personalized communications based on customer history and preferences. Automated scheduling ensures timely follow-ups, while template management simplifies recurring messages. The React-based front end provides a user-friendly experience, and the robust Django backend ensures scalability. This solution strengthens customer relationships and optimizes engagement for businesses.",
    images: [
      "/assets/images/projects/whatsapp-integration/appears/dashboard.gif",
      "/assets/images/projects/whatsapp-integration/appears/templates.gif",
      "/assets/images/projects/whatsapp-integration/appears/chat.gif",
      "/assets/images/projects/whatsapp-integration/appears/marketing.gif",
      "/assets/images/projects/whatsapp-integration/appears/reminder.gif",
      "/assets/images/projects/whatsapp-integration/appears/meta.gif",
      "/assets/images/projects/whatsapp-integration/appears/tag.gif",
      "/assets/images/projects/whatsapp-integration/appears/customer.gif",
      "/assets/images/projects/whatsapp-integration/appears/kanban-board.gif",
    ],
    link: "https://app.whatsupseller.com/",
    // github: "#",
    teamSize: "4",
    startDate: "February 2023",
    endDate: "Still Running",
    skills: ["Django", "React", "WhatsApp API", "Customer Management"]
  },
  {
    id: 2,
    title: "Telemedicine Consultation System",
    description: "A platform where patients can consult with doctors using AI-driven medical suggestions.",
    longDescription: "The Telemedicine Consultation System is an innovative platform designed to facilitate remote medical consultations between patients and healthcare providers. This comprehensive system enables patients to easily submit detailed consultation requests, ensuring that their symptoms and medical histories are accurately conveyed. Built with a robust Django backend and a dynamic React frontend, the system allows doctors to efficiently review these requests, respond with diagnoses, and suggest treatment plans.Key features include secure messaging for direct communication between patients and doctors, appointment scheduling for convenient follow-ups, and a streamlined user interface for easy navigation. Additionally, the integration of OpenAI API enhances the consultation process by generating tailored responses based on patient symptoms, providing valuable insights and suggestions.By bridging the gap between patients and healthcare professionals, this system revolutionizes access to medical care, making it more convenient, efficient, and accessible for everyone. Ultimately, the Telemedicine Consultation System aims to improve healthcare delivery, enhance patient engagement, and ensure quality care through technology.",
    myRole: "As a lead full-stack developer, I was instrumental in building the Telemedicine Consultation System, a comprehensive platform enabling patients to consult with doctors online. Leveraging Django for the backend and React for the frontend, I created a seamless process where patients can submit detailed consultation requests, and doctors can respond with professional advice, diagnoses, and treatment plans. I designed key features like patient-doctor messaging, appointment scheduling, and secure data handling to ensure a reliable and user-friendly experience. A custom prompt system, integrated with OpenAI API, enhances the consultation experience by generating suggestions based on the patient’s symptoms and medical history, ensuring that every response is informative and accurate. This system transforms traditional healthcare by offering timely, accessible consultations, ultimately enhancing patient engagement and care quality.",
    images: [
      "/assets/images/projects/telemedicine/appears/home-page.gif",
      "/assets/images/projects/telemedicine/appears/patient.gif",
      "/assets/images/projects/telemedicine/appears/doctor-response.gif",
      "/assets/images/projects/telemedicine/appears/post-advice-query.gif",
      "/assets/images/projects/telemedicine/appears/doctor-response-to-post-query.gif",
      "/assets/images/projects/telemedicine/appears/patient-rating.gif",
    ],
    link: "https://9jatelemedicine.com/",
    // github: "#",
    teamSize: "5",
    startDate: "June 2022",
    endDate: "Still Running",
    skills: ["Django", "React", "PostgreSQL", "OpenAI API"]
  },
  {
    id: 3,
    title: "Poll & PTC Earn Platform",
    description: "A platform for property owners and managers to oversee real estate listings, manage tenants, and track rent payments.",
    longDescription: "The Property Management System is a web-based platform designed for property owners, managers, and real estate agents to efficiently oversee properties, manage tenant relations, and track rent payments. It simplifies day-to-day tasks, centralizes data, and ensures effective property management through automated workflows and detailed record-keeping. This system is built to reduce manual effort, minimize human error, and provide an organized, user-friendly interface for all stakeholders.",
    myRole: "As a full-stack developer for the Poll & PTC Earn Platform, I played a pivotal role in designing and implementing the system that allows users to earn rewards by participating in polls, PTC ads, and surveys. I developed the backend using Django, ensuring secure user registrations, transactions, and data management.On the frontend, I utilized React to create an engaging and intuitive user interface that encourages participation and makes navigation seamless. I implemented features that allow users to easily share their opinions through polls, click on advertisements for earnings, and complete surveys for additional rewards.I also integrated payment gateways to facilitate secure transactions and ensure users receive their earnings promptly. By focusing on user experience and robust functionality, I aimed to create a platform that not only monetizes users' time and opinions but also fosters engagement between businesses and consumers, driving a vibrant ecosystem of participation and rewards.",
    images: [
      "/assets/images/projects/crinf/crinf-net.gif",
    ],
    link: "https://crinf.net/",
    // github: "#",
    teamSize: "5",
    startDate: "March 2020",
    endDate: "Still Running",
    skills: ["Django", "PostgreSQL", "VanillaJS", "jQuery"]
  },
  {
    id: 4,
    title: "Property Management System",
    description: "A platform where users can earn by participating in polls, PTC, and surveys.",
    longDescription: "s. This user-friendly platform allows participants to share their opinions through interactive polls, providing valuable insights to businesses while earning rewards for their contributions.In addition to polls, users can earn by clicking on advertisements, which generates revenue for both the platform and the participants. The survey feature allows users to complete targeted surveys, sharing their perspectives on products and services in exchange for monetary rewards or points that can be redeemed for cash or prizes.Built with a robust backend to ensure secure transactions and a seamless user experience, the Poll & PTC Earn Platform encourages user engagement and provides a steady stream of earning opportunities. By connecting businesses with consumers, the platform creates a mutually beneficial ecosystem that values user input and rewards participation, making it an attractive choice for individuals looking to monetize their time and opinions.",
    myRole: "As a Full-Stack Developer for the Property Management System, you play a crucial role in the design, development, and deployment of the platform. Your expertise spans both front-end and back-end technologies, ensuring a seamless, scalable, and user-friendly experience.",
    images: [
      "/assets/images/projects/property-management/wz.gif",
    ],
    link: "https://wizerproperties.com/",
    // github: "#",
    teamSize: "5",
    startDate: "July 2023",
    endDate: "Still Running",
    skills: ["Django", "React", "PostgreSQL", "Stripe API"]
  }
]


export default function Details() {
  const { title } = useParams();

  const project = projectData.find(project => project.title === decodeURIComponent(title));

  if (!project) {
    return <ComingSoon projectTitle={title} />;
  }

  return (
    <ProjectDetails projectData={project} />
  )
}
