import React from 'react'
import styles from './workdash.module.css'
import { FaCheck, FaCoffee, FaHeart } from 'react-icons/fa'
import Title from '../title/Title'
const WorkDash = () => {
    const Data=[
        {
            id:1,
            icon:<FaCheck/>,
            num:20,
            desc:'Work Completed'
        },
        {
            id:2,
            icon:<FaHeart/>,
            num:16,
            desc:'Happy Clients'
        },
        {
            id:3,
            icon:<FaCoffee/>,
            num:57,
            desc:'Cup of Coffee'
        },
    ]
  return (
    <div className={styles.cont}>
          <Title mainTitle={'OVERVIEWS'} subTitle={"AKLIL PRODUCTION in Numbers"}/>
        <div className={styles.list}>
        {Data.map((d,i)=><div key={i} className={styles.infobox}>
            <span className={styles.iconbox}>{d.icon}</span>
            <span className={styles.num}>{d.num}</span>
            <span className={styles.desc}>{d.desc}</span>
        </div>)}
        </div>
    </div>
  )
}

export default WorkDash