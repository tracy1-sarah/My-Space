import React from 'react'
import SkillCard from './cards/SkillCard'
import html from "../public/assets/skills/html.png";
import javascript from "../public/assets/skills/javascript.png";
import css from "../public/assets/skills/css.png";
import react from "../public/assets/skills/react.png";
import tailwind from "../public/assets/skills/tailwind.png";
import firebase from "../public/assets/skills/firebase.png";
import github from "../public/assets/skills/git.png";
import next from "../public/assets/skills/next.png"
import jira from "../public/assets/skills/jira.png"
import code from "../public/assets/skills/vscode.png"



export default function Skills() {
  return (
      <div id="skills" className='w-full md:h-screen lg:h-screen'>
          <div className='max-w-[1240px] m-auto flex flex-col justify-center w-full px-2 py-24'>
              <div>
              <p className="text-4xl font-bold inline border-b-4 border-purple-600">Tech Stacks</p>
                  <p className="py-4">Technologies and Tools</p>
              </div>
              <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8" >
                  <SkillCard
                      image={html}
                      alt={"html image"}
                      title={"HTML"}
                  />
                  <SkillCard
                      image={javascript}
                      alt={"javascript image"}
                      title={"JavaScript"}
                  />
                  <SkillCard
                      image={css}
                      alt={"css image"}
                      title={"CSS"}
                  />
                  <SkillCard
                      image={react}
                      alt={"react image"}
                      title={"React.js"}
                  />
                  <SkillCard
                      image={tailwind}
                      alt={"tailwind image"}
                      title={"Tailwind CSS"}
                  />
                  <SkillCard
                      image={firebase}
                      alt={"firebase image"}
                      title={"Firebase"}
                  />
                  <SkillCard
                      image={github}
                      alt={"github image"}
                      title={"Github"}
                  />
                  <SkillCard
                      image={next}
                      alt={"next image"}
                      title={"Next Js"}
                  />
                  <SkillCard
                      image={react}
                      alt={"native image"}
                      title={"React Native"}
                  />
                  <SkillCard
                      image={jira}
                      alt={"jira image"}
                      title={"Jira"}
                  />
                  <SkillCard
                      image={code}
                      alt={"jira image"}
                      title={"Visual Studio Code"}
                  />
              </div>
      </div>
      </div>
  )
}
