  import PropTypes from "prop-types";
import styles from "./FrameComponent2.module.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section className={[styles.openAccessContentWrapper, className].join(" ")}>
      <div className={styles.openAccessContent}>
        <div className={styles.openAccessTitle}>
          <div className={styles.openAccessHeader}>
            <h2 className={styles.ijestmOpenAccessContainer}>
              <b>{`IJESTM `}</b>
              <span>Open Access</span>
            </h2>
            <div className={styles.openAccessDescription}>
              <div className={styles.openAccessLinkWrapper}>
                <div className={styles.openAccessLink}>
                  <img
                    className={styles.openAccessIcon}
                    loading="lazy"
                    alt=""
                    src="/vector1.svg"
                  />
                  <h3 className={styles.ijestmEmpowersResearchersContainer}>
                    <p
                      className={styles.ijestmEmpowersResearchers}
                    >{`IJESTM empowers researchers & readers through:`}</p>
                    <ul className={styles.openAccessPublishingOptions}>
                      <li className={styles.openAccessPublishing}>
                        Open access publishing options
                      </li>
                      <li className={styles.openAccessAgreements}>
                        Open access agreements
                      </li>
                      <li>Author support and information</li>
                    </ul>
                  </h3>
                </div>
              </div>
              <button className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <a className={styles.learnMore}>LEARN MORE</a>
              </button>
            </div>
          </div>
        </div>
        <img
          className={styles.learningBro1Icon}
          alt=""
          src="/learningbro-1@2x.png"
        />
        <div className={styles.learningImage}>
          <div className={styles.learningImageChild} />
          <img
            className={styles.learningBro2Icon}
            loading="lazy"
            alt=""
            src="/learningbro-2@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
