import React from 'react'
import styles from './galleryreview.module.css'
import { NavLink } from 'react-router-dom'
import GalleryCard from './GalleryCard'
import pic from '../../assets/pics/1.jpg'
import pic2 from '../../assets/pics/2.jpg'
import pic3 from '../../assets/pics/3.jpg'
import Title from '../title/Title'

const GalleryReview = () => {
  const scrollTop=()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const galleryData=[
    {
      "id": 1,
      "description": "Silica Sand is a versatile and high-quality material extensively used in various industries. Its unique properties make it an indispensable component in glass manufacturing, construction projects, and foundry processes. With its fine granular structure and high silica content, Silica Sand provides stability and strength to glass products, ensuring clarity and durability. In construction, Silica Sand is used in concrete and mortar mixes, offering excellent binding properties and enhancing the overall strength of structures. Moreover, in foundry processes, Silica Sand serves as a molding material due to its ability to withstand high temperatures and facilitate the production of intricate metal castings.",
      "name": "Kitchen Cabinet",
      "type":'Cabinet',
      "link":'',
      "file":'',
      "pic": pic
    },
    {
      "id": 2,
      "name": "Project 3",
      "type":'Bed',
      "link":'',
      "file":'',
      "pic": pic2,
      "description": "Lithium is a vital element that plays a crucial role in powering modern technologies and driving the transition towards sustainable energy solutions. As a key component in rechargeable batteries, Lithium enables the efficient storage and release of electrical energy, making it essential for electric vehicles, portable electronics, and renewable energy storage systems. With its lightweight and high energy density properties, Lithium-ion batteries offer longer-lasting power and facilitate the shift to cleaner transportation and energy sources. The demand for Lithium continues to rise as the world embraces the need for greener, more sustainable energy alternatives, making it a valuable resource for the future."
    },
    {
      "id": 3,
      "name": "Project 4",
      "type":'Cabinet',
      "link":'',
      "file":'',
      "pic": pic3,
      "description": "Tantalum is a rare and highly sought-after metal known for its exceptional properties and diverse applications. With its high melting point, excellent corrosion resistance, and remarkable electrical conductivity, Tantalum finds extensive use in the electronics industry. It is a key component in capacitors, which store and release electrical energy in various electronic devices, including smartphones, laptops, and medical implants. Tantalum's ability to withstand extreme temperatures and resist chemical reactions makes it an ideal choice for critical components in aerospace, defense, and industrial applications. Its unique combination of properties and scarcity contribute to Tantalum's value as a strategic material with broad-ranging technological importance."
    },
  ]
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