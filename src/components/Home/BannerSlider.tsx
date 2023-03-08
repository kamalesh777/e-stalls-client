import React, { useState } from 'react'
import { Autoplay, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'

const BannerSlider = (): JSX.Element => {
  // eslint-disable-next-line autofix/no-unused-vars, @typescript-eslint/no-unused-vars
  const [bannerImages, setBannerImages] = useState()
  return (
    <section className="offer-slider">
      <Swiper
        loop={true}
        navigation={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        style={{ '--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff' } as React.CSSProperties}
      >
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
}

export default BannerSlider
