
import { useLocation } from 'react-router-dom';

import Header from "../components/NewCustomComponents/Header";
import ArticleDetails from "../components/ArticleDetails";
import RelatedArticles from "../components/RelatedArticles";
import Footer from "../components/Footer";
import styles from "./PaperDetailPage.module.css";

const PaperDetailPage = () => {
  const location = useLocation();
  const { paper } = location.state || {};
  // const { paper, paperId } = location.state || {}; // Destructure paper and paperId from state


  if (!paper) {
    return <div>Loading...</div>; // Handle loading state or no paper case
  }

  return (
    <>
    <Header />
    <div className={styles.paperDetailPage}>
      {/* <img
        className={styles.screenshot20240629At637}
        alt=""
        src="/screenshot-20240629-at-63733pm-1@2x.png"
      /> */}
      {/* <div className={styles.paperDetailPageChild} /> */}
      {/* <div className={styles.pageDetailRect} /> */}
      <div className={styles.content}>
        <h2 className={styles.phytosociologicalStudyOf}>
          {/* Phytosociological Study of Tree Species of Dabla Beed Area, Churu
          District Rajasthan, India */}
          {paper ? paper.title : 'Loading...'}
          </h2>
      </div>
      {/* <ArticleDetails /> */}
      {/* <ArticleDetails paper={paper} paperId={paperId} /> Pass paper data to ArticleDetails */}
      <ArticleDetails paper={paper}/> {/* Pass paper data to ArticleDetails */}
      {/* <RelatedArticles /> */}
      <img
        className={styles.footerBackgroundIcon}
        alt=""
        src="/rectangle-30@2x.png"
      />
      <Footer
        cooltext4611840960970061="/cooltext461184096097006-1@2x.png"
        bookPng1="/bookpng-1@2x.png"
        logo="/vector7.svg"
      />
    </div>
    </>
  );
};

export default PaperDetailPage;
