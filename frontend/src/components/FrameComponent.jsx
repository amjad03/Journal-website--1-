import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ className = "", healthSciences }) => {
  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.healthSciencesParent}>
        <div className={styles.healthSciences}>{healthSciences}</div>
        <div className={styles.allJournals}>
          <div className={styles.allJournalsChild} />
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  healthSciences: PropTypes.string,
};

export default FrameComponent;
