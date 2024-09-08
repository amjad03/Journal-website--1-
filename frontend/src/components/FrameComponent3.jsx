// import React, { useEffect, useState } from "react";

// import FrameComponent from "./FrameComponent";
// import FrameComponent1 from "./FrameComponent1";
// import PropTypes from "prop-types";
// import styles from "./FrameComponent3.module.css";
// import style from "./FrameComponent1.module.css";

// import {db} from "../../../backend/firebase";
// import { getFirestore, collection, addDoc, serverTimestamp, doc, getDoc } from "firebase/firestore/lite";



// const FrameComponent3 = ({ className = "" }) => {
//   const [areas, setAreas] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const [volumes, setVolumes] = useState([]);
//   const [selectedPapers, setSelectedPapers] = useState([]);
//   const [selectedVolumeId, setSelectedVolumeId] = useState('');
//   const [selectedIssueId, setSelectedIssueId] = useState('');
//   const [expandedPapers, setExpandedPapers] = useState({});

//   const fetchData = async () => {
//     try {
//       // Fetch volumes collection
//       const volumesCollectionRef = collection(db, 'PapersCollection');
//       const volumesSnapshot = await getDocs(volumesCollectionRef);

//       const volumesData = await Promise.all(volumesSnapshot.docs.map(async (volumeDoc) => {
//         const volumeId = volumeDoc.id;

//         // Fetch issues for each volume
//         const issuesData = await fetchIssues(volumeId);

//         return {
//           volumeId,
//           issues: issuesData
//         };
//       }));

//       setVolumes(volumesData);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching data: ", error);
//     }
//   };

//   const fetchIssues = async (volumeId) => {
//     try {
//       const issuesData = [];
//       const volumeRef = doc(db, 'PapersCollection', volumeId);
//       const issueNames = ['Issue1', 'Issue2', 'Issue3', 'Issue4']; // List of issue names

//       for (const issueName of issueNames) {
//         const papersData = await fetchPapers(volumeId, issueName);
//         issuesData.push({
//           issueId: issueName,
//           papers: papersData
//         });
//       }

//       return issuesData;
//     } catch (error) {
//       console.error(`Error fetching issues for volume ${volumeId}: `, error);
//       return [];
//     }
//   };

//   const fetchPapers = async (volumeId, issueId) => {
//     try {
//       const papersData = [];
//       const issueRef = collection(db, 'PapersCollection', volumeId, issueId);
//       const papersSnapshot = await getDocs(issueRef);

//       papersSnapshot.forEach((paperDoc) => {
//         papersData.push({ id: paperDoc.id, ...paperDoc.data() });
//       });

//       return papersData;
//     } catch (error) {
//       console.error(`Error fetching papers for issue ${issueId} in volume ${volumeId}: `, error);
//       return [];
//     }
//   };

//   useEffect(() => {
//     const fetchAreas = async () => {
//       try {
//         const docRef = doc(db, "Research_Areas", "research_areas");
//         const docSnap = await getDoc(docRef);

//         if (docSnap.exists()) {
//           setAreas(docSnap.data().areas);
//         } else {
//           console.log("No such document!");
//         }
//       } catch (error) {
//         console.error("Error fetching document: ", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAreas();
//   }, []);

  
//   const fetchPaperList = async (area) => {
//     try {
//       const papersData = await fetchPapers(volumeId, issueId);
//       setSelectedPapers(papersData);
//       setSelectedVolumeId(volumeId);
//       setSelectedIssueId(issueId);
//     } catch (error) {
//       console.error(`Error fetching papers for issue ${issueId} in volume ${volumeId}: `, error);
//     }
//   };

//   return (
//     <section className={[styles.homePageInner, className].join(" ")}>
//       <div className={styles.frameParent}>
//         <div className={styles.lineWrapper}>
//           <div className={styles.frameChild} />
//         </div>
//         <div className={styles.frameGroup}>
//           <div className={styles.browseJournalsByDisciplineWrapper}>
//             <h1 className={styles.browseJournalsBy}>
//               Browse journals by discipline
//             </h1>
//           </div>
//           <div className={styles.frameContainer} style={{ width: '100%', display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>
//             {loading ? <center>loading...</center> : ''}
//           {areas.map((area, index) => (
//                 // <option key={index} value={area}>
//                 //   {area}
//                 // </option>
//                 <div className="cardsContainer"
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.width = '210px';  // Increase width to 300px on hover
//                     e.currentTarget.style.height = '110px'; // Increase height to 150px on hover
//                     e.currentTarget.style.boxShadow = '0px 0px 8px grey'; //
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.width = '200px';  // Reset width to 200px on mouseleave
//                     e.currentTarget.style.height = '100px'; // Reset height to 100px on mouseleave
//                     e.currentTarget.style.boxShadow = '0px 0px 6px lightGrey';

