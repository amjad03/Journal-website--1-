import PropTypes from "prop-types";
import styles from "./Footer.module.css";

const Footer = ({
  className = "",
  cooltext4611840960970061,
  bookPng1,
  logo,
}) => {
  return (
    <section className={[styles.footer, className].join(" ")}>
      <div className={styles.footerChild} />
      <div className={styles.footerContent}>
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.logoContainer}>
                <img
                  className={styles.cooltext4611840960970061Icon}
                  loading="lazy"
                  alt=""
                  src={cooltext4611840960970061}
                />
              </div>
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
                src={bookPng1}
              />
            </div>
          </div>
          <div className={styles.journalInfo}>
            <b className={styles.internationalJournalOfContainer1}>
              <p
                className={styles.internationalJournalOf1}
              >{`International Journal of Engineering, Science `}</p>
              <p className={styles.technologyAndManagement1}>
                Technology and Management 
              </p>
            </b>
            <div className={styles.ijestmIsA}>
              IJESTM is a scholarly open access, peer reviewed international
              journal with a primary objective to provide the academic community
              and industry for the submission of original research and
              applications related to all subjects..
            </div>
          </div>
          <div className={styles.socialIcons}>
            <div className={styles.iconsParent}>
              <a href="https://facebook.com/AnjumanEngineeringCollegeBhatkal" target="_blank" rel="noopener noreferrer">
                <img
                  className={styles.icons}
                  loading="lazy"
                  alt=""
                  src="/vector4.svg"
                />
              </a>
              <a href="https://instagram.com/anjumandegreecollege" target="_blank" rel="noopener noreferrer">
                <img
                  className={styles.icons1}
                  loading="lazy"
                  alt=""
                  src="/vector5.svg"
                />
              </a>
              <a href="https://linkedin.com/in/anjuman-institute-of-technology-and-management" target="_blank" rel="noopener noreferrer">
                <img
                  className={styles.groupIcon}
                  loading="lazy"
                  alt=""
                  src="/vector3.svg"
                />
              </a>
              <a href="https://twitter.com/anjumanitm" target="_blank" rel="noopener noreferrer">
                <img
                  className={styles.icon}
                  loading="lazy"
                  alt=""
                  src="/group@2x.png"
                />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.contactDetailsWrapper}>
          <div className={styles.contactDetails}>
            <div className={styles.contactTitle}>
              <b className={styles.contactUs}>Contact us</b>
            </div>
            <div className={styles.contactInfo}>
              <div className={styles.feelFreeTo}>
                Feel free to contact us, if you need any queries to be answered
              </div>
              <div className={styles.contactEmail}>
                <div className={styles.emailContainer}>
                  <div className={styles.emailIcon}>
                    <img
                      className={styles.icon1}
                      loading="lazy"
                      alt=""
                      src="/vector6.svg"
                    />
                  </div>
                  <div className={styles.editorijestmcom}>
                    editor@ijestm.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.quickLinksContentWrapper}>
          <div className={styles.quickLinksContent}>
            <div className={styles.quickLinksTitle}>
              <b className={styles.quickLinks}>Quick Links</b>
            </div>
            <div className={styles.linkList}>
              <div className={styles.links}>
                <div className={styles.authorsGuidelines}>
                  Author’s Guidelines
                </div>
              </div>
              <div className={styles.links1}>
                <div className={styles.onlineSubmission}>Online Submission</div>
              </div>
              <div className={styles.links2}>
                <div className={styles.callForPaper}>Call for paper</div>
              </div>
              <div className={styles.links3}>
                <div className={styles.publicationEthics}>
                  Publication Ethics
                </div>
              </div>
              <div className={styles.links4}>
                <div className={styles.reviewerPolicy}>Reviewer Policy</div>
              </div>
              <div className={styles.reviewerGuidelines}>
                Reviewer Guidelines
              </div>
            </div>
          </div>
        </div>
        <div className={styles.servicesContentWrapper}>
          <div className={styles.servicesContent}>
            <div className={styles.servicesTitle}>
              <b className={styles.aimServices}>{`Aim & Services`}</b>
            </div>
            <div className={styles.acceptsOriginalAndContainer}>
              <ul className={styles.acceptsOriginalAndHighQual}>
                <li className={styles.acceptsOriginalAnd}>
                  Accepts original and high quality research and technical
                  papers.
                </li>
                <li className={styles.paperWillPublish}>
                  Paper will publish immediately in current issue after
                  registration.
                </li>
                <li>
                  Authors can download their full papers at any time with
                  digital certificate.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyrightContentWrapper}>
        <div className={styles.copyrightContent}>
          <div className={styles.separator} />
          <div className={styles.copyrightInfo}>
            <div className={styles.copyrightDetails}>
              <div className={styles.copyright}>{`Copyright `}</div>
              <div className={styles.logoContainer1}>
                <img
                  className={styles.logoIcon}
                  loading="lazy"
                  alt=""
                  src={logo}
                />
              </div>
              <div className={styles.aitmAll}>
                2024 AITM | All rights reserved
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  cooltext4611840960970061: PropTypes.string,
  bookPng1: PropTypes.string,
  logo: PropTypes.string,
};

export default Footer;
