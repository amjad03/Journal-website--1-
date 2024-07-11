import PaperAbstractDuplicateDownl from "./PaperAbstractDuplicateDownl";
import PropTypes from "prop-types";
import styles from "./PaperAbstractDuplicateDetai.module.css";

const PaperAbstractDuplicateDetai = ({ className = "" }) => {
  return (
    <section
      className={[styles.paperAbstractDuplicateDetai, className].join(" ")}
    >
      <div className={styles.paperAbstractDuplicateActio}>
        <PaperAbstractDuplicateDownl
          phytosociologicalStudyOfT="Phytosociological Study of Tree Species of Dabla Beed Area, Churu District Rajasthan, India"
          authorsMukeshKumarMeenaJB="Author(s): Mukesh Kumar Meena, J.B. Khan"
        />
        <PaperAbstractDuplicateDownl
          phytosociologicalStudyOfT="Impact of Social Media on Purchase Making Decision of Consumers"
          authorsMukeshKumarMeenaJB="Author(s): Meeta Multani"
        />
      </div>
    </section>
  );
};

PaperAbstractDuplicateDetai.propTypes = {
  className: PropTypes.string,
};

export default PaperAbstractDuplicateDetai;
