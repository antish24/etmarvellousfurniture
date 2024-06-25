import React, { useEffect, useState } from 'react'
import styles from './productslide.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay,Navigation  } from 'swiper/modules';

import pic from '../../assets/imgs/web.svg'
import pic2 from '../../assets/imgs/subscription.png'
import pic3 from '../../assets/imgs/web2.png'
import pic4 from '../../assets/imgs/design2.png'
import pic5 from '../../assets/imgs/social.png'
import pic6 from '../../assets/imgs/video.png'

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import Title from '../title/Title';

const ProductSlide = () => {
    const galleryData=[
        {
          "id": 1,
          "name": "Bed",
          "description": "versatile and high-quality",
          "pic":pic
        },
        {
          "id": 2,
          "name": "Dresser",
          "description": "versatile and high-quality",
          "pic":pic3
        },
        {
          "id": 3,
          "name": "Chair",
          "description": "versatile and high-quality",
          "pic":pic4
        },
        {
          "id": 4,
          "name": "Tables",
          "description": "versatile and high-quality",
          "pic":pic2
        },
        {
          "id": 5,
          "name": "Posts",
          "description": "versatile and high-quality",
          "pic":pic5
        },
        {
          "id": 6,
          "name": "Cabinets",
          "description": "versatile and high-quality",
          "pic":pic
        },
        {
          "id": 7,
          "name": "Closets",
          "description": "versatile and high-quality",
          "pic":pic6
        },
      ]
      
      const [currentSlideIds, setCurrentSlideIds] = useState([]);
      const [middleItemId, setMiddleItemId] = useState(null);

      const handleSlideChange = (swiper) => {
        const { activeIndex, slides } = swiper;
        const visibleSlideIds = slides
          .filter((slide, index) => index >= activeIndex && index < activeIndex + swiper.params.slidesPerView)
          .map((slide) => parseInt(slide.getAttribute('data-id'), 10));
    
        setCurrentSlideIds(visibleSlideIds);
      };
    
      useEffect(() => {
        if (currentSlideIds.length > 0) {
          const middleIndex = Math.floor(currentSlideIds.length / 2);
          setMiddleItemId(currentSlideIds[middleIndex]);
        } else {
          setMiddleItemId(null);
        }
      }, [currentSlideIds]);
    

  // const getCurrentVisibleItemIds = () => {
  //   return currentSlideIds;
  // };

  return (
    <div className={styles.cont}>
          <Title mainTitle={'Featured Services'} subTitle={"CHECK OUT OUR PRODUCTS AND SERVICE"}/>
          <div className={styles.list}>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            onSlideChange={handleSlideChange} 
            loop={true}
            breakpoints={{
              '@0.00': {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              '@0.50': {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              '@0.75': {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              '@1.00': {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              '@1.50': {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
            modules={[Autoplay,Navigation ]}
        className={styles.myswiper}
      >
        {galleryData.map((l)=>(
            <SwiperSlide className={styles.slide} key={l.id} data-id={l.id}>
            <div className={middleItemId===l.id ?styles.activeitembox:styles.itembox} >
                <img className={styles.itemimg} src={l.pic} alt={l.name}/>
                <div className={styles.itemtxt}>
                    <span className={styles.itemtitle}>{l.name}</span>
                    <span className={styles.itemdes}>{l.description}</span>
                </div>
            </div>
            
        </SwiperSlide>
        ))}
        <div className={styles.customNavigation}>
              <FaAngleLeft className={styles.navbtnl}/>
              <FaAngleRight className={styles.navbtnr}/>
          </div>
      </Swiper>

          </div>
    </div>
  )
}

export default ProductSlide