//                   }}
//                   onClick={() => 
//                     fetchPaperList(area)
//                   } 
//                   // style={{cursor: 'pointer', boxShadow: '0px 0px 6px lightGrey', borderTop: '4px solid #003366', width: '200px', height: '100px', borderRadius: '2px', transform: }}
//                   style={{
//                     // display: 'flex',
//                     // alignItems: 'center',
//                     cursor: 'pointer',
//                     boxShadow: '0px 0px 6px lightGrey',
//                     borderTop: '4px solid #003366',
//                     width: '200px',
//                     height: '100px',
//                     borderRadius: '2px',
//                     transition: 'width 0.3s ease, height 0.3s ease'  // Add transition for smooth animation
//                   }}
//                   >
//                   <div style={{ padding: '10px'}}/>
//                   <div >
//                     <p >{area}</p>
//                     <hr style={{ width: '60%', }} />
//                   </div>
//                 </div>
                
//               ))}
//             {/* <FrameComponent healthSciences="Health Sciences" />
//             <FrameComponent1
//               lifeBiomedical={`Life & Biomedical`}
//               sciences="Sciences"
//             />
//             <FrameComponent1
//               lifeBiomedical={`Materials Sciences &`}
//               sciences="Engineering"
//             />
//             <FrameComponent1
//               lifeBiomedical={`Social Sciences &`}
//               sciences="Humanities"
//             />*/}
//             {/* <FrameComponent healthSciences="All Journals / Papers" />  */}
//           </div>
//         </div>
//         <div className={styles.lineContainer}>
//           <div className={styles.frameItem} />
//         </div>
//       </div>
//     </section>
//   );
// };

// FrameComponent3.propTypes = {
//   className: PropTypes.string,
// };

// export default FrameComponent3;


















// import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";
// import { db } from "../../../backend/firebase";
// import { collection, getDocs, doc, getDoc } from "firebase/firestore/lite";
// import styles from "./FrameComponent3.module.css";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

// const FrameComponent3 = ({ className = "" }) => {
//   const [areas, setAreas] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [loading2, setLoading2] = useState(true);
//   const [papers, setPapers] = useState([]);
//   const [selectedArea, setSelectedArea] = useState('');

//   useEffect(() => {
//     const fetchAreas = async () => {
//       try {
//         const docRef = doc(db, "Research_Areas", "research_areas");
//         const docSnap = await getDoc(docRef);
//         if (docSnap.exists()) {
//           setAreas(docSnap.data().areas);
//         } else {
//           console.log("No such document!");
//         }
//       } catch (error) {
//         console.error("Error fetching document: ", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAreas();
//   }, []);

//   const fetchPapersByArea = async (area) => {
//     try {
//       setLoading2(true);
//       const papersCollectionRef = collection(db, "PapersCollection");
//       const papersSnapshot = await getDocs(papersCollectionRef);
//       const papersData = [];

//       papersSnapshot.forEach((volumeDoc) => {
//         const volumeId = volumeDoc.id;
//         const issues = ["Issue1", "Issue2", "Issue3", "Issue4"];
//         issues.forEach(async (issue) => {
//           const issueRef = collection(db, "PapersCollection", volumeId, issue);
//           const issueSnapshot = await getDocs(issueRef);
//           issueSnapshot.forEach((paperDoc) => {
//             const paperData = paperDoc.data();
//             if (paperData.researchArea === area) {
//               papersData.push({ id: paperDoc.id, ...paperData });
//             }
//           });
//         });
//       });

//       setPapers(papersData);
//       setSelectedArea(area);
//       setLoading2(false);
//     } catch (error) {
//       console.error("Error fetching papers: ", error);
//       setLoading2(false);
//     }
//   };

