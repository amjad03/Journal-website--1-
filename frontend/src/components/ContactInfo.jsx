import PropTypes from "prop-types";
import styles from "./ContactInfo.module.css";

const ContactInfo = ({ className = "", cityDistrict }) => {
  return (
    <div className={[styles.contactInfo, className].join(" ")}>
      <div className={styles.citydistrict}>{cityDistrict}</div>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.enterCityName}>
        <input style={{ width: '100%',outline: 'none', border: 'none', backgroundColor: '#ebebebeb', padding: '8px', fontSize:'18px', forcedColorAdjust: 'none'}}
              className={styles.pleaseWriteIn}
              placeholder={cityDistrict}
              type="text"
            />
        </div>
      </div>
    </div>
  );
};




ContactInfo.propTypes = {
  className: PropTypes.string,
  cityDistrict: PropTypes.string,
};

export default ContactInfo;
