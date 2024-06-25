import React, { useEffect, useState } from "react";
import styles from "./productshow.module.css";
import who from "../../assets/imgs/whomain.png";
import what from "../../assets/imgs/whatmain.png";
import why from "../../assets/imgs/whymain.png";

import { FaDotCircle } from "react-icons/fa";

const ProductShow = () => {
  const [isVisible, setIsVisible] = useState(false);

  const [selectedItem,setSelectedItem]=useState(1)

  // useEffect(() => {
  //   setIsVisible(true);
  // }, [selectedItem]);

  useEffect(() => {
    setIsVisible(false);
    const interval = setInterval(() => {
      setSelectedItem((prevItem) => (prevItem === 3 ? 1 : prevItem + 1));
    }, 11000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setIsVisible(true);
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 10000);
    return () => clearTimeout(timeout);
  }, [selectedItem]);

  const minerals = [
    {
      id: 1,
      name: 'Who We Are',
      img:who,
      description: "At Marvellous Furniture, we are committed to empowering businesses to thrive in the digital landscape. Through our expertise in web development, social media management, and multimedia production, we enable companies to establish a formidable online presence. Beyond our professional services, we prioritize community welfare, ensuring that our work contributes positively to society.",
    },
    {
      id: 2,
      name: 'What we Do',
      img:what,
      description: "At Marvellous Furniture, we offer a diverse range of services to cater to your digital needs. Our expertise extends beyond web development, social media management, and multimedia production to include marketing services, graphic design, software development, web design, and software development. Whether you're seeking innovative marketing strategies, stunning graphic design, custom software solutions, or seamless web design, we have the skills and experience to bring your vision to life.",
    },
    {
      id: 3,
      name: 'Why Us',
      img:why,
      description: "At Marvellous Furniture, we stand apart by prioritizing your digital success above all else. Our dedication to delivering tailored solutions, staying ahead of industry trends, and consistently achieving results speaks volumes. When you choose us, you're choosing a partner committed to realizing your digital vision with unmatched creativity, expertise, and passion. Experience the difference Marvellous Furniture can make for your online presence today.",
    },
  ];

  const products=[
    {id:1,rol:<FaDotCircle/>},
    {id:2,rol:<FaDotCircle/>},
    {id:3,rol:<FaDotCircle/>},
]
  return (
    <div className={styles.box}>
      <div className={styles.cont}>
      <div className={styles.slider}>
        <div className={styles.lines}>{products.map(l=><span key={l.id} style={{background:selectedItem >= l.id?'var(--fcolor)':'transparent'}} className={styles.line}></span>)}</div>
        {/* <div className={styles.nums}>{products.map(l=><span key={l.id} style={{background:selectedItem===l.id?'var(--fcolor)':'transparent',color:selectedItem===l.id?'white':'var(--fcolor)'}}  className={styles.rolnum}>{l.rol}</span>)}</div> */}
        <div className={styles.nums}>{products.map(l=><span key={l.id} style={{background:selectedItem===l.id?'var(--fcolor)':'transparent',color:selectedItem===l.id?'white':'var(--fcolor)'}} onClick={()=>setSelectedItem(l.id)} className={styles.rolnum}>{l.rol}</span>)}</div>
      </div>
      <div className={styles.contentbox}>
      <div className={styles.content}>
        <span className={isVisible ? styles.title:styles.hiddentitle}>{minerals.find((mineral) => mineral.id === selectedItem).name}</span>
        <span className={isVisible ? styles.description : styles.hiddendes}>{minerals.find((mineral) => mineral.id === selectedItem).description}</span>
        {/* <div className={styles.orderbtnbox}>
          <NavLink className={isVisible ? styles.orderbtn:styles.hiddenorderbtn}>Order Now</NavLink>
        </div> */}
      </div>
      <div className={styles.imgs}><img className={isVisible ? styles.showimg:styles.hideimg} src={minerals.find((mineral) => mineral.id === selectedItem).img} alt="mineral"/></div>
      </div>
    </div>
    </div>
  );
};

export default ProductShow;
