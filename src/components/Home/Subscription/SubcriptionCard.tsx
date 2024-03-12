import Link from 'next/link'
import React from 'react'
import { FaCheck } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'

const SubcriptionCard = () => {
  return (
    <div className="flex mb-4 pb-[50px] pt-[55px]">
    <div className=" shadow-lg w-[400px] mx-auto h-[700px] relative border">
      <div
        style={{
          clipPath:
            "polygon(100% 0, 100% 56%, 49% 76%, 0 56%, 0 0)",
        }}
        className="mx-auto mt-[-40px]  w-[300px] h-[180px] bg-red-600 text-white pt-3 text-center text-3xl"
      >
        <p className=" font-bold">Plan 1</p>
        <p className="text-5xl mt-2">
          <span className="text-3xl">$</span>39.
          <span className="text-2xl">99</span>
        </p>
      </div>
      <div className="mx-5  mt-[-10px]">
        <p className="text-center text-xl font-semibold text-red-600">
          Loremasd ipsum dolor sit amet consectetur.
          adipasdasdisicing elit. Expedita dolores totam
          perspiciatis.
        </p>
        <ul className="mx-10 mt-5 ">
          <li className="flex mt-3  items-center gap-3 mb-3">
            <span className="text-2xl text-green-600">
              <FaCheck />
            </span>
            <span className="text-xl"> Acasd asdas dsadas</span>
          </li>
          <hr />
          <li className="flex mt-3  items-center gap-3 mb-3">
            <span className="text-2xl text-green-600">
              <FaCheck />
            </span>
            <span className="text-xl"> Acasd asdas dsadas</span>
          </li>
          <hr />
          <li className="flex mt-3  items-center gap-3 mb-3">
            <span className="text-2xl text-green-600">
              <FaCheck />
            </span>
            <span className="text-xl"> Acasd asdas dsadas</span>
          </li>
          <hr />
          <li className="flex mt-3  items-center gap-3 mb-3">
            <span className="text-2xl text-green-600">
              <FaCheck />
            </span>
            <span className="text-xl"> Acasd asdas dsadas</span>
          </li>
          <hr />
          <li className="flex mt-3  items-center gap-3 mb-3">
            <span className="text-2xl text-green-600">
              <FaCheck />
            </span>
            <span className="text-xl"> Acasd asdas dsadas</span>
          </li>
          <hr />
          <li className="flex mt-3  items-center gap-3 mb-3">
            <span className="text-2xl text-green-600">
              <FaCheck />
            </span>
            <span className="text-xl"> Acasd asdas dsadas</span>
          </li>
          <hr />
          <li className="flex mt-3  items-center gap-3 mb-3">
            <span className="text-2xl text-red-600">
              <FaXmark />
            </span>
            <span className="text-xl"> Acasd asdas dsadas</span>
          </li>
          <hr />
          <li className="flex mt-3  items-center gap-3 mb-3">
            <span className="text-2xl text-red-600">
              <FaXmark />
            </span>
            <span className="text-xl"> Acasd asdas dsadas</span>
          </li>
          <hr />
        </ul>
      </div>
      <Link href={'/CheckOutPage?price=100'} className=" justify-center items-center flex absolute left-[50%] translate-x-[-50%] bottom-[-35px] w-[300px] h-[70px] bg-red-600 ">
        <span className=" hover: text-white text-2xl font-bold">
          CHOOSE
        </span>
      </Link>
    </div>
    </div>
  )
}

export default SubcriptionCard