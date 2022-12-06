import Image from 'next/image'
import React from 'react'

function SkillCard({ image, title, description }) {
    return (
        <div className="shadow-md rounded-xl shadow-[#957bcb] hover:scale-110 ease-in duration-300">
            <div className="w-20 mx-auto pt-2" >
            <Image src={image} alt={description} />
            </div>
            <p className="my-4">{title}</p>
        </div>
    )
}

export default SkillCard

