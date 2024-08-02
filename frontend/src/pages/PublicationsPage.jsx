// import { useEffect, useState } from "react";

// import FooterLinks from "../components/FooterLinks";
// import Publications from "../components/Publications";
// import PaperAbstractDuplicateDetai from "../components/PaperAbstractDuplicateDetai";
// import Publication from "../components/Publication";
// import Publication1 from "../components/Publication1";
// import Footer from "../components/Footer";
// import styles from "./PublicationsPage.module.css";
// import Header from "../components/NewCustomComponents/Header";
// import axios from "axios";


// const PublicationsPage = () => {
//   const [allImage, setAllImage] = useState(null);
//   const [pdfFile, setPdfFile] = useState(null);

//   useEffect(() => {
//     getPdf();
//   }, []);
//   const getPdf = async () => {
//     const result = await axios.get("http://localhost:5001/get-files");
//     console.log(result.data.data);
//     setAllImage(result.data.data);
//   };
//   return (
//     <div className={styles.publicationsPage}>
      
//       <Header/>
//       <div className="uploaded">
//         <h4>Uploaded PDF:</h4>
//         <div className="output-div">
//           {allImage == null
//             ? ""
//             : allImage.map((data) => {
//                 return (
//                   <div className="inner-div">
//                     <h6>Title: {data.title}</h6>
//                     <button
//                       className="btn btn-primary"
//                       onClick={() => showPdf(data.pdf)}
//                     >
//                       Show Pdf
//                     </button>
//                   </div>
//                 );
//               })}
//         </div>
//       </div>
//       <section className={styles.journalDescription}>
      
    
//         <FooterLinks />
//         <Publications />
//       </section>
//       <PaperAbstractDuplicateDetai />
//       <section className={styles.paperTitle}>
//         <div className={styles.frameGroup}>
//           <div className={styles.rectangleParent}>
//             <div className={styles.frameChild} />
//             <div className={styles.frameContainer}>
//               <div className={styles.noamChomskysContributionToParent}>
//                 <h3 className={styles.noamChomskysContribution}>
//                   Noam Chomsky's Contribution to Linguistics
//                 </h3>
//                 <div className={styles.authorsAshankChaudharySParent}>
//                   <div className={styles.authorsAshankChaudharySContainer}>
//                     <p className={styles.authorsAshankChaudharyS}>
//                       Author(s): Ashank Chaudhary, Shabana Singh
//                     </p>
//                     <p className={styles.countryIndia}>Country: India</p>
//                   </div>
//                   <div className={styles.frameWrapper}>
//                     <button className={styles.rectangleGroup}>
//                       <div className={styles.frameItem} />
//                       <img
//                         className={styles.frameInner}
//                         alt=""
//                         src="/group-63.svg"
//                       />
//                       <div className={styles.viewPdfWrapper}>
//                         <div className={styles.viewPdf}>View PDF</div>
//                       </div>
//                       <div className={styles.vectorWrapper}>
//                         <img
//                           className={styles.vectorIcon}
//                           alt=""
//                           src="/vector2.svg"
//                         />
//                       </div>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//               <div className={styles.lineWrapper}>
//                 <div className={styles.lineDiv} />
//               </div>
//             </div>
//           </div>
//           <div className={styles.rectangleContainer}>
//             <div className={styles.rectangleDiv} />
//             <div className={styles.frameDiv}>
//               <div className={styles.innovativeEcofriendlyCoconutParent}>
//                 <h3 className={styles.innovativeEcofriendlyCoconut}>
//                   Innovative Ecofriendly Coconut Husk Brushes
//                 </h3>
//                 <div className={styles.authorsKrishnamurthyLBhaParent}>
//                   <div className={styles.authorsKrishnamurthyLBhaContainer}>
//                     <p className={styles.authorsKrishnamurthyLBha}>
//                       Author(s): Krishnamurthy L Bhat
//                     </p>
//                     <p className={styles.countryIndia1}>Country: India</p>
//                   </div>
//                   <div className={styles.searchField}>
//                     <button className={styles.groupButton}>
//                       <div className={styles.frameChild1} />
//                       <img
//                         className={styles.frameChild2}
//                         alt=""
//                         src="/group-63.svg"
//                       />
//                       <div className={styles.userProfile}>
//                         <div className={styles.viewPdf1}>View PDF</div>
//                       </div>
//                       <div className={styles.profileLabel}>
//                         <img
//                           className={styles.pageHeaderIcon}
//                           alt=""
//                           src="/vector2.svg"
//                         />
//                       </div>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//               <div className={styles.journalInfo}>
//                 <div className={styles.journalTitle} />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section className={styles.paperTitle1}>
//         <div className={styles.frameParent1}>
//           <div className={styles.rectangleParent1}>
//             <div className={styles.frameChild3} />
//             <div className={styles.frameParent2}>
//               <div className={styles.coOperationIdeaAndMovemenParent}>
//                 <h3 className={styles.coOperationIdeaAnd}>
//                   Co-operation: Idea and Movement: European Experience
//                 </h3>
//                 <div className={styles.authorsMohitAggarwalCounParent}>
//                   <div className={styles.authorsMohitAggarwalCounContainer}>
//                     <p className={styles.authorsMohitAggarwal}>
//                       Author(s): Mohit Aggarwal
//                     </p>
//                     <p className={styles.countryIndia2}>Country: India</p>
//                   </div>
//                   <div className={styles.frameWrapper1}>
//                     <button className={styles.rectangleParent2}>
//                       <div className={styles.frameChild4} />
//                       <img
//                         className={styles.frameChild5}
//                         alt=""
//                         src="/group-63.svg"
//                       />
//                       <div className={styles.viewPdfContainer}>
//                         <div className={styles.viewPdf2}>View PDF</div>
//                       </div>
//                       <div className={styles.vectorContainer}>
//                         <img
//                           className={styles.vectorIcon1}
//                           alt=""
//                           src="/vector2.svg"
//                         />
//                       </div>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//               <div className={styles.lineContainer}>
//                 <div className={styles.frameChild6} />
//               </div>
//             </div>
//           </div>
//           <div className={styles.rectangleParent3}>
//             <div className={styles.frameChild7} />
//             <div className={styles.frameParent3}>
//               <div className={styles.effectOfMordantsOnPercentaParent}>
//                 <h3
//                   className={styles.effectOfMordants}
//                 >{`Effect of Mordants on Percentage Absorption of Rubia Cardifolia `}</h3>
//                 <div className={styles.authorsAhaanMehtaCountryParent}>
//                   <div className={styles.authorsAhaanMehtaCountryContainer}>
//                     <p className={styles.authorsAhaanMehta}>
//                       Author(s): Ahaan Mehta
//                     </p>
//                     <p className={styles.countryIndia3}>Country: India</p>
//                   </div>
//                   <div className={styles.frameWrapper2}>
//                     <button className={styles.rectangleParent4}>
//                       <div className={styles.frameChild8} />
//                       <img
//                         className={styles.frameChild9}
//                         alt=""
//                         src="/group-63.svg"
//                       />
//                       <div className={styles.viewPdfFrame}>
//                         <div className={styles.viewPdf3}>View PDF</div>
//                       </div>
//                       <div className={styles.vectorFrame}>
//                         <img
//                           className={styles.vectorIcon2}
//                           alt=""
//                           src="/vector2.svg"
//                         />
//                       </div>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//               <div className={styles.lineFrame}>
//                 <div className={styles.frameChild10} />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <Publication />
//       <div className={styles.paperTitle2}>
//         <div className={styles.paperTitleChild} />
//       </div>
//       <Publication1 />
//       <div className={styles.publicationsPageChild} />
//       <div className={styles.paperTitle3}>
//         <div className={styles.paperTitleItem} />
//       </div>
//       <Footer
//         cooltext4611840960970061="/cooltext461184096097006-1@2x.png"
//         bookPng1="/bookpng-11@2x.png"
//         logo="/vector-13.svg"
//       />
//     </div>
//   );
// };

