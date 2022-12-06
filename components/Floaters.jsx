import Image from 'next/image'
import React from 'react'

function Floaters({ image, text1, text2 }) {
    return (
        <div className='px-8 py-4 justify-around flex bg-white rounded-xl items-center h-16'>
            <Image src={image} alt='' width='100px' height='50px' />
            <span>{text1} <br />{text2}</span>
        </div>
    )
}

export default Floaters