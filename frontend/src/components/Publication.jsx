import ContentWrapper from "./ContentWrapper";
import PropTypes from "prop-types";
import styles from "./Publication.module.css";

const Publication = ({ className = "" }) => {
  return (
    <section className={[styles.publication, className].join(" ")}>
      <div className={styles.studyImpact}>
        <ContentWrapper
          phytosociologicalStudyOfT="Phytosociological Study of Tree Species of Dabla Beed Area, Churu District Rajasthan, India"
          authorsMukeshKumarMeenaJB="Author(s): Mukesh Kumar Meena, J.B. Khan"
        />
        <ContentWrapper
          phytosociologicalStudyOfT="Impact of Social Media on Purchase Making Decision of Consumers"
          authorsMukeshKumarMeenaJB="Author(s): Meeta Multani"
        />
      </div>
    </section>
  );
};

Publication.propTypes = {
  className: PropTypes.string,
};

export default Publication;
