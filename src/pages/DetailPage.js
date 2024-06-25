import React, { useEffect } from "react";
import { useParams,useLocation  } from "react-router-dom";
import PageIntro from "../components/cards/PageIntro";
import styles from "./detailpage.module.css";
import zimg from "../assets/contact.jpg";
import Title from "../components/title/Title";

const DetailPage = () => {
  const { id } = useParams();
  const location=useLocation()
  const data = location.state;

  useEffect(() => {
    document.title = "Marvellous Furniture - Service Detail";
  }, []);

  return (
    <>
      <PageIntro text={`Service - ${id}`} img={zimg} />
      <div className={styles.cont}>
        <div className={styles.box}>
        <Title mainTitle={'Detail'} subTitle={""}/>
          <div className={styles.lists}>
            <div className={styles.contlist}></div>
            <img className={styles.imgbox} src={data.pic} alt={id} style={{objectFit:data.pic.endsWith('jpg')?'cover':'contain'}} />
            <div className={styles.textbox}>
              <span className={styles.detailtitle}>{id}</span>
              <span className={styles.detaildes}>{data.description}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
