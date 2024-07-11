import PropTypes from "prop-types";
import styles from "./ContactInfo1.module.css";

const ContactInfo1 = ({ className = "" }) => {
  return (
    <div className={[styles.contactInfo, className].join(" ")}>
      <div className={styles.contactDetails}>
        <div className={styles.contactMethods}>
          <div className={styles.contactMethodContainers}>
            <div className={styles.contactMethodIcons}>
              <img
                className={styles.emailIcon}
                loading="lazy"
                alt=""
                src="/vector-1.svg"
              />
            </div>
            <h3 className={styles.emailAddressEditorijestmc}>
              <span>Email Address: </span>
              <span className={styles.editorijestmcom}>editor@ijestm.com</span>
            </h3>
          </div>
          <div className={styles.contactMethodContainers1}>
            <div className={styles.vectorWrapper}>
              <img
                className={styles.vectorIcon}
                loading="lazy"
                alt=""
                src="/vector-2.svg"
              />
            </div>
            <h3 className={styles.contactNumber918385Container}>
              <span>Contact Number: </span>
              <span className={styles.span}>+91 8385 226214</span>
              <span className={styles.callTime10}>
                  Call Time: 10 am to 7 pm IST (Monday to Saturday)
              </span>
            </h3>
          </div>
        </div>
        <div className={styles.socialMedia}>
          <h3 className={styles.alsoAvailableOn}>Also available on : </h3>
          <div className={styles.socialMediaIcons}>
            <div className={styles.socialMediaIconContainers}>
              <img
                className={styles.socialMediaIconContainersChild}
                loading="lazy"
                alt=""
                src="/group-78.svg"
              />
              <img
                className={styles.socialMediaIconContainersItem}
                loading="lazy"
                alt=""
                src="/group-77.svg"
              />
              <div className={styles.socialIcon}>
                <img
                  className={styles.groupIcon}
                  loading="lazy"
                  alt=""
                  src="/group-11.svg"
                />
              </div>
              <div className={styles.socialIcon1}>
                <img
                  className={styles.socialIconChild}
                  loading="lazy"
                  alt=""
                  src="/group-76.svg"
                />
              </div>
              <div className={styles.socialIconContainer}>
                <img
                  className={styles.socialIcon2}
                  loading="lazy"
                  alt=""
                  src="/vector-3.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ContactInfo1.propTypes = {
  className: PropTypes.string,
};

export default ContactInfo1;
