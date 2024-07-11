import PropTypes from "prop-types";
import styles from "./ChomskyTitle.module.css";

const ChomskyTitle = ({
  className = "",
  noamChomskysContributionT,
  authorsAshankChaudharySha,
}) => {
  return (
    <div className={[styles.chomskyTitle, className].join(" ")}>
      <div className={styles.chomskyAuthorship} />
      <h3 className={styles.noamChomskysContribution}>
        {noamChomskysContributionT}
      </h3>
      <div className={styles.chomskyAuthors}>
        <div className={styles.authorsAshankChaudharySContainer}>
          <p className={styles.authorsAshankChaudharyS}>
            {authorsAshankChaudharySha}
          </p>
          <p className={styles.countryIndia}>Country: India</p>
        </div>
        <div className={styles.chomskyAuthorsInner}>
          <button className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <img className={styles.frameItem} alt="" src="/group-63.svg" />
            <div className={styles.chomskyPDFWrapper}>
              <div className={styles.viewPdf}>View PDF</div>
            </div>
            <div className={styles.vectorWrapper}>
              <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
            </div>
          </button>
        </div>
      </div>
      <div className={styles.chomskySeparatorWrapper}>
        <div className={styles.chomskySeparatorWrapperChild} />
      </div>
    </div>
  );
};

ChomskyTitle.propTypes = {
  className: PropTypes.string,
  noamChomskysContributionT: PropTypes.string,
  authorsAshankChaudharySha: PropTypes.string,
};

export default ChomskyTitle;
