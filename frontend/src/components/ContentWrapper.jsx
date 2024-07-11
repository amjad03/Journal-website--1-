import PropTypes from "prop-types";
import styles from "./ContentWrapper.module.css";

const ContentWrapper = ({
  className = "",
  phytosociologicalStudyOfT,
  authorsMukeshKumarMeenaJB,
}) => {
  return (
    <div className={[styles.contentWrapper, className].join(" ")}>
      <div className={styles.imagePlaceholder} />
      <div className={styles.titleAndAuthors}>
        <h3 className={styles.phytosociologicalStudyOf}>
          {phytosociologicalStudyOfT}
        </h3>
        <div className={styles.authorsDetails}>
          <div className={styles.authorsMukeshKumarMeenaWrapper}>
            <div className={styles.authorsMukeshKumarMeenaContainer}>
              <p className={styles.authorsMukeshKumarMeena}>
                {authorsMukeshKumarMeenaJB}
              </p>
              <p className={styles.countryIndia}>Country:a India</p>
            </div>
          </div>
          <button className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <img className={styles.frameItem} alt="" src="/group-63.svg" />
            <div className={styles.viewPdfWrapper}>
              <div className={styles.viewPdf}>View PDF</div>
            </div>
            <div className={styles.vectorWrapper}>
              <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
            </div>
          </button>
        </div>
      </div>
      <div className={styles.contentWrapperInner}>
        <div className={styles.frameInner} />
      </div>
    </div>
  );
};

ContentWrapper.propTypes = {
  className: PropTypes.string,
  phytosociologicalStudyOfT: PropTypes.string,
  authorsMukeshKumarMeenaJB: PropTypes.string,
};

export default ContentWrapper;
