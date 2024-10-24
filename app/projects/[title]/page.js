'use client'

import React from 'react'
import { useParams } from 'next/navigation';
import ComingSoon from './CommingSoon';
import ProjectDetails from './ProjectDetail';
const projectData = [{
  // title: "Neon Nexus",
  // description: "A futuristic web platform for digital art exhibitions, pushing the boundaries of online galleries with immersive 3D experiences and real-time collaboration features.",
  // longDescription: "Neon Nexus revolutionizes the way digital art is showcased and experienced online. By leveraging cutting-edge web technologies, we've created a platform that not only displays artwork but immerses viewers in a virtual gallery environment. Artists can curate their exhibitions in 3D spaces, while art enthusiasts can explore these spaces as if they were walking through a physical gallery. The platform also features real-time collaboration tools, allowing artists and curators to work together seamlessly, regardless of their physical location.",
  // images: [
  //   "/placeholder.svg?height=600&width=800",
  //   "/placeholder.svg?height=600&width=800",
  //   "/placeholder.svg?height=600&width=800",
  //   "/placeholder.svg?height=600&width=800",
  // ],
  // link: "#",
  // github: "#",
  // startDate: "2023-01-15",
  // endDate: "2023-12-31",
  // skills: ["React", "Three.js", "WebGL", "Node.js", "MongoDB"],
  // teamMembers: [
  //   { name: "Alex Chen", role: "Lead Developer", avatar: "/placeholder.svg?height=40&width=40" },
  //   { name: "Sam Taylor", role: "UI/UX Designer", avatar: "/placeholder.svg?height=40&width=40" },
  //   { name: "Jordan Lee", role: "3D Artist", avatar: "/placeholder.svg?height=40&width=40" },
  //   { name: "Casey Morgan", role: "Backend Developer", avatar: "/placeholder.svg?height=40&width=40" },
  // ],
}]


export default function Details() {
  const { title } = useParams();

  const project = projectData.find(project => project.title === title);

  if (!project) {
    return <ComingSoon projectTitle={title} />;
  }

  return (
    <ProjectDetails data={project} />
  )
}
