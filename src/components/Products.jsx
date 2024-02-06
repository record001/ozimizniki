import React, { useEffect, useState } from 'react'
import '../style/products.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
// import required modules
import { Autoplay } from 'swiper/modules';
function Products() {
  const[book, setBook] =useState(null)

  useEffect(()=>{
    getProducts()
  }, [])
  async function getProducts() {
    const fetchProducts =await fetch("https://uzimizniki.pythonanywhere.com/")
    const json =await fetchProducts.json()
    setBook(json);
  }
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
              
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
         
        }}
        
        modules={[Autoplay]}
        className="mySwiper"
      >
        {book?.map((item)=>{
          return(
            <SwiperSlide key={item.id}>
              <div className="book" >
                <div className="book__name">
                <h2>{item.title}</h2>
                <h4>{item.author}</h4>
                </div>
                
                <p>{item.info}</p>
              </div>
            </SwiperSlide>

          )
        })}
        
      </Swiper>
    </div>
  )
}

export default Products
