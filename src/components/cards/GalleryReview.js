import React from 'react'
import styles from './galleryreview.module.css'
import { NavLink } from 'react-router-dom'
import GalleryCard from './GalleryCard'
import pic from '../../assets/pics/enat.png'
import pic2 from '../../assets/pics/abay.png'
import pic3 from '../../assets/pics/trainng.png'
import Title from '../title/Title'

const GalleryReview = () => {
  const scrollTop=()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

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
  ];

  return (
    <div className={styles.cont}>
          <Title mainTitle={'Recent Projects'} subTitle={"Photos from our Experience"}/>
          <div className={styles.lists}>
            {galleryData.map((l)=><GalleryCard key={l.id} {...l}/>)}
          </div>
          <div className={styles.moreservice}><NavLink to={'/projects'} onClick={scrollTop}>More Projects</NavLink></div>
        </div>
  )
}

export default GalleryReview