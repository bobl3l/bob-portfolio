"use client";

import softeng from "@/asset/softwareeng.png";
import feat from "@/asset/feat.png";
import kungfood from "@/asset/kungfood hippo.png";
import flight from "@/asset/flight simulator.png";
import web from "@/asset/website.png";
import { Experience, LogoLink, Projects } from "./ui/ui";
import React from "react";

export default function Home() {
  const about = React.useRef<HTMLDivElement>(null);
  const exp = React.useRef<HTMLDivElement>(null);
  const proj = React.useRef<HTMLDivElement>(null);
  const cert = React.useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-full ">
      <nav className="bg-black opacity-90 fixed w-full backdrop-blur-2xl">
        <div className="mx-auto  px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    onClick={() => about.current?.scrollIntoView()}
                    className="rounded-md  px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white hover:border-3"
                    aria-current="page"
                  >
                    About me
                  </a>
                  <a
                    onClick={() => exp.current?.scrollIntoView()}
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white hover:border-3"
                  >
                    Experiences
                  </a>
                  <a
                    onClick={() => proj.current?.scrollIntoView()}
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white hover:border-3"
                  >
                    Projects
                  </a>
                  <a
                    onClick={() => cert.current?.scrollIntoView()}
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white hover:border-3"
                  >
                    Certifications
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/*Main panel */}
        <div className="mx-auto max-w-[150vh] px-4 py-6 sm:px-6 lg:px-12  flex justify-start items-center">
          <div className="mx-auto max-w-5xl px-2 py-6 sm:px-6 lg:px-12 flex flex-col gap-5 ">
            <div className="text-7xl font-black tracking-tight text-white">
              Hello<span className="text-purple-500">,</span> My name is
            </div>
            <div className="text-7xl font-black tracking-tight text-purple-500">
              Bob Liang
            </div>
            <h1 className="text-3xl font-light tracking-tight text-white">
              I am a software developer / UX engineer ;)
            </h1>
            <a
              className="max-w-40 bg-purple-900 hover:bg-purple-600 text-white font-black hover:scale-105 text-xs md:text-lg font-semibold p-3 rounded-xl text-center"
              href="https://drive.google.com/file/d/1eMpv1LYLPG2Q2BlHHREXmp0j-9ocwqnU/view?usp=sharing"
            >
              My Resume
            </a>
          </div>
          <div className="px-8 py-10">
            <img src={softeng.src} className="max-h-[60vh]" alt="softeng" />
          </div>
        </div>
        {/*About me panel */}
        <div
          ref={about}
          className="mx-auto max-w-[140vh] pt-40 px-4 py-6 sm:px-6 lg:px-12 flex justify-start items-center"
        >
          <hr className="flex-grow border-t border-purple-500" />
          <span className="px-3 text-purple-500 text-6xl font-black">
            About me
          </span>
        </div>
        <div className="mx-auto max-w-[140vh]  px-4 py-6 sm:px-6 lg:px-12  flex justify-between items-start ">
          <div className="max-w-[90vh] font-light flex flex-col gap-5 justify-start items-start">
            <p className="text-xl text-white">
              Hi, I&apos;m Bob. I am fresh graduate from Singapore starting a
              career in software development. I have always been interested in
              the development of web applications and software so I dabbled
              myself in all aspects of them. I have experience working on UI/UX
              design, machine learning, front end development and back end
              engineering.I am specialised in frontend development, with
              proficiencies in multiple web app development framworks such as
              React, React Native and Flutter.
            </p>
            <p className="text-xl text-white">
              For my most recent working experience, I was working with a stack
              that was completely new for me. However, as a fast learning with
              the passion as drive to perform, I did not betray their trust as I
              was able to deliver a satisfactory solution and completed the
              development process ahead of time.
            </p>
            <p className="text-xl text-white">
              I am currently looking for junior level opportunites in the United
              Kingdom under the High Potential Individual (HPI) visa. *No visa
              sponsorship required* If you think I will be a good fit for the
              company, please feel free to contact me! I am looking forward to
              contributing to the success of your company.
            </p>
            <div className=" flex gap-3 md:gap-5 justify-start items-center">
              <h1 className="text-3xl font-medium tracking-tight text-purple-400">
                Find me on :
              </h1>
              <LogoLink
                path="M20 3H4a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 110-3.096 1.548 1.548 0 010 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"
                link="https://www.linkedin.com/in/bob-liang-76b2b81b4/"
              ></LogoLink>
              <LogoLink
                path="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 006.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 012.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0022 12c0-5.525-4.475-10-10-10z"
                link="https://github.com/bobl3l"
              ></LogoLink>
              <LogoLink
                path="M20 18h-2V9.25L12 13 6 9.25V18H4V6h1.2l6.8 4.25L18.8 6H20m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2z"
                link="mailto:liangshilinbob@gmail.com"
              ></LogoLink>
              <LogoLink
                path="M2.004 22l1.352-4.968A9.954 9.954 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.954 9.954 0 01-5.03-1.355L2.004 22zM8.391 7.308a.961.961 0 00-.371.1 1.293 1.293 0 00-.294.228c-.12.113-.188.211-.261.306A2.729 2.729 0 006.9 9.62c.002.49.13.967.33 1.413.409.902 1.082 1.857 1.971 2.742.214.213.423.427.648.626a9.448 9.448 0 003.84 2.046l.569.087c.185.01.37-.004.556-.013a1.99 1.99 0 00.833-.231 4.83 4.83 0 00.383-.22s.043-.028.125-.09c.135-.1.218-.171.33-.288.083-.086.155-.187.21-.302.078-.163.156-.474.188-.733.024-.198.017-.306.014-.373-.004-.107-.093-.218-.19-.265l-.582-.261s-.87-.379-1.401-.621a.498.498 0 00-.177-.041.482.482 0 00-.378.127v-.002c-.005 0-.072.057-.795.933a.35.35 0 01-.368.13 1.416 1.416 0 01-.191-.066c-.124-.052-.167-.072-.252-.109l-.005-.002a6.01 6.01 0 01-1.57-1c-.126-.11-.243-.23-.363-.346a6.296 6.296 0 01-1.02-1.268l-.059-.095a.923.923 0 01-.102-.205c-.038-.147.061-.265.061-.265s.243-.266.356-.41a4.38 4.38 0 00.263-.373c.118-.19.155-.385.093-.536-.28-.684-.57-1.365-.868-2.041-.059-.134-.234-.23-.393-.249-.054-.006-.108-.012-.162-.016a3.385 3.385 0 00-.403.004z"
                link="https://wa.me/+6588360121/"
              ></LogoLink>
            </div>
          </div>
          <div className="max-w-[48vh] flex flex-col gap-2 px-4 ">
            <div className="flex items-center gap-3 justify-start">
              <svg className="w-7 md:w-10 " fill="#a855f7" viewBox="0 0 24 24">
                <path d="M20.083 10.5l1.202.721a.5.5 0 010 .858L12 17.65l-9.285-5.571a.5.5 0 010-.858l1.202-.721L12 15.35l8.083-4.85zm0 4.7l1.202.721a.5.5 0 010 .858l-8.77 5.262a1 1 0 01-1.03 0l-8.77-5.262a.5.5 0 010-.858l1.202-.721L12 20.05l8.083-4.85zM12.514 1.309l8.771 5.262a.5.5 0 010 .858L12 13 2.715 7.429a.5.5 0 010-.858l8.77-5.262a1 1 0 011.03 0z" />
              </svg>
              <h3 className="font-bold text-2xl"> Experienced tech stack</h3>
            </div>
            <p className=" gap-3 flex flex-wrap justify-between">
              <span className="tag">JavaScript</span>
              <span className="tag">Typecript</span>
              <span className="tag">Next.js</span>
              <span className="tag">Node.js</span>
              <span className="tag">React Native</span>
              <span className="tag">React</span>
              <span className="tag">HTML</span>
              <span className="tag">CSS</span>
              <span className="tag">Tailwind</span>
              <span className="tag">Dart</span>
              <span className="tag">Flutter</span>
              <span className="tag">PHP</span>
              <span className="tag">Java</span>
              <span className="tag">Python</span>
              <span className="tag">Pytorch</span>
              <span className="tag">C++</span>
              <span className="tag">C#</span>
              <span className="tag">MySQL</span>
              <span className="tag">GraphQL</span>
              <span className="tag">SQLite</span>
              <span className="tag">Firebase</span>
            </p>
            <br></br>
            <div className="flex items-center gap-3 justify-start">
              <svg className="w-7 md:w-10  " fill="#a855f7" viewBox="0 0 24 24">
                <path d="M19.228 18.732l1.768-1.768 1.767 1.768a2.5 2.5 0 11-3.535 0zM8.878 1.08l11.314 11.313a1 1 0 010 1.415l-8.485 8.485a1 1 0 01-1.414 0l-8.485-8.485a1 1 0 010-1.415l7.778-7.778-2.122-2.121L8.88 1.08zM11 6.03L3.929 13.1H18.07L11 6.03z" />
              </svg>
              <h3 className="font-bold text-2xl"> Other design tools</h3>
            </div>
            <p className=" gap-3 flex flex-wrap justify-between">
              <span className="tag">Photoshop</span>
              <span className="tag">LightRoom</span>
              <span className="tag">Fresco</span>
              <span className="tag">After Effect</span>
              <span className="tag">Figma</span>
              <span className="tag">Canva</span>
            </p>
          </div>
        </div>
        {/*Experience panel */}
        <div
          ref={exp}
          className="mx-auto max-w-[140vh] pt-60 px-4 py-6 sm:px-6 lg:px-12  flex justify-start items-center"
        >
          <span className="px-3 text-purple-500 text-6xl font-black">
            Experience
          </span>
          <hr className="flex-grow border-t border-purple-500" />
        </div>
        <Experience
          company="AirCity Global Pte. Ltd. (startup)"
          duration="Jan - Jun 2023"
          title="Full Stack Software Developer"
          location="Ho Chi Minh City, Viet Nam"
          des={[
            "- Worked hand in hand with CEO to create a B2B contract allocating mobile application.",
            "- Completed the UI/UX design and front end development as the sole developer.",
            "- Co-operated with the tech team to integrate the company's existing server and database into the application.",
          ]}
        ></Experience>
        <Experience
          company="Nanyang Technology University (NTU)"
          duration="2020 - 2024"
          title="Bachelor of Information Engineering & Media"
          location="Singapore"
          des={[
            "Highlight:",
            "Overseas Entrepreneurship Programme (OEP):",
            " - As a part of the government's entrepreneurship special programme, I received scholarship to participate in an overseas apprenticeship programme. By working under a fast rising startup, I was able to learn about the business model and explore the market opportunities in tech in the region I was posted to.",
          ]}
        ></Experience>
        {/*Project panel */}
        <div
          ref={proj}
          className="mx-auto max-w-[140vh] pt-60 px-4 py-6 sm:px-6 lg:px-12  flex justify-start items-center"
        >
          <hr className="flex-grow border-t border-purple-500" />
          <span className="px-3 text-purple-500 text-6xl font-black">
            Projects
          </span>
        </div>
        <div className="flex-1 flex-col ">
          <Projects
            project="FEAT- fitness & health mobile application"
            stack="Dart - Flutter - Node.js - Firebase - Photoshop - Figma"
            gitlink="https://github.com/bobl3l/FEAT-FYP"
            des="As a final year project to consolidate my degree, This project aims to create a market standard software by replicating the commercial software development process. This application has the capabilities to authenticate users, keep track of their fitness data, personalised their health goals and settings, and provide fitness and dietary guide."
            img={feat.src}
          ></Projects>
          <Projects
            project="West Coast Collection - e-commerce website"
            stack="HTML - CSS - JavaScript - PHP - MySQL - Photoshop - Figma"
            gitlink="https://github.com/bobl3l/IE4717-web-design-project"
            des="This web design project aims to demonstrate my full stack web dev abilities by performing graphic design, UI/UX design and wireframing the website. Then develop the website with its own backend server and database."
            img={web.src}
          ></Projects>
          <Projects
            project="KungFood Panda - delivery mobile application"
            stack="Javascript - React Native - SQLite - After Effect - Photoshop"
            gitlink="https://github.com/bobl3l/DIP-mobile-app-project-foodpanda-"
            des="A large team collaborative project with the goal of replicating the popular food delivery mobile application 'FoodPanda'."
            img={kungfood.src}
          ></Projects>
          <Projects
            project="Unity flight simulator game"
            stack="Unity - C#"
            gitlink="https://github.com/bobl3l/flight-simulator-project"
            des="A unity game project that is scripted by C# with self generating map."
            img={flight.src}
          ></Projects>
        </div>
        {/*Certifications panel */}
        <div
          ref={cert}
          className="mx-auto max-w-[140vh] pt-60 px-4 py-6 sm:px-6 lg:px-12  flex justify-start items-center"
        >
          <span className="px-3 text-purple-500 text-6xl font-black">
            Certifications
          </span>
          <hr className="flex-grow border-t border-purple-500" />
        </div>
        <div className="mx-auto max-w-[140vh] px-4 py-6 sm:px-6 lg:px-12  flex-1 justify-start items-center">
          <div className="mx-auto max-w-[110vh] py-2 flex justify-between items-center">
            <span className="text-2xl">Cloud Computing Foundations</span>
            <span className="text-purple-400">Duke University</span>
          </div>
          <div className="mx-auto max-w-[110vh] py-2  flex justify-between items-center">
            <span className="text-2xl">
              Exploring and Preparing your Data with BigQuery
            </span>
            <span className="text-purple-400">Google Cloud Education</span>
          </div>
          <div className="mx-auto max-w-[110vh] py-2  flex justify-between items-center">
            <span className="text-2xl">Introduction to Big Data</span>
            <span className="text-purple-400">UC San Diego</span>
          </div>
          <div className="mx-auto max-w-[110vh] py-2  flex justify-between items-center">
            <span className="text-2xl">
              Python for Everybody Specialization
            </span>
            <span className="text-purple-400">University of Michigan</span>
          </div>
          <div className="mx-auto max-w-[110vh] py-2  flex justify-between items-center">
            <span className="text-2xl">
              Innovation: From Creativity to Entrepreneurship Specialization
            </span>
            <span className="text-purple-400">University of Illinois</span>
          </div>
        </div>
        <div className="mx-auto h-80"></div>
      </main>
    </div>
  );
}
