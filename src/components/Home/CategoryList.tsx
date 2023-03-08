import React from 'react'
import { BiChevronRight } from 'react-icons/bi'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

const categories = {
  label: 'Browse Category',
  buttonText: 'View All',
  data: [
    {
      _id: 'key0',
      title: 'Fashion',
      image: '/assets/images/categories/01.png',
    },
    {
      _id: 'key10',
      title: 'Watches',
      image: '/assets/images/categories/02.png',
    },
    {
      _id: 'key110',
      title: 'Bags',
      image: '/assets/images/categories/03.png',
    },
    {
      _id: 'key1110',
      title: 'Electronics',
      image: '/assets/images/categories/04.png',
    },
    {
      _id: 'key11110',
      title: 'Headphone',
      image: '/assets/images/categories/05.png',
    },
    {
      _id: 'key111110',
      title: 'Chair',
      image: '/assets/images/categories/06.png',
    },
    {
      _id: 'key1111110',
      title: 'Jewellery',
      image: '/assets/images/categories/07.png',
    },
    {
      _id: 'key111111110',
      title: 'Sports',
      image: '/assets/images/categories/08.png',
    },
    {
      _id: 'key1111110',
      title: 'Vegetables',
      image: '/assets/images/categories/09.png',
    },
  ],
}

const CategoryList = (): JSX.Element => (
  <section className="product-list">
    <div className="container">
      <div className="d-flex align-items-center mb-4">
        <h5 className="text-uppercase mb-0">{categories.label}</h5>
        <a href="shop-categories.html" className="btn btn-light ms-auto rounded-0">
          {categories.buttonText}
          <BiChevronRight />
        </a>
      </div>
      <Swiper
        className="product-grid"
        slidesPerView={7}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        spaceBetween={15}
      >
        {categories?.data?.map(obj => (
          <SwiperSlide key={obj._id}>
            <div className="item">
              <div className="card rounded-0 product-card border">
                <div className="card-body text-center">
                  <img src={obj.image} className="img-fluid w-75 mx-auto" alt="..." />
                </div>
                <div className="card-footer border-0 text-center">
                  <h6 className="mb-1 text-uppercase">{obj.title}</h6>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
)

export default CategoryList
