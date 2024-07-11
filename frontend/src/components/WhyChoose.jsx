import PropTypes from "prop-types";
import styles from "./WhyChoose.module.css";

const WhyChoose = ({ className = "" }) => {
  return (
    <section className={[styles.whyChoose, className].join(" ")}>
      <div className={styles.whyContent}>
        <div className={styles.excellenceWrapper}>
          <div className={styles.excellenceContent}>
            <h2 className={styles.whyChooseIjestm}>Why Choose IJESTM?</h2>
            <div className={styles.peerReviewedExcellenceEverContainer}>
              <p className={styles.peerReviewedExcellenceEver}>
                <b
                  className={styles.peerReviewedExcellence}
                >{`Peer-Reviewed Excellence: `}</b>
                <span>
                  Every article submitted to [Journal Name] undergoes a rigorous
                  peer-review process to ensure the highest quality standards.
                </span>
              </p>
              <p className={styles.globalReachOurJournalIsR}>
                <b className={styles.globalReach}>{`Global Reach: `}</b>
                <span>
                  Our journal is read by researchers, academics, and
                  professionals from around the world, making it an excellent
                  platform to reach a diverse audience.
                </span>
              </p>
              <p className={styles.interdisciplinaryFocusIjest}>
                <b
                  className={styles.interdisciplinaryFocus}
                >{`Interdisciplinary Focus: `}</b>
                <span>
                  IJESTM encourages cross-disciplinary collaboration, providing
                  a unique space for innovative research.
                </span>
              </p>
              <p className={styles.openAccessWeBelieveInOpe}>
                <b className={styles.openAccess}>{`Open Access: `}</b>
                <span>
                  We believe in open access to knowledge. Many of our articles
                  are freely accessible to all, promoting the widespread
                  dissemination of research.
                </span>
              </p>
            </div>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.maskGroupParent}>
              <input className={styles.maskGroup} type="checkbox" />
              <input className={styles.maskGroup1} type="checkbox" />
              <input className={styles.maskGroup2} type="checkbox" />
              <input className={styles.maskGroup3} type="checkbox" />
              <input className={styles.maskGroup4} type="checkbox" />
              <input className={styles.maskGroup5} type="checkbox" />
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.publishResearchPaperInAlmoParent}>
                <h3 className={styles.publishResearchPaper}>
                  Publish research paper in almost all academic/research
                  disciplines (multidisciplinary).
                </h3>
                <h3 className={styles.publishResearchPaper1}>
                  Publish research paper in almost all spoken languages.
                </h3>
                <h3 className={styles.easyAndFast}>
                  Easy and fast review and publication system.
                </h3>
                <h3 className={styles.authorsCanCheck}>
                  Authors can check review and publication process status online
                  anytime.
                </h3>
                <h3 className={styles.emailNotificationSent}>
                  Email notification sent to the authors at each process stage.
                </h3>
                <h3 className={styles.quickSupportThrough}>
                  Quick support through email, phone and social media (WhatsApp,
                  Facebook).
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <div className={styles.downloadsParent}>
            <h2 className={styles.downloads}>Downloads</h2>
            <div className={styles.lineParent}>
              <div className={styles.frameChild} />
              <div className={styles.templateLink}>
                <div className={styles.templateIcon}>
                  <img
                    className={styles.templateDownloadIcon}
                    loading="lazy"
                    alt=""
                    src="/vector8.svg"
                  />
                </div>
                <div className={styles.menuscriptTemplate}>
                  Menuscript Template
                </div>
              </div>
            </div>
          </div>
          <div className={styles.copyright1}>
            <div className={styles.copyrightIconWrapper}>
              <img
                className={styles.copyrightIcon}
                loading="lazy"
                alt=""
                src="/vector8.svg"
              />
            </div>
            <div className={styles.copyrightForm}>Copyright form</div>
          </div>
          <div className={styles.copyright2}>
            <div className={styles.vectorWrapper}>
              <img className={styles.vectorIcon} alt="" src="/vector8.svg" />
            </div>
            <div className={styles.coverPage}>Cover Page</div>
          </div>
        </div>
      </div>
    </section>
  );
};

WhyChoose.propTypes = {
  className: PropTypes.string,
};

export default WhyChoose;
