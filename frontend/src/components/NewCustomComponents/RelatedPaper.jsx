// import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";
// import { useNavigate } from 'react-router-dom';
// import { db } from "../../../../backend/firebase";
// import { collection, getDocs } from "firebase/firestore/lite";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
// import styles from "../FrameComponent3.module.css";

// const RelatedPapersComponent = ({ className = "", currentKeywords = [], currentTitle = "" }) => {
//   const [relatedPapers, setRelatedPapers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchRelatedPapers = async () => {
//       try {
//         setLoading(true);
//         const papersData = [];
//         const volumesCollectionRef = collection(db, "PapersCollection");
//         const volumesSnapshot = await getDocs(volumesCollectionRef);

//         await Promise.all(
//           volumesSnapshot.docs.map(async (volumeDoc) => {
//             const volumeId = volumeDoc.id;
//             const issues = ["Issue1", "Issue2", "Issue3", "Issue4"];

//             await Promise.all(
//               issues.map(async (issue) => {
//                 const issueRef = collection(db, "PapersCollection", volumeId, issue);
//                 const issueSnapshot = await getDocs(issueRef);
                
//                 issueSnapshot.forEach((paperDoc) => {
//                   const paperData = paperDoc.data();
//                   const titleMatches = (paperData.title || "").toLowerCase().includes(currentTitle.toLowerCase());
//                   const keywordMatches = (paperData.keywords || "").toLowerCase().includes(currentTitle.toLowerCase());
//                 //   const keywordMatches = paperData.keywords.some(keyword => 
//                 //     currentKeywords.includes(keyword)
//                 //   );

//                   if (titleMatches || keywordMatches) {
//                     papersData.push({ id: paperDoc.id, ...paperData });
//                   }
//                 });
//               })
//             );
//           })
//         );

//         setRelatedPapers(papersData);
//       } catch (error) {
//         console.error("Error fetching related papers: ", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchRelatedPapers();
//   }, [currentKeywords, currentTitle]);

//   const handlePaperClick = (paper) => {
//     navigate('/paper-detail-page', { state: { paper } });
//   }

//   return (
//     <section style={{ width: '100%' }} className={[styles.relatedPapersSection, className].join(" ")}>
//       {/* <h2>Related Papers</h2> */}
//       <div style={{
//           display: relatedPapers.length > 0 ? "grid" : "flex",
//           gridTemplateColumns: "repeat(2, 1fr)",
//           gap: "30px",
//         }}>
//         {loading ? <center>Loading...</center> : ""}
//         {relatedPapers.length > 0 && !loading ? (
//           relatedPapers.map((paper) => (
//             <div
//               key={paper.id}
//               onClick={() => handlePaperClick(paper)}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.boxShadow = '0px 0px 8px grey';
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.boxShadow = '0px 0px 6px lightGrey';
//               }}
//               style={{
//                 cursor: 'pointer',
//                 boxShadow: '0px 0px 6px lightGrey',
//                 borderTop: '4px solid #003366',
//                 marginBottom: '16px',
//                 borderRadius: '4px',
//                 padding: '16px',
//                 transition: 'width 0.3s ease, height 0.3s ease',
//               }}
//             >
//               <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//                 <a
//                   style={{
//                     fontFamily: 'Metrophobic, Forum, Helvetica, Ubuntu, Arial, sans-serif',
//                     fontSize: '25px',
//                     display: '-webkit-box',
//                     WebkitBoxOrient: 'vertical',
//                     WebkitLineClamp: 2,
//                     overflow: 'hidden',
//                     textOverflow: 'ellipsis',
//                     lineHeight: '1.2em',
//                     maxHeight: '2.4em'
//                   }}
//                   href={paper.fileURL}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   {paper.title}
//                 </a>
//               </div>
//               <div style={{ height: '20px' }}></div>
//               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                 <div>
//                   <div style={{ display: 'flex', alignItems: 'center' }}>
//                     <b style={{ fontSize: '16px', marginRight: '5px' }}>Author(s):</b>
//                     <b style={{ fontSize: '16px', maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
//                       Dr. {paper.author.name}
//                     </b>
//                   </div>
//                   <div><b style={{ fontSize: '16px' }}>Country:</b> <b style={{ fontSize: '16px' }}>India</b></div>
//                   <div><b style={{ fontSize: '16px' }}>Research Area:</b> <b style={{ fontSize: '16px' }}>{paper.researchArea}</b></div>
//                 </div>
//                 <span style={{ width: '25%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="pdf-link">
//                   <a href={paper.fileURL} style={{ backgroundColor: '#D9E3F0', borderRadius: '4px', padding: '8px 16px', textDecoration: 'none', color: 'black', fontSize: '12px' }} target="_blank" rel="noopener noreferrer">
//                     <FontAwesomeIcon icon={faFilePdf} color='red' />
//                     &nbsp;View PDF
//                   </a>
//                 </span>
//               </div>
//               <div style={{ height: '10px' }}></div>
//               <hr style={{ width: '50%' }} />
//               <div style={{ height: '10px' }}></div>
//             </div>
//           ))
//         ) : (
//           !loading && 'No related papers found'
//         )}
//       </div>
//     </section>
//   );
// };

