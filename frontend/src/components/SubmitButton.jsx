import PropTypes from "prop-types";
import styles from "./SubmitButton.module.css";

const SubmitButton = ({ className = "", sendMessage }) => {
  return (
    <div className={[styles.submitButton, className].join(" ")}>
      <button className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <b className={styles.sendMessage}>{sendMessage}</b>
      </button>
    </div>
  );
};

SubmitButton.propTypes = {
  className: PropTypes.string,
  sendMessage: PropTypes.string,
};

export default SubmitButton;
