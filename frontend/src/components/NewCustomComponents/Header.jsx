import React, { useEffect, useState, useRef } from 'react';
import PropTypes from "prop-types";
import styles from "./Header.module.css";
import './Header.css'
import { db } from '../../../../backend/firebase'; // Adjust the import according to your firebase configuration file
import { doc, getDoc } from 'firebase/firestore/lite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';


const Header = ({ className = "" }) => {
  const [currentData, setCurrentData] = useState(null);

  const marqueeRef = useRef(null);

  const handleMouseOver = () => {
    if (marqueeRef.current) {
      marqueeRef.current.stop();
    }
  };

  const handleMouseOut = () => {
    if (marqueeRef.current) {
      marqueeRef.current.start();
    }
  };

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
    <header className={[styles.header, className].join(" ")}>
      {/* <nav className={styles.logoBar}>
        <div className={styles.journalNameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.cooltext4611840960970061Wrapper}>
              <img
                className={styles.cooltext4611840960970061Icon}
                loading="lazy"
                alt=""
                src="/cooltext461184096097006-11@2x.png"
              />
            </div>
            <div className={styles.journalNameImageWrapper}>
              <b className={styles.internationalJournalOfContainer}>
                <p
                  className={styles.internationalJournalOf}
                >{`International Journal of Engineering, Science `}</p>
                <p className={styles.technologyAndManagement}>
                  Technology and Management 
                </p>
              </b>
              <img
                className={styles.bookPng1Icon}
                loading="lazy"
                alt=""
                src="/bookpng-11@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.searchBar}>
          <div className={styles.search}>
            <div className={styles.searchChild} />
            <input
              className={styles.searchItem}
              placeholder="Search..."
              type="text"
            />
            <img className={styles.groupIcon} alt="" src="/group.svg" />
          </div>
        </div>
        <div className={styles.profileWrapper}>
          <div className={styles.profileIconWrapper}>
            <img
              className={styles.profileIcon}
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
          </div>
          <a href="/admin-panel" className={styles.profile}>Profile</a>
        </div>
      </nav> */}
      {/* <div className={styles.headerSeparator}>
        <div className={styles.headerSeparatorChild} />
      </div> */}
      {/* <div className={styles.siteName}>
        <h2 className={styles.internationalJournalOf1}>
          International Journal of Engineering, Science Technology and
          Management 
        </h2>
      </div>
      <div className={styles.slogan}>
        <div className={styles.aWidelyIndexedOpenAccessPWrapper}>
          <div className={styles.aWidelyIndexed}>
            A Widely Indexed Open Access Peer Reviewed Multidisciplinary
            International Journal
          </div>
        </div>
        <div className={styles.callForPaper + " " + styles.marquee}>
          {currentData != null ? `Call for paper Volume ${currentData.volume} Issue ${currentData.issue} ${formatDateRange('Issue'+currentData.issue)} * Submit your research`
          : ''}
        </div>
      </div>
      <div className={styles.navbar}>
        <div className={styles.navLinksWrapper}>
          <a href="/" className={styles.rectangleParent4}>
            <div className={styles.frameChild5} />
            <span className={styles.contactUs}>Home</span>
          </a>
          <a href="/aim-scope" className={styles.rectangleParent4}>
            <div className={styles.frameChild5} />
            <span className={styles.contactUs}>{`Aim  & Scope`}</span>
          </a>
          <a href="/editorial-team" className={styles.rectangleParent4}>
            <div className={styles.frameChild5} />
            <span className={styles.contactUs}>Editorial Team</span>
          </a>
          <a href="/submit-paper-page" className={styles.rectangleParent4}>
            <div className={styles.frameChild5} />
            <span className={styles.contactUs}>Submissions</span>
          </a>
          <a href="/current" className={styles.rectangleParent4}>
            <div className={styles.frameChild5} />
            <span className={styles.contactUs}>Current</span>
          </a>
          <a href="/publications-page" className={styles.rectangleParent4}>
            <div className={styles.frameChild5} />
            <span className={styles.contactUs}>Archives</span>
          </a>
          <a href="/indexing" className={styles.rectangleParent4}>
            <div className={styles.frameChild5} />
            <span className={styles.contactUs}>Indexing</span>
          </a>
          <a href="/paper-detail-page" className={styles.rectangleParent4}>
            <div className={styles.frameChild5} />
            <span className={styles.contactUs}>Publication Ethics</span>
          </a>
          <a href="/contact-us-page" className={styles.rectangleParent4}>
            <div className={styles.frameChild5} />
            <span className={styles.contactUs}>Contact US</span>
          </a>
        </div>
      </div> */}

      <div className='header_section' style={{display: 'flex', alignItems: 'center'}}>
        <div className="logo_section">
          <img className='logo' style={{ margin: '10px'}} src="./images/logo_new.png" alt="Logo" />
        </div>
        <div className="title_section">
          <h1 className='title'>International Journal of Engineering, Science, Technology and Management</h1>
          <hr style={{ width: '80%'}} />
          <h5 className='subtitle'>A Widely Indexed Open Access Peer Reviewed Multidisciplinary International Journal</h5>
        </div>
      </div>

      <div className="marquee_section">
        {/* <p behavior="" direction="">
        {currentData != null ? `Call for paper Volume ${currentData.volume} Issue ${currentData.issue} ${formatDateRange('Issue'+currentData.issue)} * Submit your research`
          : ''}
        </p> */}

        <marquee
          ref={marqueeRef}
          behavior="scroll"
          direction="left"
          scrollamount="5"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
        {currentData != null ? `Call for paper Volume ${currentData.volume} Issue ${currentData.issue} ${formatDateRange('Issue'+currentData.issue)} * Submit your research`
          : ''}
        </marquee>
      </div>
      <div className="nav_link_container">
        <li>
          <a href="/">
          <FontAwesomeIcon icon={faHome} color=''/>
          &nbsp;Home
          </a>
        </li>

        <li><a href="/aim-scope">Aim & Scope</a></li>
        <li><a href="/editorial-team">Editorial Team</a></li>
        <li><a href="/submit-paper-page-new">Submissions</a></li>
        <li><a href="/current">Current</a></li>
        <li><a href="/publications-page">Archives</a></li>
        <li><a href="/indexing">Indexing</a></li>
        <li><a href="/publication-ethics">Publication Ethics</a></li>
        <li><a href="/contact-us-page">Contact US</a></li>
      </div>

    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