// export default PublicationsPage;

// import React, { useEffect, useState } from 'react';
// import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
// import { db } from "../../../backend/firebase"; // Ensure correct path to your Firebase config file
// import { db, storage } from '../../firebase';

// const PublicationsPage = () => {
  // const [volumes, setVolumes] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [volumes, setVolumes] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const volumesCollectionRef = collection(db, 'PapersCollection');
  //       const volumesSnapshot = await getDocs(volumesCollectionRef);

  //       const volumesData = await Promise.all(volumesSnapshot.docs.map(async (volumeDoc) => {
  //         const volumeId = volumeDoc.id;

  //         // Fetch issue sub-collections under each volume document
  //         const issuesCollectionRef = collection(db, `PapersCollection/${volumeId}`);
  //         const issuesSnapshot = await getDocs(issuesCollectionRef);

  //         const issuesData = await Promise.all(issuesSnapshot.docs.map(async (issueDoc) => {
  //           const issueId = issueDoc.id;

  //           // Fetch papers documents in each issue sub-collection
  //           const papersCollectionRef = collection(db, `PapersCollection/${volumeId}/${issueId}`);
  //           const papersSnapshot = await getDocs(papersCollectionRef);
  //           const papersData = papersSnapshot.docs.map(paperDoc => ({ id: paperDoc.id, ...paperDoc.data() }));

  //           return {
  //             issueId,
  //             papers: papersData
  //           };
  //         }));

  //         return {
  //           volumeId,
  //           issues: issuesData
  //         };
  //       }));

  //       // Sort volumes and issues by their identifiers if needed
  //       volumesData.sort((a, b) => b.volumeId - a.volumeId);
  //       volumesData.forEach(volume => {
  //         volume.issues.sort((a, b) => b.issueId - a.issueId);
  //       });

  //       setVolumes(volumesData);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error("Error fetching data: ", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // return (
  //   <div>
  //     {volumes.map((volume, volumeIndex) => (
  //       <div key={volume.volumeId}>
  //         <h2>Volume {volume.volumeId}</h2>
  //         {volume.issues.map((issue) => (
  //           <div key={issue.issueId}>
  //             <h3>
  //               Issue {issue.issueId} ({formatDateRange(issue.issueId)})
  //             </h3>
  //             {issue.papers.length > 0 ? (
  //               issue.papers.map((paper) => (
  //                 <div key={paper.id}>
  //                   <h4>{paper.title}</h4>
  //                   <p>{paper.abstract}</p>
  //                   <p>Keywords: {paper.keywords}</p>
  //                   <p>Research Area: {paper.researchArea}</p>
  //                   <p>Status: {paper.status}</p>
  //                   <a href={paper.fileURL} target="_blank" rel="noopener noreferrer">Download Paper</a>
  //                   <p>Uploaded on: {new Date(paper.timestamp.seconds * 1000).toLocaleDateString()}</p>
  //                 </div>
  //               ))
  //             ) : (
  //               <p>No papers found.</p>
  //             )}
  //           </div>
  //         ))}
  //       </div>
  //     ))}
  //   </div>
  // );




  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const volumesCollectionRef = collection(db, 'PapersCollection');
  //       const volumesSnapshot = await getDocs(volumesCollectionRef);

  //       const volumesData = await Promise.all(volumesSnapshot.docs.map(async (volumeDoc) => {
  //         const volumeId = volumeDoc.id;
  //         console.log(`Fetching issues for volumeId: ${volumeId}`);
  //         const issuesCollectionRef = collection(db, `PapersCollection/${volumeId}/Issues`);
  //         const issuesSnapshot = await getDocs(issuesCollectionRef);

  //         const issuesData = await Promise.all(issuesSnapshot.docs.map(async (issueDoc) => {
  //           const issueId = issueDoc.id;
  //           console.log(`Fetching papers for volumeId: ${volumeId}, issueId: ${issueId}`);
  //           const papersCollectionRef = collection(db, `PapersCollection/${volumeId}/Issues/${issueId}`);
  //           const papersSnapshot = await getDocs(papersCollectionRef);
  //           const papersData = papersSnapshot.docs.map(paperDoc => ({ id: paperDoc.id, ...paperDoc.data() }));

  //           console.log('Papers Data:', papersData); // Added logging

  //           return {
  //             issueId,
  //             papers: papersData
  //           };
  //         }));

  //         console.log('Issues Data:', issuesData); // Added logging

  //         return {
  //           volumeId,
  //           issues: issuesData
  //         };
  //       }));

  //       console.log('Volumes Data:', volumesData); // Added logging

  //       setVolumes(volumesData);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error("Error fetching data: ", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const volumesCollectionRef = collection(db, 'PapersCollection');
  //       const volumesSnapshot = await getDocs(volumesCollectionRef);

  //       const volumesData = await Promise.all(volumesSnapshot.docs.map(async (volumeDoc) => {
  //         const volumeId = volumeDoc.id;
  //         console.log(`Fetching issues for volumeId: ${volumeId}`);
          
  //         const issuesCollectionRef = collection(db, `PapersCollection/${volumeId}/Issues`);
  //         const issuesSnapshot = await getDocs(issuesCollectionRef);

  //         const issuesData = await Promise.all(issuesSnapshot.docs.map(async (issueDoc) => {
  //           const issueId = issueDoc.id;
  //           console.log(`Fetching papers for volumeId: ${volumeId}, issueId: ${issueId}`);
            
  //           const papersCollectionRef = collection(db, `PapersCollection/${volumeId}/Issues/${issueId}/Papers`);
  //           const papersSnapshot = await getDocs(papersCollectionRef);
  //           const papersData = papersSnapshot.docs.map(paperDoc => ({ id: paperDoc.id, ...paperDoc.data() }));

  //           console.log('Papers Data:', papersData); // Added logging

  //           return {
  //             issueId,
  //             papers: papersData
  //           };
  //         }));

  //         console.log('Issues Data:', issuesData); // Added logging

  //         return {
  //           volumeId,
  //           issues: issuesData
  //         };
  //       }));

  //       console.log('Volumes Data:', volumesData); // Added logging

  //       setVolumes(volumesData);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error("Error fetching data: ", error);
  //     }
  //   };

  //   fetchData();
  // }, []);


