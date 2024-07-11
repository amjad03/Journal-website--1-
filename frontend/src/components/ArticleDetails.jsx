import PropTypes from "prop-types";
import styles from "./ArticleDetails.module.css";

const ArticleDetails = ({ className = "" }) => {
  return (
    <section className={[styles.articleDetails, className].join(" ")}>
      <form className={styles.articleHeader}>
        <div className={styles.articleInfo}>
          <div className={styles.infoLabelsParent}>
            <div className={styles.infoLabels}>
              <div className={styles.infoLabelsChild} />
              <div className={styles.authors}>Author(s):</div>
            </div>
            <div className={styles.articleInfoValues}>
              <div className={styles.articleInfoValuesChild} />
              <input
                className={styles.mukeshKumarMeenaJb}
                placeholder="Mukesh Kumar Meena, J.B. Khan"
                type="text"
              />
            </div>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.country}>Country</div>
            </div>
            <div className={styles.rectangleGroup}>
              <div className={styles.frameItem} />
              <input className={styles.india} placeholder="India" type="text" />
            </div>
          </div>
          <div className={styles.articleContent}>
            <div className={styles.abstractTitleParent}>
              <div className={styles.abstractTitle}>
                <div className={styles.abstractTitleChild} />
                <div className={styles.abstract}>Abstract</div>
              </div>
              <div className={styles.abstractRect} />
            </div>
            <div className={styles.thisStudyPresentsContainer}>
              <p className={styles.thisStudyPresents}>
                This study presents a comprehensive phytosociological analysis
                of tree species in the Dabla beed area of Churu District,
                Rajasthan, India, exploring seasonal variations in species
                composition, diversity, dominance, and evenness. The research
                was conducted across three seasons: rainy, winter, and summer,
                utilizing quadrat sampling methods to assess various ecological
                parameters. The findings reveal distinct seasonal shifts in the
                dominance and distribution of key species. During the rainy
                season, species such as Acacia senegal and Acacia tortilis
                exhibit high dominance and contribute to elevated species
                diversity and evenness. In winter, Maytenus emarginata and
                Acacia senegal emerge as prominent species, maintaining moderate
                diversity with increased dominance. The summer season sees a
                notable decline in diversity and evenness, accompanied by
                heightened dominance, with Calotropis procera and Clerodendrum
                phlomidis being particularly influential. These seasonal
                dynamics underscore the importance of adaptive management and
                conservation strategies to maintain the ecological integrity and
                biodiversity of the tree community in this arid region. The
                study highlights the critical need for targeted conservation
                efforts to ensure the sustainability of the diverse and dynamic
                tree populations in the Dabla beed area.
              </p>
            </div>
            <div className={styles.keywordsContentParent}>
              <div className={styles.keywordsContent}>
                <div className={styles.keywordsContentChild} />
                <div className={styles.keywords}>Keywords</div>
              </div>
              <div className={styles.keywordsContent1}>
                <div className={styles.keywordsContentItem} />
                <div className={styles.phytosociologicalAnalysisTr}>
                  Phytosociological analysis, tree species diversity, seasonal
                  variation, ecological dominance, conservation strategies
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.rectangleContainer}>
              <div className={styles.frameInner} />
              <div className={styles.field}>Field</div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.rectangleDiv} />
              <input
                className={styles.biologyAgriculture}
                placeholder={`Biology > Agriculture / Botany`}
                type="text"
              />
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.rectangleParent1}>
              <div className={styles.frameChild1} />
              <div className={styles.publishedIn}>Published In</div>
            </div>
            <div className={styles.rectangleParent2}>
              <div className={styles.frameChild2} />
              <input
                className={styles.volume6Issue}
                placeholder="Volume 6, Issue 3, May-June 2024"
                type="text"
              />
            </div>
          </div>
          <div className={styles.groupDiv}>
            <div className={styles.rectangleParent3}>
              <div className={styles.frameChild3} />
              <div className={styles.publishedOn}>Published On</div>
            </div>
            <div className={styles.rectangleParent4}>
              <div className={styles.frameChild4} />
              <div className={styles.div}>2024-06-30</div>
            </div>
          </div>
          <div className={styles.frameParent1}>
            <textarea
              className={styles.frameTextarea}
              placeholder="Cite This"
              rows={4}
              cols={11}
            />
            <div className={styles.rectangleParent5}>
              <div className={styles.frameChild5} />
              <div className={styles.phytosociologicalStudyOf}>
                Phytosociological Study of Tree Species of Dabla Beed Area,
                Churu District Rajasthan, India - Mukesh Kumar Meena, J.B.
                Khan - IJFMR Volume 6, Issue 3, May-June 2024. DOI
                10.36948/ijfmr.2024.v06i03.24001
              </div>
            </div>
          </div>
          <div className={styles.frameParent2}>
            <div className={styles.rectangleParent6}>
              <div className={styles.frameChild6} />
              <div className={styles.doi}>DOI</div>
            </div>
            <div className={styles.rectangleParent7}>
              <div className={styles.frameChild7} />
              <input
                className={styles.httpsdoiorg1036948ijfmr}
                placeholder="https://doi.org/10.36948/ijfmr.2024.v06i03.24001"
                type="text"
              />
            </div>
          </div>
          <div className={styles.frameParent3}>
            <div className={styles.rectangleParent8}>
              <div className={styles.frameChild8} />
              <div className={styles.shortDoi}>Short DOI</div>
            </div>
            <div className={styles.rectangleParent9}>
              <div className={styles.frameChild9} />
              <input
                className={styles.httpsdoiorggt24vz}
                placeholder="https://doi.org/gt24vz"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.footerTop}>
            <div className={styles.footerTopLeft}>
              <div className={styles.authorsDesk}>
                <h2 className={styles.authorsDesk1}>Author’s Desk</h2>
                <div className={styles.footerTopLinks}>
                  <div className={styles.footerTopLinksChild} />
                  <div className={styles.currentIssue}>
                    <div className={styles.issueIcon}>
                      <img
                        className={styles.vectorIcon}
                        loading="lazy"
                        alt=""
                        src="/vector8.svg"
                      />
                    </div>
                    <div className={styles.currentIssue1}>Current Issue </div>
                  </div>
                  <div className={styles.linkIcons}>
                    <div className={styles.icon}>
                      <img
                        className={styles.vectorIcon1}
                        loading="lazy"
                        alt=""
                        src="/vector8.svg"
                      />
                    </div>
                    <div className={styles.indexing}>Indexing</div>
                  </div>
                  <div className={styles.linkIcons1}>
                    <div className={styles.vectorWrapper}>
                      <img
                        className={styles.vectorIcon2}
                        loading="lazy"
                        alt=""
                        src="/vector8.svg"
                      />
                    </div>
                    <div className={styles.openAccess}>Open Access</div>
                  </div>
                  <div className={styles.linkIcons2}>
                    <div className={styles.vectorContainer}>
                      <img
                        className={styles.vectorIcon3}
                        loading="lazy"
                        alt=""
                        src="/vector8.svg"
                      />
                    </div>
                    <div className={styles.authorsGuidelines}>
                      Author's Guidelines
                    </div>
                  </div>
                  <div className={styles.linkIcons3}>
                    <div className={styles.vectorFrame}>
                      <img
                        className={styles.vectorIcon4}
                        loading="lazy"
                        alt=""
                        src="/vector8.svg"
                      />
                    </div>
                    <div className={styles.callForPaper}>Call For Paper</div>
                  </div>
                  <div className={styles.linkIcons4}>
                    <div className={styles.vectorWrapper1}>
                      <img
                        className={styles.vectorIcon5}
                        loading="lazy"
                        alt=""
                        src="/vector8.svg"
                      />
                    </div>
                    <div className={styles.onlineSubmission}>
                      Online Submission
                    </div>
                  </div>
                  <div className={styles.linkIcons5}>
                    <div className={styles.vectorWrapper2}>
                      <img
                        className={styles.vectorIcon6}
                        loading="lazy"
                        alt=""
                        src="/vector8.svg"
                      />
                    </div>
                    <div className={styles.reviewerPolicy}>Reviewer Policy</div>
                  </div>
                  <div className={styles.linkIcons6}>
                    <div className={styles.vectorWrapper3}>
                      <img
                        className={styles.vectorIcon7}
                        loading="lazy"
                        alt=""
                        src="/vector8.svg"
                      />
                    </div>
                    <div className={styles.reviewerGuidelines}>
                      Reviewer Guidelines
                    </div>
                  </div>
                  <div className={styles.linkIcons7}>
                    <div className={styles.vectorWrapper4}>
                      <img
                        className={styles.vectorIcon8}
                        loading="lazy"
                        alt=""
                        src="/vector8.svg"
                      />
                    </div>
                    <div className={styles.plagiarismPolicies}>
                      Plagiarism Policies
                    </div>
                  </div>
                  <div className={styles.withdrawalPolicies}>
                    <div className={styles.policiesIcon}>
                      <img
                        className={styles.vectorIcon9}
                        loading="lazy"
                        alt=""
                        src="/vector8.svg"
                      />
                    </div>
                    <div className={styles.withdrawalPolicies1}>
                      Withdrawal Policies
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.submitArticle}>
                <button className={styles.groupButton}>
                  <div className={styles.frameChild10} />
                  <b className={styles.submitArticle1}>Submit Article</b>
                </button>
              </div>
            </div>
            <div className={styles.downloads}>
              <div className={styles.menuscriptTemplate}>
                <h2 className={styles.downloads1}>Downloads</h2>
                <div className={styles.template}>
                  <div className={styles.templateChild} />
                  <div className={styles.templateIcon}>
                    <div className={styles.vectorWrapper5}>
                      <img
                        className={styles.vectorIcon10}
                        loading="lazy"
                        alt=""
                        src="/vector8.svg"
                      />
                    </div>
                    <div className={styles.menuscriptTemplate1}>
                      Menuscript Template
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.downloadLinks}>
                <div className={styles.downloadIcons}>
                  <img
                    className={styles.vectorIcon11}
                    loading="lazy"
                    alt=""
                    src="/vector8.svg"
                  />
                </div>
                <div className={styles.copyrightForm}>Copyright form</div>
              </div>
              <div className={styles.downloadLinks1}>
                <div className={styles.vectorWrapper6}>
                  <img
                    className={styles.vectorIcon12}
                    loading="lazy"
                    alt=""
                    src="/vector8.svg"
                  />
                </div>
                <div className={styles.coverPage}>Cover Page</div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

ArticleDetails.propTypes = {
  className: PropTypes.string,
};

export default ArticleDetails;
