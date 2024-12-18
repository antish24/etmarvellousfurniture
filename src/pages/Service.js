import React, { useEffect } from "react";
import styles from "./service.module.css";
import PageIntro from "../components/cards/PageIntro";
import zimg from "../assets/gallery.jpg";
import ProductCard from "../components/cards/ProductCard";
import pic from '../assets/services/static.png'
import pic4 from '../assets/services/event.png'
import pic3 from '../assets/services/vip.png'
import pic2 from '../assets/services/vip.png'
import pic5 from '../assets/services/cctv.png'
import pic6 from '../assets/services/consolt.png'
import ProductSlide from "../components/cards/ProductSlide";
import Title from "../components/title/Title";
import Gallerys from "./Gallerys";

const Service = () => {

  useEffect(() => {
    document.title = ' Service';
  }, []);

  const servies = [
    {
      "id": 1,
      "name": "Static Guarding",
      "pic": pic,
      "description": "em, ipsum dolor sit amet consectetur adipisicing elit. Error dolorem sequi liem, ipsum dolor sit amet consectetur adipisicing elit. Error dolorem sequi libero in blanditiiem, ipsum dolor sit amet consectetur adipisicing elit. Error dolorem sequi libero in blanditiibero in blanditiis eveniet ipsa aspernatur architecto corporis odio!"
    },
    {
      "id": 2,
      "name": "Mobile Patrol",
      "pic": pic2,
      "description": "em, ipsum dolor sit amet consectetur adipisicing elit. Error dolorem sequi liem, ipsum dolor sit amet consectetur adipisicing elit. Error dolorem sequi libero in blanditiiem, ipsum dolor sit amet consectetur adipisicing elit. Error dolorem sequi libero in blanditiibero in blanditiis eveniet ipsa aspernatur architecto corporis odio!"
    },
    {
      "id": 4,
      "name": "Event Security",
      "pic": pic4,
      "description": "At our furniture company, we specialize in providing comprehensive exploration services to assist furniture operations in identifying and evaluating potential furniture sites. Our team of skilled geologists and furniture experts utilizes state-of-the-art techniques and advanced technologies to conduct detailed geological surveys, remote sensing, geochemical analysis, and geophysical surveys. By meticulously analyzing geological data, we help our clients uncover valuable mineral deposits with precision and efficiency. Our comprehensive approach enables furniture companies to make informed decisions, minimizing risks and maximizing the potential for successful furniture operations. Trust us to be your reliable partner in discovering and unlocking the untapped resources beneath the Earth's surface."
    },
    {
      "id": 5,
      "name": "CCTV Monitoring",
      "pic": pic5,
      "description": "At our furniture company, we specialize in providing comprehensive exploration services to assist furniture operations in identifying and evaluating potential furniture sites. Our team of skilled geologists and furniture experts utilizes state-of-the-art techniques and advanced technologies to conduct detailed geological surveys, remote sensing, geochemical analysis, and geophysical surveys. By meticulously analyzing geological data, we help our clients uncover valuable mineral deposits with precision and efficiency. Our comprehensive approach enables furniture companies to make informed decisions, minimizing risks and maximizing the potential for successful furniture operations. Trust us to be your reliable partner in discovering and unlocking the untapped resources beneath the Earth's surface."
    },
    {
      "id": 6,
      "name": "Security Consultancy",
      "pic": pic6,
      "description": "At our furniture company, we specialize in providing comprehensive exploration services to assist furniture operations in identifying and evaluating potential furniture sites. Our team of skilled geologists and furniture experts utilizes state-of-the-art techniques and advanced technologies to conduct detailed geological surveys, remote sensing, geochemical analysis, and geophysical surveys. By meticulously analyzing geological data, we help our clients uncover valuable mineral deposits with precision and efficiency. Our comprehensive approach enables furniture companies to make informed decisions, minimizing risks and maximizing the potential for successful furniture operations. Trust us to be your reliable partner in discovering and unlocking the untapped resources beneath the Earth's surface."
    },
    {
      "id": 3,
      "name": "VIP Protection",
      "pic": pic3,
      "description": "em, ipsum dolor sit amet consectetur adipisicing elit. Error dolorem sequi liem, ipsum dolor sit amet consectetur adipisicing elit. Error dolorem sequi libero in blanditiiem, ipsum dolor sit amet consectetur adipisicing elit. Error dolorem sequi libero in blanditiibero in blanditiis eveniet ipsa aspernatur architecto corporis odio!"
    },
  ];

  return (
    <>
      <PageIntro text={"Service"} img={zimg} />
      <ProductSlide/>
      <div className={styles.cont}>
        <div className={styles.box}>
          <Title mainTitle={'Specialization and Successful Endeavors'} subTitle={""}/>
          <div className={styles.lists}>
          {servies.map((l)=><ProductCard key={l.id} {...l}/>)}
          </div>
        </div>
      </div>
      <Gallerys/>
    </>
  );
};

export default Service;
