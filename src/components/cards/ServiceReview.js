import React from 'react'
import ProductCard from './ProductCard'
import styles from './servicereview.module.css'
import { NavLink } from 'react-router-dom'
import pic from '../../assets/pics/1.jpg'
import pic4 from '../../assets/pics/2.jpg'
import pic5 from '../../assets/pics/3.jpg'
import Title from '../title/Title'

const ServiceReview = () => {
  const scrollTop=()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const servies = [
    {
      "id": 1,
      "name": "Kitchen Cabinets",
      "pic": pic,
      "description": "em, ipsum dolor sit amet consectetur adipisicing elit. Error dolorem sequi liem, ipsum dolor sit amet consectetur adipisicing elit. Error dolorem sequi libero in blanditiiem, ipsum dolor sit amet consectetur adipisicing elit. Error dolorem sequi libero in blanditiibero in blanditiis eveniet ipsa aspernatur architecto corporis odio!"
    },
    {
      "id": 2,
      "name": "Dresser",
      "pic": pic4,
      "description": "em, ipsum dolor sit amet consectetur adipisicing elit. Error dolorem sequi liem, ipsum dolor sit amet consectetur adipisicing elit. Error dolorem sequi libero in blanditiiem, ipsum dolor sit amet consectetur adipisicing elit. Error dolorem sequi libero in blanditiibero in blanditiis eveniet ipsa aspernatur architecto corporis odio!"
    },
    {
      "id": 3,
      "name": "Bed",
      "pic": pic5,
      "description": "em, ipsum dolor sit amet consectetur adipisicing elit. Error dolorem sequi liem, ipsum dolor sit amet consectetur adipisicing elit. Error dolorem sequi libero in blanditiiem, ipsum dolor sit amet consectetur adipisicing elit. Error dolorem sequi libero in blanditiibero in blanditiis eveniet ipsa aspernatur architecto corporis odio!"
    },
  ];
  return (
    <div className={styles.cont}>
          <Title mainTitle={'Our Service'} subTitle={"Create your own paradiset get inspired. See below"}/>
          <div className={styles.lists}>
            {servies.map((l)=><ProductCard key={l.id} {...l}/>)}
          </div>
          <div className={styles.moreservice}><NavLink to={'/service'} onClick={scrollTop}>More Service</NavLink></div>
        </div>
  )
}

export default ServiceReview