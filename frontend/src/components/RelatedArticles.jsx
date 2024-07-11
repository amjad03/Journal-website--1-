import PropTypes from "prop-types";
import styles from "./RelatedArticles.module.css";

const RelatedArticles = ({ className = "" }) => {
  return (
    <section className={[styles.relatedArticles, className].join(" ")}>
      <div className={styles.firstArticle}>
        <div className={styles.articleList}>
          <div className={styles.articleDownload}>
            <div className={styles.downloadLink}>
              <button className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <img className={styles.frameItem} alt="" src="/group-63.svg" />
                <div className={styles.viewDownloadPdfFileWrapper}>
                  <div className={styles.viewDownload}>
                    View   / Download PDF File
                  </div>
                </div>
              </button>
            </div>
            <div className={styles.separator} />
            <div className={styles.recommendationTitle}>
              <h1 className={styles.youMayAlso}>
                You may also like these articles
              </h1>
            </div>
          </div>
        </div>
        <div className={styles.relatedArticles1}>
          <div className={styles.relatedArticle}>
            <div className={styles.articleThumbnail} />
            <div className={styles.articleInfo}>
              <h3 className={styles.phytosociologicalStudyOf}>
                Phytosociological Study of Tree Species of Dabla Beed Area,
                Churu District Rajasthan, India
              </h3>
              <div className={styles.articleAuthors}>
                <div className={styles.authorsMukeshKumarMeenaContainer}>
                  <p className={styles.authorsMukeshKumarMeena}>
                    Author(s): Mukesh Kumar Meena, J.B. Khan
                  </p>
                  <p className={styles.countryIndia}>Country: India</p>
                </div>
                <div className={styles.articleActions}>
                  <button className={styles.rectangleGroup}>
                    <div className={styles.frameInner} />
                    <img
                      className={styles.groupIcon}
                      alt=""
                      src="/group-63.svg"
                    />
                    <div className={styles.viewPDFButtons}>
                      <div className={styles.viewPdf}>View PDF</div>
                    </div>
                    <div className={styles.downloadButtons}>
                      <img
                        className={styles.downloadIcon}
                        alt=""
                        src="/vector2.svg"
                      />
                    </div>
                  </button>
                </div>
              </div>
              <div className={styles.separator1}>
                <div className={styles.separator2} />
              </div>
            </div>
          </div>
          <div className={styles.relatedArticle1}>
            <div className={styles.relatedArticleChild} />
            <div className={styles.impactOfSocialMediaOnPurcParent}>
              <h3 className={styles.impactOfSocial}>
                Impact of Social Media on Purchase Making Decision of Consumers
              </h3>
              <div className={styles.authorsMeetaMultaniCountParent}>
                <div className={styles.authorsMeetaMultaniCountContainer}>
                  <p className={styles.authorsMeetaMultani}>
                    Author(s): Meeta Multani
                  </p>
                  <p className={styles.countryIndia1}>Country: India</p>
                </div>
                <div className={styles.frameWrapper}>
                  <button className={styles.rectangleContainer}>
                    <div className={styles.rectangleDiv} />
                    <img
                      className={styles.frameChild1}
                      alt=""
                      src="/group-63.svg"
                    />
                    <div className={styles.viewPdfWrapper}>
                      <div className={styles.viewPdf1}>View PDF</div>
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
              <div className={styles.lineWrapper}>
                <div className={styles.lineDiv} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.articleOne}>
          <div className={styles.articleOneHeader}>
            <div className={styles.rect} />
            <h3 className={styles.noamChomskysContribution}>
              Noam Chomsky's Contribution to Linguistics
            </h3>
            <div className={styles.articleOneAuthors}>
              <div className={styles.authorsAshankChaudharySContainer}>
                <p className={styles.authorsAshankChaudharyS}>
                  Author(s): Ashank Chaudhary, Shabana Singh
                </p>
                <p className={styles.countryIndia2}>Country: India</p>
              </div>
              <div className={styles.articleOneButtons}>
                <button className={styles.groupButton}>
                  <div className={styles.frameChild2} />
                  <img
                    className={styles.frameChild3}
                    alt=""
                    src="/group-63.svg"
                  />
                  <div className={styles.buttonOne}>
                    <div className={styles.viewPdf2}>View PDF</div>
                  </div>
                  <div className={styles.buttonOneIcon}>
                    <img className={styles.icon} alt="" src="/vector2.svg" />
                  </div>
                </button>
              </div>
            </div>
            <div className={styles.separator3}>
              <div className={styles.separator4} />
            </div>
          </div>
          <div className={styles.articleInfo1}>
            <div className={styles.thumbnail} />
            <h3 className={styles.innovativeEcofriendlyCoconut}>
              Innovative Ecofriendly Coconut Husk Brushes
            </h3>
            <div className={styles.articleAuthors1}>
              <div className={styles.authorsKrishnamurthyLBhaContainer}>
                <p className={styles.authorsKrishnamurthyLBha}>
                  Author(s): Krishnamurthy L Bhat
                </p>
                <p className={styles.countryIndia3}>Country: India</p>
              </div>
              <div className={styles.articleActions1}>
                <button className={styles.rectangleParent1}>
                  <div className={styles.frameChild4} />
                  <img
                    className={styles.frameChild5}
                    alt=""
                    src="/group-63.svg"
                  />
                  <div className={styles.viewPDFButtons1}>
                    <div className={styles.viewPdf3}>View PDF</div>
                  </div>
                  <div className={styles.downloadButtons1}>
                    <img
                      className={styles.downloadIcon1}
                      alt=""
                      src="/vector2.svg"
                    />
                  </div>
                </button>
              </div>
            </div>
            <div className={styles.separator5}>
              <div className={styles.separator6} />
            </div>
          </div>
        </div>
        <div className={styles.articleOne1}>
          <div className={styles.frameDiv}>
            <div className={styles.frameChild6} />
            <h3 className={styles.coOperationIdeaAnd}>
              Co-operation: Idea and Movement: European Experience
            </h3>
            <div className={styles.authorsMohitAggarwalCounParent}>
              <div className={styles.authorsMohitAggarwalCounContainer}>
                <p className={styles.authorsMohitAggarwal}>
                  Author(s): Mohit Aggarwal
                </p>
                <p className={styles.countryIndia4}>Country: India</p>
              </div>
              <div className={styles.frameContainer}>
                <button className={styles.rectangleParent2}>
                  <div className={styles.frameChild7} />
                  <img
                    className={styles.frameChild8}
                    alt=""
                    src="/group-63.svg"
                  />
                  <div className={styles.viewPdfContainer}>
                    <div className={styles.viewPdf4}>View PDF</div>
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
            <div className={styles.lineContainer}>
              <div className={styles.frameChild9} />
            </div>
          </div>
          <div className={styles.rectangleParent3}>
            <div className={styles.frameChild10} />
            <h3
              className={styles.effectOfMordants}
            >{`Effect of Mordants on Percentage Absorption of Rubia Cardifolia `}</h3>
            <div className={styles.authorsAhaanMehtaCountryParent}>
              <div className={styles.authorsAhaanMehtaCountryContainer}>
                <p className={styles.authorsAhaanMehta}>
                  Author(s): Ahaan Mehta
                </p>
                <p className={styles.countryIndia5}>Country: India</p>
              </div>
              <div className={styles.frameWrapper1}>
                <button className={styles.rectangleParent4}>
                  <div className={styles.frameChild11} />
                  <img
                    className={styles.frameChild12}
                    alt=""
                    src="/group-63.svg"
                  />
                  <div className={styles.viewPdfFrame}>
                    <div className={styles.viewPdf5}>View PDF</div>
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
            <div className={styles.lineFrame}>
              <div className={styles.frameChild13} />
            </div>
          </div>
        </div>
        <div className={styles.separator7}>
          <div className={styles.separator8} />
        </div>
      </div>
    </section>
  );
};

RelatedArticles.propTypes = {
  className: PropTypes.string,
};

export default RelatedArticles;
