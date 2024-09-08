import React, { useEffect, useState } from 'react';

import PropTypes from "prop-types";
// import styles from "./Publication1.module.css";
import './Publication1.css';
import { db } from '../../../backend/firebase'; // Adjust the import according to your firebase configuration file
import { doc, getDoc } from 'firebase/firestore/lite';

const Publication1 = ({ className = "" }) => {
  const [currentData, setCurrentData] = useState(null);

  let volume = '';
  let issue = '';

  useEffect(() => {
    const fetchData = async () => {
      // Fetch current document
      const currentDoc = await getDoc(doc(db, 'Current', 'current'));
      const currentData = currentDoc.data();
      volume = currentData.volume;
      issue = currentData.issue;
      // console.log(currentData);
      setCurrentData(currentData);
    };
    fetchData();
  }, []);

  const formatDateRange = (issueId) => {
    const dateRanges = {
      'Issue1': 'January-March 2024',
      'Issue2': 'April-June 2024',
      'Issue3': 'July-September 2024',
      'Issue4': 'Octorber-December 2024',
      // Add more mappings here
    };
    return dateRanges[issueId] || 'Unknown Date Range';
  };
  
  return (
    // <section className={[styles.publication, className].join(" ")}>
    //   <div className={styles.currentIssue}>
    //     <div className={styles.issueInfo}>
    //       <div className={styles.currentIssueVolume2IssueWrapper}>
    //         <b className={styles.currentIssueVolumeContainer}>
    //           <p className={styles.currentIssue1}>Current Issue</p>
    //           <p className={styles.volume2Issue}>Volume {currentData != null ? currentData.volume : ''}, Issue {currentData != null ? currentData.issue : ''}  </p>
    //           <p className={styles.julySeptember2024}>{currentData != null ? formatDateRange('Issue'+currentData.issue) : ''}</p>
    //         </b>
    //       </div>
    //       <div className={styles.separator} />
    //     </div>
    //     <a href='/submit-paper-page' className={styles.submissionButton}>
    //       <button className={styles.rectangleParent}>
    //         <div className={styles.frameChild} />
    //         <b className={styles.submitPaper}>Submit Paper</b>
    //       </button>
    //     </a>
    //   </div>
    // </section>
    // <div style={{ backgroundImage: "url('./images/Frame 19.png')"}}>
    //   {/* <img style={{ width: '100%'}} src="./images/Frame 19.png" alt="" /> */}
    //   <div style={{ position: 'absolute', zIndex: '10'}}>
    //     <p className={styles.currentIssue1}>Current Issue</p>
    //     <p className={styles.volume2Issue}>Volume {currentData != null ? currentData.volume : ''}, Issue {currentData != null ? currentData.issue : ''}  </p>
    //     <p className={styles.julySeptember2024}>{currentData != null ? formatDateRange('Issue'+currentData.issue) : ''}</p>
    //   </div>
    // </div>
    <div className='imageConatiner'
      style={{
        position: 'relative',
        backgroundImage: "url('./images/Frame 19.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '400px',
        borderRadius: '12px'
      }}
    >
      <div className='textContainer'
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 10,
          color: 'white',
          fontSize: '24px',
          fontWeight: 'bold',
        }}
        >
          <div className='childTextContianer' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <p className={'currentIssue1'}>Current Issue</p>
            <p className={'volume2Issue'}>Volume {currentData != null ? currentData.volume : ''}, Issue {currentData != null ? currentData.issue : ''}  </p>
            <p className={'julySeptember2024'}>{currentData != null ? formatDateRange('Issue'+currentData.issue) : ''}</p>

            <button className='submitPaper'>Submit Paper</button>
          </div>
    </div>
  </div>
  
  );
};

Publication1.propTypes = {
  className: PropTypes.string,
};

export default Publication1;
