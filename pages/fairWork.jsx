import React from 'react'
import Image from 'next/image'
import movieImg from "../public/assets/projects/fairwork.PNG"
import { RiRadioButtonFill } from "react-icons/ri"
import Link from 'next/link'

function fairWork() {
  return (
      <div className='w-full'>
          <div className="w-screen h-[50vh] lg:h-[50vh] relative">
              <div className="absolute top-0 left-0 w-full h-[50vh] lg:h-[50vh] bg-black/80 z-10" />
              <Image className="absolute z-1" layout="fill" objectFit="cover" src={movieImg} alt="" />
              <div className="absolute top-[60%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[50%] text-white z-10 p-2">
                  <h2 className="py-2">TheFairWork</h2>
                  <h3 className="">React Js /Node Js /PostgreSQL</h3>
              </div>
          </div>
          <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-20'>
              <div className='col-span-4'>
                  <h2>Overview</h2>
                  <p className="pt-2">TheFairWork is freelance platform that seeks to connect international clients
                      with african talents to work on their short and long term projects remotely.Without the expense, effort,
                      or administrative hassle, you can instantly hire pre-vetted talent from Africa.
                   As a client, you have the opportunity to work with young, motivated talent at highly affordable rates.
                   Sign up today as a client or freelancer on TheFairWork.
                  </p>
                  <a href="https://www.thefairwork.com/" target="_blank" rel='noreferrer'>
                  <button className='border-2 border-purple-600 px-4 py-3 my-2 mx-auto'>Demo</button>
                  </a>
              </div>
              <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                  <div className='p-2'>
                      <p className='text-center font-bold pb-2'>Technologies</p>
                      <div className="grid grid-cols-3 md:grid-cols-1">
                          <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> React Js</p>
                          <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> CSS 3</p>
                          <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> MaterialUI</p>
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

export default fairWork