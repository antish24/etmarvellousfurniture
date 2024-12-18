import React, { useEffect, useState } from 'react'
import styles from './productslide.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay,Navigation  } from 'swiper/modules';

import pic from '../../assets/awards/abay.png'
import pic2 from '../../assets/awards/addis.png'
import pic3 from '../../assets/awards/world.png'
import pic4 from '../../assets/awards/lion.png'
import pic5 from '../../assets/awards/enatbank.png'
import pic6 from '../../assets/awards/romel.png'
import pic7 from '../../assets/awards/alnur.png'

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import Title from '../title/Title';
import { Image } from 'antd';

const AwardsSlide = () => {
    const galleryData=[
        {
          "id": 1,
          "name": "Letter",
          "description": "Abay Bank S.C",
          "pic":pic
        },
        {
          "id": 2,
          "name": "Letter",
          "description": "ADDIS CREDIT AND SAVING INc",
          "pic":pic2
        },
        {
          "id": 4,
          "name": "Letter",
          "description": "Lion International Bank S.C",
          "pic":pic4
        },
        {
          "id": 7,
          "name": "Letter",
          "description": "AL Nur Import Export",
          "pic":pic7
        },
        {
          "id": 5,
          "name": "Leter",
          "description": "Enat Bank",
          "pic":pic5
        },
        {
          "id": 6,
          "name": "Letter",
          "description": "Romel General Treading",
          "pic":pic6
        },
        {
          "id": 7,
          "name": "Letter",
          "description": "World University Service",
          "pic":pic3
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
          <Title mainTitle={'Awards and Certficates'} subTitle={"CHECK OUT OUR Awards and Certficates"}/>
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
          delay: 3500,
          disableOnInteraction: false,
        }}
            modules={[Autoplay,Navigation ]}
        className={styles.myswiper}
      >
        {galleryData.map((l)=>(
            <SwiperSlide className={styles.slide} key={l.id} data-id={l.id}>
            <div className={middleItemId===l.id ?styles.activeitembox:styles.itembox} >
                <Image width={120} height={120} src={l.pic} alt={l.name}/>
                <div className={styles.itemtxt}>
                    <span className={styles.itemtitle}>{l.name}</span>
                    <span className={styles.itemdes}>{l.description}</span>
                </div>
            </div>
            
        </SwiperSlide>
        ))}
        {/* <div className={styles.customNavigation}>
              <FaAngleLeft className={styles.navbtnl}/>
              <FaAngleRight className={styles.navbtnr}/>
          </div> */}
      </Swiper>

          </div>
    </div>
  )
}

export default AwardsSlide