import PropTypes from "prop-types";
import styles from "./Fieldset.module.css";





const Fieldset = ({ className = "" }) => {
  return (
    <div className={[styles.fieldset, className].join(" ")}>
      <div className={styles.inputFields}>
        <div className={styles.inputLabels}>
          <div className={styles.fieldNames}>
            <div className={styles.title}>Title</div>
            <div className={styles.abstract}>Abstract</div>
            <div className={styles.keywords}>Keywords</div>
            <div className={styles.researchArea}>Research Area</div>
            <div className={styles.selectResearchPaper}>
              Select Research Paper
            </div>
            <div className={styles.messageToEditor}>
              Message to Editor or Reviewer
            </div>
          </div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <input
              className={styles.pleaseWriteIn}
              placeholder="Please write in title case (Not in CAPITAL CASE)"
              type="text"
            />
          </div>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <input
              className={styles.shortBackgroundInformation}
              placeholder="Short background information about the research"
              type="text"
            />
          </div>
          <div className={styles.rectangleContainer}>
            <div className={styles.frameInner} />
            <input
              className={styles.commaSpeartedList}
              placeholder="Comma spearted list (ex: lorem, epusm, endor...)"
              type="text"
            />
          </div>
          <div className={styles.researchArea1}>
            <div className={styles.groupDiv}>
              <div className={styles.rectangleDiv} />
              <div className={styles.selectResearchArea}>
                Select research area
              </div>
              <div className={styles.dropdownIcon}>
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src="/vector-11.svg"
                />
              </div>
            </div>
            <div className={styles.upload}>
              <div className={styles.fileSelection}>
                <div className={styles.fileInput}>
                  <div className={styles.fileInputChild} />
                  <div className={styles.fileLabel}>
                    <div className={styles.fileLabelChild} />
                    <div className={styles.chooseFile}>Choose file</div>
                  </div>
                  <div className={styles.fileName}>
                    <div className={styles.noFileChosen}>No file chosen</div>
                  </div>
                </div>
              </div>
              <div className={styles.docxOrDoc}>
                (.docx or .doc (Microsoft Office Word) or .odt (Open Document
                Text) file only) (Please format the document in single column
                layout, not in 2 columns.)
              </div>
            </div>
          </div>
          <div className={styles.rectangleParent1}>
            <div className={styles.frameChild1} />
            <div className={styles.enterYourMessage}>
              Enter your message here...
            </div>
          </div>
        </div>
      </div>
      <div className={styles.authors}>
        <div className={styles.rectangleParent2}>
          <div className={styles.frameChild2} />
          <h3 className={styles.authorsDetails}>Authors' Details</h3>
        </div>
        <div className={styles.dontWriteDr}>
          Don't write Dr. Prof. Mr. Mrs. Miss etc. salutations before authors'
          names, these will be removed, these are against international
          standard.
        </div>
      </div>
    </div>
  );
};

Fieldset.propTypes = {
  className: PropTypes.string,
};

export default Fieldset;
