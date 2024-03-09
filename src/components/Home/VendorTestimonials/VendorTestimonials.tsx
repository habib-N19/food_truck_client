"use client";
import React, { useState } from "react";
import ReactPlayer from "react-player/lazy";

import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Star } from "@smastrom/react-rating";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css/pagination";
import "swiper/css";
import ButtonSlide from "./ButtonSlide";
import { Autoplay } from "swiper/modules";

const VendorTestimonials = () => {
  const myStyles = {
    itemShapes: Star,
    activeFillColor: "#E24B3F",
    inactiveFillColor: "#EA8E87",
  };

  const swiper = useSwiper();

  return (
    <div className=" relative rounded-xl px-5 pt-10 w-full border border-red-500 ">
      <Swiper
       loop={true}
         modules={[Autoplay]}
         autoplay={{
            delay: 2500,

          }}
      >
        <SwiperSlide>
          <div className="w-full flex-shrink-0 rounded-xl pb-10">
            <h2 className="text-4xl text-red-500 font-bold text-center mb-6">
              Vendor Testimonials
            </h2>
            <div className="flex justify-around items-center md:flex-row flex-col gap-5">
              <div
                className="max-w-[500px] max-h-[350px] "
                style={{ borderRadius: "10px", overflow: "hidden" }}
              >
                <ReactPlayer
                  style={{
                    maxWidth: "500px",
                    maxHeight: "350px",
                  }}
                  controls={true}
                  url="https://youtu.be/Cc70VsAS-S8?si=Q7IoWDZRheNx8fQ_"
                />
              </div>
              <div className="flex flex-col gap-3 items-center">
                <Rating
                  itemStyles={myStyles}
                  style={{ maxWidth: 250 }}
                  readOnly
                  value={2.5}
                  halfFillMode="svg"
                />
                <div className="w-[150px] h-[150px] border rounded-full">
                  <img
                    className="w-full  rounded-full h-full object-cover"
                    src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100216.jpg?t=st=1709178444~exp=1709182044~hmac=ee5e0ec2688fb17e1f64b4fcf196eac4c9061212f00d1587e7560ff24576a946&w=826"
                    alt=""
                  />
                </div>
                <h1 className="text-4xl font-bold text-red-500">
                  {"Jane Cooper"}
                </h1>
                <p className="text-lg font-medium">
                  Owner: {"FoodieDelight Truck"}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full flex-shrink-0 rounded-xl ">
            <h2 className="text-4xl text-red-500 font-bold text-center mb-6">
              Vendor Testimonials
            </h2>
            <div className="flex justify-around items-center md:flex-row flex-col gap-5">
              <div
                className="max-w-[500px] max-h-[350px] "
                style={{ borderRadius: "10px", overflow: "hidden" }}
              >
                <ReactPlayer
                  style={{
                    maxWidth: "500px",
                    maxHeight: "350px",
                  }}
                  controls={true}
                  url="https://youtu.be/Cc70VsAS-S8?si=Q7IoWDZRheNx8fQ_"
                />
              </div>
              <div className="flex flex-col gap-3 items-center">
                <Rating
                  itemStyles={myStyles}
                  style={{ maxWidth: 250 }}
                  readOnly
                  value={2.5}
                  halfFillMode="svg"
                />
                <div className="w-[150px] h-[150px] border rounded-full">
                  <img
                    className="w-full  rounded-full h-full object-cover"
                    src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100216.jpg?t=st=1709178444~exp=1709182044~hmac=ee5e0ec2688fb17e1f64b4fcf196eac4c9061212f00d1587e7560ff24576a946&w=826"
                    alt=""
                  />
                </div>
                <h1 className="text-4xl font-bold text-red-500">
                  {"Jane Cooper"}
                </h1>
                <p className="text-lg font-medium">
                  Owner: {"FoodieDelight Truck"}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full flex-shrink-0 rounded-xl ">
            <h2 className="text-4xl text-red-500 font-bold text-center mb-6">
              Vendor Testimonials
            </h2>
            <div className="flex justify-around items-center md:flex-row flex-col gap-5">
              <div
                className="max-w-[500px] max-h-[350px] "
                style={{ borderRadius: "10px", overflow: "hidden" }}
              >
                <ReactPlayer
                  style={{
                    maxWidth: "500px",
                    maxHeight: "350px",
                  }}
                  controls={true}
                  url="https://youtu.be/Cc70VsAS-S8?si=Q7IoWDZRheNx8fQ_"
                />
              </div>
              <div className="flex flex-col gap-3 items-center">
                <Rating
                  itemStyles={myStyles}
                  style={{ maxWidth: 250 }}
                  readOnly
                  value={2.5}
                  halfFillMode="svg"
                />
                <div className="w-[150px] h-[150px] border rounded-full">
                  <img
                    className="w-full  rounded-full h-full object-cover"
                    src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100216.jpg?t=st=1709178444~exp=1709182044~hmac=ee5e0ec2688fb17e1f64b4fcf196eac4c9061212f00d1587e7560ff24576a946&w=826"
                    alt=""
                  />
                </div>
                <h1 className="text-4xl font-bold text-red-500">
                  {"Jane Cooper"}
                </h1>
                <p className="text-lg font-medium">
                  Owner: {"FoodieDelight Truck"}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full flex-shrink-0 rounded-xl ">
            <h2 className="text-4xl text-red-500 font-bold text-center mb-6">
              Vendor Testimonials
            </h2>
            <div className="flex justify-around items-center md:flex-row flex-col gap-5">
              <div
                className="max-w-[500px] max-h-[350px] "
                style={{ borderRadius: "10px", overflow: "hidden" }}
              >
                <ReactPlayer
                  style={{
                    maxWidth: "500px",
                    maxHeight: "350px",
                  }}
                  controls={true}
                  url="https://youtu.be/Cc70VsAS-S8?si=Q7IoWDZRheNx8fQ_"
                />
              </div>
              <div className="flex flex-col gap-3 items-center">
                <Rating
                  itemStyles={myStyles}
                  style={{ maxWidth: 250 }}
                  readOnly
                  value={2.5}
                  halfFillMode="svg"
                />
                <div className="w-[150px] h-[150px] border rounded-full">
                  <img
                    className="w-full  rounded-full h-full object-cover"
                    src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100216.jpg?t=st=1709178444~exp=1709182044~hmac=ee5e0ec2688fb17e1f64b4fcf196eac4c9061212f00d1587e7560ff24576a946&w=826"
                    alt=""
                  />
                </div>
                <h1 className="text-4xl font-bold text-red-500">
                  {"Jane Cooper"}
                </h1>
                <p className="text-lg font-medium">
                  Owner: {"FoodieDelight Truck"}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full flex-shrink-0 rounded-xl ">
            <h2 className="text-4xl text-red-500 font-bold text-center mb-6">
              Vendor Testimonials
            </h2>
            <div className="flex justify-around items-center md:flex-row flex-col gap-5">
              <div
                className="max-w-[500px] max-h-[350px] "
                style={{ borderRadius: "10px", overflow: "hidden" }}
              >
                <ReactPlayer
                  style={{
                    maxWidth: "500px",
                    maxHeight: "350px",
                  }}
                  controls={true}
                  url="https://youtu.be/Cc70VsAS-S8?si=Q7IoWDZRheNx8fQ_"
                />
              </div>
              <div className="flex flex-col gap-3 items-center">
                <Rating
                  itemStyles={myStyles}
                  style={{ maxWidth: 250 }}
                  readOnly
                  value={2.5}
                  halfFillMode="svg"
                />
                <div className="w-[150px] h-[150px] border rounded-full">
                  <img
                    className="w-full  rounded-full h-full object-cover"
                    src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100216.jpg?t=st=1709178444~exp=1709182044~hmac=ee5e0ec2688fb17e1f64b4fcf196eac4c9061212f00d1587e7560ff24576a946&w=826"
                    alt=""
                  />
                </div>
                <h1 className="text-4xl font-bold text-red-500">
                  {"Jane Cooper"}
                </h1>
                <p className="text-lg font-medium">
                  Owner: {"FoodieDelight Truck"}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full flex-shrink-0 rounded-xl ">
            <h2 className="text-4xl text-red-500 font-bold text-center mb-6">
              Vendor Testimonials
            </h2>
            <div className="flex justify-around items-center md:flex-row flex-col gap-5">
              <div
                className="max-w-[500px] max-h-[350px] "
                style={{ borderRadius: "10px", overflow: "hidden" }}
              >
                <ReactPlayer
                  style={{
                    maxWidth: "500px",
                    maxHeight: "350px",
                  }}
                  controls={true}
                  url="https://youtu.be/Cc70VsAS-S8?si=Q7IoWDZRheNx8fQ_"
                />
              </div>
              <div className="flex flex-col gap-3 items-center">
                <Rating
                  itemStyles={myStyles}
                  style={{ maxWidth: 250 }}
                  readOnly
                  value={2.5}
                  halfFillMode="svg"
                />
                <div className="w-[150px] h-[150px] border rounded-full">
                  <img
                    className="w-full  rounded-full h-full object-cover"
                    src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100216.jpg?t=st=1709178444~exp=1709182044~hmac=ee5e0ec2688fb17e1f64b4fcf196eac4c9061212f00d1587e7560ff24576a946&w=826"
                    alt=""
                  />
                </div>
                <h1 className="text-4xl font-bold text-red-500">
                  {"Jane Cooper"}
                </h1>
                <p className="text-lg font-medium">
                  Owner: {"FoodieDelight Truck"}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <div className="mt-10 absolute translate-x-[-10px] right-[10px] z-50 bottom-2">
          <ButtonSlide></ButtonSlide>
        </div>
      </Swiper>
    </div>
  );
};

export default VendorTestimonials;
