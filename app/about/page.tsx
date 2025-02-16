"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle, Briefcase, GraduationCap, ArrowRight, Star, Code, Cloud, Cpu, Database, Globe, Twitter, Linkedin, Youtube, Mail, ChevronDown } from "lucide-react";
import profileImage from "@/public/Profile-Images/profile.jpeg";
import { useRouter } from "next/navigation";

export default function AboutPage() {
  const router = useRouter();

  const quickFacts = [
    {
      fact: "5+ years of coding experience in full-stack development with React, React Native, Node.js and Python-Django.",
      icon: <CheckCircle className="w-4 h-4 text-emerald-500" />,
    },
    {
      fact: "Worked with multiple startups and tech companies on cloud-native and microservices architectures.",
      icon: <CheckCircle className="w-4 h-4 text-emerald-500" />,
    },
    {
      fact: "Experienced in CI/CD, Docker containerization, and AWS/GCP cloud platforms.",
      icon: <CheckCircle className="w-4 h-4 text-emerald-500" />,
    },
    {
      fact: "Implemented machine learning models using TensorFlow and PyTorch frameworks.",
      icon: <CheckCircle className="w-4 h-4 text-emerald-500" />,
    },
    {
      fact: "Write technical blogs on web development, cloud architecture and AI/ML topics.",
      icon: <CheckCircle className="w-4 h-4 text-emerald-500" />,
    },
    {
      fact: "Create technical video tutorials on programming and software development.",
      icon: <CheckCircle className="w-4 h-4 text-emerald-500" />,
    }
  ];

  const skills = [
    {
      category: "Frontend Development",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "React Native"],
      icon: <Globe className="w-6 h-6 text-rose-500" />,
      gradient: "from-rose-400/20 to-rose-500/20"
    },
    {
      category: "Backend Development",
      items: ["Node.js", "Python", "Django", "Java", "GraphQL", "REST API"],
      icon: <Database className="w-6 h-6 text-amber-500" />,
      gradient: "from-amber-400/20 to-amber-500/20"
    },
    {
      category: "Database",
      items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
      icon: <Database className="w-6 h-6 text-amber-500" />,
      gradient: "from-emerald-400/20 to-emerald-500/20"
    },
    {
      category: "Cloud Platforms",
      items: ["AWS",  "Docker", "CI/CD"],
      icon: <Cloud className="w-6 h-6 text-blue-500" />,
      gradient: "from-blue-400/20 to-blue-500/20"
    },
    {
      category: "AI & Machine Learning",
      items: ["TensorFlow", "PyTorch", "Computer Vision", "NLP"],
      icon: <Cpu className="w-6 h-6 text-violet-500" />,
      gradient: "from-violet-400/20 to-violet-500/20"
    }
  ];

  const experiences = [
   {
      title: "Software Engineer",
      company: "Vaid Tech Services",
      period: "2020 - Present",
      description: "Working as a software engineer in that startup company. Building scalable web and mobile applications.",
      icon: <Star className="w-5 h-5 text-amber-500" />,
      gradient: "from-amber-400/10 to-amber-500/10"
    },
    {
      title: "Full Stack Developer",
      company: "Online Client",
      period: "2019 - 2020",
      description: "Developed bunch of web applications for clients in the various countries & industries",
      icon: <Code className="w-5 h-5 text-emerald-500" />,
      gradient: "from-emerald-400/10 to-emerald-500/10"
    }
  ];

  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "European University of Bangladesh",
      year: "2021-2025",
      details: "AI and software engineering focus",
      gradient: "from-cyan-400/10 to-cyan-500/10"
    },
    {
      degree: "Diploma in Computer Science",
      institution: "Thakurgaon Polytechnic Institute",
      year: "2016-2020",
      details: "Fundamental of computer science",
    }
  ];

  return (
    <div className="min-h-screen bg-[#faf9f6] overflow-hidden">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 relative">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-yellow-200/40 via-amber-100/30 to-transparent rounded-full -z-10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-emerald-100/30 via-emerald-50/20 to-transparent rounded-full -z-10 blur-3xl" />

        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="relative w-64 h-64 md:w-72 md:h-72">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-amber-400 to-orange-500 rounded-full blur-2xl opacity-20" />
              <Image
                src={profileImage}
                alt="Profile"
                fill
                className="rounded-full object-cover border-4 border-yellow-400/40 shadow-xl hover:scale-105 transition-transform duration-500 ease-out hover:border-yellow-400/60"
                priority
              />
            </div>

            <div className="text-center md:text-left flex-1">
              <div className="space-y-5">
                <div className="relative inline-block">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-slate-900 tracking-tight">
                    Mostafijur <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">Rahman</span>
                  </h1>
                  <div className="absolute -top-6 -right-6 w-10 h-10 bg-yellow-200 rounded-full opacity-50" />
                </div>
                <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-2xl">
                  Software Engineer and AI enthusiast transforming complex ideas into elegant digital solutions.
                </p>
                <p className="text-base text-slate-600 leading-relaxed">
                  With over 5 years of experience in software development, I specialize in building scalable enterprise solutions that drive business growth. My expertise spans cloud architecture, machine learning, and full-stack development.
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
                  <Button
                    className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 transition-all duration-300 text-base py-5 px-6 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1"
                    onClick={() => router.push('/projects')}
                  >
                    View Projects
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  <Button variant="outline" className="border-2 border-yellow-400 text-yellow-600 hover:bg-gradient-to-r hover:from-yellow-50 hover:to-amber-50 transition-all duration-300 text-base py-5 px-6 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1">
                    Download CV
                  </Button>
                </div>
                <div className="flex gap-4 justify-center md:justify-start pt-4">
                  <a
                    href="https://x.com/mostafijur_"
                    className="text-slate-600 hover:text-yellow-500 transition-colors p-2 bg-white rounded-full shadow-sm hover:shadow-md"
                    target="_blank"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/hello-mostafij/"
                    className="text-slate-600 hover:text-yellow-500 transition-colors p-2 bg-white rounded-full shadow-sm hover:shadow-md"
                    target="_blank"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.youtube.com/@mostafijur-r-sajib"
                    className="text-slate-600 hover:text-yellow-500 transition-colors p-2 bg-white rounded-full shadow-sm hover:shadow-md"
                    target="_blank"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                  <a
                    href="mailto:mostafijur.sajib@gmail.com"
                    className="text-slate-600 hover:text-yellow-500 transition-colors p-2 bg-white rounded-full shadow-sm hover:shadow-md"
                    target="_blank"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Quick Facts Grid */}
      <section className="py-16 bg-gradient-to-b from-transparent via-yellow-50/30 to-transparent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-center text-slate-900 mb-10">
            Quick Facts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {quickFacts.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white/80 backdrop-blur-sm p-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100"
              >
                {item.icon}
                <p className="text-sm text-slate-700">{item.fact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-center text-slate-900 mb-10">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {skills.map((skill, i) => (
              <div
                key={i}
                className={`bg-gradient-to-br ${skill.gradient} p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-white rounded-lg shadow-md">
                    {skill.icon}
                  </div>
                  <h3 className="font-medium text-lg text-slate-900">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, j) => (
                    <span
                      key={j}
                      className="px-3 py-1.5 bg-white/80 backdrop-blur-sm text-slate-700 text-sm rounded-full shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-16 bg-gradient-to-b from-transparent via-emerald-50/30 to-transparent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-center text-slate-900 mb-10">
            Experience
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className={`flex gap-4 bg-gradient-to-r ${exp.gradient} p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100`}
              >
                <div className="p-3 bg-white rounded-xl shadow-md">
                  {exp.icon}
                </div>
                <div>
                  <h3 className="font-medium text-lg text-slate-900">{exp.title}</h3>
                  <p className="text-sm text-emerald-600 font-medium">{exp.company} • {exp.period}</p>
                  <p className="text-sm text-slate-600 mt-1">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-center text-slate-900 mb-10">
            Education
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {education.map((edu, i) => (
              <div
                key={i}
                className={`bg-gradient-to-r ${edu.gradient} p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-white rounded-lg shadow-md">
                    <GraduationCap className="w-5 h-5 text-violet-500" />
                  </div>
                  <h3 className="font-medium text-lg text-slate-900">{edu.degree}</h3>
                </div>
                <p className="text-sm text-violet-600 font-medium">{edu.institution} • {edu.year}</p>
                <p className="text-sm text-slate-600 mt-1">{edu.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center p-12 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-emerald-50 via-white to-emerald-50 border border-emerald-100">
            <h2 className="text-4xl font-serif mb-8 bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent">
              Let's Create Something Extraordinary Together
            </h2>
            
            <p className="text-lg text-slate-700 mb-10 leading-relaxed max-w-2xl mx-auto">
              I bring years of expertise in software development to help transform your ideas into reality. Let's collaborate to build solutions that make a difference.
            </p>

            <div className="bg-white/80 rounded-2xl p-8 mb-10 shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-2xl text-emerald-700 font-medium mb-6">Specialized Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    <p className="text-slate-700">Technical Problem Solving</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    <p className="text-slate-700">Code Review & Optimization</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    <p className="text-slate-700">Architecture Design</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    <p className="text-slate-700">Full-stack Development</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    <p className="text-slate-700">Performance Optimization</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    <p className="text-slate-700">Mobile App Development</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    <p className="text-slate-700">Cloud Infrastructure</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    <p className="text-slate-700">System Integration</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
              Ready to elevate your project? Let's discuss how we can tackle your technical challenges together.
            </p>

            <a href="mailto:hello@mostafijur.com" className="inline-block bg-gradient-to-r from-emerald-500 to-emerald-600 px-8 py-4 rounded-full text-white font-medium hover:shadow-lg transition-all duration-300">
              hello@mostafijur.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
