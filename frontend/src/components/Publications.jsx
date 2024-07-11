import PropTypes from "prop-types";
import styles from "./Publications.module.css";

const Publications = ({ className = "" }) => {
  return (
    <div className={[styles.publications, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.currentIssueThumbnailParent}>
          <div className={styles.currentIssueThumbnail} />
          <div className={styles.currentIssueDetails}>
            <div className={styles.volume1Issue}>
              Volume 1, Issue 1 (January-March 2023)
            </div>
            <div className={styles.currentIssueDivider}>
              <div className={styles.paperAbstractDuplicate} />
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.volume1Issue2AprilJuneParent}>
              <div className={styles.volume1IssueContainer}>
                <p className={styles.volume1Issue1}>{`Volume 1, Issue 2 `}</p>
                <p className={styles.aprilJune2023}>(April-June 2023)</p>
              </div>
              <div className={styles.lineWrapper}>
                <div className={styles.frameItem} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameInner} />
            <div className={styles.volume1Issue3JulySeptemWrapper}>
              <div className={styles.volume1IssueContainer1}>
                <p className={styles.volume1Issue2}>{`Volume 1, Issue 3 `}</p>
                <p className={styles.julySeptember2023}>
                  (July-September 2023)
                </p>
              </div>
            </div>
            <div className={styles.lineContainer}>
              <div className={styles.lineDiv} />
            </div>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameInner} />
            <div className={styles.volume1Issue3JulySeptemWrapper}>
              <div className={styles.volume1IssueContainer1}>
                <p className={styles.volume1Issue2}>{`Volume 1, Issue 4 `}</p>
                <p className={styles.julySeptember2023}>
                  (July-September 2023)
                </p>
              </div>
            </div>
            <div className={styles.lineContainer}>
              <div className={styles.lineDiv} />
            </div>
          </div>
        </div>
        {/* <div className={styles.frameDiv}>
          <textarea
            className={styles.frameTextarea}
            placeholder={`Volume 1, Issue 4 
(October-December 2023)`}
            rows={5}
            cols={11}
          />
        </div> */}
      </div>
    </div>
  );
};

Publications.propTypes = {
  className: PropTypes.string,
};

export default Publications;
