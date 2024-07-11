import PropTypes from "prop-types";
import styles from "./FooterSocialIcons.module.css";

const FooterSocialIcons = ({ className = "" }) => {
  return (
    <div className={[styles.footerSocialIcons, className].join(" ")}>
      <div className={styles.footerContact}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <a className={styles.home}>Home</a>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.frameItem} />
          <b className={styles.aimScope}>{`Aim  & Scope`}</b>
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.frameInner} />
          <a className={styles.editorialTeam}>Editorial Team</a>
        </div>
        <div className={styles.groupDiv}>
          <div className={styles.rectangleDiv} />
          <b className={styles.submissions}>Submissions</b>
        </div>
        <div className={styles.rectangleParent1}>
          <div className={styles.frameChild1} />
          <b className={styles.current}>Current</b>
        </div>
        <div className={styles.rectangleParent2}>
          <div className={styles.frameChild2} />
          <a className={styles.archives}>Archives</a>
        </div>
        <div className={styles.rectangleParent3}>
          <div className={styles.frameChild3} />
          <b className={styles.indexing}>Indexing</b>
        </div>
        <button className={styles.groupButton}>
          <div className={styles.frameChild4} />
          <b className={styles.publicationEthics}>Publication Ethics</b>
        </button>
        <button className={styles.rectangleParent4}>
          <div className={styles.frameChild5} />
          <a className={styles.contactUs}>Contact US</a>
        </button>
      </div>
    </div>
  );
};

FooterSocialIcons.propTypes = {
  className: PropTypes.string,
};

export default FooterSocialIcons;