////////////////////////////////////////////////////////////////////////////////////////////////
  ///displaying the docId of papers
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const volumesCollectionRef = collection(db, 'PapersCollection');
  //       const volumesSnapshot = await getDocs(volumesCollectionRef);

  //       const volumesData = await Promise.all(volumesSnapshot.docs.map(async (volumeDoc) => {
  //         const volumeId = volumeDoc.id;
  //         console.log(`Fetching issues for volumeId: ${volumeId}`);

  //         // Fetch issue sub-collections under each volume document
  //         const issuesSnapshots = await getDocs(collection(db, `PapersCollection/${volumeId}/Issue1`));

  //         // Map through the issues
  //         const issuesData = await Promise.all(issuesSnapshots.docs.map(async (issueDoc) => {
  //           const issueId = issueDoc.id;
  //           console.log(`Fetching papers for volumeId: ${volumeId}, issueId: ${issueId}`);

  //           // Fetch papers documents in each issue sub-collection
  //           const papersCollectionRef = collection(db, `PapersCollection/${volumeId}/Issue1`);
  //           const papersSnapshot = await getDocs(papersCollectionRef);
  //           const papersData = papersSnapshot.docs.map(paperDoc => ({ id: paperDoc.id, ...paperDoc.data() }));

  //           console.log('Papers Data:', papersData); // Added logging

  //           return {
  //             issueId,
  //             papers: papersData
  //           };
  //         }));

  //         console.log('Issues Data:', issuesData); // Added logging

  //         return {
  //           volumeId,
  //           issues: issuesData
  //         };
  //       }));

  //       console.log('Volumes Data:', volumesData); // Added logging

  //       setVolumes(volumesData);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error("Error fetching data: ", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // // let i = 1;
  // return (
  //   <div>
  //     {volumes.map(volume => (
  //       <div key={volume.volumeId}>
  //         <h2>{volume.volumeId}</h2>
  //         {volume.issues.map((issue, i) => (
            
  //           <div key={issue.issueId}>
  //             {/* <h3>{Issue}</h3> */}
  //             {issue.papers.map((paper, index) => (
  //               <div key={paper.id}>
  //                 {/* <h4>{paper.title}</h4>
  //                 <p>{paper.abstract}</p>
  //                 <p>Keywords: {paper.keywords}</p>
  //                 <p>Research Area: {paper.researchArea}</p>
  //                 <p>Status: {paper.status}</p> */}
  //                 <a href={paper.fileURL} target="_blank" rel="noopener noreferrer">Issue {i+1} Paper {index+1}</a>
  //                 {/* <p>Uploaded on: {new Date(paper.timestamp.seconds * 1000).toLocaleDateString()}</p> */}
  //               </div>
  //             ))}
  //           </div>
  //         ))}
  //       </div>
  //     ))}
  //   </div>
  // );
////////////////////////////////////////////////////////////////////////////////////////////////////

// const [volumes, setVolumes] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const volumesCollectionRef = collection(db, 'PapersCollection');
//         const volumesSnapshot = await getDocs(volumesCollectionRef);
//         console.log('Volumes Snapshot:', volumesSnapshot); // Debugging log

//         const volumesData = await Promise.all(volumesSnapshot.docs.map(async (volumeDoc) => {
//           const volumeId = volumeDoc.id;
//           console.log(`Fetching issues for volumeId: ${volumeId}`);

//           // Fetch issue sub-collections
//           const issuesCollectionRef = collection(db, `PapersCollection/${volumeId}/Issue1`);
//           const issuesSnapshot = await getDocs(issuesCollectionRef);
//           console.log(`Issues Snapshot for ${volumeId}:`, issuesSnapshot); // Debugging log

//           const issuesData = await Promise.all(issuesSnapshot.docs.map(async (issueDoc) => {
//             const issueId = issueDoc.id;
//             console.log(`Fetching papers for volumeId: ${volumeId}, issueId: ${issueId}`);

//             // Fetch papers documents in each issue sub-collection
//             const papersCollectionRef = collection(db, `PapersCollection/${volumeId}/${issueId}`);
//             const papersSnapshot = await getDocs(papersCollectionRef);
//             console.log(`Papers Snapshot for ${volumeId}/${issueId}:`, papersSnapshot); // Debugging log

//             const papersData = papersSnapshot.docs.map(paperDoc => ({ id: paperDoc.id, ...paperDoc.data() }));

//             console.log('Papers Data:', papersData); // Added logging

//             return {
//               issueId,
//               papers: papersData
//             };
//           }));