//   return (
//     <section style={{ width: '100%'}} className={[styles.homePageInner, className].join(" ")}>
//       <div style={{ width: '80%'}} className={styles.frameParent}>
//         <div className={styles.lineWrapper}>
//           <div className={styles.frameChild} />
//         </div>
//         <div className={styles.frameGroup}>
//           <div className={styles.browseJournalsByDisciplineWrapper}>
//             <h1 className={styles.browseJournalsBy}>
//               Browse journals by discipline
//             </h1>
//           </div>
//           <div
//             className={styles.frameContainer}
//             style={{
//               width: "100%",
//               display: "flex",
//               alignItems: "center",
//               flexWrap: "wrap",
//             }}
//           >
//             {loading ? <center>Loading...</center> : ""}
//             {areas.map((area, index) => (
//               <div
//                 key={index}
//                 className="cardsContainer"
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.width = "210px"; // Increase width to 300px on hover
//                   e.currentTarget.style.height = "110px"; // Increase height to 150px on hover
//                   e.currentTarget.style.boxShadow = "0px 0px 8px grey"; //
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.width = "200px"; // Reset width to 200px on mouseleave
//                   e.currentTarget.style.height = "100px"; // Reset height to 100px on mouseleave
//                   e.currentTarget.style.boxShadow = "0px 0px 6px lightGrey";
//                 }}
//                 onClick={() => fetchPapersByArea(area)}
//                 style={{
//                   cursor: "pointer",
//                   boxShadow: "0px 0px 6px lightGrey",
//                   borderTop: "4px solid #003366",
//                   width: "200px",
//                   height: "100px",
//                   borderRadius: "2px",
//                   transition: "width 0.3s ease, height 0.3s ease", // Add transition for smooth animation
//                 }}
//               >
//                 <div style={{ padding: "10px" }} />
//                 <div>
//                   <p>{area}</p>
//                   <hr style={{ width: "60%" }} />
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div>
//             <h2>{selectedArea ? `Papers in ${selectedArea}` : "Select a discipline to see papers"}</h2>
//             <div style={{ 
//                 display: "grid",
//                 gridTemplateColumns: "repeat(2, 1fr)",
//                 gap: "30px",
//               }}>
//               {loading2 ? <center>Loading...</center> : ""}
//               {papers.length > 0 ? (
//                 papers.map((paper) => (
//                   <div 
//                     onMouseEnter={(e) => {
//                       e.currentTarget.style.boxShadow = '0px 0px 8px grey'; //
//                     }}
//                     onMouseLeave={(e) => {
//                       e.currentTarget.style.boxShadow = '0px 0px 6px lightGrey';

//                     }}
//                     onClick={{}} 
//                     style={{
//                       cursor: 'pointer', 
//                       boxShadow: '0px 0px 6px lightGrey', 
//                       borderTop: '4px solid #003366', 
//                       marginBottom: '16px', 
//                       borderRadius: '4px', 
//                       padding: '16px',
//                       transition: 'width 0.3s ease, height 0.3s ease'  // Add transition for smooth animation

//                     }}>

//                     <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//                       <a 
//                         style={{
//                           fontFamily: 'Metrophobic, Forum, Helvetica, Ubuntu, Arial, sans-serif',
//                           fontSize: '25px',
//                           display: '-webkit-box',
//                           WebkitBoxOrient: 'vertical',
//                           WebkitLineClamp: 2,
//                           overflow: 'hidden',
//                           textOverflow: 'ellipsis',
//                           lineHeight: '1.2em',
//                           maxHeight: '2.4em'
//                         }} 
//                       >
//                         {paper.title}
//                       </a>

//                     </div>
//                     <div style={{height: '20px'}}></div>
//                     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
//                       <div>
                        
//                         <div style={{ display: 'flex', alignItems: 'center' }}>
//                           <b style={{ fontSize: '16px', marginRight: '5px' }}>Author(s):</b>
//                           <b style={{ fontSize: '16px', maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
//                             Dr. {paper.author.name}
//                           </b>
//                         </div>


//                         <div><b style={{ fontSize: '16px'}}>Country:</b> <b style={{ fontSize: '16px'}}>India</b></div>
//                         <div><b style={{ fontSize: '16px'}}>Research Area:</b> <b style={{ fontSize: '16px'}}>{paper.researchArea}</b></div>
//                       </div>
//                       <span style={{ width: '25%', display: 'flex', alignItems: 'center', justifyContent: 'center'}} className="pdf-link">
//                         <a href={paper.fileURL} style={{ backgroundColor: '#D9E3F0', borderRadius: '4px', padding: '8px 16px', textDecoration: 'none', color: 'black', fontSize: '12px'}} target="_blank" rel="noopener noreferrer">
//                           <FontAwesomeIcon icon={faFilePdf} color='red'/>
//                           &nbsp;View PDF
//                         </a>
//                       </span>
//                     </div>
//                     <div style={{height: '10px'}}></div>
//                     <hr style={{ width: '50%'}} />
//                     <div style={{height: '10px'}}></div>

//                   </div>
//                 ))
//               ) : (
//                 // !loading2 && 
//                 <p>No papers found in this area.</p>
//               )}
//             </div>
//           </div>
//         </div>
//         <div className={styles.lineContainer}>
//           <div className={styles.frameItem} />
//         </div>
//       </div>
//     </section>
//   );
// };

// FrameComponent3.propTypes = {
//   className: PropTypes.string,
// };

// export default FrameComponent3;





import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from 'react-router-dom';
import { db } from "../../../backend/firebase";
import { collection, getDocs, doc, getDoc, query } from "firebase/firestore/lite";
import styles from "./FrameComponent3.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

