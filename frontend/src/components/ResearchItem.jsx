import PropTypes from "prop-types";
import styles from "./ResearchItem.module.css";

const ResearchItem = ({
  className = "",
  phytosociologicalStudyOfT,
  authorsMukeshKumarMeenaJB,
}) => {
  return (
    <div className={[styles.researchItem, className].join(" ")}>
      <div className={styles.paperBoxes} />
      <div className={styles.paperTitles}>
        <h3 className={styles.phytosociologicalStudyOf}>
          {phytosociologicalStudyOfT}
        </h3>
        <div className={styles.socialMediaImpact}>
          <div className={styles.authorsMukeshKumarMeenaContainer}>
            <p className={styles.authorsMukeshKumarMeena}>
              {authorsMukeshKumarMeenaJB}
            </p>
            <p className={styles.countryIndia}>Country: India</p>
          </div>
          <div className={styles.socialAuthors}>
            <button className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <img className={styles.frameItem} alt="" src="/group-63.svg" />
              <div className={styles.treeLinks}>
                <div className={styles.viewPdf}>View PDF</div>
              </div>
              <div className={styles.socialLinks}>
                <img
                  className={styles.socialPdfIcon}
                  alt=""
                  src="/vector2.svg"
                />
              </div>
            </button>
          </div>
        </div>
        <div className={styles.paperTitlesInner}>
          <div className={styles.frameInner} />
        </div>
      </div>
    </div>
  );
};

ResearchItem.propTypes = {
  className: PropTypes.string,
  phytosociologicalStudyOfT: PropTypes.string,
  authorsMukeshKumarMeenaJB: PropTypes.string,
};

export default ResearchItem;