//           console.log('Issues Data:', issuesData); // Added logging

//           return {
//             volumeId,
//             issues: issuesData
//           };
//         }));

//         console.log('Volumes Data:', volumesData); // Added logging

//         setVolumes(volumesData);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching data: ", error);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       {volumes.map(volume => (
//         <div key={volume.volumeId}>
//           <h2>{volume.volumeId}</h2>
//           {volume.issues.length > 0 ? (
//             volume.issues.map(issue => (
//               <div key={issue.issueId}>
//                 <h3>{issue.issueId}</h3>
//                 {issue.papers.length > 0 ? (
//                   issue.papers.map(paper => (
//                     <div key={paper.id}>
//                       <h4>{paper.title}</h4>
//                       <p>{paper.abstract}</p>
//                       <p>Keywords: {paper.keywords}</p>
//                       <p>Research Area: {paper.researchArea}</p>
//                       <p>Status: {paper.status}</p>
//                       <a href={paper.fileURL} target="_blank" rel="noopener noreferrer">Download Paper</a>
//                       <p>Uploaded on: {new Date(paper.timestamp.seconds * 1000).toLocaleDateString()}</p>
//                     </div>
//                   ))
//                 ) : (
//                   <p>No papers found.</p>
//                 )}
//               </div>
//             ))
//           ) : (
//             <p>No issues found.</p>
//           )}
//         </div>
//       ))}
//     </div>
//   );

//   import { collection, getDocs } from "firebase/firestore";
// import { db } from "./firebaseConfig"; // Adjust the import based on your setup

// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       // const querySnapshot = await getDocs(collection(db, "PapersCollection"));
//       // querySnapshot.forEach((doc) => {
//       //   // doc.data() is never undefined for query doc snapshots
//       //   console.log(doc.id, " => ", doc.data());
//       // });
//       const volumesCollectionRef = collection(db, 'PapersCollection');
//       const volumesSnapshot = await getDocs(volumesCollectionRef);

//       const volumesData = await Promise.all(volumesSnapshot.docs.map(async (volumeDoc) => {
//         const volumeId = volumeDoc.id;
//         const issuesCollectionRef = collection(db, `PapersCollection/${volumeId}/Issues`);
//         const issuesSnapshot = await getDocs(issuesCollectionRef);

//         const issuesData = await Promise.all(issuesSnapshot.docs.map(async (issueDoc) => {
//           const issueId = issueDoc.id;
//           const papersCollectionRef = collection(db, `PapersCollection/${volumeId}/Issues/${issueId}/Papers`);
//           const papersSnapshot = await getDocs(papersCollectionRef);
//           const papersData = papersSnapshot.docs.map(paperDoc => ({ id: paperDoc.id, ...paperDoc.data() }));

//           console.log('Volume Id:', volumeId);
//           console.log('Issue Id:', issueId);

//           return {
//             issueId,
//             papers: papersData
//           };
//         }));

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

//   fetchData();
// }, []);



// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const volumesCollectionRef = collection(db, 'PapersCollection');
//       const volumesSnapshot = await getDocs(volumesCollectionRef);

//       const volumesData = await Promise.all(volumesSnapshot.docs.map(async (volumeDoc) => {
//         const volumeId = volumeDoc.id;
//         console.log(`Fetching issues for volumeId: ${volumeId}`);
//         const issuesCollectionRef = collection(db, `PapersCollection/${volumeId}/Issues`);
//         const issuesSnapshot = await getDocs(issuesCollectionRef);

//         const issuesData = await Promise.all(issuesSnapshot.docs.map(async (issueDoc) => {
//           const issueId = issueDoc.id;
//           console.log(`Fetching papers for volumeId: ${volumeId}, issueId: ${issueId}`);
//           const papersCollectionRef = collection(db, `PapersCollection/${volumeId}/Issues/${issueId}/Papers`);
//           const papersSnapshot = await getDocs(papersCollectionRef);
//           const papersData = papersSnapshot.docs.map(paperDoc => ({ id: paperDoc.id, ...paperDoc.data() }));

//           return {
//             issueId,
//             papers: papersData
//           };
//         }));

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

//   fetchData();
// }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const volumesCollectionRef = collection(db, 'PapersCollection');
  //       const volumesSnapshot = await getDocs(volumesCollectionRef);

  //       const volumesData = await Promise.all(volumesSnapshot.docs.map(async (volumeDoc) => {
  //         const volumeId = volumeDoc.id;
  //         const issuesCollectionRef = collection(db, `PapersCollection/${volumeId}`);
  //         const issuesSnapshot = await getDocs(issuesCollectionRef);

  //         console.log('Volume Id:'+volumeId);
  //         // console.log('Issue Id:'+issueId);
  //         const issuesData = await Promise.all(issuesSnapshot.docs.map(async (issueDoc) => {
  //           const issueId = issueDoc.id;
  //           const papersCollectionRef = collection(db, `PapersCollection/${volumeId}/${issueId}`);
  //           const papersSnapshot = await getDocs(papersCollectionRef);
  //           const papersData = papersSnapshot.docs.map(paperDoc => ({ id: paperDoc.id, ...paperDoc.data() }));

  //           console.log('Volume Id:'+volumeId);
  //           console.log('Issue Id:'+issueId);

  //           return {
  //             issueId,
  //             papers: papersData
  //           };
  //         }));

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

  //   fetchData();
  // }, []);

  // if (loading) {
  //   return <center><h2>Loading...</h2></center>;
  // }

  // return (
  //   <div>
  //     {volumes.map(volume => (
  //       <div key={volume.volumeId}>
  //         <h2>{volume.volumeId}</h2>
  //         {volume.issues.map(issue => (
  //           <div key={issue.issueId}>
  //             <h3>{issue.issueId}</h3>
  //             {issue.papers.map(paper => (
  //               <div key={paper.id}>
  //                 <h4>{paper.title}</h4>
  //                 <p>{paper.abstract}</p>
  //                 <p>Keywords: {paper.keywords}</p>
  //                 <p>Research Area: {paper.researchArea}</p>
  //                 <p>Status: {paper.status}</p>
  //                 <a href={paper.fileURL} target="_blank" rel="noopener noreferrer">Download Paper</a>
  //                 <p>Uploaded on: {new Date(paper.timestamp.seconds * 1000).toLocaleDateString()}</p>
  //               </div>
  //             ))}
  //           </div>
  //         ))}
  //       </div>
  //     ))}
  //   </div>
  // );
