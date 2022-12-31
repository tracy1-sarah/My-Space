import Image from 'next/image'
import React from 'react'
import Tracy from "../public/assets/TracyS.png"
import { FaCloudDownloadAlt } from "react-icons/fa";
// import resume from "../public/assets/file/resume.pdf"
import Link from 'next/link';


export default function About() {
    return (
        <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className="col-span-2">
                    <p className='text-4xl font-bold inline border-b-4 border-purple-600'>About Me</p>
                    <p className='py-4 text-gray-600'>A Front-end Developer with 3 years of experience in web applications and a demonstrated history of working with companies such as AmaliTech Services and TechLine Africa.
                        Proficient in HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, Next Js, React Js. Also a mobile app developer
                        using React Native.
                        Possesses good communication skills and a good team player.            
                    </p>
                    <p className='py-2 text-gray-600'> Skilled in networking, computing, and teaching.
                        Strong arts and design professional with a focus on building reusable codes and libraries and analysing customer requirements to create effective, high-end, and user-friendly web solutions.</p>
                </div>
                {/* <Link href={resume} download>
                    <button className="px-4 py-2 mt-4 flex items-center text-white border bg-purple-600  border-purple-600 rounded-md">
                        Download Resume
                        <FaCloudDownloadAlt className="ml-3" />
                    </button>
                </Link> */}

                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <Image src={Tracy} alt="tracy" className='rounded-xl'/>
                </div>
            </div>
        </div>
    )
}
