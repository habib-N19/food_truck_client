import Image, { StaticImageData } from 'next/image'
import React from 'react'

const SingleCard = ({image,title,info}:{image:StaticImageData,title:String,info:String}) => {
  return (
    <div className="relative overflow-hidden w-[350px] min-h-[360px] bg-red-200 px-5 ">

    <div className="z-40 relative flex w-full justify-center mt-6">
    <Image className="w-[100px]" src={image} alt="" /> 
    </div>
    <div className="text-center">
      <h2 className="text-xl my-4 font-bold text-red-500 drop-shadow-white">
     {title}
      </h2>
      <p className="text-md text-justify mb-4 font-medium">
    {   info}
      </p>
    </div>

  </div>
  )
}

export default SingleCard