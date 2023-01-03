import Image from 'next/image'
import React from 'react'
import contact from "../public/assets/contact.jpg"
import { FaLinkedin, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Link from 'next/link';
import { HiOutlineChevronDoubleUp } from "react-icons/hi"


export default function Contact() {
    return (
        <div id="contact" className='w-full  md:h-screen lg:h-screen'>
            <div className="max-w-[700px] m-auto px-2 py-20  w-full ">
                <p className='text-4xl font-bold inline border-b-4 border-purple-600'>Get in touch</p>
                <div className="pt-8 grid md:grid-cols-2 gap-8"> 
                    {/* RIGHT */}
                    <div className='col-span-3 w-full h-auto shadow-sm shadow-gray-300 rounded-xl lg:p-4'>
                        <div className='p-4'>
                            <form action='https://getform.io/f/f2e84308-1625-4c76-a34e-d6b30cf77d56' method='POST'>
                                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                    <div className="flex flex-col">
                                        <label className='text-sm uppercase py-2'>Name</label>
                                        <input className='border-2 rounded-lg  p-3 flex border-purple-100' name="name" required type="text" />

                                    </div>
                                    <div className="flex flex-col">
                                        <label className='text-sm uppercase py-2'>Phone number</label>
                                        <input className='border-2 rounded-lg  p-3 flex border-purple-100' name="number" required type="text" />
                                    </div>
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className='text-sm uppercase py-2'>Email</label>
                                    <input className='border-2 rounded-lg  p-3 flex border-purple-100' name="email" required type="email" />
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className='text-sm uppercase py-2'>Subject</label>
                                    <input className='border-2 rounded-lg  p-3 flex border-purple-100' required type="text" />
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className='text-sm uppercase py-2'>Message</label>
                                    <textarea className="border-2 rounded-lg p-3 border-purple-100" rows='10' required></textarea>
                                </div>
                               <button className='border-2 border-purple-600 px-4 py-3 my-2 mx-auto flex items-center'>Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
                <div className='flex justify-center py-12'>
                    <Link href="/">
                        <div className="rounded-full shadow-lg shadow-purple-600 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <HiOutlineChevronDoubleUp size={30} className="m-auto text-[#9333EA]"/>
                            </div>
                    </Link>
                </div>
        </div>
    )
}
