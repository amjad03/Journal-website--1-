
import FooterLinks from "../components/FooterLinks";
import Publications from "../components/Publications";
import PaperAbstractDuplicateDetai from "../components/PaperAbstractDuplicateDetai";
import Publication from "../components/Publication";
import Publication1 from "../components/Publication1";
import Footer from "../components/Footer";
import styles from "./PublicationsPage.module.css";
import Header from "../components/NewCustomComponents/Header";

const PublicationsPage = () => {
  return (
    <div className={styles.publicationsPage}>
      
      <Header/>
      <section className={styles.journalDescription}>
      
    
        <FooterLinks />
        <Publications />
      </section>
      <PaperAbstractDuplicateDetai />
      <section className={styles.paperTitle}>
        <div className={styles.frameGroup}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.frameContainer}>
              <div className={styles.noamChomskysContributionToParent}>
                <h3 className={styles.noamChomskysContribution}>
                  Noam Chomsky's Contribution to Linguistics
                </h3>
                <div className={styles.authorsAshankChaudharySParent}>
                  <div className={styles.authorsAshankChaudharySContainer}>
                    <p className={styles.authorsAshankChaudharyS}>
                      Author(s): Ashank Chaudhary, Shabana Singh
                    </p>
                    <p className={styles.countryIndia}>Country: India</p>
                  </div>
                  <div className={styles.frameWrapper}>
                    <button className={styles.rectangleGroup}>
                      <div className={styles.frameItem} />
                      <img
                        className={styles.frameInner}
                        alt=""
                        src="/group-63.svg"
                      />
                      <div className={styles.viewPdfWrapper}>
                        <div className={styles.viewPdf}>View PDF</div>
                      </div>
                      <div className={styles.vectorWrapper}>
                        <img
                          className={styles.vectorIcon}
                          alt=""
                          src="/vector2.svg"
                        />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.lineWrapper}>
                <div className={styles.lineDiv} />
              </div>
            </div>
          </div>
          <div className={styles.rectangleContainer}>
            <div className={styles.rectangleDiv} />
            <div className={styles.frameDiv}>
              <div className={styles.innovativeEcofriendlyCoconutParent}>
                <h3 className={styles.innovativeEcofriendlyCoconut}>
                  Innovative Ecofriendly Coconut Husk Brushes
                </h3>
                <div className={styles.authorsKrishnamurthyLBhaParent}>
                  <div className={styles.authorsKrishnamurthyLBhaContainer}>
                    <p className={styles.authorsKrishnamurthyLBha}>
                      Author(s): Krishnamurthy L Bhat
                    </p>
                    <p className={styles.countryIndia1}>Country: India</p>
                  </div>
                  <div className={styles.searchField}>
                    <button className={styles.groupButton}>
                      <div className={styles.frameChild1} />
                      <img
                        className={styles.frameChild2}
                        alt=""
                        src="/group-63.svg"
                      />
                      <div className={styles.userProfile}>
                        <div className={styles.viewPdf1}>View PDF</div>
                      </div>
                      <div className={styles.profileLabel}>
                        <img
                          className={styles.pageHeaderIcon}
                          alt=""
                          src="/vector2.svg"
                        />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.journalInfo}>
                <div className={styles.journalTitle} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.paperTitle1}>
        <div className={styles.frameParent1}>
          <div className={styles.rectangleParent1}>
            <div className={styles.frameChild3} />
            <div className={styles.frameParent2}>
              <div className={styles.coOperationIdeaAndMovemenParent}>
                <h3 className={styles.coOperationIdeaAnd}>
                  Co-operation: Idea and Movement: European Experience
                </h3>
                <div className={styles.authorsMohitAggarwalCounParent}>
                  <div className={styles.authorsMohitAggarwalCounContainer}>
                    <p className={styles.authorsMohitAggarwal}>
                      Author(s): Mohit Aggarwal
                    </p>
                    <p className={styles.countryIndia2}>Country: India</p>
                  </div>
                  <div className={styles.frameWrapper1}>
                    <button className={styles.rectangleParent2}>
                      <div className={styles.frameChild4} />
                      <img
                        className={styles.frameChild5}
                        alt=""
                        src="/group-63.svg"
                      />
                      <div className={styles.viewPdfContainer}>
                        <div className={styles.viewPdf2}>View PDF</div>
                      </div>
                      <div className={styles.vectorContainer}>
                        <img
                          className={styles.vectorIcon1}
                          alt=""
                          src="/vector2.svg"
                        />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.lineContainer}>
                <div className={styles.frameChild6} />
              </div>
            </div>
          </div>
          <div className={styles.rectangleParent3}>
            <div className={styles.frameChild7} />
            <div className={styles.frameParent3}>
              <div className={styles.effectOfMordantsOnPercentaParent}>
                <h3
                  className={styles.effectOfMordants}
                >{`Effect of Mordants on Percentage Absorption of Rubia Cardifolia `}</h3>
                <div className={styles.authorsAhaanMehtaCountryParent}>
                  <div className={styles.authorsAhaanMehtaCountryContainer}>
                    <p className={styles.authorsAhaanMehta}>
                      Author(s): Ahaan Mehta
                    </p>
                    <p className={styles.countryIndia3}>Country: India</p>
                  </div>
                  <div className={styles.frameWrapper2}>
                    <button className={styles.rectangleParent4}>
                      <div className={styles.frameChild8} />
                      <img
                        className={styles.frameChild9}
                        alt=""
                        src="/group-63.svg"
                      />
                      <div className={styles.viewPdfFrame}>
                        <div className={styles.viewPdf3}>View PDF</div>
                      </div>
                      <div className={styles.vectorFrame}>
                        <img
                          className={styles.vectorIcon2}
                          alt=""
                          src="/vector2.svg"
                        />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.lineFrame}>
                <div className={styles.frameChild10} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Publication />
      <div className={styles.paperTitle2}>
        <div className={styles.paperTitleChild} />
      </div>
      <Publication1 />
      <div className={styles.publicationsPageChild} />
      <div className={styles.paperTitle3}>
        <div className={styles.paperTitleItem} />
      </div>
      <Footer
        cooltext4611840960970061="/cooltext461184096097006-1@2x.png"
        bookPng1="/bookpng-11@2x.png"
        logo="/vector-13.svg"
      />
    </div>
  );
};

export default PublicationsPage;
