import ContactInfo from "./ContactInfo";
import PropTypes from "prop-types";
import styles from "./CityInput.module.css";





const CityInput = ({ className = "" }) => {
  return (
    <div className={[styles.cityInput, className].join(" ")}>
      <div className={styles.cityInputInner}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.selectCountry}>Select Country</div>
          <div className={styles.postalCodeInput}>
            <img className={styles.vectorIcon} alt="" src="/vector-21.svg" />
          </div>
        </div>
      </div>
      <div className={styles.agreementCheckbox}>
        <div className={styles.submitButtonParent}>
          <div className={styles.submitButton}>
            <div className={styles.state}>State</div>
            <div className={styles.rectangleGroup}>
              <div className={styles.frameItem} />
              <div className={styles.selectState}>Select State</div>
              <div className={styles.socialLinks}>
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/vector-21.svg"
                />
              </div>
            </div>
          </div>
          <ContactInfo cityDistrict="City/District" />
        </div>
        <div className={styles.serviceDescription}>
          <div className={styles.reviewerReferralIdParent}>
            <div className={styles.reviewerReferralId}>
              Reviewer Referral Id 
            </div>
            <div className={styles.rectangleContainer}>
              <div className={styles.frameInner} />
              <input
                className={styles.enterReviewerReferral}
                placeholder="Enter reviewer referral Id "
                type="text"
              />
            </div>
          </div>
        </div>
      </div>
      <ContactInfo cityDistrict="Postal code" />
    </div>
  );
};

CityInput.propTypes = {
  className: PropTypes.string,
};

export default CityInput;
