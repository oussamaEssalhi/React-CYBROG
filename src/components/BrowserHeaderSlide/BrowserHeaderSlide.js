import "./BrowserHeaderSlide.css"
import React from "react";
import CardSlideBrowser from "../CardSlideBrowser/CardSlideBrowser";
import BrowserDownloadGame from "../../Data/BrowserDownloadGame";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  const slide = BrowserDownloadGame.map((el) => {
    return <SwiperSlide key={el.id} ><CardSlideBrowser key={el.id} image={el.image} title={el.title} Rate={el.Rate} download={el.download} downloadTotal={el.downloadTotal} /></SwiperSlide>
  })


  return (

    <>

      <Swiper

        slidesPerView={3}
        spaceBetween={30}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 50 },
          480: { slidesPerView: 1, spaceBetween: 50 },
          768: { slidesPerView: 2, spaceBetween: 40 },
          1024: { slidesPerView: 3, spaceBetween: 40 },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slide}


      </Swiper >
    </>
  );
}
// breakpoints: {
//   768: {
//     slidesPerView: 4,
//         },