// };

// // Helper function to format date ranges based on issue IDs
// const formatDateRange = (issueId) => {
//   // You need to implement this function based on how you map issue IDs to date ranges
//   // For example:
//   const dateRanges = {
//     'Issue1': 'January-February 2024',
//     'Issue2': 'March-April 2024',
//     'Issue3': 'May-June 2024',
//     'Issue4': 'July-August 2024',
//     // Add more mappings here
//   };
//   return dateRanges[issueId] || 'Unknown Date Range';
// };

// export default PublicationsPage;









//======================================= Woriking Code ===================================================================

// import { useEffect, useState } from 'react';
// import { collection, getDocs } from 'firebase/firestore';
// import { db } from './firebaseConfig'; // Adjust the import as necessary
// import React, { useEffect, useState } from 'react';
// import { getFirestore, collection, getDocs, doc,  } from "firebase/firestore/lite";
// import { db } from "../../../backend/firebase"; 
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
// import Header from '../components/NewCustomComponents/Header';




// const PublicationsPage = () => {
//   const [volumes, setVolumes] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedPapers, setSelectedPapers] = useState([]);
//   const [selectedVolumeId, setSelectedVolumeId] = useState('');
//   const [selectedIssueId, setSelectedIssueId] = useState('');

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Fetch volumes collection
//         const volumesCollectionRef = collection(db, 'PapersCollection');
//         const volumesSnapshot = await getDocs(volumesCollectionRef);

//         const volumesData = await Promise.all(volumesSnapshot.docs.map(async (volumeDoc) => {
//           const volumeId = volumeDoc.id;

//           // Fetch issues for each volume
//           const issuesData = await fetchIssues(volumeId);

//           return {
//             volumeId,
//             issues: issuesData
//           };
//         }));

//         setVolumes(volumesData);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching data: ", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const fetchIssues = async (volumeId) => {
//     try {
//       const issuesData = [];
//       const volumeRef = doc(db, 'PapersCollection', volumeId);

//       // List predefined issue subcollections
//       const issueNames = ['Issue1', 'Issue2', 'Issue3', 'Issue4']; // Add more if needed

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
//       const issueRef = collection(db, 'PapersCollection', volumeId, issueId); // Access papers collection within each issue

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

//   const handleIssueClick = async (volumeId, issueId) => {
//     try {
//       const papersData = await fetchPapers(volumeId, issueId);
//       setSelectedPapers(papersData);
//       setSelectedVolumeId(volumeId);
//       setSelectedIssueId(issueId);
//     } catch (error) {
//       console.error(`Error fetching papers for issue ${issueId} in volume ${volumeId}: `, error);
//     }
//   };

//   const formatDateRange = (issueId) => {
//     const dateRanges = {
//       'Issue1': 'January-February 2024',
//       'Issue2': 'March-April 2024',
//       'Issue3': 'May-June 2024',
//       'Issue4': 'July-August 2024',
//       // Add more mappings here
//     };
//     return dateRanges[issueId] || 'Unknown Date Range';
//   };

//   if (loading) {
//     return <div>
//       <Header/>
//       <center style={{ backgroundColor: '#D9E3F0' }}>
//         <h1 style={{ paddingTop: '8px', paddingBottom: '8px' }}>Publications</h1>
//       </center>
      
//       <center>
//       Loading...
//       </center>
//     </div>;
//   }

//   return (
//     <div>
//       <Header/>
//       <center style={{ backgroundColor: '#D9E3F0' }}>
//         <h1 style={{ paddingTop: '8px', paddingBottom: '8px' }}>Publications</h1>
//       </center>

//       <center>
//       {volumes.map((volume, indexVolume) => (
//         <div key={volume.volumeId}>
//           {volume.issues.map((issue) => (
//             <div key={issue.issueId}>
//               <a href='#papers-index' onClick={() => handleIssueClick(volume.volumeId, issue.issueId)} style={{ cursor: 'pointer', color: 'blue' }}>
//                 Volume {indexVolume + 1} {issue.issueId} ({formatDateRange(issue.issueId)})
//               </a>
//             </div>
//           ))}
//         </div>
//       ))}
//       </center>

//       <div style={{ height: '10vh' }}></div>
//       {selectedVolumeId && selectedIssueId && (
//         <div>
//           <center style={{ backgroundColor: '#D9E3F0' }}>
//             <h4 id="papers-index" style={{paddingTop: '5px', paddingBottom: '5px'}}>
//               {selectedVolumeId}, {selectedIssueId} {formatDateRange(selectedIssueId)}
//             </h4>
//           </center>
//           <div className="papers-index" style={{ padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
//             {selectedPapers.map((paper) => (
//               // <div key={paper.id} style={{marginBottom: '16px',border: '1px solid gray',padding: '8px 8px 4px'}}>
//               //   <h4>{paper.title}</h4>
//               //   <p>{paper.abstract}</p>
//               //   <p>Keywords: {paper.keywords}</p>
//               //   <p>Research Area: {paper.researchArea}</p>
//               //   <p>Status: {paper.status}</p>
//               //   <a href={paper.fileURL} target="_blank" rel="noopener noreferrer">Download Paper</a>
//               //   <p>Uploaded on: {new Date(paper.timestamp.seconds * 1000).toLocaleDateString()}</p>
//               // </div>
//               <div className="archive-rp-info" style={{ width: '50%', marginBottom: '16px',border: '1px solid gray',padding: '8px 8px 4px',  borderRadius: '8px'}}>
//                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                     
//                      <a style={{fontFamily: 'Metrophobic, Forum, Helvetica, Ubuntu, Arial, sans-serif', fontSize: '25px'}} href="research-paper.php?id=23833">{paper.title}</a>
                     
//                      <span className="pdf-link">
//                              <a href={paper.fileURL} target="_blank">      
//                               <FontAwesomeIcon icon={faFilePdf} />
//                               &nbsp;PDF
//                              </a>
//                      </span>
//                    </div>
//                    {/* <div> */}
//                     <h3>{paper.abstract}</h3>
//                    {/* </div> */}
              
