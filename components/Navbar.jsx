import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { FaLinkedin, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai"
import Image from 'next/image';

export default function Navbar() {

    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)
    const handleOpen = () => {
        setNav(!nav)
    }
    useEffect(() => {
        const handleShadow =() =>{
            if (window.scrollY >= 90) {
                setShadow(true)
            }else{
                setShadow(false)
            }
        }
        window.addEventListener('scroll', handleShadow)
    },[])
    return (
        <div className={shadow ? 'w-full h-[80px] z-10 bg-zinc-100 fixed drop-shadow-lg' : 'w-full h-[80px] z-10 bg-zinc-100 fixed'}>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <Link href="/">
                <h1 className='cursor-pointer font-fancy'>Tracy.</h1>
                </Link>
                <div>
                    <ul className='hidden md:flex'>
                        <Link href="/">
                            <li className='ml-10 text-sm uppercase border-b-2 hover:border-purple-600'>Home</li>
                        </Link>
                        <Link href="/#about" smooth={true} duration={300}>
                            <li className='ml-10 text-sm uppercase hover:border-b-2 hover:border-purple-600'>About</li>
                        </Link>
                        <Link href="/#skills">
                            <li className='ml-10 text-sm uppercase hover:border-b-2 hover:border-purple-600'>Skills</li>
                        </Link>
                        <Link href="/#projects">
                            <li className='ml-10 text-sm uppercase hover:border-b-2 hover:border-purple-600'>Projects</li>
                        </Link>
                        
                        <Link href="/#contact">
                            <li className='ml-10 text-sm uppercase hover:border-b-2 hover:border-purple-600'>Contact</li>
                        </Link>
                    </ul>
                    <div onClick={handleOpen} className='md:hidden'>
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>
            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                <div className={nav ? 'md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <h1 className='cursor-pointer font-fancy'>Tracy.</h1>
                            <div onClick={handleOpen} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                                <AiOutlineClose size={25} />
                            </div>
                        </div>
                        <div className='border-b border-purple-600 my-4'>
                            <p className='w-[85%] md:w-[90%] py-4'>Lets build</p>
                        </div>
                    </div>
                    <div clasName="py-4 flex flex-col">
                        <ul className='uppercase'>
                            <Link href="/">
                                <li className="py-4 text-sm">
                                    Home
                                </li>
                            </Link>
                            <Link href="/">
                                <li className="py-4 text-sm">
                                    About
                                </li>
                            </Link>
                            <Link href="/">
                                <li className="py-4 text-sm">
                                    Skills
                                </li>
                            </Link>
                            <Link href="/">
                                <li className="py-4 text-sm">
                                    Projects
                                </li>
                            </Link>
                            <Link href="/">
                                <li className="py-4 text-sm">
                                    Contact
                                </li>
                            </Link>
                        </ul>
                        <div className="pt-40">
                            <p className="uppercase tracking-wide text-[#9333EA]">Get in touch with me</p>
                            <div className='flex items-center justify-between my-2 w-full sm:w-[80%]'>
                                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                    <FaLinkedinIn />
                                </div>
                                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                    <FaInstagram />
                                </div>
                                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                    <FaGithub />
                                </div>
                                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                    <AiOutlineMail />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* SOCIAL MEDIA ICONS */}
            <div className="hidden lg:flex  flex-col top-[300%] left-0">
                <ul>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-120px] hover:ml-[-0.2px] duration-300 bg-blue-600">
                        <a className="flex justify-between items-center w-full text-gray-300" href="https://www.linkedin.com/in/tracy-sarah-afram-owusu-165b6818a/" target="_blank" rel="noreferrer">
                            Linkedin <FaLinkedin size={30} className='mr-2' />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-120px] hover:ml-[-2px] duration-300 bg-[#333333]">
                        <a className="flex justify-between items-center w-full text-gray-300" href="https://github.com/tracy1-sarah" target="_blank" rel="noreferrer">
                            Github <FaGithub size={30} className='mr-2' />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-120px] hover:ml-[-2px] duration-300 bg-[#6fc2b0]">
                        <a className="flex justify-between items-center w-full text-gray-300" href="https://github.com/tracy1-sarah" target="_blank" rel="noreferrer">
                            Email <AiOutlineMail size={30} className='mr-2' />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-120px] hover:ml-[-2px] duration-300 bg-[#C13584]">
                        <a className="flex justify-between items-center w-full text-gray-300" href="https://www.instagram.com/_tracysarah/" target="_blank" rel="noreferrer">
                            Instagram <FaInstagram size={30} className='mr-2' />
                        </a>
                    </li>
                </ul>

            </div>
        </div>
    )
}