const FrameComponent3 = ({ className = "" }) => {
  const [areas, setAreas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(false); // Change default to false
  // const [loading3, setLoading3] = useState(true); 

  const [papers, setPapers] = useState([]);

  const [paperId, setPaperId] = useState([]);

  const [selectedArea, setSelectedArea] = useState('');
  const navigate = useNavigate();


  useEffect(() => {
    const fetchAreas = async () => {
      try {
        const docRef = doc(db, "Research_Areas", "research_areas");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setAreas(docSnap.data().areas);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching document: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAreas();
  }, []);

  const fetchPapersByArea = async (area) => {
    try {
      setLoading2(true);
      const papersData = [];
      const volumesCollectionRef = collection(db, "PapersCollection");
      const volumesSnapshot = await getDocs(volumesCollectionRef);

      // Use Promise.all to wait for all issue fetches to complete
      await Promise.all(
        volumesSnapshot.docs.map(async (volumeDoc) => {
          const volumeId = volumeDoc.id;
          const issues = ["Issue1", "Issue2", "Issue3", "Issue4"];

          // await Promise.all(
          //   issues.map(async (issue) => {
          //     const issueRef = collection(db, "PapersCollection", volumeId, issue);
          //     const issueSnapshot = await getDocs(issueRef);
              
          //     issueSnapshot.forEach((paperDoc) => {
          //       const paperData = paperDoc.data();
          //       if (paperData.researchArea === area) {
          //         papersData.push({ id: paperDoc.id, ...paperData });
          //       }
          //     });
          //   })
          // );
          await Promise.all(
            issues.map(async (issue) => {
              const issueRef = collection(db, "PapersCollection", volumeId, issue);
              // const q = query(issueRef, limit(8));

              // const issueSnapshot = await getDocs(q);
              const issueSnapshot = await getDocs(issueRef);
              
              issueSnapshot.forEach((paperDoc) => {
                const paperData = paperDoc.data();
                const paperId = paperDoc.id; // Get the ID of the current document
          
                // Only add if the research area matches
                if (paperData.researchArea === area) {
                  console.log(paperId)
                  papersData.push({
                    ...paperData,             // Spread the existing paper data
                    id: paperId               // Add the document ID
                  });
                }
              });
            })
          );
        })
      );

      setPapers(papersData.slice(0, 8));
      setSelectedArea(area);
    } catch (error) {
      console.error("Error fetching papers: ", error);
    } finally {
      setLoading2(false);
    }
  };

  

  const handlePaperClick = (paper) => {
    console.log('clicked')
    console.log(paperId);
    navigate('/paper-detail-page', { state: { paper } })
  }

  return (
    <section style={{ width: '100%' }} className={[styles.homePageInner, className].join(" ")}>
      <div style={{ width: '80%' }} className={styles.frameParent}>
        <div className={styles.lineWrapper}>
          <div className={styles.frameChild} />
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.browseJournalsByDisciplineWrapper}>
            {/* <h1 className={styles.browseJournalsBy}>
              Browse journals by discipline
            </h1> */}
            <h2>Browse journals by discipline</h2>
          </div>
          <div
            className={styles.frameContainer}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {loading ? <center>Loading...</center> : ""}
            {areas.map((area, index) => (
              <div
                key={index}
                className="cardsContainer"
                onMouseEnter={(e) => {
                  e.currentTarget.style.width = "210px";
                  e.currentTarget.style.height = "110px";
                  e.currentTarget.style.boxShadow = "0px 0px 8px grey";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.width = "200px";
                  e.currentTarget.style.height = "100px";
                  e.currentTarget.style.boxShadow = "0px 0px 6px lightGrey";
                }}
                onClick={() => fetchPapersByArea(area)}
                style={{
                  cursor: "pointer",
                  boxShadow: "0px 0px 6px lightGrey",
                  borderTop: "4px solid #003366",
                  width: "200px",
                  height: "100px",
                  borderRadius: "2px",
                  transition: "width 0.3s ease, height 0.3s ease",
                }}
              >
                <div style={{ padding: "10px" }} />
                <div>
                  <p>{area}</p>
                  <hr style={{ width: "60%" }} />
                </div>
              </div>
            ))}
          </div>
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <h2>{selectedArea ? `Papers in ${selectedArea}` : !loading ? "Select a discipline to see papers" : ""}</h2>
            <div style={{
                display: papers.length > 2 ? "grid" : "block",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "30px",
              }}>
              {loading2 ? <center>Loading...</center> : ""}
              {papers.length > 0 && !loading2 ? (
                papers.map((paper) => (
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
                !loading2 && selectedArea ? 'No papers found' : ''
              )}
            </div>
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
