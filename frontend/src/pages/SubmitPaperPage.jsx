import FrameComponent6 from "../components/FrameComponent6";
import Fieldset from "../components/Fieldset";
import AuthorFields from "../components/AuthorFields";
import CityInput from "../components/CityInput";
import FrameComponent7 from "../components/FrameComponent7";
import Footer from "../components/Footer";
import styles from "./SubmitPaperPage.module.css";
import Header from "../components/NewCustomComponents/Header";

const SubmitPaperPage = () => {
  return (
    <div className={styles.submitPaperPage}>
     
      {/* <FrameComponent6 /> */}
      <Header/>
      <div className={styles.formBoundary} />
      <section className={styles.formContainer}>
        <div className={styles.formFields}>
          <Fieldset />
          <AuthorFields />
        </div>
      </section>
      <section className={styles.stateCityInputWrapper}>
        <form className={styles.stateCityInput}>
          <div className={styles.country}>Country</div>
          <CityInput />
          <FrameComponent7 />
        </form>
      </section>
      <Footer
        cooltext4611840960970061="/cooltext461184096097006-1@2x.png"
        bookPng1="/bookpng-1@2x.png"
        logo="/vector-13.svg"
      />
    </div>
  );
};

export default SubmitPaperPage;
