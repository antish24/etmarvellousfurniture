import React, { useEffect } from "react";
import styles from "./service.module.css";
import PageIntro from "../components/cards/PageIntro";
import zimg from "../assets/gallery.jpg";
import ProductCard from "../components/cards/ProductCard";
import pic from '../assets/imgs/web.svg'
import pic4 from '../assets/imgs/graphics.png'
import pic3 from '../assets/imgs/web2.png'
import pic2 from '../assets/imgs/design2.png'
import pic5 from '../assets/imgs/social.png'
import pic6 from '../assets/imgs/video.png'
import ProductSlide from "../components/cards/ProductSlide";
import Title from "../components/title/Title";

const Service = () => {

  useEffect(() => {
    document.title = 'Marvellous Furniture - Service';
  }, []);

  const servies = [
    {
      "id": 1,
      "name": "Multi Production",
      "pic": pic,
      "description": "At our mining company, we specialize in providing comprehensive exploration services to assist mining operations in identifying and evaluating potential mining sites. Our team of skilled geologists and mining experts utilizes state-of-the-art techniques and advanced technologies to conduct detailed geological surveys, remote sensing, geochemical analysis, and geophysical surveys. By meticulously analyzing geological data, we help our clients uncover valuable mineral deposits with precision and efficiency. Our comprehensive approach enables mining companies to make informed decisions, minimizing risks and maximizing the potential for successful mining operations. Trust us to be your reliable partner in discovering and unlocking the untapped resources beneath the Earth's surface."
    },
    {
      "id": 2,
      "name": "Web Development",
      "pic": pic2,
      "description": "Our mining company specializes in advanced equipment and processes for efficient mineral separation and refinement. We understand the importance of extracting valuable minerals with high precision and purity. That's why we offer cutting-edge technologies, such as magnetic separators, flotation cells, and gravity concentrators, to ensure optimal mineral separation. Additionally, our advanced refining processes enable the production of high-quality mineral products that meet industry standards. With our expertise in mineral processing and refinement, we assist mining companies in maximizing the value of their extracted minerals and achieving market competitiveness."
    },
    {
      "id": 3,
      "name": "Promotion",
      "pic": pic3,
      "description": "At our mining company, we are committed to minimizing the environmental impact of mining operations. We offer sustainable solutions that prioritize environmental stewardship and social responsibility. Our experts assess the environmental risks associated with mining activities and develop tailored strategies to mitigate them. This includes implementing efficient water management systems, adopting eco-friendly mining practices, and promoting land reclamation and restoration. By integrating sustainable practices into mining operations, we help our clients achieve long-term sustainability, preserve natural resources, and contribute positively to the communities in which they operate."
    },
    {
      "id": 4,
      "name": "Web Design",
      "pic": pic4,
      "description": "At our mining company, we specialize in providing comprehensive exploration services to assist mining operations in identifying and evaluating potential mining sites. Our team of skilled geologists and mining experts utilizes state-of-the-art techniques and advanced technologies to conduct detailed geological surveys, remote sensing, geochemical analysis, and geophysical surveys. By meticulously analyzing geological data, we help our clients uncover valuable mineral deposits with precision and efficiency. Our comprehensive approach enables mining companies to make informed decisions, minimizing risks and maximizing the potential for successful mining operations. Trust us to be your reliable partner in discovering and unlocking the untapped resources beneath the Earth's surface."
    },
    {
      "id": 5,
      "name": "Social media",
      "pic": pic5,
      "description": "At our mining company, we specialize in providing comprehensive exploration services to assist mining operations in identifying and evaluating potential mining sites. Our team of skilled geologists and mining experts utilizes state-of-the-art techniques and advanced technologies to conduct detailed geological surveys, remote sensing, geochemical analysis, and geophysical surveys. By meticulously analyzing geological data, we help our clients uncover valuable mineral deposits with precision and efficiency. Our comprehensive approach enables mining companies to make informed decisions, minimizing risks and maximizing the potential for successful mining operations. Trust us to be your reliable partner in discovering and unlocking the untapped resources beneath the Earth's surface."
    },
    {
      "id": 6,
      "name": "Video production",
      "pic": pic6,
      "description": "At our mining company, we specialize in providing comprehensive exploration services to assist mining operations in identifying and evaluating potential mining sites. Our team of skilled geologists and mining experts utilizes state-of-the-art techniques and advanced technologies to conduct detailed geological surveys, remote sensing, geochemical analysis, and geophysical surveys. By meticulously analyzing geological data, we help our clients uncover valuable mineral deposits with precision and efficiency. Our comprehensive approach enables mining companies to make informed decisions, minimizing risks and maximizing the potential for successful mining operations. Trust us to be your reliable partner in discovering and unlocking the untapped resources beneath the Earth's surface."
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
    </>
  );
};

export default Service;
