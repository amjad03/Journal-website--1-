import InputRows from "./InputRows";
import PropTypes from "prop-types";
import styles from "./AuthorFields.module.css";

const AuthorFields = ({ className = "" }) => {


  
  return (
    <div className={[styles.authorFields, className].join(" ")}>
      <div className={styles.authorInputs}>
        <div className={styles.additionalAuthors}>
          <div className={styles.authorFourDetails}>
            <div className={styles.singleAuthor}>
              <div className={styles.authorNameInput}>
                <div className={styles.authorNamePlaceholder}>#</div>
                <div className={styles.name}>Name</div>
              </div>
              <div className={styles.designation}>Designation</div>
            </div>
            <div className={styles.authorDesignationInput}>
              <div className={styles.communicationAddressLabelWrapper}>
                <div className={styles.communicationAddressLabel}>1.</div>
              </div>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <input
                  className={styles.inTitleCase}
                  placeholder="In title case"
                  type="text"
                />
              </div>
              <div className={styles.rectangleGroup}>
                <div className={styles.frameItem} />
                <input
                  className={styles.inTitleCase1}
                  placeholder="In title case"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className={styles.authorRows}>
            <div className={styles.fieldsRows}>
              <div className={styles.additionalInputs}>2.</div>
            </div>
            <div className={styles.rectangleContainer}>
              <div className={styles.frameInner} />
              <div className={styles.inTitleCase2}>In title case</div>
            </div>
            <div className={styles.groupDiv}>
              <div className={styles.rectangleDiv} />
              <div className={styles.inTitleCase3}>In title case</div>
            </div>
          </div>
          <div className={styles.authorRows1}>
            <div className={styles.wrapper}>
              <div className={styles.div}>3.</div>
            </div>
            <div className={styles.rectangleParent1}>
              <div className={styles.frameChild1} />
              <div className={styles.inTitleCase4}>In title case</div>
            </div>
            <div className={styles.rectangleParent2}>
              <div className={styles.frameChild2} />
              <div className={styles.inTitleCase5}>In title case</div>
            </div>
          </div>
          <div className={styles.authorRows2}>
            <div className={styles.container}>
              <div className={styles.div1}>4.</div>
            </div>
            <div className={styles.rectangleParent3}>
              <div className={styles.frameChild3} />
              <div className={styles.inTitleCase6}>In title case</div>
            </div>
            <div className={styles.rectangleParent4}>
              <div className={styles.frameChild4} />
              <div className={styles.inTitleCase7}>In title case</div>
            </div>
          </div>
          <div className={styles.authorRows3}>
            <div className={styles.frame}>
              <div className={styles.div2}>5.</div>
            </div>
            <div className={styles.rectangleParent5}>
              <div className={styles.frameChild5} />
              <div className={styles.inTitleCase8}>In title case</div>
            </div>
            <div className={styles.rectangleParent6}>
              <div className={styles.frameChild6} />
              <div className={styles.inTitleCase9}>In title case</div>
            </div>
          </div>
        </div>
        <div className={styles.inputRows}>
          <div className={styles.inputNamesRows}>
            <div className={styles.organization}>Organization</div>
            <div className={styles.rectangleParent7}>
              <div className={styles.frameChild7} />
              <input
                className={styles.inTitleCase10}
                placeholder="In title case"
                type="text"
              />
            </div>
          </div>
          <div className={styles.rectangleParent8}>
            <div className={styles.frameChild8} />
            <div className={styles.inTitleCase11}>In title case</div>
          </div>
          <div className={styles.rectangleParent9}>
            <div className={styles.frameChild9} />
            <div className={styles.inTitleCase12}>In title case</div>
          </div>
          <div className={styles.rectangleParent10}>
            <div className={styles.frameChild10} />
            <div className={styles.inTitleCase13}>In title case</div>
          </div>
          <div className={styles.rectangleParent11}>
            <div className={styles.frameChild11} />
            <div className={styles.inTitleCase14}>In title case</div>
          </div>
        </div>
        <InputRows emailAddress="Email Address" />
        <InputRows emailAddress="Mobile Number" />
      </div>
      <div className={styles.addressForm}>
        <div className={styles.areThereMore}>
          Are there more authors? Don't worry; just write the five authors'
          names and we will add other author(s) from your uploaded research
          paper's file.
        </div>
        <div className={styles.rectangleParent12}>
          <div className={styles.frameChild12} />
          <h3 className={styles.addressForCommunication}>
            Address for Communication
          </h3>
        </div>
      </div>
    </div>
  );
};

AuthorFields.propTypes = {
  className: PropTypes.string,
};

export default AuthorFields;
