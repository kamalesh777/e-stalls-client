import React from 'react'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'

const BannerSlider = (): JSX.Element => (
  <section className="offer-slider">
    <Swiper navigation={true} modules={[Navigation]}>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
      </SwiperSlide>
    </Swiper>
  </section>
)

export default BannerSlider
