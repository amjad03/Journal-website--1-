import PropTypes from "prop-types";
import styles from "./FooterLinks.module.css";

const FooterLinks = ({ className = "" }) => {
  return (
    <div className={[styles.footerLinks, className].join(" ")}>
      <div className={styles.footerLinksHeader}>
        <div className={styles.footerLinksList}>
          <h1 className={styles.publications}>Publications</h1>
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.copyright}>
            <img
              className={styles.groupIcon}
              loading="lazy"
              alt=""
              src="/group-1.svg"
            />
          </div>
          <h3 className={styles.volume1}>Volume 1</h3>
          <div className={styles.copyright1}>
            <img
              className={styles.groupIcon1}
              loading="lazy"
              alt=""
              src="/group-2.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

FooterLinks.propTypes = {
  className: PropTypes.string,
};

export default FooterLinks;
