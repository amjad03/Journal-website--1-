import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs, doc, query, orderBy  } from "firebase/firestore/lite";
import { db } from '../../../backend/firebase'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import ResearchItem from "./ResearchItem";
import PropTypes from "prop-types";
import styles from "./FrameComponent4.module.css";

const FrameComponent4 = ({ className = "" }) => {
  const [loading, setLoading] = useState(true);
  const [recentPapers, setRecentPapers] = useState([]);
  const navigate = useNavigate();

  const fetchPapersByTimestamp = async (area) => {
    try {
      setLoading(true);
      const recentPapersData = [];
      const volumesCollectionRef = collection(db, "PapersCollection");
      const volumesSnapshot = await getDocs(volumesCollectionRef);

      // Use Promise.all to wait for all issue fetches to complete
      await Promise.all(
        volumesSnapshot.docs.map(async (volumeDoc) => {
          const volumeId = volumeDoc.id;
          const issues = ["Issue1", "Issue2", "Issue3", "Issue4"];

          await Promise.all(
            issues.map(async (issue) => {
              const issueRef = collection(db, "PapersCollection", volumeId, issue);
              // const q = query(issueRef, orderBy("timestamp", "desc"), limit(8));
              const q = query(issueRef, orderBy("timestamp", "desc"));
              

              const issueSnapshot = await getDocs(q);
              
              issueSnapshot.forEach((paperDoc) => {
                const recentPaperData = paperDoc.data();
                const recentPaperId = paperDoc.id; // Get the ID of the current document
          
                recentPapersData.push({
                  ...recentPaperData,             // Spread the existing paper data
                  id: recentPaperId               // Add the document ID
                });

                // Only add if the research area matches
                // if (paperData.researchArea === area) {
                //   console.log(paperId)
                //   recentPapersData.push({
                //     ...paperData,             // Spread the existing paper data
                //     id: paperId               // Add the document ID
                //   });
                // }
              });
            })
          );
        })
      );

      setRecentPapers(recentPapersData.slice(0, 8));
      // setSelectedArea(area);
    } catch (error) {
      console.error("Error fetching papers: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPapersByTimestamp();
  }, []);


  const handlePaperClick = (paper) => {
    // console.log('clicked')
    // console.log(paperId);
    navigate('/paper-detail-page', { state: { paper } })
  }


  // const [selectedPapers, setSelectedPapers] = useState([]);
  // const [selectedVolumeId, setSelectedVolumeId] = useState('');
  // const [selectedIssueId, setSelectedIssueId] = useState('');

  // if (loading) {
  //   return (
  //     <div>
  //       <Header />
  //       <center style={{ backgroundColor: '#D9E3F0' }}>
  //         <h1 style={{ paddingTop: '8px', paddingBottom: '8px' }}>Publications</h1>
  //       </center>
  //       <center>Loading...</center>
  //     </div>
  //   );
  // }

  return (
    <section
      className={[styles.researchPapersContentWrapper, className].join(" ")}
    >
      <div className={styles.researchPapersContent} >
        <div className={styles.researchPapersTitle}>
          <h1 className={styles.latestPublishedResearch}>
            Latest Published Research Papers
          </h1>
        </div>
        {/* <div className={styles.researchPapersList}>
          <ResearchItem
            phytosociologicalStudyOfT="Phytosociological Study of Tree Species of Dabla Beed Area, Churu District Rajasthan, India"
            authorsMukeshKumarMeenaJB="Author(s): Mukesh Kumar Meena, J.B. Khan"
          />
          <ResearchItem
            phytosociologicalStudyOfT="Impact of Social Media on Purchase Making Decision of Consumers"
            authorsMukeshKumarMeenaJB="Author(s): Meeta Multani"
          />
        </div> */}
        {/* {selectedPapers.map((paper) => (
                // <div className="archive-rp-info" key={paper.id} style={{ width: '50%', marginBottom: '16px', border: '1px solid gray', padding: '8px 8px 4px', borderRadius: '8px' }}>
                <div onClick={{}} style={{cursor: 'pointer', boxShadow: '0px 0px 6px lightGrey', borderTop: '4px solid #003366', width: '50%', marginBottom: '16px', borderRadius: '4px', padding: '16px',}}>

                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <a style={{ fontFamily: 'Metrophobic, Forum, Helvetica, Ubuntu, Arial, sans-serif', fontSize: '25px' }} href={paper.fileURL} target="_blank" rel="noopener noreferrer">{paper.title}</a>
                    
                  </div>
                  <div style={{height: '20px'}}></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <div>
                      <div><b>Author(s):</b> Dr. {paper.author.name}</div>
                      <div><b>Country:</b> India</div>
                      <div><b>Research Area:</b> {paper.researchArea}</div>
                    </div>
                    <span className="pdf-link">
                      <a href={paper.fileURL} style={{ backgroundColor: '#D9E3F0', borderRadius: '4px', padding: '8px 16px', textDecoration: 'none', color: 'black'}} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFilePdf} color='red'/>
                        &nbsp;View PDF
                      </a>
                    </span>
                  </div>
                  <div style={{height: '10px'}}></div>
                  <hr style={{ width: '50%'}} />
                  <div style={{height: '10px'}}></div>

                </div>
              ))} */}
        
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            {/* <h2>{selectedArea ? `Papers in ${selectedArea}` : !loading ? "Select a discipline to see papers" : ""}</h2> */}
            <div style={{
                display: recentPapers.length > 2 ? "grid" : "block",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "30px",
              }}>
              {loading ? <center>Loading...</center> : ""}
              {recentPapers.length > 0 && !loading ? (
                recentPapers.map((paper) => (
                  <div
                    key={paper.id}
                    onClick={() => handlePaperClick(paper)} // Update to handle click
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = '0px 0px 8px grey';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = '0px 0px 6px lightGrey';
                    }}
                    style={{
                      cursor: 'pointer',
                      boxShadow: '0px 0px 6px lightGrey',
                      borderTop: '4px solid #003366',
                      marginBottom: '16px',
                      borderRadius: '4px',
                      padding: '16px',
                      transition: 'width 0.3s ease, height 0.3s ease',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <a
                        style={{
                          fontFamily: 'Metrophobic, Forum, Helvetica, Ubuntu, Arial, sans-serif',
                          fontSize: '25px',
                          display: '-webkit-box',
                          WebkitBoxOrient: 'vertical',
                          WebkitLineClamp: 2,
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          lineHeight: '1.2em',
                          maxHeight: '2.4em'
                        }}
                        // href={paper.fileURL}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {paper.title}
                      </a>
                    </div>
                    <div style={{ height: '20px' }}></div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <b style={{ fontSize: '16px', marginRight: '5px' }}>Author(s):</b>
                          <b style={{ fontSize: '16px', maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                            {/* Dr. {paper.author.name} */}
                            {/* <div><b>Author(s):</b> */}
                            {paper.authors.map((author, index) => (
                                  <span> Dr. {author.name}, </span>
                            ))}
                            {/* </b> */}
                      {/* </div> */}
                          </b>
                        </div>
                        <div><b style={{ fontSize: '16px' }}>Country:</b> <b style={{ fontSize: '16px' }}>India</b></div>
                        <div><b style={{ fontSize: '16px' }}>Research Area:</b> <b style={{ fontSize: '16px' }}>{paper.researchArea}</b></div>
                      </div>
                      {/* <span style={{ width: '25%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="pdf-link">
                        <a href={paper.fileURL} style={{ backgroundColor: '#D9E3F0', borderRadius: '4px', padding: '8px 16px', textDecoration: 'none', color: 'black', fontSize: '12px' }} target="_blank" rel="noopener noreferrer">
                          <FontAwesomeIcon icon={faFilePdf} color='red' />
                          &nbsp;View PDF
                        </a>
                      </span> */}
                      <span 
                      onMouseEnter={(e) => {
                        e.currentTarget.style.border = '1px solid lightGrey';
                      }} 
                      onMouseLeave={(e) => {
                        e.currentTarget.style.border = 'none';
                      }}
                      onClick={(e) =>{
                          e.stopPropagation(); // Prevents the parent div's onClick from being triggered
                          window.open(paper.fileURL, '_blank', 'noopener,noreferrer');
                      }}
                      style={{
                        backgroundColor: '#D9E3F0',
                        borderRadius: '4px', 
                        padding: '8px 16px', 
                        textDecoration: 'none', 
                        color: 'black',
                        fontSize: '14px'
                      }}
                      className="pdf-lin">
                      <a 
                      // href={paper.fileURL} 
                      // style={{ backgroundColor: '#D9E3F0', borderRadius: '4px', padding: '8px 16px', textDecoration: 'none', color: 'black'}} 
                      style={{ fontSize: '12px', fontWeight: 'bold'}}
                      target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFilePdf} color='red'/>
                        &nbsp;View PDF
                      </a>
                    </span>
                    </div>
                    <div style={{ height: '10px' }}></div>
                    <hr style={{ width: '50%' }} />
                    <div style={{ height: '10px' }}></div>
                  </div>
                ))
              ) : (
                !loading ? 'No papers found' : ''
              )}
            </div>
          </div>

      </div>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
