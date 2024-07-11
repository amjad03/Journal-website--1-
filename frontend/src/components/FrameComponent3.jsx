import FrameComponent from "./FrameComponent";
import FrameComponent1 from "./FrameComponent1";
import PropTypes from "prop-types";
import styles from "./FrameComponent3.module.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section className={[styles.homePageInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.lineWrapper}>
          <div className={styles.frameChild} />
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.browseJournalsByDisciplineWrapper}>
            <h1 className={styles.browseJournalsBy}>
              Browse journals by discipline
            </h1>
          </div>
          <div className={styles.frameContainer}>
            <FrameComponent healthSciences="Health Sciences" />
            <FrameComponent1
              lifeBiomedical={`Life & Biomedical`}
              sciences="Sciences"
            />
            <FrameComponent1
              lifeBiomedical={`Materials Sciences &`}
              sciences="Engineering"
            />
            <FrameComponent1
              lifeBiomedical={`Social Sciences &`}
              sciences="Humanities"
            />
            <FrameComponent healthSciences="All Journals / Papers" />
          </div>
        </div>
        <div className={styles.lineContainer}>
          <div className={styles.frameItem} />
        </div>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
