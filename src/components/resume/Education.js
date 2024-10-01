import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2016 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Bachelor of Science in Computer Science"
            subTitle="European University of Bangladesh"
            result="--"
            des="I am currently pursuing a Bachelor of Science in Computer Science at European University of Bangladesh. This program is designed to provide a strong foundation in computer science theory and practical skills, with a focus on advanced technologies. It's preparing me for a cutting-edge career in the rapidly evolving field of technology, exposing me to the latest tools and methodologies used in the industry."
            programmingCoursework="Data structure & Algorithm, Operating System, Computer Vision, Database Systems, Software Engineering, Compiler Design, Web Development, Object-Oriented Programming, Basic of Artificial Intelligence"
          />
          <ResumeCard
            title="Diploma in Computer Science"
            subTitle="Thakurgaon Polytechnic Institute"
            result="3.52/4"
            des="I completed my Diploma in Computer Science at Thakurgaon Polytechnic Institute. This program provided me with a solid foundation in computer science and practical skills, preparing me for a career in the field of technology."
            programmingCoursework="Basic of Computer, Introduction to Programming, Data structure & Algorithm, Networks, Introduction to Database, Software Engineering, Object-Oriented Programming, Programming with Python, Programming with C++"
          />

          {/* <ResumeCard
            title="Computer Science"
            subTitle="Thakurgaon Polytechnic Institute (2016 - 2020)"
            result="3.52/4"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          /> */}
        </div>
      </div>
      {/* part Two */}

      {/* <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Sr. Software Engineer"
            subTitle="Google Out Tech - (2017 - Present)"
            result="USA"
            des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
          />
          <ResumeCard
            title="Web Developer & Trainer"
            subTitle="Apple Developer Team - (2012 - 2016)"
            result="MALAYSIA"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Nike - (2020 - 2011)"
            result="Oman"
            des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          />
        </div>
      </div> */}
    </motion.div>
  );
}

export default Education