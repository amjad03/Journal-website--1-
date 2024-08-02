// import React, { useState, useEffect } from 'react';

// const AdminPanel = () => {
//   const [volumes, setVolumes] = useState([]);
//   const [issues, setIssues] = useState([]);
//   const [selectedVolume, setSelectedVolume] = useState('');
//   const [selectedIssue, setSelectedIssue] = useState('');
//   const paperId = 'id_of_the_paper_being_approved'; // Replace with actual paper ID

//   useEffect(() => {
//     fetchVolumes();
//   }, []);

//   const fetchVolumes = async () => {
//     try {
//       const response = await fetch('/volumes');
//       const volumes = await response.json();
//       setVolumes(volumes);
//     } catch (error) {
//       console.error('Error fetching volumes:', error);
//     }
//   };

//   const fetchIssues = async (volumeId) => {
//     try {
//       const response = await fetch(`/volumes/${volumeId}/issues`);
//       const issues = await response.json();
//       setIssues(issues);
//     } catch (error) {
//       console.error('Error fetching issues:', error);
//     }
//   };

//   const handleVolumeChange = (event) => {
//     const volumeId = event.target.value;
//     setSelectedVolume(volumeId);
//     fetchIssues(volumeId);
//   };

//   const handleIssueChange = (event) => {
//     setSelectedIssue(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await fetch('/approve-paper', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ paperId, volumeId: selectedVolume, issueId: selectedIssue })
//       });
//       const result = await response.json();
//       if (result.status === 'ok') {
//         // Handle successful approval, e.g., display a success message or redirect
//         console.log('Paper approved successfully');
//       } else {
//         // Handle error case
//         console.error('Error approving paper:', result.message);
//       }
//     } catch (error) {
//       console.error('Error submitting approval:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="volume-dropdown">Select Volume:</label>
//         <select id="volume-dropdown" value={selectedVolume} onChange={handleVolumeChange}>
//           <option value="">Select Volume</option>
//           {volumes.map(volume => (
//             <option key={volume._id} value={volume._id}>
//               Volume {volume.volumeNumber}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div>
//         <label htmlFor="issue-dropdown">Select Issue:</label>
//         <select id="issue-dropdown" value={selectedIssue} onChange={handleIssueChange}>
//           <option value="">Select Issue</option>
//           {issues.map(issue => (
//             <option key={issue._id} value={issue._id}>
//               Issue {issue.issueNumber}
//             </option>
//           ))}
//         </select>
//       </div>
//       <button type="submit">Approve Paper</button>
//     </form>
//   );
// };

// export default AdminPanel;










import React, { useEffect, useState } from 'react';
import { db } from '../../../backend/firebase'; // Adjust the import according to your firebase configuration file
import { collection, getDocs, doc, updateDoc, addDoc, getDoc } from 'firebase/firestore/lite';
import Header from '../components/NewCustomComponents/Header';
// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

