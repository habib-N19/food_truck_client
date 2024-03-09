'use client'
import { useSwiper } from 'swiper/react';

const ButtonSlide = () => {
    const swiper = useSwiper();
  return (
    <div className='text-white  font-bold flex gap-3'>   <button className='w-[40px] active:scale-[.8] duration-500 bg-red-500 h-[40px] rounded-full' onClick={() => swiper.slidePrev()}>{'<'}</button>
        <button className='w-[40px] active:scale-[.8] duration-500 bg-red-500 h-[40px] rounded-full' onClick={() => swiper.slideNext()}>{'>'}</button></div>
  )
}

export default ButtonSlide