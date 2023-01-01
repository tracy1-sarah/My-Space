import React from 'react'
import Floaters from './Floaters'
import { crown } from '../public/assets/crown.png'
import { motion } from "framer-motion";
import glasses from "../public/assets/glasses.png"
import humble from "../public/assets/humble.png"

import Image from 'next/image'


export default function Main() {
    const transition = { duration: 2, type: "spring" }
    return (
        <div id="home" className='w-full h-screen text-center'>
            <div className="max-w-[1240px] w-full h-full m-auto p-2 flex justify-center items-center">
                <div className="hidden md:flex flex-col relative">
                    <motion.div
                        initial={{ top: "25rem", left: "10rem" }}
                        whileInView={{ left: "6rem" }}
                        transition={transition}>
                        <Image alt="emoji" src={glasses} width="150px" height="150px" />
                    </motion.div>
                </div>
                <div>
                    <h1 className="py-4 text-gray-700">Heyaa! I am <span className="text-[#9333EA]">Tracy Sarah Afram-Owusu</span></h1>
                    <h1 className="py-2 text-gray-700">A Front-End Developer</h1>
                    <p className="py-4 text-gray-600 max-w-[70%] mx-auto">
                        Specialized in building responsive front-end applications whiles focusing on analysing customer requirements to create effective,
                        high-end, and user-friendly web solutions.
                    </p>
                </div>
                <div className=" hidden md:flex flex-col relative">
                        <motion.div
                            initial={{ left: "-40%" }}
                            whileInView={{ left: "-14%" }}
                            transition={transition}
                        >
                        <Image alt="emoji" src={humble} width="150px" height="150px" />
                        </motion.div>
                </div>
                <div className="blur hidden"></div>
            </div>
        </div>
    )
}