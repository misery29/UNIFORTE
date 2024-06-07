import { Swiper, SwiperSlide } from 'swiper/react';


export function Swipers () {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><h2>sadasdasd</h2></SwiperSlide>
      <SwiperSlide><h2>adsdasda</h2></SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
};