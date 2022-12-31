import React from 'react'
import movie from "../public/assets/projects/movie.PNG"
import ProjectCard from './cards/ProjectCard'
import  fairwork from "../public/assets/projects/fairwork.PNG"

export default function Projects() {
  return (
    <div id="projects" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto flex flex-col justify-center w-full px-2 py-24 ">
        <div>
        <p className="text-4xl font-bold inline border-b-4 border-purple-600">Projects</p>
          </div>
        <div className="grid pt-8 md:grid-cols-2 gap-8">
          <ProjectCard
            image={movie}
            title="MoviePop"
            description="ReactJs, Firebase and Tailwind Css"
            demoLink='/moviePop'
          />
          <ProjectCard
            image={fairwork}
            title="TheFairWork"
            description="ReactJs, NodeJs, PostgreSQL"
            demoLink='/fairWork'
          />
        </div>
      </div>
    </div>
  )
}
