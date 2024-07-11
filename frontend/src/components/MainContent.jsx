  import PropTypes from "prop-types";
  import styles from "./MainContent.module.css";

  const MainContent = ({ className = "" }) => {
    return (
      <div className={[styles.mainContent, className].join(" ")}>
        <div className={styles.mainContentInner}>
          <div className={styles.mainContentColumns}>
            <div className={styles.leftColumn}>
              <div className={styles.journalInfo}>
                <div className={styles.journalTitleContainer}>
                  <h2 className={styles.internationalJournalOf}>
                    International Journal of Engineering, Science Technology and
                    Management 
                  </h2>
                  <div className={styles.journalDescription}>
                    <div className={styles.aWidelyIndexed}>
                      A Widely Indexed Open Access Peer Reviewed Multidisciplinary
                      International Journal
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className={styles.callForPaper}>
                Call for paper Volume 6 Issue 3 May-2024 * Submit your research
              </div> */}
              <div className={styles.callForPaper + " " + styles.marquee}>
              Call for paper Volume 6 Issue 3 May-2024 * Submit your research
            </div>
            </div>
          </div>
          <div className={styles.navigationMenu}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <a className={styles.home}>Home</a>
            </div>
            <div className={styles.rectangleGroup}>
              <div className={styles.frameItem} />
              <b className={styles.aimScope}>{`Aim  & Scope`}</b>
            </div>
            <div className={styles.rectangleContainer}>
              <div className={styles.frameInner} />
              <a className={styles.editorialTeam}>Editorial Team</a>
            </div>
            <div className={styles.groupDiv}>
              <div className={styles.rectangleDiv} />
              <b className={styles.submissions}>Submissions</b>
            </div>
            <div className={styles.rectangleParent1}>
              <div className={styles.frameChild1} />
              <b className={styles.current}>Current</b>
            </div>
            <div className={styles.rectangleParent2}>
              <div className={styles.frameChild2} />
              <a className={styles.archives}>Archives</a>
            </div>
            <div className={styles.rectangleParent3}>
              <div className={styles.frameChild3} />
              <b className={styles.indexing}>Indexing</b>
            </div>
            <button className={styles.groupButton}>
              <div className={styles.frameChild4} />
              <b className={styles.publicationEthics}>Publication Ethics</b>
            </button>
            <button className={styles.rectangleParent4}>
              <div className={styles.frameChild5} />
              <a className={styles.contactUs}>Contact US</a>
            </button>
          </div>
        </div>
      </div>
    );
  };

  MainContent.propTypes = {
    className: PropTypes.string,
  };

  export default MainContent;
