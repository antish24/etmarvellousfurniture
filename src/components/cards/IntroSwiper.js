import React from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import styles from './introswiper.module.css';

import pic from '../../assets/pics/trainng.png';
import pic7 from '../../assets/pics/image.png';
import pic2 from '../../assets/pics/asemble.png';
import pic3 from '../../assets/pics/securitys.png';
import pic4 from '../../assets/pics/asemble2.png';
import pic5 from '../../assets/pics/metting.png';
import pic6 from '../../assets/pics/asemble3.png';
// import required modules
import {Autoplay} from 'swiper/modules';

const slideData = [
  {
    image: pic,
    alt: 'GAFAT SECURITY',
    text: 'Our team is highly trained and dedicated to delivering reliable, customized security solutions.',
  },
  {
    image: pic7,
    alt: 'GAFAT SECURITY',
    text: 'Providing professional security personnel to ensure the safety of your business, events, and personnel.',
  },
  {
    image: pic2,
    alt: 'GAFAT SECURITY',
    text: 'With years of experience, we offer tailored security services that meet your specific needs. Our personnel are equipped with the latest tools and techniques to protect what matters most.',
  },
  {
    image: pic3,
    alt: 'GAFAT SECURITY',
    text: 'From mobile patrols to event protection, we offer flexible security packages designed for any situation. Trust us to keep your assets and people safe with our expert security solutions.',
  },
  {
    image: pic4,
    alt: 'GAFAT SECURITY',
    text: 'Our team of security professionals is trained to handle any threat with efficiency and discretion. We prioritize your safety and peace of mind, ensuring seamless protection around the clock.',
  },
  {
    image: pic5,
    alt: 'GAFAT SECURITY',
    text: 'We are committed to delivering exceptional security services that go beyond industry standards.',
  },
  {
    image: pic6,
    alt: 'GAFAT SECURITY',
    text: 'Our personnel are always prepared to provide the highest level of protection for your business, assets, and people.',
  },
];

export default function IntroSwiper () {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      grabCursor={true}
      loop={true}
      autoplay={{
        delay: 5000,
      }}
      modules={[Autoplay]}
      className={styles.swiper}
    >
      {slideData.map ((slide, index) => (
        <SwiperSlide className={styles.swiperslide} key={index}>
          <img src={slide.image} alt={slide.alt} />
          <span>{slide.text}</span>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
