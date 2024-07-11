import SubmitButton from "./SubmitButton";
import PropTypes from "prop-types";
import styles from "./FrameComponent7.module.css";




const FrameComponent7 = ({ className = "" }) => {
  return (
    <div className={[styles.stateCityInputInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <input className={styles.frameInput} type="checkbox" />
            <div className={styles.iAgreeWithContainer}>
              <span>I agree with the </span>
              <span className={styles.journalwebsitesPolicies}>
                journal/website's policies
              </span>
            </div>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <SubmitButton sendMessage="Submit" />
          <div className={styles.frameChild} />
        </div>
      </div>
    </div>
  );
};

FrameComponent7.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent7;