// RelatedPapersComponent.propTypes = {
//   className: PropTypes.string,
//   currentKeywords: PropTypes.arrayOf(PropTypes.string),
//   currentTitle: PropTypes.string,
// };

// export default RelatedPapersComponent;


import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { db } from "../../../../backend/firebase";
import { collection, getDocs } from "firebase/firestore/lite";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import styles from "../FrameComponent3.module.css";

const RelatedPapersComponent = ({paper, className = "" }) => {
  const [relatedPapers, setRelatedPapers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentTitle, setCurrentTitle] = useState("");  // local state for title
//   const [currentKeywords, setCurrentKeywords] = useState([]);  // local state for keywords
  const [currentKeywords, setCurrentKeywords] = useState("");  // local state for keywords
  const navigate = useNavigate();

//   useEffect(() => {
//     const fetchRelatedPapers = async () => {
//         // if(!paper) return;
//       try {
//         setLoading(true);
//         const papersData = [];
//         const volumesCollectionRef = collection(db, "PapersCollection");
//         const volumesSnapshot = await getDocs(volumesCollectionRef);

//         // Set currentTitle and currentKeywords here with the values you want to match against
//         setCurrentTitle(paper.title);
//         setCurrentKeywords(paper.keywords);

//         await Promise.all(
//           volumesSnapshot.docs.map(async (volumeDoc) => {
//             const volumeId = volumeDoc.id;
//             const issues = ["Issue1", "Issue2", "Issue3", "Issue4"];

//             await Promise.all(
//               issues.map(async (issue) => {
//                 const issueRef = collection(db, "PapersCollection", volumeId, issue);
//                 const issueSnapshot = await getDocs(issueRef);

                

//                 issueSnapshot.forEach((paperDoc) => {
//                     const paperData = paperDoc.data();
//                     const paperId = paperDoc.id;

//                     const paperDataKeywords = paperData.keywords;
//                     //   const titleMatches = (paperData.title || "").toLowerCase().includes(currentTitle.toLowerCase());

//                     // const keywordMatches = (paperDataKeywords || "").toLowerCase().includes(currentKeywords.toLowerCase());

//                     // Convert currentKeywords from a comma-separated string to an array of keywords
//                     const currentKeywordsArray = currentKeywords.split(',')
//                     .map(keyword => keyword.trim().toLowerCase()); // Trim whitespace and convert to lowercase

//                     // Convert paperDataKeywords to lowercase for case-insensitive comparison
//                     const paperDataKeywordsLower = (paperDataKeywords || "").toLowerCase();

//                     // Check if any keyword from currentKeywordsArray is included in paperDataKeywordsLower
//                     const keywordMatches = currentKeywordsArray.some(keyword => paperDataKeywordsLower.includes(keyword));

//                     if ((keywordMatches) && (paperId !== paper.id)) {
//                         // console.log(paperDoc.id);
//                         // papersData.push({ id: paperDoc.id, ...paperData });
//                         console.log(paperId)
//                         papersData.push({
//                             ...paperData,             // Spread the existing paper data
//                             id: paperId               // Add the document ID
//                           });
//                     }
//                     else{
//                         return; 
//                     }
//                 // }
//                 });
//               })
//             );
//           })
//         );

//         setRelatedPapers(papersData);
//       } catch (error) {
//         console.error("Error fetching related papers: ", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchRelatedPapers();
//   },  [paper]);
//   [currentTitle, currentKeywords]);


useEffect(() => {
    const fetchRelatedPapers = async () => {
      try {
        setLoading(true);
        const papersData = [];
        const volumesCollectionRef = collection(db, "PapersCollection");
        const volumesSnapshot = await getDocs(volumesCollectionRef);
  
        setCurrentTitle(paper.title);
        setCurrentKeywords(paper.keywords);
  
        await Promise.all(
          volumesSnapshot.docs.map(async (volumeDoc) => {
            const volumeId = volumeDoc.id;
            const issues = ["Issue1", "Issue2", "Issue3", "Issue4"];
  
            await Promise.all(
              issues.map(async (issue) => {
                const issueRef = collection(db, "PapersCollection", volumeId, issue);
                const issueSnapshot = await getDocs(issueRef);
  
                issueSnapshot.forEach((paperDoc) => {
                  const paperData = paperDoc.data();
                  const paperId = paperDoc.id;
  
                  const currentKeywordsArray = currentKeywords.split(',')
                    .map(keyword => keyword.trim().toLowerCase());
                  const paperDataKeywordsLower = (paperData.keywords || "").toLowerCase();
                  const keywordMatches = currentKeywordsArray.some(keyword => paperDataKeywordsLower.includes(keyword));
  
                  if (keywordMatches && paperId !== paper.id) {
                    papersData.push({
                      ...paperData,
                      id: paperId
                    });
                  }
                });
              })
            );
          })
        );
  
        setRelatedPapers(papersData);
      } catch (error) {
        console.error("Error fetching related papers: ", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchRelatedPapers();
  }, [currentTitle, currentKeywords, paper]);
  


// useEffect(() => {
//     const fetchRelatedPapers = async () => {
//       if (!paper) return; // Add this check to ensure paper is defined
  
//       try {
//         setLoading(true);
//         const papersData = [];
//         const volumesCollectionRef = collection(db, "PapersCollection");
//         const volumesSnapshot = await getDocs(volumesCollectionRef);
  
//         setCurrentTitle(paper.title);
//         setCurrentKeywords(paper.keywords);
  
//         await Promise.all(
//           volumesSnapshot.docs.map(async (volumeDoc) => {
//             const volumeId = volumeDoc.id;
//             const issues = ["Issue1", "Issue2", "Issue3", "Issue4"];
  
//             await Promise.all(
//               issues.map(async (issue) => {
//                 const issueRef = collection(db, "PapersCollection", volumeId, issue);
//                 const issueSnapshot = await getDocs(issueRef);
  
//                 issueSnapshot.forEach((paperDoc) => {
//                   const paperData = paperDoc.data();
//                   const paperId = paperDoc.id;
  
//                   const paperDataKeywords = paperData.keywords;
//                   const currentKeywordsArray = currentKeywords.split(',')
//                     .map(keyword => keyword.trim().toLowerCase());
  
//                   const paperDataKeywordsLower = (paperDataKeywords || "").toLowerCase();
//                   const keywordMatches = currentKeywordsArray.some(keyword => paperDataKeywordsLower.includes(keyword));
  
//                   if (keywordMatches && paperId !== paper.id) {
//                     papersData.push({
//                       ...paperData,
//                       id: paperId
//                     });
//                   }
//                 });
//               })
//             );
//           })
//         );
  
//         setRelatedPapers(papersData);
//       } catch (error) {
//         console.error("Error fetching related papers: ", error);
//       } finally {
//         setLoading(false);
//       }
//     };
  
//     fetchRelatedPapers();
//   }, [paper]); // Add 'paper' as a dependency
  

  const handlePaperClick = (paper) => {
    navigate('/paper-detail-page', { state: { paper } });
  }

  return (
    <section style={{ width: '100%' , display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}} className={[styles.relatedPapersSection, className].join(" ")}>
        <h3>{relatedPapers.length > 0 && !loading ? 'You may also like these articles' : ''}</h3>

      <div style={{
          display: relatedPapers.length > 0 ? "grid" : "flex",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "30px",
        }}>
        {loading ? <center>Loading...</center> : ""}
        {relatedPapers.length > 0 && !loading ? (
          relatedPapers.map((paper) => (
            
            <div
              key={paper.id}
              onClick={() => {
                handlePaperClick(paper)
            }} 
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
                  href={paper.fileURL}
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
                      Dr. {paper.author.name}
                    </b>
                  </div>
                  <div><b style={{ fontSize: '16px' }}>Country:</b> <b style={{ fontSize: '16px' }}>India</b></div>
                  <div><b style={{ fontSize: '16px' }}>Research Area:</b> <b style={{ fontSize: '16px' }}>{paper.researchArea}</b></div>
                </div>
                <span style={{ width: '25%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="pdf-link">
                  <a href={paper.fileURL} style={{ backgroundColor: '#D9E3F0', borderRadius: '4px', padding: '8px 16px', textDecoration: 'none', color: 'black', fontSize: '12px' }} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFilePdf} color='red' />
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
          !loading && 'No related papers found'
        )}
        
      </div>
      <div style={{ height: '50px'}}></div>
    </section>
  );
};

export default RelatedPapersComponent;
