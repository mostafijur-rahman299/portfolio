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
    myRole: "As the lead full-stack developer, I designed and built the WhatsApp API Integration & Customer Management System to streamline customer communication for businesses. Focusing on the backend, I implemented the chat feature using Django, enabling seamless message sending and real-time interactions through WhatsApp. In addition, I developed a Customer Management module for storing detailed profiles, supporting personalized communications based on customer history and preferences.",
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
    skills: ["Django", "Django Rest Framework", "React", "Redux", "WhatsApp API", "PostgreSQL", "Celery", "Websocket", "RabbitMQ"]
  },
  {
    id: 2,
    title: "Telemedicine Consultation System",
    description: "A digital platform enabling patients to connect with licensed doctors for convenient, secure online consultations, access personalized medical advice, and manage their health records.",
    longDescription: "Patients can submit detailed consultation requests that accurately convey their symptoms and medical histories, ensuring thorough communication with healthcare professionals. Powered by a robust Django backend and a dynamic React frontend, the system allows doctors to review requests, provide accurate diagnoses, and recommend treatment plans. Key features include secure messaging for direct communication, appointment scheduling for convenient follow-ups, and a streamlined user interface that ensures easy navigation. Integration with the OpenAI API enhances the consultation experience by generating tailored responses based on patient symptoms, offering valuable insights and personalized suggestions. This innovative system bridges the gap between patients and providers, transforming healthcare delivery through advanced technology to ensure quality care and improved patient engagement.",
    myRole: "As a full-stack developer, I spearheaded the development of the Telemedicine Consultation System, ensuring a smooth and secure patient-doctor interaction through a Django backend and React frontend. I implemented essential features such as one time messaging, appointment scheduling, and secure data management, focusing on reliability and ease of use. Additionally, I integrated the OpenAI API for tailored, symptom-based responses, enhancing the accuracy and value of each consultation.",
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
    skills: ["Django", "Django Rest Framework", "React", "PostgreSQL", "OpenAI API", "Celery", "Redis"]
  },
  {
    id: 3,
    title: "Poll & PTC Earn Platform",
    description: "A versatile online platform that enables users to earn money by participating in polls, pay-to-click (PTC) ads, and third-party surveys, with options for ad creation and personalized earnings management.",
    longDescription: "The Poll & PTC Earn Platform is an interactive earning platform that empowers users to earn money by engaging in activities such as polls, pay-to-click (PTC) advertisements, and third-party surveys. Users can participate in various polls and complete PTC ads to generate earnings directly from the platform. Additionally, the system allows users to create their own ads, enabling a dual opportunity for both ad creators and participants to benefit. Designed with a user-centric interface and built using a robust Django backend, the platform ensures efficient management of user activities, secure transactions, and accurate tracking of earnings. The seamless integration of these features makes it easy for users to navigate, participate in activities, and manage their earnings, creating a straightforward and rewarding experience.",
    myRole: "As the dedicated backend developer for the Poll & PTC Earn Platform, I focused on building a secure and efficient system using Django, implementing essential features for managing polls, PTC ads, and user earnings. I prioritized security by implementing measures against XSS, clickjacking, and other vulnerabilities, ensuring a safe experience for all users. Additionally, I optimized the backend for scalability and reliability, allowing the platform to handle high volumes of user activity seamlessly.",
    images: [
      "/assets/images/projects/crinf/crinf-net.gif",
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
    description: "An advanced platform that streamlines property management, allowing users to manage rentals, while enabling buyers to explore listings, view 360-degree property tours, and search with Google Maps integration.",
    longDescription: "The Property Management System is a powerful platform designed to simplify property management and property purchasing. It caters to property owners, managers, and prospective buyers by offering comprehensive tools for managing rentals, leases, and tenant requests. For buyers, the system provides an interactive experience with advanced search options, Google Maps integration for location-based searches, and immersive 360-degree property tours, allowing users to explore properties virtually. Developed with a secure Django backend and a vanilla JS frontend, the platform allows seamless property data handling, automated notifications, and secure transaction processing. Property managers benefit from tools to track tenant details, maintenance requests, and occupancy rates, while buyers can explore and assess properties with ease. By bridging property management and purchasing in one unified system, this platform transforms the property experience for all stakeholders.",
    myRole: "As the dedicated full-stack developer for the Property Management System, I built a secure and scalable Django backend that supports property listings, rental management, and buyer engagement features. Additionally, I worked closely on implementing features for buyers, including search with Google Maps integration, 360-degree video tours, and seamless data flow for property exploration, ensuring a reliable and user-friendly experience across the platform.",
    images: [
      "/assets/images/projects/property-management/wz.gif",
    ],
    link: "https://wizerproperties.com/",
    // github: "#",
    teamSize: "5",
    startDate: "July 2023",
    endDate: "Still Running",
    skills: ["Django", "React", "PostgreSQL", "Stripe API", "Google Map", "Google Place API"]
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
