import React from 'react'
import Image from 'next/image'
import blog from "../public/assets/projects/blog.PNG"
import { RiRadioButtonFill } from "react-icons/ri"
import Link from 'next/link'

function fairworkBlog() {
  return (
      <div className='w-full'>
          <div className="w-screen h-[40vh] lg:h-[50vh] relative">
              <div className="absolute top-0 left-0 w-full h-[40vh] lg:h-[50vh] bg-black/80 z-10" />
              <Image className="absolute z-1" layout="fill" objectFit="cover" src={blog} alt="" />
              <div className="absolute top-[60%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[50%] text-white z-10 p-2">
                  <h2 className="py-2">TheFairWork Blog</h2>
                  <h3 className="">Next Js /Node Js /PostgreSQL</h3>
              </div>
          </div>
          <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-20'>
              <div className='col-span-4'>
                  <h2>Overview</h2>
                  <p className="pt-2">The FairWork Blog is a sub-platform for the main Fairwork platform.
                  TheFairWork blog provides trendy and latest news in the tech industry. Talents who have signed up on the
                  platform are also provided with a dashboard to post blogs. However, posts only become available on the
                  platform when the adminstrator has reviewed the post and granted the permission for it to be available. 
                  </p>
                  <a href="https://freelance-blog.amalitech-dev.net/" target="_blank" rel='noreferrer'>
                  <button className='border-2 border-purple-600 px-4 py-3 my-2 mx-auto'>Demo</button>
                  </a>
              </div>
              <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                  <div className='p-2'>
                      <p className='text-center font-bold pb-2'>Technologies</p>
                      <div className="grid grid-cols-3 md:grid-cols-1">
                          <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Next Js</p>
                          <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Node Js</p>
                          <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> PostgreSQL</p>
                      </div>
                  </div>
              </div>
              <Link href='/#projects'>
                  <p className='underline cursor-pointer'>Back</p>
              </Link>
          </div>
      </div>
  )
}

export default fairworkBlog