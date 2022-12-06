import Image from 'next/image'
import React from 'react'
import contact from "../public/assets/contact.jpg"
import { FaLinkedin, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Link from 'next/link';
import { HiOutlineChevronDoubleUp } from "react-icons/hi"


export default function Contact() {
    return (
        <div id="contact" className='w-full'>
            <div className="max-w-[1240px] m-auto px-2 py-24 w-full ">
                <p className='text-4xl font-bold inline border-b-4 border-purple-600'>Get in touch</p>
                <div className="pt-8 grid lg:grid-cols-5 gap-8 ">
                    {/* <div className="col-span-3 lg:col-span-2 w-full h-full shadow-md shadow-purpler-600 rounded-md p-4">
                        <div className='lg:p-4 h-full'>
                            <div>
                                <Image className='rounded-md hover:scale-105 ease-in duration-300' src={contact} alt="contact" />
                            </div>
                            <div>
                                <h2 className='py-2'>Tracy Sarah Afram-Owusu</h2>
                                <p>Front-End Developer</p>
                                <p>Available for freelance positions. Hit me up and let us talk!</p>
                            </div> */}
                            {/* LEFT SIDE */}
                            {/* <div>
                                <p className='py-4'>Connect with me</p>
                                <div className='flex items-center justify-between py-4'>
                                    <div className='rounded-full shadow-sm shadow-purple-600 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                        <FaGithub />

                                    </div>
                                    <div className='rounded-full shadow-sm shadow-purple-600 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                        <FaLinkedinIn />

                                    </div>
                                    <div className='rounded-full shadow-sm shadow-purple-600 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                        <FaInstagram />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* RIGHT */}
                    <div className='col-span-3  w-full h-auto shadow-sm shadow-gray-300 rounded-xl lg:p-4'>
                        <div className='p-4'>
                            <form action='https://getform.io/f/f2e84308-1625-4c76-a34e-d6b30cf77d56' method='POST'>
                                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                    <div className="flex flex-col">
                                        <label className='text-sm uppercase py-2'>Name</label>
                                        <input className='border-2 rounded-lg  p-3 flex border-gray-300' required type="text" />

                                    </div>
                                    <div className="flex flex-col">
                                        <label className='text-sm uppercase py-2'>Phone number</label>
                                        <input className='border-2 rounded-lg  p-3 flex border-gray-300' required type="text" />
                                    </div>
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className='text-sm uppercase py-2'>Email</label>
                                    <input className='border-2 rounded-lg  p-3 flex border-gray-300' required type="email" />
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className='text-sm uppercase py-2'>Subject</label>
                                    <input className='border-2 rounded-lg  p-3 flex border-gray-300' required type="text" />
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className='text-sm uppercase py-2'>Message</label>
                                    <textarea className="border-2 rounded-lg p-3 border-gray-300" rows='10' required></textarea>
                                </div>
                               <button className=' border-2 border-purple-600 px-4 py-3 my-2 mx-auto flex items-center'>Send Message</button>
                            </form>
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
        </div>


        //   <div className='w-full lg:h-screen flex justify-center items-center p-4 '>             
        //       <form action='https://getform.io/f/f2e84308-1625-4c76-a34e-d6b30cf77d56' method='POST' className='flex flex-col max-w-[600px] w-full'>
        //           <div className='pb-8'>
        //               <p className='text-4xl font-bold inline border-b-4 border-purple-600'>Get in touch</p>
        //           </div>
        //           <input className='p-2 bg-gray-300 rounded-lg' type="text" placeholder='Name' name='name' required />
        //           <input className='my-4 p-2 bg-gray-300 rounded-lg' type="email" placeholder='Email' name='email' required />
        //           <textarea className='bg-gray-300 p-2 rounded-lg' name='message' placeholder='Message' rows="10" required></textarea>
        //           <button className=' border-2 border-purple-600 px-4 py-3 my-8 mx-auto flex items-center'>Send Message</button>
        //       </form>
        //   </div>
    )
}