const AdminPanel = () => {
  const [papers, setPapers] = useState([]);
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  useEffect(() => {
    const fetchPapers = async () => {
      const papersCollection = collection(db, 'PapersQueueCollection');
      const papersSnapshot = await getDocs(papersCollection);
      const papersList = papersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      const pendingPapers = papersList.filter(paper => paper.status === 'pending');
      setPapers(pendingPapers);
    };
    fetchPapers();
  }, []);

  const handleApprove = async (paper) => {
    const paperRef = doc(db, 'PapersQueueCollection', paper.id);
    await updateDoc(paperRef, { status: 'approved' });

    const currentDoc = await getDoc(doc(db, 'Current', 'current'));
    const currentData = currentDoc.data();
    const volumeId = `Volume${currentData.volume}`;
    const issueId = `Issue${currentData.issue}`;

    const papersCollectionRef = collection(db, 'PapersCollection', volumeId, issueId);
    await addDoc(papersCollectionRef, { ...paper, status: 'approved' });

    setPapers(papers.map(p => (p.id === paper.id ? { ...p, status: 'approved' } : p)));
  };

  const handleReject = async (paper) => {
    const paperRef = doc(db, 'PapersQueueCollection', paper.id);
    await updateDoc(paperRef, { status: 'rejected' });

    setPapers(papers.map(p => (p.id === paper.id ? { ...p, status: 'rejected' } : p)));
  };

  return (
    <div>
      <Header/>
      <div style={{width: '100%', display: 'flex',flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        {/* <h1>Admin Panel</h1> */}
        <center style={{width: '100%', backgroundColor: '#D9E3F0' }}>
          <h1 style={{ paddingTop: '8px', paddingBottom: '8px' }}>Admin Panel</h1>
        </center>
        <div style={{height: '10px'}}></div>
        <div >
          {papers.map((paper) => (
            <div key={paper.id} style={{ marginBottom: '20px', border: '1px solid black', padding: '10px' }}>
              <h2>{paper.title}</h2>
              <p>{paper.abstract}</p>
              {/* Render PDF using react-pdf */}
              {/* <div style={{ height: '500px', width: '500px' }}>
                <Document file={paper.fileURL} onLoadSuccess={onDocumentLoadSuccess}>
                  {Array.from(new Array(numPages), (el, index) => (
                    <Page key={index} pageNumber={index + 1} />
                  ))}
                </Document>
              </div> */}
              <button onClick={() => handleApprove(paper)} disabled={paper.status === 'approved'}>
                Approve
              </button>
              <button onClick={() => handleReject(paper)} disabled={paper.status === 'rejected'}>
                Reject
              </button>
            </div>
          ))}
        </div>
        {papers.length === 0 ? <h3>No paper found</h3> : ''}
      </div>
      
    </div>
  );
};

export default AdminPanel;















// import React, { useEffect, useState } from 'react';
// import { db } from '../../../backend/firebase'; // Adjust the import according to your firebase configuration file
// import { collection,getDoc, getDocs, doc, updateDoc, addDoc } from 'firebase/firestore/lite';

// const AdminPanel = () => {
//   const [papers, setPapers] = useState([]);
//   const [numPages, setNumPages] = useState();
//   const [pageNumber, setPageNumber] = useState(1);

//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//   }

//   useEffect(() => {
//     const fetchPapers = async () => {
//       const papersCollection = collection(db, 'PapersQueueCollection');
//       const papersSnapshot = await getDocs(papersCollection);
//       const papersList = papersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//       setPapers(papersList);
//     };
//     fetchPapers();
//   }, []);

//   const handleApprove = async (paper) => {
//     const paperRef = doc(db, 'PapersQueueCollection', paper.id);
//     await updateDoc(paperRef, { status: 'approved' });

//     // const currentDoc = await getDoc(doc(db, 'Current', 'current'));
//     const currentDoc = await getDoc(doc(db, 'Current', 'current'));
//     const currentData = currentDoc.data();
//     const volumeId = `Volume${currentData.volume}`;
//     const issueId = `Issue${currentData.issue}`;

//     const papersCollectionRef = collection(db, 'PapersCollection', volumeId, issueId);
//     await addDoc(papersCollectionRef, { ...paper, status: 'approved' });

//     setPapers(papers.map(p => (p.id === paper.id ? { ...p, status: 'approved' } : p)));
//   };

//   const handleReject = async (paper) => {
//     const paperRef = doc(db, 'PapersQueueCollection', paper.id);
//     await updateDoc(paperRef, { status: 'rejected' });

//     setPapers(papers.map(p => (p.id === paper.id ? { ...p, status: 'rejected' } : p)));
//   };

//   return (
//     <div>
//       <h1>Admin Panel</h1>
//       <div>
//         {papers.map((paper) => (
//           <div key={paper.id} style={{ marginBottom: '20px', border: '1px solid black', padding: '10px' }}>
//             <h2>{paper.title}</h2>
//             <p>{paper.abstract}</p>
//             {/* <div style={{ height: '500px', width: '500px' }}>
//               <Worker workerUrl={`https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`}>
//                 <Viewer fileUrl={paper.fileURL} />
//               </Worker>
//             </div> */}
//             {/* <div className="pdf-div">
//                   <p>
//                 Page {pageNumber} of {numPages}
//               </p>
//               <Document file={paper.fileURL} onLoadSuccess={onDocumentLoadSuccess}>
//                 {Array.apply(null, Array(numPages))
//                   .map((x, i) => i + 1)
//                   .map((page) => {
//                     return (
//                       <Page
//                         pageNumber={page}
//                         renderTextLayer={false}
//                         renderAnnotationLayer={false}
//                       />
//                     );
//                   })}
//               </Document>
          
//             </div> */}
//             <button onClick={() => handleApprove(paper)} disabled={paper.status === 'approved'}>
//               Approve
//             </button>
//             <button onClick={() => handleReject(paper)} disabled={paper.status === 'rejected'}>
//               Reject
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AdminPanel;

