import PropTypes from "prop-types";
import styles from "./InputRows.module.css";





const InputRows = ({ className = "", emailAddress }) => {
  return (
    <div className={[styles.inputRows, className].join(" ")}>
      <div className={styles.emailAddress}>{emailAddress}</div>
      <div className={styles.frameParent}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <input
            className={styles.inTitleCase}
            placeholder="In title case"
            type="text"
          />
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.frameItem} />
          <div className={styles.inTitleCase1}>In title case</div>
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.frameInner} />
          <div className={styles.inTitleCase2}>In title case</div>
        </div>
        <div className={styles.groupDiv}>
          <div className={styles.rectangleDiv} />
          <div className={styles.inTitleCase3}>In title case</div>
        </div>
        <div className={styles.rectangleParent1}>
          <div className={styles.frameChild1} />
          <div className={styles.inTitleCase4}>In title case</div>
        </div>
      </div>
    </div>
  );
};

InputRows.propTypes = {
  className: PropTypes.string,
  emailAddress: PropTypes.string,
};

export default InputRows;
