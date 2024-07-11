import PropTypes from "prop-types";
import styles from "./PaperAbstractDuplicateDownl.module.css";

const PaperAbstractDuplicateDownl = ({
  className = "",
  phytosociologicalStudyOfT,
  authorsMukeshKumarMeenaJB,
}) => {
  return (
    <div className={[styles.paperAbstractDuplicateDownl, className].join(" ")}>
      <div className={styles.duplicatePaperAbstractSecon} />
      <div className={styles.duplicatePaperAbstractSecon1}>
        <h3 className={styles.phytosociologicalStudyOf}>
          {phytosociologicalStudyOfT}
        </h3>
        <div className={styles.duplicatePaperAbstractSecon2}>
          <div className={styles.authorsMukeshKumarMeenaContainer}>
            <p className={styles.authorsMukeshKumarMeena}>
              {authorsMukeshKumarMeenaJB}
            </p>
            <p className={styles.countryIndia}>Country: India</p>
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
      <div className={styles.paperAbstractDuplicateDownlInner}>
        <div className={styles.frameInner} />
      </div>
    </div>
  );
};

PaperAbstractDuplicateDownl.propTypes = {
  className: PropTypes.string,
  phytosociologicalStudyOfT: PropTypes.string,
  authorsMukeshKumarMeenaJB: PropTypes.string,
};

export default PaperAbstractDuplicateDownl;
