import Header from "../components/NewCustomComponents/Header";
import ArticleDetails from "../components/ArticleDetails";
import RelatedArticles from "../components/RelatedArticles";
import Footer from "../components/Footer";
import styles from "./PaperDetailPage.module.css";

const PaperDetailPage = () => {
  return (
    <div className={styles.paperDetailPage}>
      <img
        className={styles.screenshot20240629At637}
        alt=""
        src="/screenshot-20240629-at-63733pm-1@2x.png"
      />
      <div className={styles.paperDetailPageChild} />
      <div className={styles.pageDetailRect} />
      <Header/>
      <div className={styles.content}>
        <h2 className={styles.phytosociologicalStudyOf}>
          Phytosociological Study of Tree Species of Dabla Beed Area, Churu
          District Rajasthan, India
        </h2>
      </div>
      <ArticleDetails />
      <RelatedArticles />
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
  );
};

export default PaperDetailPage;
