import React from "react";
import truck from ".././../../app/Asset/truck.png";
import Image from "next/image";
const VendorCard = () => {
  return (
    <div className=" pb-5 border  w-[400px] rounded-lg   min-h-[500px]">
      <div className="p-5 w-full h-[290px] ">
        <img
          className="object-cover rounded-lg w-full h-full"
          src="https://img.freepik.com/free-vector/food-truck-background-design_1237-4.jpg?w=826&t=st=1709115868~exp=1709116468~hmac=35b38426c6cda54956d9218c973c21dc005081e4643fe3fa5b505f8116776600"
          alt=""
        />
      </div>
      <div className="">
        <p className="m-0 p-0  text-center text-red-400 text-2xl font-bold">
          Vendor Name
        </p>
        <div className="flex justify-center pt-2">
          <Image className="w-[55px]" src={truck} alt="" />
        </div>
        <div>
          <p className="text-center mx-5 pt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            doloremque, perspiciatis fugit maiores cumque asdasdsa dasd as das
            as dsdadasdasdasd
          </p>

          <div className="pt-3 mx-10 justify-center flex gap-4">
            <div className="w-[90px] flex justify-center items-center font-semibold text-white shadow-md rounded-3xl h-[40px]  bg-red-400">
              <p>Pizza</p>
            </div>
            <div className="w-[90px] flex justify-center items-center font-semibold text-white shadow-md rounded-3xl h-[40px]  bg-red-400">
              <p>Pizza</p>
            </div>
            <div className="w-[90px] flex justify-center items-center font-semibold text-white shadow-md rounded-3xl h-[40px]  bg-red-400">
              <p>Pizza</p>
            </div>
          </div>

          <div className="mx-5 mt-5">
            <button className="w-full hover:bg-red-500 duration-500 text-white rounded-md  py-2 bg-red-400 ">
              See More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorCard;
