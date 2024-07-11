

import Header from "../components/NewCustomComponents/Header";
import Hero from "../components/Hero";
import WhyChoose from "../components/WhyChoose";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent4 from "../components/FrameComponent4";
import ChomskyTitle from "../components/ChomskyTitle";
import Publication1 from "../components/Publication1";
import FrameComponent5 from "../components/FrameComponent5";
import Footer from "../components/Footer";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.homePage}>
      <img
        className={styles.screenshot20240629At637}
        alt=""
        src="/screenshot-20240629-at-63733pm-1@2x.png"
      />
      <div className={styles.homePageChild} />
      <Header />
      <Hero />
      <div className={styles.chomskyResearch}>
        <div className={styles.chomskyTopRow} />
      </div>
      <WhyChoose />
      <FrameComponent2 />
      <FrameComponent3 />
      <FrameComponent4 />
      <section className={styles.chomskyResearch1}>
        <div className={styles.chomskyTitleParent}>
          <ChomskyTitle
            noamChomskysContributionT="Noam Chomsky's Contribution to Linguistics"
            authorsAshankChaudharySha="Author(s): Ashank Chaudhary, Shabana Singh"
          />
          <ChomskyTitle
            noamChomskysContributionT="Innovative Ecofriendly Coconut Husk Brushes"
            authorsAshankChaudharySha="Author(s): Krishnamurthy L Bhat"
          />
        </div>
      </section>
      <div className={styles.homePageItem} />
      <section className={styles.chomskyResearch2}>
        <div className={styles.frameParent}>
          <ChomskyTitle
            noamChomskysContributionT="Co-operation: Idea and Movement: European Experience"
            authorsAshankChaudharySha="Author(s): Mohit Aggarwal"
          />
          <ChomskyTitle
            noamChomskysContributionT="Effect of Mordants on Percentage Absorption of Rubia Cardifolia "
            authorsAshankChaudharySha="Author(s): Ahaan Mehta"
          />
        </div>
      </section>
      <div className={styles.chomskyResearch3}>
        <div className={styles.chomskyResearchChild} />
      </div>
      <Publication1 />
      <div className={styles.chomskyResearch4}>
        <div className={styles.chomskyResearchItem} />
      </div>
      <FrameComponent5 />
      <section className={styles.footerImage}>
        <img
          className={styles.footerIcon}
          loading="lazy"
          alt=""
          src="/rectangle-30@2x.png"
        />
      </section>
      <Footer
        cooltext4611840960970061="/cooltext461184096097006-11@2x.png"
        bookPng1="/bookpng-11@2x.png"
        logo="/vector7.svg"
      />
    </div>
  );
};

export default Home;
