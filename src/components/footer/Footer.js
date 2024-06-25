import React from 'react'
import styles from './footer.module.css'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logopng.png'
import { FaFacebook, FaInstagram, FaLinkedin, FaTelegram, FaTiktok } from 'react-icons/fa'

const Footer = () => {
    const links=[
        {id:1,href:'/projects',name:'Projects'},
        {id:1,href:'/contact',name:'Contact'},
        {id:1,href:'/service',name:'Service'},
        {id:1,href:'/about',name:'About'},
    ]

    const scrollTop=()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }

  return (
    <div className={styles.cont}>
        <div className={styles.box}>
            <div className={styles.logobox}>
            <NavLink to={'/'} onClick={scrollTop} className={styles.logo}>
                <img src={logo} alt='logo'/>
            </NavLink>
            <div className={styles.social}>
                <a href="https://www.facebook.com"><FaFacebook/></a>
                <a href="https://www.facebook.com"><FaInstagram/></a>
                <a href="https://www.facebook.com"><FaTelegram/></a>
                <a href="https://www.facebook.com"><FaTiktok/></a>
                <a href="https://www.facebook.com"><FaLinkedin/></a>
            </div>
            </div>
            <div className={styles.content}>
                <div className={styles.links}>{links.map(l=><NavLink onClick={scrollTop} key={l.id} to={l.href}>{l.name}</NavLink>)}</div>
                <div className={styles.copyright}>Copyright &copy; {new Date().getFullYear()} Marvellous Furniture. </div>
            </div>
        </div>
    </div>
  )
}

export default Footer