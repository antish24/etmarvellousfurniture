import React, { useEffect, useState } from 'react'
import styles from "./gallery.module.css";
import PageIntro from '../components/cards/PageIntro';
import zimg from '../assets/gallery.jpg'
import GalleryCard from '../components/cards/GalleryCard';
import pic from '../assets/pics/1.jpg'
import pic2 from '../assets/pics/1b.jpg'
import pic7 from '../assets/pics/1aa.jpg'
import pic8 from '../assets/pics/4b.jpg'
import pic10 from '../assets/pics/3bb.jpg'
import pic11 from '../assets/pics/1s.jpg'
import pic12 from '../assets/pics/3s.jpg'
import pic9 from '../assets/pics/3.jpg'
import pic3 from '../assets/pics/1a.jpg'
import pic4 from '../assets/pics/5.jpg'
import pic5 from '../assets/pics/2k.jpg'
import pic6 from '../assets/pics/3c.jpg'
import Title from '../components/title/Title';
// import ModelShow from '../components/ModelShow';

const Gallerys = () => {

  useEffect(() => {
    document.title = 'Marvellous Furniture - Projects';
  }, []);

  const galleryData=[
    {
      "id": 1,
      "description": "Silica Sand is a versatile and high-quality material extensively used in various industries. Its unique properties make it an indispensable component in glass manufacturing, construction projects, and foundry processes. With its fine granular structure and high silica content, Silica Sand provides stability and strength to glass products, ensuring clarity and durability. In construction, Silica Sand is used in concrete and mortar mixes, offering excellent binding properties and enhancing the overall strength of structures. Moreover, in foundry processes, Silica Sand serves as a molding material due to its ability to withstand high temperatures and facilitate the production of intricate metal castings.",
      "name": "Kicthen Cabinet",
      "type":'Kicthen',
      "link":'https://www.zaahirahtravels.com',
      "file":'https://www.zaahirahtravels.com',
      "pic": pic
    },
    {
      "id": 2,
      "name": "Project 2",
      "type":'Bed',
      "link":'https://www.zaahirahtravels.com',
      "file":'https://www.zaahirahtravels.com',
      "pic": pic2,
      "description": "Lithium is a vital element that plays a crucial role in powering modern technologies and driving the transition towards sustainable energy solutions. As a key component in rechargeable batteries, Lithium enables the efficient storage and release of electrical energy, making it essential for electric vehicles, portable electronics, and renewable energy storage systems. With its lightweight and high energy density properties, Lithium-ion batteries offer longer-lasting power and facilitate the shift to cleaner transportation and energy sources. The demand for Lithium continues to rise as the world embraces the need for greener, more sustainable energy alternatives, making it a valuable resource for the future."
    },
    {
      "id": 3,
      "name": "Project 3",
      "type":'Cabinet',
      "link":'https://www.zaahirahtravels.com',
      "file":'https://www.zaahirahtravels.com',
      "pic": pic3,
      "description": "Tantalum is a rare and highly sought-after metal known for its exceptional properties and diverse applications. With its high melting point, excellent corrosion resistance, and remarkable electrical conductivity, Tantalum finds extensive use in the electronics industry. It is a key component in capacitors, which store and release electrical energy in various electronic devices, including smartphones, laptops, and medical implants. Tantalum's ability to withstand extreme temperatures and resist chemical reactions makes it an ideal choice for critical components in aerospace, defense, and industrial applications. Its unique combination of properties and scarcity contribute to Tantalum's value as a strategic material with broad-ranging technological importance."
    },
    {
      "id": 4,
      "name": "Project 4",
      "type":'Kicthen',
      "link":'https://www.zaahirahtravels.com',
      "file":'https://www.zaahirahtravels.com',
      "pic": pic4,
      "description": "Lithium is a vital element that plays a crucial role in powering modern technologies and driving the transition towards sustainable energy solutions. As a key component in rechargeable batteries, Lithium enables the efficient storage and release of electrical energy, making it essential for electric vehicles, portable electronics, and renewable energy storage systems. With its lightweight and high energy density properties, Lithium-ion batteries offer longer-lasting power and facilitate the shift to cleaner transportation and energy sources. The demand for Lithium continues to rise as the world embraces the need for greener, more sustainable energy alternatives, making it a valuable resource for the future."
    },
    {
      "id": 5,
      "name": "Project 5",
      "type":'Kicthen',
      "link":'https://www.zaahirahtravels.com',
      "file":'https://www.zaahirahtravels.com',
      "pic": pic5,
      "description": "Tantalum is a rare and highly sought-after metal known for its exceptional properties and diverse applications. With its high melting point, excellent corrosion resistance, and remarkable electrical conductivity, Tantalum finds extensive use in the electronics industry. It is a key component in capacitors, which store and release electrical energy in various electronic devices, including smartphones, laptops, and medical implants. Tantalum's ability to withstand extreme temperatures and resist chemical reactions makes it an ideal choice for critical components in aerospace, defense, and industrial applications. Its unique combination of properties and scarcity contribute to Tantalum's value as a strategic material with broad-ranging technological importance."
    },
    {
      "id": 6,
      "name": "Project 6",
      "type":'Closets',
      "link":'https://www.zaahirahtravels.com',
      "file":'https://www.zaahirahtravels.com',
      "pic": pic6,
      "description": "Lithium is a vital element that plays a crucial role in powering modern technologies and driving the transition towards sustainable energy solutions. As a key component in rechargeable batteries, Lithium enables the efficient storage and release of electrical energy, making it essential for electric vehicles, portable electronics, and renewable energy storage systems. With its lightweight and high energy density properties, Lithium-ion batteries offer longer-lasting power and facilitate the shift to cleaner transportation and energy sources. The demand for Lithium continues to rise as the world embraces the need for greener, more sustainable energy alternatives, making it a valuable resource for the future."
    },
    {
      "id": 7,
      "name": "Project 7",
      "type":'Dresser',
      "link":'https://www.zaahirahtravels.com',
      "file":'https://www.zaahirahtravels.com',
      "pic": pic7,
      "description": "Tantalum is a rare and highly sought-after metal known for its exceptional properties and diverse applications. With its high melting point, excellent corrosion resistance, and remarkable electrical conductivity, Tantalum finds extensive use in the electronics industry. It is a key component in capacitors, which store and release electrical energy in various electronic devices, including smartphones, laptops, and medical implants. Tantalum's ability to withstand extreme temperatures and resist chemical reactions makes it an ideal choice for critical components in aerospace, defense, and industrial applications. Its unique combination of properties and scarcity contribute to Tantalum's value as a strategic material with broad-ranging technological importance."
    },
    {
      "id": 8,
      "name": "Project 8",
      "type":'Bed',
      "link":'https://www.zaahirahtravels.com',
      "file":'https://www.zaahirahtravels.com',
      "pic": pic8,
      "description": "Lithium is a vital element that plays a crucial role in powering modern technologies and driving the transition towards sustainable energy solutions. As a key component in rechargeable batteries, Lithium enables the efficient storage and release of electrical energy, making it essential for electric vehicles, portable electronics, and renewable energy storage systems. With its lightweight and high energy density properties, Lithium-ion batteries offer longer-lasting power and facilitate the shift to cleaner transportation and energy sources. The demand for Lithium continues to rise as the world embraces the need for greener, more sustainable energy alternatives, making it a valuable resource for the future."
    },
    {
      "id": 9,
      "name": "Project 9",
      "type":'Kicthen Cabinet',
      "link":'https://www.zaahirahtravels.com',
      "file":'https://www.zaahirahtravels.com',
      "pic": pic9,
      "description": "Tantalum is a rare and highly sought-after metal known for its exceptional properties and diverse applications. With its high melting point, excellent corrosion resistance, and remarkable electrical conductivity, Tantalum finds extensive use in the electronics industry. It is a key component in capacitors, which store and release electrical energy in various electronic devices, including smartphones, laptops, and medical implants. Tantalum's ability to withstand extreme temperatures and resist chemical reactions makes it an ideal choice for critical components in aerospace, defense, and industrial applications. Its unique combination of properties and scarcity contribute to Tantalum's value as a strategic material with broad-ranging technological importance."
    },
    {
      "id":10,
      "name": "Project 10",
      "type":'Bed',
      "link":'https://www.zaahirahtravels.com',
      "file":'https://www.zaahirahtravels.com',
      "pic": pic10,
      "description": "Tantalum is a rare and highly sought-after metal known for its exceptional properties and diverse applications. With its high melting point, excellent corrosion resistance, and remarkable electrical conductivity, Tantalum finds extensive use in the electronics industry. It is a key component in capacitors, which store and release electrical energy in various electronic devices, including smartphones, laptops, and medical implants. Tantalum's ability to withstand extreme temperatures and resist chemical reactions makes it an ideal choice for critical components in aerospace, defense, and industrial applications. Its unique combination of properties and scarcity contribute to Tantalum's value as a strategic material with broad-ranging technological importance."
    },
    {
      "id":11,
      "name": "Project 11",
      "type":'Shelf',
      "link":'https://www.zaahirahtravels.com',
      "file":'https://www.zaahirahtravels.com',
      "pic": pic11,
      "description": "Tantalum is a rare and highly sought-after metal known for its exceptional properties and diverse applications. With its high melting point, excellent corrosion resistance, and remarkable electrical conductivity, Tantalum finds extensive use in the electronics industry. It is a key component in capacitors, which store and release electrical energy in various electronic devices, including smartphones, laptops, and medical implants. Tantalum's ability to withstand extreme temperatures and resist chemical reactions makes it an ideal choice for critical components in aerospace, defense, and industrial applications. Its unique combination of properties and scarcity contribute to Tantalum's value as a strategic material with broad-ranging technological importance."
    },
    {
      "id":12,
      "name": "Project 11",
      "type":'Shelf',
      "link":'https://www.zaahirahtravels.com',
      "file":'https://www.zaahirahtravels.com',
      "pic": pic12,
      "description": "Tantalum is a rare and highly sought-after metal known for its exceptional properties and diverse applications. With its high melting point, excellent corrosion resistance, and remarkable electrical conductivity, Tantalum finds extensive use in the electronics industry. It is a key component in capacitors, which store and release electrical energy in various electronic devices, including smartphones, laptops, and medical implants. Tantalum's ability to withstand extreme temperatures and resist chemical reactions makes it an ideal choice for critical components in aerospace, defense, and industrial applications. Its unique combination of properties and scarcity contribute to Tantalum's value as a strategic material with broad-ranging technological importance."
    },
  ]

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