//                    <div><b>Author(s):</b> Dr. {paper.author.name}</div>

//                    <div><b>Country:</b> India</div>
//                    <div><b>Research Area:</b> {paper.researchArea}</div>

//                    {/* <div><b>DOI:</b> <a href="https://doi.org/10.36948/ijfmr.2024.v06i04.23833">10.36948/ijfmr.2024.v06i04.23833</a></div> */}
//                  </div> 
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PublicationsPage;

//==========================================================================================================

















// const PublicationsPage = () => {
//   const [volumes, setVolumes] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Fetch volumes collection
//         const volumesCollectionRef = collection(db, 'PapersCollection');
//         const volumesSnapshot = await getDocs(volumesCollectionRef);

//         const volumesData = await Promise.all(volumesSnapshot.docs.map(async (volumeDoc) => {
//           const volumeId = volumeDoc.id;

//           // Fetch issues for each volume
//           const issuesData = await fetchIssues(volumeId);

//           return {
//             volumeId,
//             issues: issuesData
//           };
//         }));

//         setVolumes(volumesData);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching data: ", error);
//       }
//     };

//     const fetchIssues = async (volumeId) => {
//       try {
//         const issuesData = [];
//         const volumeRef = doc(db, 'PapersCollection', volumeId);

//         // List predefined issue subcollections
//         const issueNames = ['Issue1', 'Issue2', 'Issue3', 'Issue4']; // Add more if needed

//         for (const issueName of issueNames) {
//           const papersData = await fetchPapers(volumeId, issueName);

//           issuesData.push({
//             issueId: issueName,
//             papers: papersData
//           });
//         }

//         return issuesData;
//       } catch (error) {
//         console.error(`Error fetching issues for volume ${volumeId}: `, error);
//         return [];
//       }
//     };

//     const fetchPapers = async (volumeId, issueId) => {
//       try {
//         const papersData = [];
//         const issueRef = collection(db, 'PapersCollection', volumeId, issueId, ); // Access 'Papers' collection within each issue

//         const papersSnapshot = await getDocs(issueRef);

//         papersSnapshot.forEach((paperDoc) => {
//           papersData.push({ id: paperDoc.id, ...paperDoc.data() });
//         });

