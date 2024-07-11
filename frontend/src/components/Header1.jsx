import PropTypes from "prop-types";
import styles from "./Header1.module.css";

const Header1 = ({ className = "" }) => {
  return (
    <section className={[styles.header, className].join(" ")}>
      <header className={styles.headerLeft}>
        <nav className={styles.headerLeftTop}>
          <div className={styles.headerLeftTopOne}>
            <div className={styles.headerLeftTopTwo}>
              <div className={styles.headerLeftTopThree}>
                <img
                  className={styles.cooltext4611840960970061Icon}
                  loading="lazy"
                  alt=""
                  src="/cooltext461184096097006-1@2x.png"
                />
              </div>
              <div className={styles.headerLeftTopFour}>
                <b className={styles.internationalJournalOfContainer}>
                  <p
                    className={styles.internationalJournalOf}
                  >{`International Journal of Engineering, Science `}</p>
                  <p className={styles.technologyAndManagement}>
                    Technology and Management 
                  </p>
                </b>
                <img
                  className={styles.bookPng1Icon}
                  loading="lazy"
                  alt=""
                  src="/bookpng-1@2x.png"
                />
              </div>
            </div>
          </div>
          <div className={styles.headerRight}>
            <div className={styles.search}>
              <div className={styles.searchChild} />
              <input
                className={styles.searchBar}
                placeholder="Search..."
                type="text"
              />
              <img className={styles.groupIcon} alt="" src="/group.svg" />
            </div>
          </div>
          <div className={styles.profile}>
            <div className={styles.profileIcon}>
              <img
                className={styles.vectorIcon}
                loading="lazy"
                alt=""
                src="/vector.svg"
              />
            </div>
            <a className={styles.profile1}>Profile</a>
          </div>
        </nav>
        <div className={styles.headerLeftInner}>
          <div className={styles.frameChild} />
        </div>
        <div className={styles.internationalJournalOfEnginWrapper}>
          <h2 className={styles.internationalJournalOf1}>
            International Journal of Engineering, Science Technology and
            Management 
          </h2>
        </div>
        <div className={styles.journalDescription}>
          <div className={styles.aWidelyIndexedOpenAccessPWrapper}>
            <div className={styles.aWidelyIndexed}>
              A Widely Indexed Open Access Peer Reviewed Multidisciplinary
              International Journal
            </div>
          </div>
          <div className={styles.callForPaper + " " + styles.marquee}>
              Call for paper Volume 6 Issue 3 May-2024 * Submit your research
            </div>
        </div>
        <div className={styles.menu}>
          <div className={styles.menuItems}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <a className={styles.home}>Home</a>
            </div>
            <div className={styles.rectangleGroup}>
              <div className={styles.frameInner} />
              <b className={styles.aimScope}>{`Aim  & Scope`}</b>
            </div>
            <div className={styles.rectangleContainer}>
              <div className={styles.rectangleDiv} />
              <a className={styles.editorialTeam}>Editorial Team</a>
            </div>
            <div className={styles.groupDiv}>
              <div className={styles.frameChild1} />
              <b className={styles.submissions}>Submissions</b>
            </div>
            <div className={styles.rectangleParent1}>
              <div className={styles.frameChild2} />
              <b className={styles.current}>Current</b>
            </div>
            <div className={styles.rectangleParent2}>
              <div className={styles.frameChild3} />
              <a className={styles.archives}>Archives</a>
            </div>
            <div className={styles.rectangleParent3}>
              <div className={styles.frameChild4} />
              <b className={styles.indexing}>Indexing</b>
            </div>
            <button className={styles.groupButton}>
              <div className={styles.frameChild5} />
              <b className={styles.publicationEthics}>Publication Ethics</b>
            </button>
            <button className={styles.rectangleParent4}>
              <div className={styles.frameChild6} />
              <a className={styles.contactUs}>Contact US</a>
            </button>
          </div>
        </div>
      </header>
    </section>
  );
};

Header1.propTypes = {
  className: PropTypes.string,
};

export default Header1;
