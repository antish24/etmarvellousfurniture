import React, { useEffect } from "react";
import styles from "./newsPage.module.css";
import PageIntro from "../components/cards/PageIntro";
import zimg from "../assets/gallery.jpg";

const NewsPage = () => {
  useEffect(() => {
    document.title = " News";
  }, []);

  return (
    <>
      <PageIntro text={"NewsPage - Comming Soon"} img={zimg} />
      <div className={styles.cont}>
        <div className={styles.box}>
          
        </div>
      </div>
    </>
  );
};

export default NewsPage;
