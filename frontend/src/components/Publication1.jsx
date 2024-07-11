import PropTypes from "prop-types";
import styles from "./Publication1.module.css";

const Publication1 = ({ className = "" }) => {
  return (
    <section className={[styles.publication, className].join(" ")}>
      <div className={styles.currentIssue}>
        <div className={styles.issueInfo}>
          <div className={styles.currentIssueVolume2IssueWrapper}>
            <b className={styles.currentIssueVolumeContainer}>
              <p className={styles.currentIssue1}>Current Issue</p>
              <p className={styles.volume2Issue}>Volume 2, Issue 3  </p>
              <p className={styles.julySeptember2024}>(July-September 2024)</p>
            </b>
          </div>
          <div className={styles.separator} />
        </div>
        <div className={styles.submissionButton}>
          <button className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <b className={styles.submitPaper}>Submit Paper</b>
          </button>
        </div>
      </div>
    </section>
  );
};

Publication1.propTypes = {
  className: PropTypes.string,
};

export default Publication1;
