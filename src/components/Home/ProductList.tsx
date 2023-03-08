import React, { useState } from 'react'
import { BiCartAdd, BiChevronRight, BiHeart, BiZoomIn } from 'react-icons/bi'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import QuickViewModal from '@/common/QuickViewModal'

const dataArr = [
  {
    label: 'Featured Products',
    buttonText: 'View All',
    data: [
      {
        _id: 'key0',
        title: 'Shirt',
        image: '/assets/images/products/01.png',
        category: 'Fashion',
        price: '$499',
        brand_name: 'POLO',
      },
      {
        _id: 'key10',
        title: 'Watches',
        image: '/assets/images/products/02.png',
        category: 'Fashion',
        price: '$499',
        brand_name: 'POLO',
      },
      {
        _id: 'key110',
        title: 'Bags',
        image: '/assets/images/products/03.png',
        category: 'Fashion',
        price: '$499',
        brand_name: 'POLO',
      },
      {
        _id: 'key1110',
        title: 'Electronics',
        image: '/assets/images/products/04.png',
        category: 'Fashion',
        price: '$499',
        brand_name: 'POLO',
      },
      {
        _id: 'key11110',
        title: 'Headphone',
        image: '/assets/images/products/05.png',
        category: 'Fashion',
        price: '$499',
        brand_name: 'POLO',
      },
      {
        _id: 'key111110',
        title: 'Chair',
        image: '/assets/images/products/06.png',
        category: 'Fashion',
        price: '$499',
        brand_name: 'POLO',
      },
      {
        _id: 'key1111110',
        title: 'Jewellery',
        image: '/assets/images/products/07.png',
        category: 'Fashion',
        price: '$499',
        brand_name: 'POLO',
      },
      {
        _id: 'key111111110',
        title: 'Sports',
        image: '/assets/images/products/08.png',
        category: 'Fashion',
        price: '$499',
        brand_name: 'POLO',
      },
      {
        _id: 'key1111110',
        title: 'Vegetables',
        image: '/assets/images/products/09.png',
        category: 'Fashion',
        price: '$499',
        brand_name: 'POLO',
      },
    ],
  },
  {
    label: 'Best of Electronics',
    buttonText: 'More Products',
    data: [
      {
        _id: 'key0',
        title: 'Fashion',
        image: '/assets/images/products/10.png',
        category: 'Fashion',
        price: '$499',
        brand_name: 'POLO',
      },
      {
        _id: 'key10',
        title: 'Watches',
        image: '/assets/images/products/11.png',
        category: 'Fashion',
        price: '$499',
        brand_name: 'POLO',
      },
      {
        _id: 'key110',
        title: 'Bags',
        image: '/assets/images/products/12.png',
        category: 'Fashion',
        price: '$499',
        brand_name: 'POLO',
      },
      {
        _id: 'key1110',
        title: 'Electronics',
        image: '/assets/images/products/13.png',
        category: 'Fashion',
        price: '$499',
        brand_name: 'POLO',
      },
      {
        _id: 'key11110',
        title: 'Headphone',
        image: '/assets/images/products/14.png',
        category: 'Fashion',
        price: '$499',
        brand_name: 'POLO',
      },
      {
        _id: 'key111110',
        title: 'Chair',
        image: '/assets/images/products/15.png',
        category: 'Fashion',
        price: '$499',
        brand_name: 'POLO',
      },
      {
        _id: 'key1111110',
        title: 'Jewellery',
        image: '/assets/images/products/16.png',
        category: 'Fashion',
        price: '$499',
        brand_name: 'POLO',
      },
      {
        _id: 'key111111110',
        title: 'Sports',
        image: '/assets/images/products/17.png',
        category: 'Fashion',
        price: '$499',
        brand_name: 'POLO',
      },
      {
        _id: 'key1111110',
        title: 'Vegetables',
        image: '/assets/images/products/18.png',
        category: 'Fashion',
        price: '$499',
        brand_name: 'POLO',
      },
    ],
  },
]

const ProductList = (): JSX.Element => {
  const [openViwModal, setOpenViewModal] = useState<boolean>(false)

  const openModalHandler = (): void => setOpenViewModal(true)
  return (
    <>
      {dataArr.map((obj, index) => (
        <section key={index} className="product-list">
          <div className="container">
            <div className="d-flex align-items-center mb-4">
              <h5 className="text-uppercase mb-0">{obj.label}</h5>
              <a href="shop-categories.html" className="btn btn-light ms-auto rounded-0">
                {obj.buttonText}
                <BiChevronRight />
              </a>
            </div>
            <Swiper
              loop={true}
              className="product-grid"
              slidesPerView={5}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              spaceBetween={15}
            >
              {obj?.data?.map(item => (
                <SwiperSlide key={item._id}>
                  <div className="card rounded-0 product-card">
                    <div className="card-header bg-transparent border-bottom-0">
                      <div className="d-flex align-items-center justify-content-end gap-3">
                        <div className="product-wishlist">
                          <BiHeart />
                        </div>
                      </div>

                      <div className="product-image">
                        <img src={item.image} className="card-img-top" alt="..." />
                      </div>
                      <div className="card-body">
                        <div className="product-info text-center">
                          <p className="product-catergory font-13 mb-1">{item.category}</p>
                          <h6 className="product-name fs-5 mb-2">{item.title}</h6>
                          <p className="fs-10 product-price">{item.price}</p>
                          <div className="product-action">
                            <div className="d-grid gap-2">
                              <a href="#" className="btn btn-light btn-ecomm">
                                <BiCartAdd className="cart-add" />
                                Add to Cart
                              </a>
                              <p className="btn btn-link btn-ecomm text-white" onClick={openModalHandler}>
                                <BiZoomIn className="zoom-in" />
                                Quick View
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      ))}
      <QuickViewModal openModal={openViwModal} setOpenModal={setOpenViewModal} />
    </>
  )
}

export default ProductList
