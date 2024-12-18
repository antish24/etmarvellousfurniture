import React, { useEffect, useState } from 'react'
import styles from "./gallery.module.css";
import PageIntro from '../components/cards/PageIntro';
import zimg from '../assets/gallery.jpg'
import GalleryCard from '../components/cards/GalleryCard';
import pic from '../assets/pics/enat.png'
import pic2 from '../assets/pics/abay.png'
import pic3 from '../assets/pics/trainng.png'

import Title from '../components/title/Title';
// import ModelShow from '../components/ModelShow';

const Gallerys = () => {

  useEffect(() => {
    document.title = ' Projects';
  }, []);

  const galleryData = [
    {
      id: 1,
      name: "Enat Bank",
      type: "Security",
      link: "https://www.enatbank.com",
      file: "https://www.enatbank.com",
      pic: pic,
      description: "We provide comprehensive security solutions for Enat Bank, ensuring the safety of customer data and financial transactions. Our advanced systems, including real-time fraud detection, data encryption, and 24/7 monitoring, help maintain a secure banking environment for all users."
    },
    {
      id: 2,
      name: "Abay Bank",
      type: "Security",
      link: "https://www.abaybank.com",
      file: "https://www.abaybank.com",
      pic: pic2,
      description: "Our security services for Abay Bank focus on safeguarding their clients and assets. With state-of-the-art technology, we provide real-time fraud detection, data protection, and continuous surveillance to ensure the utmost security for all banking operations."
    },
    {
      id: 3,
      name: "Oromia Bank",
      type: "Cleaning",
      link: "https://www.oromiabank.com",
      file: "https://www.oromiabank.com",
      pic: pic3,
      description: "We provide professional cleaning services to Oromia Bank, ensuring that their branches are clean, hygienic, and welcoming. Our services are tailored to meet the highest standards of sanitation, creating a safe and pleasant environment for both employees and customers."
    },
    {
      id: 4,
      name: "Tesdiy Bank",
      type: "Mobile Patrol",
      link: "https://www.tesdiybank.com",
      file: "https://www.tesdiybank.com",
      pic: pic,
      description: "We offer mobile patrol services to Tesdiy Bank, ensuring round-the-clock security across their premises. Our trained personnel provide proactive monitoring and immediate response to any security threats, ensuring the safety of the bank’s assets and customers."
    },
    {
      id: 5,
      name: "Al Nur Import Export",
      type: "Event Security",
      link: "https://www.alnurimportexport.com",
      file: "https://www.alnurimportexport.com",
      pic: pic,
      description: "We provide event security services for Al Nur Import Export, ensuring the safety and smooth execution of their corporate events and exhibitions. Our team of professionals coordinates security measures to protect participants and assets, providing peace of mind throughout the event."
    },
    {
      id: 6,
      name: "Romel General Trading",
      type: "VIP Protection",
      link: "https://www.romelgeneraltrading.com",
      file: "https://www.romelgeneraltrading.com",
      pic: pic,
      description: "We offer VIP protection services to Romel General Trading, ensuring the safety and privacy of their high-profile clients. Our team of discreet and highly trained personnel provides tailored security solutions for executives, dignitaries, and celebrities."
    },
    {
      id: 7,
      name: "WUSC",
      type: "Cleaning",
      link: "https://www.wusc.com",
      file: "https://www.wusc.com",
      pic: pic,
      description: "We provide expert cleaning services for WUSC, ensuring their facilities are maintained to the highest standards of cleanliness and sanitation. Our services create a safe, healthy, and productive environment for employees and visitors alike."
    },
    {
      id: 8,
      name: "Lion Bank",
      type: "Mobile Patrol",
      link: "https://www.lionbank.com",
      file: "https://www.lionbank.com",
      pic: pic,
      description: "We provide mobile patrol services to Lion Bank, ensuring their branches and assets are secured at all times. Our security teams offer visible deterrence and rapid response to potential threats, providing peace of mind to both customers and staff."
    }
  ];
  

  const [filterType,setFilterType]=useState('')
  

  let filteredItems;
  if (filterType !== '') {
    filteredItems = galleryData.filter(item => item.type === filterType);
  } else {
    filteredItems = galleryData;
  }

  const types=Array.from(
    new Set(
      galleryData.map(project => project.type)  
    )
  )
  
  return (
    <>
      <PageIntro text={'Projects'} img={zimg}/>
      <div className={styles.cont}>
        <div className={styles.box}>
          <Title mainTitle={'Photos from our Experience and Products'} subTitle={''}/>
          <div className={styles.searchbox}>
            <span className={styles.searchlinks} onClick={()=>setFilterType('')} style={{background:filterType===''?'var(--fcolor)':'white',color:filterType===''?'white':'var(--fcolor)'}}>All</span>
            {types.map((l,k)=>
            <span className={styles.searchlinks} onClick={()=>setFilterType(l)} style={{background:filterType===l?'var(--fcolor)':'white',color:filterType===l?'white':'var(--fcolor)'}} key={k}>{l}</span>
            )}
          </div>
          <div className={styles.lists}>
          {
          filteredItems.map((l)=><GalleryCard key={l.id} {...l}/>)
          }
          </div>
        </div>
      </div>
    </>
  )
}

export default Gallerys