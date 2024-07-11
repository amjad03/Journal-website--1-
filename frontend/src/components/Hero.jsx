import PropTypes from "prop-types";
import styles from "./Hero.module.css";

const Hero = ({ className = "" }) => {
  return (
    <section className={[styles.hero, className].join(" ")}>
      <div className={styles.contentWrapper}>
        <div className={styles.heroContent}>
          <div className={styles.heroTitles}>
            <h2 className={styles.internationalJournalOf}>
              International Journal of Engineering, Science Technology and
              Management (IJESTM)
            </h2>
            <div className={styles.internationalJournalOfContainer}>
              <p className={styles.internationalJournalOfEngin}>
                <b
                  className={styles.internationalJournalOf1}
                >{`International Journal of Engineering, Science Technology and Management (IJESTM) `}</b>
                <span>
                  is a leading international multi-disciplinary journal
                  dedicated to advancing research and knowledge across various
                  fields. With a commitment to excellence, innovation, and
                  inclusivity, our journal serves as a platform for researchers,
                  scholars, and professionals from diverse disciplines to share
                  their valuable insights and discoveries. The journal accepts
                  the original research and review articles and extended version
                  of the conference and journal papers from Scientists,
                  Industrialists, Academicians, Engineers and Students in all
                  the fields of electrical and computer system designs. 
                </span>
              </p>
              <p className={styles.theJournalHas}>
                The journal has high visibility on the articles from the
                scientific and research communities around the world. The
                researchers can access the articles and utilize for the
                development of scientific and research proposals on engineering
                and technology.
              </p>
            </div>
          </div>
          <div className={styles.heroTitles1}>
            <h2 className={styles.ourMission}>Our Mission</h2>
            <div className={styles.fosterInterdisciplinaryCollaContainer}>
              <p className={styles.fosterInterdisciplinaryColla}>
                <span className={styles.fosterInterdisciplinaryColla1}>
                  <b className={styles.fosterInterdisciplinaryColla2}>
                    Foster interdisciplinary collaboration:
                  </b>
                </span>
                <span>
                  <span className={styles.span}>{` `}</span>
                  <span>
                    We believe that the most groundbreaking discoveries often
                    occur at the intersections of different disciplines. We
                    encourage researchers to explore innovative connections
                    between fields and promote a holistic approach to
                    problem-solving.
                  </span>
                </span>
              </p>
              <p className={styles.disseminateHighQualityResea}>
                <span className={styles.disseminateHighQualityResea1}>
                  <b className={styles.disseminateHighQualityResea2}>
                    Disseminate high-quality research:
                  </b>
                </span>
                <span>
                  <span className={styles.span1}>{` `}</span>
                  <span>
                    We are committed to maintaining rigorous peer-review
                    standards to ensure the publication of only the most
                    credible and impactful research.
                  </span>
                </span>
              </p>
              <p className={styles.facilitateGlobalKnowledgeEx}>
                <span className={styles.facilitateGlobalKnowledgeEx1}>
                  <b className={styles.facilitateGlobalKnowledge}>
                    Facilitate global knowledge exchange:
                  </b>
                </span>
                <span>
                  <span className={styles.span2}>{` `}</span>
                  <span>
                    We aim to connect researchers from around the world,
                    fostering a global community dedicated to advancing human
                    knowledge.
                  </span>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.features}>
          <div className={styles.featuresHeader}>
            <h2 className={styles.authorsDesk}>Author’s Desk</h2>
            <div className={styles.featureIcons}>
              <div className={styles.featuresSeparator} />
              <div className={styles.currentIssue}>
                <div className={styles.currentIssueIcon}>
                  <img
                    className={styles.vectorIcon}
                    loading="lazy"
                    alt=""
                    src="/vector8.svg"
                  />
                </div>
                <div className={styles.currentIssue1}>Current Issue </div>
              </div>
              <div className={styles.iconWrapperParent}>
                <div className={styles.iconWrapper}>
                  <img
                    className={styles.featureIconsList}
                    loading="lazy"
                    alt=""
                    src="/vector8.svg"
                  />
                </div>
                <div className={styles.indexing}>Indexing</div>
              </div>
              <div className={styles.frameParent}>
                <div className={styles.vectorWrapper}>
                  <img
                    className={styles.vectorIcon1}
                    loading="lazy"
                    alt=""
                    src="/vector8.svg"
                  />
                </div>
                <div className={styles.openAccess}>Open Access</div>
              </div>
              <div className={styles.frameGroup}>
                <div className={styles.vectorContainer}>
                  <img
                    className={styles.vectorIcon2}
                    loading="lazy"
                    alt=""
                    src="/vector8.svg"
                  />
                </div>
                <div className={styles.authorsGuidelines}>
                  Author's Guidelines
                </div>
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.vectorFrame}>
                  <img
                    className={styles.vectorIcon3}
                    loading="lazy"
                    alt=""
                    src="/vector8.svg"
                  />
                </div>
                <div className={styles.callForPaper}>Call For Paper</div>
              </div>
              <div className={styles.frameDiv}>
                <div className={styles.vectorWrapper1}>
                  <img
                    className={styles.vectorIcon4}
                    loading="lazy"
                    alt=""
                    src="/vector8.svg"
                  />
                </div>
                <div className={styles.onlineSubmission}>Online Submission</div>
              </div>
              <div className={styles.frameParent1}>
                <div className={styles.vectorWrapper2}>
                  <img
                    className={styles.vectorIcon5}
                    alt=""
                    src="/vector8.svg"
                  />
                </div>
                <div className={styles.reviewerPolicy}>Reviewer Policy</div>
              </div>
              <div className={styles.frameParent2}>
                <div className={styles.vectorWrapper3}>
                  <img
                    className={styles.vectorIcon6}
                    alt=""
                    src="/vector8.svg"
                  />
                </div>
                <div className={styles.reviewerGuidelines}>
                  Reviewer Guidelines
                </div>
              </div>
              <div className={styles.frameParent3}>
                <div className={styles.vectorWrapper4}>
                  <img
                    className={styles.vectorIcon7}
                    alt=""
                    src="/vector8.svg"
                  />
                </div>
                <div className={styles.plagiarismPolicies}>
                  Plagiarism Policies
                </div>
              </div>
              <div className={styles.withdrawal}>
                <div className={styles.withdrawalIcon}>
                  <img
                    className={styles.vectorIcon8}
                    alt=""
                    src="/vector8.svg"
                  />
                </div>
                <div className={styles.withdrawalPolicies}>
                  Withdrawal Policies
                </div>
              </div>
            </div>
          </div>
          <div className={styles.submission}>
            <button className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <b className={styles.submitArticle}>Submit Article</b>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
};

export default Hero;
