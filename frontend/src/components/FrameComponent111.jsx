import PropTypes from "prop-types";
import styles from "./FrameComponent111.module.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div
      className={[styles.currentIssueVolume2IssueParent, className].join(" ")}
    >
      <b className={styles.currentIssueVolumeContainer}>
        <p className={styles.currentIssue}>Current Issue</p>
        <p className={styles.volume2Issue}>Volume 2, Issue 3</p>
        <p className={styles.volume2Issue}>(July-September 2024)</p>
      </b>
      <div className={styles.frameChild} />
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <b className={styles.submitPaper}>Submit Paper</b>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
