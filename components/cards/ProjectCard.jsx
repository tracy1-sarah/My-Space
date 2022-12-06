import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ProjectCard({image, title, description, demoLink}) {
  return (
      <div className="relative flex items-center justify-center h-auto w-full shadow-sm shadow-purple-600 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#C9ABF0]">
          <Image className='rounded-xl group-hover:opacity-10' src={image} alt="image" />
          <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
              <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
              <p className='pb-4 pt-2 text-white text-center'>{description}</p>
              <Link href={demoLink}>
                  <p className='text-center py-2 rounded-lg bg-white text-gray-600 font-bold text-lg cursor-pointer'>Demo</p>
              </Link>
          </div>
      </div>  )
}
