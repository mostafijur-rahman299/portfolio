import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title=""
          des="Projects"
        />
      </div>
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14 justify-items-center">
          <ProjectsCard
            title="Telemedicine Consultation Platform – Revolutionizing Remote Healthcare"
            des="I led the development of a telemedicine platform where patients can create consultation requests, and doctors can respond efficiently. Using Django, React, and PostgreSQL, I built a secure, scalable solution that streamlines communication between patients and healthcare providers for seamless remote healthcare."
            src={projectOne}
            link={"https://9jatelemedicine.com"}
          />
          <ProjectsCard
            title="Polls and PTC Earning Platform – Empowering Users to Earn and Advertise"
            des="As a key full-stack developer, I contributed to building a platform where users can participate in polls, PTC, and third-party surveys to earn money. The system, developed with Django, PostgreSQL, VanillaJS, and jQuery, also allows users to create their own ads, offering a versatile earning and advertising solution."
            src={projectTwo}
            link={"https://crinf.net"}
          />
          <ProjectsCard
            title="WhatsApp API Integration & Customer Management System"
            des="A Django and React-based platform integrating the WhatsApp API, allowing users to manage customer communication, create meta templates, and set reminder messages for better engagement. The system also enables real-time chatting and customer profile creation."
            src={projectThree}
            link={"https://whato.vaid.tech"}
          />
          <ProjectsCard
            title="Wizer Properties: Comprehensive Property Management Solution"
            des="I spearheaded the development of a comprehensive property management solution using Django and React. This platform streamlines property management tasks, enhances communication between property owners and tenants, and provides real-time updates on property status and maintenance requests."
            src={projectFour}
            link={"https://wizerproperties.com"}
          />
        </div>
      </div>
    </section>
  );
}

export default Projects