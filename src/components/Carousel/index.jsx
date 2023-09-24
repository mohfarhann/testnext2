"use client"
import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import Banner1 from "../../assets/img/Carousel/1.jpg"
import Banner2 from "../../assets/img/Carousel/2.jpg"
import Banner3 from "../../assets/img/Carousel/3.jpg"
import Banner4 from "../../assets/img/Carousel/4.jpg"

import Image from "next/image"

const Carousel = () => {
  const splideOptions = {
    type: 'loop', // Untuk efek loop
    perPage: 1,   // Jumlah slide yang ditampilkan pada satu waktu
    autoplay: true,
    interval: 3000, // Waktu autoplay dalam milidetik (misalnya 3000ms = 3 detik)
    arrows: false, // Untuk menyembunyikan tombol panah
    pagination: false
  };

  return (
    <Splide options={splideOptions}>
      <SplideSlide>
        <Image src={Banner1} alt="Slide 1 " className='object-cover w-full'/>
      </SplideSlide>
      <SplideSlide>
        <Image src={Banner2} alt="Slide 2" className='object-cover w-full'/>
      </SplideSlide>
      <SplideSlide>
        <Image src={Banner3} alt="Slide 3" className='object-cover w-full'/>
      </SplideSlide>
      <SplideSlide>
        <Image src={Banner4} alt="Slide 3" className='object-cover w-full'/>
      </SplideSlide>
    </Splide>
  );
};

export default Carousel;
