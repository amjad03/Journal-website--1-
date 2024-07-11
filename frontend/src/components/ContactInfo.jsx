import PropTypes from "prop-types";
import styles from "./ContactInfo.module.css";

const ContactInfo = ({ className = "", cityDistrict }) => {
  return (
    <div className={[styles.contactInfo, className].join(" ")}>
      <div className={styles.citydistrict}>{cityDistrict}</div>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.enterCityName}>Enter City name</div>
      </div>
    </div>
  );
};




ContactInfo.propTypes = {
  className: PropTypes.string,
  cityDistrict: PropTypes.string,
};

export default ContactInfo;
