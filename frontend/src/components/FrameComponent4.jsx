import ResearchItem from "./ResearchItem";
import PropTypes from "prop-types";
import styles from "./FrameComponent4.module.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <section
      className={[styles.researchPapersContentWrapper, className].join(" ")}
    >
      <div className={styles.researchPapersContent}>
        <div className={styles.researchPapersTitle}>
          <h1 className={styles.latestPublishedResearch}>
            Latest Published Research Papers
          </h1>
        </div>
        <div className={styles.researchPapersList}>
          <ResearchItem
            phytosociologicalStudyOfT="Phytosociological Study of Tree Species of Dabla Beed Area, Churu District Rajasthan, India"
            authorsMukeshKumarMeenaJB="Author(s): Mukesh Kumar Meena, J.B. Khan"
          />
          <ResearchItem
            phytosociologicalStudyOfT="Impact of Social Media on Purchase Making Decision of Consumers"
            authorsMukeshKumarMeenaJB="Author(s): Meeta Multani"
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
