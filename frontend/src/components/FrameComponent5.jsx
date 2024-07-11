import PropTypes from "prop-types";
import styles from "./FrameComponent5.module.css";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <section className={[styles.joinUsContentWrapper, className].join(" ")}>
      <div className={styles.joinUsContent}>
        <div className={styles.joinUsHeader}>
          <div className={styles.joinUsTitle}>
            <h1 className={styles.joinUs}>Join us</h1>
          </div>
          <h3 className={styles.weInviteResearchersContainer}>
            <p className={styles.weInviteResearchers}>
              We invite researchers, scholars, and academics to be part of our
              vibrant community. Whether you are an author, reviewer, or reader,
              IJESTM offers you the opportunity to contribute to the advancement
              of knowledge in your field. 
            </p>
            <p className={styles.exploreTheLatestResearchIn}>
              {`Explore the latest research in our Current Issue or delve into our Archives to discover a wealth of knowledge. For more information about submitting your work or becoming a reviewer, please visit our Submission Guidelines page. Kindly share the manuscript to `}
              <a
                className={styles.editorijestmcom}
                href="mailto:editor@ijestm.com"
                target="_blank"
              >
                <span className={styles.editorijestmcom1}>
                  editor@ijestm.com
                </span>
              </a>
               
            </p>
          </h3>
        </div>
        <div className={styles.contactUs}>
          <div className={styles.contactLink}>
            <div className={styles.contactTitle}>
              <h2 className={styles.contactUs1}>Contact us</h2>
            </div>
            <div className={styles.contactLinkChild} />
          </div>
          <div className={styles.inquiryDescription}>
            <h3 className={styles.contactUsForContainer}>
              <span>{`Contact Us for inquiries or assistance at `}</span>
              <a
                className={styles.queriesijestmcom}
                href="mailto:editor@ijestm.com"
                target="_blank"
              >
                <span className={styles.queriesijestmcom1}>
                  queries@ijestm.com
                </span>
              </a>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
