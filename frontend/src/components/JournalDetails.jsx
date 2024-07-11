import PropTypes from "prop-types";
import styles from "./JournalDetails.module.css";

const JournalDetails = ({ className = "" }) => {
  return (
    <div className={[styles.journalDetails, className].join(" ")}>
      <h3 className={styles.journalInternationalJournalContainer}>
        <b>{`Journal: `}</b>
        <span>
          International Journal of Engineering, Science Technology and
          Management
        </span>
      </h3>
      <div className={styles.publisherInfo}>
        <h3 className={styles.publisherAnjumanInstituteContainer}>
          <b>{`Publisher: `}</b>
          <span>Anjuman Institute of Technology and Mangement</span>
        </h3>
        <h3 className={styles.addressBelalkandaBhatkalContainer}>
          <b>{`Address: `}</b>
          <span>Belalkanda Bhatkal, Karnataka 581 320, India</span>
        </h3>
      </div>
      <div className={styles.journalDetailsInner}>
        <div className={styles.frameChild} />
      </div>
      <div className={styles.questionPrompt}>
        <h3 className={styles.ifYouHaveContainer}>
          <p className={styles.ifYouHaveAnyQuestionPlea}>
            <span className={styles.ifYouHave}>
              If you have any question, please check the
            </span>
            <span className={styles.frequentlyAskedQuestion}>
               frequently asked question (FAQs)
            </span>
            <span>
               first. If your question has no answer there then please contact
              us through your comfortable method from the below available
              options:
            </span>
          </p>
        </h3>
      </div>
    </div>
  );
};

JournalDetails.propTypes = {
  className: PropTypes.string,
};

export default JournalDetails;