//         return papersData;
//       } catch (error) {
//         console.error(`Error fetching papers for issue ${issueId} in volume ${volumeId}: `, error);
//         return [];
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       {volumes.map((volume, indexVolume) => (
//         <div key={volume.volumeId}>
//           {/* <h2> {volume.volumeId}</h2> */}
//           {volume.issues.map((issue) => (
//             <div key={issue.issueId}>
//               <a href='#papers-index' onClick={() => handleIssueClick(issue.id)} style={{ cursor: 'pointer', color: 'blue' }}>
//                  Volume {indexVolume + 1} {issue.issueId} ({formatDateRange(issue.issueId)})
//               </a>
//                 {/* <div className="archive-rp-info" style={{marginBottom: '16px',border: '1px solid gray',padding: '8px 8px 4px'}}>
//                   <div>
//                     <span className="pdf-link">
//                             <a href="papers/2024/4/23833.pdf" target="_blank"><i className="fa fa-file-pdf-o"></i>&nbsp;PDF</a>
//                     </span>
//                     <a style={{fontFamily: 'Metrophobic, Forum, Helvetica, Ubuntu, Arial, sans-serif'}} href="research-paper.php?id=23833">Effectiveness of AI in Enhancing Quality Higher Education: A Survey Study</a>
//                   </div>
              
//                   <div><b>Author(s):</b> Dr. M. Krishnakumar, K.Balasubramanian</div>

//                   <div><b>Country:</b> India</div>
//                   <div><b>DOI:</b> <a href="https://doi.org/10.36948/ijfmr.2024.v06i04.23833">10.36948/ijfmr.2024.v06i04.23833</a></div>
//                 </div> */}

//               {/* {issue.papers.length > 0 ? (
//                 issue.papers.map((paper) => (
//                   <div key={paper.id}>
//                   {/* //   <h4>{paper.title}</h4>
//                   //   <p>{paper.abstract}</p>
//                   //   <p>Keywords: {paper.keywords}</p>
//                   //   <p>Research Area: {paper.researchArea}</p>
//                   //   <p>Status: {paper.status}</p>
//                   //   <a href={paper.fileURL} target="_blank" rel="noopener noreferrer">Download Paper</a>
//                      {/* <p>Uploaded on: {new Date(paper.timestamp.seconds * 1000).toLocaleDateString()}</p> 
//                   </div>
//                 ))
//               ) : (
//                 <p>No papers found.</p>
//               )} */}
//             </div>
//           ))}
//         </div>
//       ))}

//       <div style={{height: '100vh'}}></div>
//       <h4 id="papers-index">Volume1</h4>
//       <div className="papers-index">

//       </div>
//     </div>
//   );
// };

// // Helper function to format date ranges based on issue IDs
// const formatDateRange = (issueId) => {
//   const dateRanges = {
//     'Issue1': 'January-March 2024',
//     'Issue2': 'April-June 2024',
//     'Issue3': 'July-September 2024',
//     'Issue4': 'October-December 2024',
//     // Add more mappings here
//   };
//   return dateRanges[issueId] || 'Unknown Date Range';
// };

// export default PublicationsPage;






















// const PublicationsPage = () => {
//   const [volumes, setVolumes] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Fetch volumes collection
//         const volumesCollectionRef = collection(db, 'PapersCollection');
//         const volumesSnapshot = await getDocs(volumesCollectionRef);

//         const volumesData = await Promise.all(volumesSnapshot.docs.map(async (volumeDoc) => {
//           const volumeId = volumeDoc.id;

//           // Fetch issues for each volume
//           const issuesData = await fetchIssues(volumeId);

//           return {
//             volumeId,
//             issues: issuesData
//           };
//         }));

//         setVolumes(volumesData);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching data: ", error);
//       }
//     };

//     const fetchIssues = async (volumeId) => {
//       try {
//         const issuesData = [];
//         const volumeRef = doc(db, 'PapersCollection', volumeId);

//         // Fetch issues collection
//         const issuesCollectionRef = collection(volumeRef, 'Issues');
//         const issuesSnapshot = await getDocs(issuesCollectionRef);

//         for (const issueDoc of issuesSnapshot.docs) {
//           const issueId = issueDoc.id;

//           // Fetch papers for each issue
//           const papersData = await fetchPapers(volumeId, issueId);

//           issuesData.push({
//             issueId,
//             papers: papersData
//           });
//         }

//         return issuesData;
//       } catch (error) {
//         console.error(`Error fetching issues for volume ${volumeId}: `, error);
//         return [];
//       }
//     };

//     const fetchPapers = async (volumeId, issueId) => {
//       try {
//         const papersData = [];
//         const issueRef = doc(db, 'PapersCollection', volumeId, 'Issues', issueId);

//         // Fetch papers collection
//         const papersCollectionRef = collection(issueRef, 'Papers');
//         const papersSnapshot = await getDocs(papersCollectionRef);

//         papersSnapshot.forEach((paperDoc) => {
//           papersData.push({ id: paperDoc.id, ...paperDoc.data() });
//         });

//         return papersData;
//       } catch (error) {
//         console.error(`Error fetching papers for issue ${issueId} in volume ${volumeId}: `, error);
//         return [];
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       {volumes.map((volume) => (
//         <div key={volume.volumeId}>
//           <h2>Volume {volume.volumeId}</h2>
//           {volume.issues.map((issue) => (
//             <div key={issue.issueId}>
//               <h3>
//                 Issue {issue.issueId} ({formatDateRange(issue.issueId)})
//               </h3>
//               {issue.papers.length > 0 ? (
//                 issue.papers.map((paper) => (
//                   <div key={paper.id}>
//                     <h4>{paper.title}</h4>
//                     <p>{paper.abstract}</p>
//                     <p>Keywords: {paper.keywords}</p>
//                     <p>Research Area: {paper.researchArea}</p>
//                     <p>Status: {paper.status}</p>
//                     <a href={paper.fileURL} target="_blank" rel="noopener noreferrer">Download Paper</a>
//                     <p>Uploaded on: {new Date(paper.timestamp.seconds * 1000).toLocaleDateString()}</p>
//                   </div>
//                 ))
//               ) : (
//                 <p>No papers found.</p>
//               )}
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// // Helper function to format date ranges based on issue IDs
// const formatDateRange = (issueId) => {
//   const dateRanges = {
//     'Issue1': 'January-February 2024',
//     'Issue2': 'March-April 2024',
//     'Issue3': 'May-June 2024',
//     'Issue4': 'July-August 2024',
//     // Add more mappings here
//   };
//   return dateRanges[issueId] || 'Unknown Date Range';
// };

// export default PublicationsPage;

// // const PublicationsPage = () => {
// //   const [volumes, setVolumes] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         // Fetch volumes collection
// //         const volumesCollectionRef = collection(db, 'PapersCollection');
// //         const volumesSnapshot = await getDocs(volumesCollectionRef);

// //         const volumesData = await Promise.all(volumesSnapshot.docs.map(async (volumeDoc) => {
// //           const volumeId = volumeDoc.id;

// //           // Create reference to issues subcollections
// //           const issuesData = await fetchIssues(volumeId);

// //           return {
// //             volumeId,
// //             issues: issuesData
// //           };
// //         }));

// //         setVolumes(volumesData);
// //         setLoading(false);
// //       } catch (error) {
// //         console.error("Error fetching data: ", error);
// //       }
// //     };

// //     const fetchIssues = async (volumeId) => {
// //       try {
// //         const issuesData = [];
        
// //         // Fetch all subcollections in the volume
// //         const volumeRef = doc(db, 'PapersCollection', volumeId);
// //         const issuesCollectionRef = collection(volumeRef, 'Issues');
// //         const issuesSnapshot = await getDocs(issuesCollectionRef);

// //         for (const issueDoc of issuesSnapshot.docs) {
// //           const issueId = issueDoc.id;

// //           // Fetch papers in each issue
// //           const papersData = await fetchPapers(volumeId, issueId);

// //           issuesData.push({
// //             issueId,
// //             papers: papersData
// //           });
// //         }

// //         return issuesData;
// //       } catch (error) {
// //         console.error(`Error fetching issues for volume ${volumeId}: `, error);
// //         return [];
// //       }
// //     };

// //     const fetchPapers = async (volumeId, issueId) => {
// //       try {
// //         const papersData = [];
// //         const issueRef = doc(db, 'PapersCollection', volumeId, 'Issues', issueId);
// //         const papersCollectionRef = collection(issueRef, 'Papers');
// //         const papersSnapshot = await getDocs(papersCollectionRef);
        
// //         papersSnapshot.forEach((paperDoc) => {
// //           papersData.push({ id: paperDoc.id, ...paperDoc.data() });
// //         });

// //         return papersData;
// //       } catch (error) {
// //         console.error(`Error fetching papers for issue ${issueId} in volume ${volumeId}: `, error);
// //         return [];
// //       }
// //     };

// //     fetchData();
// //   }, []);

// //   if (loading) {
// //     return <div>Loading...</div>;
// //   }

// //   return (
// //     <div>
// //       {volumes.map((volume) => (
// //         <div key={volume.volumeId}>
// //           <h2>Volume {volume.volumeId}</h2>
// //           {volume.issues.map((issue) => (
// //             <div key={issue.issueId}>
// //               <h3>
// //                 Issue {issue.issueId} ({formatDateRange(issue.issueId)})
// //               </h3>
// //               {issue.papers.length > 0 ? (
// //                 issue.papers.map((paper) => (
// //                   <div key={paper.id}>
// //                     <h4>{paper.title}</h4>
// //                     <p>{paper.abstract}</p>
// //                     <p>Keywords: {paper.keywords}</p>
// //                     <p>Research Area: {paper.researchArea}</p>
// //                     <p>Status: {paper.status}</p>
// //                     <a href={paper.fileURL} target="_blank" rel="noopener noreferrer">Download Paper</a>
// //                     <p>Uploaded on: {new Date(paper.timestamp.seconds * 1000).toLocaleDateString()}</p>
// //                   </div>
// //                 ))
// //               ) : (
// //                 <p>No papers found.</p>
// //               )}
// //             </div>
// //           ))}
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // // Helper function to format date ranges based on issue IDs
// // const formatDateRange = (issueId) => {
// //   const dateRanges = {
// //     'Issue1': 'January-February 2024',
// //     'Issue2': 'March-April 2024',
// //     'Issue3': 'May-June 2024',
// //     'Issue4': 'July-August 2024',
// //     // Add more mappings here
// //   };
// //   return dateRanges[issueId] || 'Unknown Date Range';
// // };

// // export default PublicationsPage;















import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs, doc,  } from "firebase/firestore/lite";
import { db } from "../../../backend/firebase"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/NewCustomComponents/Header';

const PublicationsPage = () => {
  const [volumes, setVolumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPapers, setSelectedPapers] = useState([]);
  const [selectedVolumeId, setSelectedVolumeId] = useState('');
  const [selectedIssueId, setSelectedIssueId] = useState('');
  const [expandedPapers, setExpandedPapers] = useState({});

  const fetchData = async () => {
    try {
      // Fetch volumes collection
      const volumesCollectionRef = collection(db, 'PapersCollection');
      const volumesSnapshot = await getDocs(volumesCollectionRef);

      const volumesData = await Promise.all(volumesSnapshot.docs.map(async (volumeDoc) => {
        const volumeId = volumeDoc.id;

        // Fetch issues for each volume
        const issuesData = await fetchIssues(volumeId);

        return {
          volumeId,
          issues: issuesData
        };
      }));

      setVolumes(volumesData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const fetchIssues = async (volumeId) => {
    try {
      const issuesData = [];
      const volumeRef = doc(db, 'PapersCollection', volumeId);
      const issueNames = ['Issue1', 'Issue2', 'Issue3', 'Issue4']; // List of issue names

      for (const issueName of issueNames) {
        const papersData = await fetchPapers(volumeId, issueName);
        issuesData.push({
          issueId: issueName,
          papers: papersData
        });
      }

      return issuesData;
    } catch (error) {
      console.error(`Error fetching issues for volume ${volumeId}: `, error);
      return [];
    }
  };

  const fetchPapers = async (volumeId, issueId) => {
    try {
      const papersData = [];
      const issueRef = collection(db, 'PapersCollection', volumeId, issueId);
      const papersSnapshot = await getDocs(issueRef);

      papersSnapshot.forEach((paperDoc) => {
        papersData.push({ id: paperDoc.id, ...paperDoc.data() });
      });

      return papersData;
    } catch (error) {
      console.error(`Error fetching papers for issue ${issueId} in volume ${volumeId}: `, error);
      return [];
    }
  };

  const handleIssueClick = async (volumeId, issueId) => {
    try {
      const papersData = await fetchPapers(volumeId, issueId);
      setSelectedPapers(papersData);
      setSelectedVolumeId(volumeId);
      setSelectedIssueId(issueId);
    } catch (error) {
      console.error(`Error fetching papers for issue ${issueId} in volume ${volumeId}: `, error);
    }
  };

  const formatDateRange = (issueId) => {
    const dateRanges = {
      'Issue1': 'January-March 2024',
      'Issue2': 'April-June 2024',
      'Issue3': 'July-September 2024',
      'Issue4': 'October-December 2024',
      // Add more mappings here
    };
    return dateRanges[issueId] || 'Unknown Date Range';
  };

  const toggleExpand = (id) => {
    setExpandedPapers((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const renderAbstract = (abstract, id) => {
    const maxLines = 4;
    const lines = abstract.split('\n');
    const isExpanded = expandedPapers[id];

    return (
      <div>
        {lines.slice(0, isExpanded ? lines.length : maxLines).map((line, index) => (
          <p key={index}>{line}</p>
        ))}
        {lines.length > maxLines && (
          <button onClick={() => toggleExpand(id)}>
            {isExpanded ? 'Show Less' : 'Show More'}
          </button>
        )}
      </div>
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div>
        <Header />
        <center style={{ backgroundColor: '#D9E3F0' }}>
          <h1 style={{ paddingTop: '8px', paddingBottom: '8px' }}>Publications</h1>
        </center>
        <center>Loading...</center>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <center style={{ backgroundColor: '#D9E3F0' }}>
        <h1 style={{ paddingTop: '8px', paddingBottom: '8px' }}>Publications</h1>
      </center>

      <center>
        {volumes.map((volume, indexVolume) => (
          <div key={volume.volumeId}>
            {volume.issues.map((issue) => (
              <div key={issue.issueId}>
                <a href='#papers-index' onClick={() => handleIssueClick(volume.volumeId, issue.issueId)} style={{ cursor: 'pointer', color: 'blue' }}>
                  Volume {indexVolume + 1} {issue.issueId} ({formatDateRange(issue.issueId)})
                </a>
              </div>
            ))}
          </div>
        ))}
      </center>

      <div style={{ height: '10vh' }}></div>
      {selectedVolumeId && selectedIssueId && (
        <div>
          <center style={{ backgroundColor: '#D9E3F0' }}>
            <h4 id="papers-index" style={{ paddingTop: '5px', paddingBottom: '5px' }}>
              {selectedVolumeId}, {selectedIssueId} {formatDateRange(selectedIssueId)}
            </h4>
          </center>
          <div className="papers-index" style={{ padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {selectedPapers.map((paper) => (
              <div className="archive-rp-info" key={paper.id} style={{ width: '50%', marginBottom: '16px', border: '1px solid gray', padding: '8px 8px 4px', borderRadius: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <a style={{ fontFamily: 'Metrophobic, Forum, Helvetica, Ubuntu, Arial, sans-serif', fontSize: '25px' }} href={paper.fileURL} target="_blank" rel="noopener noreferrer">{paper.title}</a>
                  <span className="pdf-link">
                    <a href={paper.fileURL} target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faFilePdf} />
                      &nbsp;PDF
                    </a>
                  </span>
                </div>
                <div style={{height: '20px'}}></div>
                {/* <h3>{renderAbstract(paper.abstract, paper.id)}</h3> */}
                {/* <h3>{paper.abstract}</h3> */}
                <div><b>Author(s):</b> Dr. {paper.author.name}</div>
                <div><b>Country:</b> India</div>
                <div><b>Research Area:</b> {paper.researchArea}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PublicationsPage;

