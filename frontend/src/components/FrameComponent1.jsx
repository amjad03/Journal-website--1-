import PropTypes from "prop-types";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({ className = "", lifeBiomedical, sciences }) => {
  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.lifeBiomedicalContainer}>
        <p className={styles.lifeBiomedical}>{lifeBiomedical}</p>
        <p className={styles.sciences}>{sciences}</p>
      </div>
      <div className={styles.materialsSciences}>
        <div className={styles.materialsSciencesChild} />
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
  lifeBiomedical: PropTypes.string,
  sciences: PropTypes.string,
};

export default FrameComponent1;
