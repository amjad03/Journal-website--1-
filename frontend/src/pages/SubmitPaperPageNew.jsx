import React, { useEffect, useState } from "react";
import Header from '../components/NewCustomComponents/Header'
import { db, storage, } from '../../../backend/firebase'; // Adjust the import path as necessary
import { getFirestore, collection, addDoc, serverTimestamp, doc, getDoc } from "firebase/firestore/lite";
import { ref, uploadBytes, getDownloadURL } from "@firebase/storage";

import './SubmitPaperPageNew.css';

function SubmitPaperPageNew() {
    const [areas, setAreas] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedResearchArea, setSelectedResearchArea] = useState('');

  const handleSelectionChange = (event) => {
    setSelectedResearchArea(event.target.value);
  };

  const [formData, setFormData] = useState({
    title: '',
    abstract: '',
    keywords: '',
    researchArea: '',
    message: '',
    author: {
      name: '',
      designation: '',
      organization: '',
      email: '',
      mobile: ''
    },
    file: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name in formData.author) {
      setFormData({ ...formData, author: { ...formData.author, [name]: value } });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleAuthorChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      author: {
        ...prevData.author,
        [name]: value
      }
    }));
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.file) {
//       alert('Please upload a file');
//       return;
//     }

//     try {
//       // Fetch the current volume and issue
//       const currentDoc = await getDoc(doc(db, 'Current', 'current'));
//       if (!currentDoc.exists()) {
//         throw new Error('Current document does not exist');
//       }
//       const currentData = currentDoc.data();
//       const volumeId = `Volume${currentData.volume}`;
//       const issueId = `Issue${currentData.issue}`;

//       // Create a storage reference with the timestamped file name
//       const timestamp = Date.now();
      
//       const storageRef = ref(storage, `papers/${timestamp}_${formData.file.name}`);

//       // Upload the file
//       await uploadBytes(storageRef, formData.file);
  
//       // Get the file URL
//       const fileURL = await getDownloadURL(storageRef);

//       // Add form data to Firestore
//       const paperData = {
//         title: formData.title,
//         abstract: formData.abstract,
//         keywords: formData.keywords,
//         researchArea: formData.researchArea,
//         message: formData.message,
//         author: formData.author,
//         fileURL: fileURL,
//         status: 'pending',
//         timestamp: serverTimestamp()
//       };

//       // Add the document to PapersQueueCollection
//       const papersQueueCollectionRef = collection(db, 'PapersQueueCollection');
//       await addDoc(papersQueueCollectionRef, paperData);

//       alert('Journal submitted successfully!');

//       // Reset form data
//       setFormData({
//         title: '',
//         abstract: '',
//         keywords: '',
//         researchArea: '',
//         message: '',
//         author: {
//           name: '',
//           designation: '',
//           organization: '',
//           email: '',
//           mobile: ''
//         },
//         file: null
//       });
//     } catch (error) {
//       console.error("Error submitting journal: ", error);
//       alert('Error submitting journal: ' + error.message);
//     }
//   };

const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.file) {
      alert('Please upload a file');
      return;
    }

    if(!formData.researchArea){
        alert('Please select a research area');
        return;
    }

    // Start loading (Show Circular Progress)
    setLoading(true);

    try {
      // Split keywords into an array
      const keywordsArray = formData.keywords.split(',').map(keyword => keyword.trim());

      // Construct the author array from the table inputs
    //   const authorArray = [
    //     formData.author, // Add the first author
    //     ...Array.from(document.querySelectorAll('.custom-table tbody tr')).slice(1).map((row) => ({
    //       name: row.querySelector('.name-input').value.trim(),
    //       designation: row.querySelector('.designation-input').value.trim(),
    //       organization: row.querySelector('.organization-input').value.trim(),
    //       email: row.querySelector('.email-input').value.trim(),
    //       mobile: row.querySelector('.mobile-input').value.trim(),
    //     })),
    //   ];
        const authorArray = [
        // {
        //   name: formData.author.name.trim(),
        //   designation: formData.author.designation.trim(),
        //   organization: formData.author.organization.trim(),
        //   email: formData.author.email.trim(),
        //   mobile: formData.author.mobile.trim(),
        // },
        ...Array.from(document.querySelectorAll('.custom-table tbody tr'))
        //   .slice(1) // Skip the first row as it's already included
          .map((row) => ({
            name: row.querySelector('.name-input').value.trim(),
            designation: row.querySelector('.designation-input').value.trim(),
            organization: row.querySelector('.organization-input').value.trim(),
            email: row.querySelector('.email-input').value.trim(),
            mobile: row.querySelector('.mobile-input').value.trim(),
          }))
          .filter((author) => 
            author.name && author.designation && author.organization && author.email && author.mobile
          ), // Filter out authors with any empty fields
      ];
      console.log(authorArray);

        const country = document.querySelector('input[name="country"]').value.trim();
        const state = document.querySelector('input[name="state"]').value.trim();
        const city = document.querySelector('input[name="city"]').value.trim();
        const postalCode = document.querySelector('input[name="postal_code"]').value.trim();
        const author_address = [{
            'country': country,
            'state': state,
            'city': city,
            'postal_code': postalCode,
        }]
        const reviewer_referral_id = document.querySelector('input[name="reviewerReferralId"]').value.trim();



      // Fetch the current volume and issue
      const currentDoc = await getDoc(doc(db, 'Current', 'current'));
      if (!currentDoc.exists()) {
        throw new Error('Current document does not exist');
      }
      const currentData = currentDoc.data();
      const volumeId = `Volume${currentData.volume}`;
      const issueId = `Issue${currentData.issue}`;

      // Create a storage reference with the timestamped file name
      const timestamp = Date.now();
      const storageRef = ref(storage, `papers/${timestamp}_${formData.file.name}`);

      // Upload the file
      await uploadBytes(storageRef, formData.file);
  
      // Get the file URL
      const fileURL = await getDownloadURL(storageRef);

      // Add form data to Firestore
      const paperData = {
        title: formData.title,
        abstract: formData.abstract,
        keywords: keywordsArray, // Save the array of keywords
        researchArea: formData.researchArea,
        message: formData.message,
        authors: authorArray, // Save the array of authors
        fileURL: fileURL,
        status: 'pending',
        timestamp: serverTimestamp(),
        authorAddress: author_address,
        reviewerReferralId: reviewer_referral_id
      };

      // Add the document to PapersQueueCollection
      const papersQueueCollectionRef = collection(db, 'PapersQueueCollection');
      await addDoc(papersQueueCollectionRef, paperData);

      alert('Journal submitted successfully!');

      // Reset form data
      setFormData({
        title: '',
        abstract: '',
        keywords: '',
        researchArea: '',
        message: '',
        author: {
          name: '',
          designation: '',
          organization: '',
          email: '',
          mobile: ''
        },
        file: null
      });
    } catch (error) {
      console.error("Error submitting journal: ", error);
      alert('Error submitting journal: ' + error.message);
    } finally {
      // Stop loading (Hide Circular Progress)
      setLoading(false);
    }
  };

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



    return (
        <>
            {loading && (
                <div className="loading-overlay">
                    <div className="loading-indicator">
                    <div className="spinner"></div>
                    </div>
                </div>
            )}

            <Header/>
            <center>
                <h2>Submit Research Paper</h2>
            </center>

            <h3><b>Important Instructions</b></h3>

            <form onSubmit={handleSubmit}>
            <ul>
                <li>
                    We recommend to read the publication guidelines/process, Fees & Payment and FAQs before submitting your research paper.
                </li>
                <li>
                    Kindly fill all the details properly as certificate will be generated on the basis of the information provided as under.            
                </li>
                <li>
                    All input fields marked with red left border are mandatory, they must be filled in.            
                </li>
                <li>
                    It is important that you provide functioning email address and functioning mobile number of the first author correctly because all communication will occur on those email address and/or mobile number.            
                </li>
                <li>
                    Details of the paper (Title, Abstract, Keywords, Author Name(s), Designation(s), Organization Name(s)) must be same as mentioned in the research paper which you are submitting.            
                </li>
                <li>
                    Please write Abstract in Sentence case, email address in lower case and all other fields in Title Case (Capitalize first character of each words). It's better NOT to write in UPPER CASE.            
                </li>
            </ul>

            <center>
                <h3 className='text_with_background'>Please fill in the details of the research paper.</h3>
            </center>
            <div className='input_contianer'>
                <div className='row_input_component'>
                    <label htmlFor="title">Title:</label>
                    <input className='red_border_input' placeholder='Please write in title case (Not in CAPITAL CASE)' type="text" id="title" name="title" required 
                    onChange={handleInputChange}/>
                </div>
                <div className='row_input_component'>
                    <label htmlFor="abstract">Abstract:</label>
                    <input className='red_border_input' placeholder='Short background information about the research' type="text" id="abstract" name="abstract" required 
                    onChange={handleInputChange}/>
                </div>
                <div className='row_input_component'>
                    <label htmlFor="keywords">Keywords:</label>
                    <input className='red_border_input' placeholder='Comma spearted list (ex: lorem, epusm, endor...)' type="text" id="keywords" name="keywords" required 
                    onChange={handleInputChange}/>
                </div>
                <div className='row_input_component'>
                    <label htmlFor="paper">Select Research Area:</label>
                    <select
                        name="researchArea"
                        value={formData.researchArea}
                        onChange={handleInputChange}
                        className="red_border_input"
                        >
                        <option value="" disabled>Select Research Area</option>
                        {areas.map((area, index) => (
                            <option key={index} value={area}>
                            {area}
                            </option>
                        ))}
                    </select>
                </div>
                
                <div className='row_input_component' >
                    <label htmlFor="paper">Select Research Paper:</label>
                    <div style={{width: '80%', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <input className='red_border_input' type="file" id="paper" name="paper" accept=".pdf,.doc,.docx,.txt" required
                            style={{ width: '49%', padding: '10px'}}
                            onChange={handleFileChange}
                        />
                        <p style={{ width: '49%', textWrap: 'wrap', fontSize: '14px', marginTop: '2px'}}>(.docx or .doc (Microsoft Office Word) or .odt (Open Document Text) file only) (Please format the document in single column layout, not in 2 columns.)</p>

                    </div>
                    
                </div>


                <div className='row_input_component'>
                    <label htmlFor="message">Message to Editor or Reviewer:</label>
                    <input className='red_border_input not_required_field' placeholder='Enter your message here...' type="text" id="message" name="message" onChange={handleInputChange}/>
                </div>
            </div>

            <center>        
                <h3 className='text_with_background'>Authors' Details</h3>
                <p>Don't write Dr. Prof. Mr. Mrs. Miss etc. salutations before authors' names, these will be removed, these are against international standard.</p>
            </center>


            <table className="custom-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Designation</th>
                        <th>Organization</th>
                        <th>Email Address</th>
                        <th>Mobile Number</th>
                    </tr>
                </thead>
                <tbody>
                       <tr>
                            <td>1.</td>
                            <td><input type="text" placeholder="In title case" className="table-input name-input required_field" required/></td>
                            <td><input type="text" placeholder="In title case" className="table-input designation-input required_field" required/></td>
                            <td><input type="text" placeholder="In title case" className="table-input organization-input required_field" required /></td>
                            <td><input type="email" placeholder="e.g. example@example.com" className="table-input email-input required_field" required /></td>
                            <td><input type="text" placeholder="+91 0000000000" className="table-input mobile-input required_field" required /></td>
                       </tr>
                    {Array.from({ length: 4 }, (_, index) => (
                    <tr key={index}>
                        <td>{index + 2}.</td>
                        <td><input type="text" placeholder="In title case" className="table-input name-input" /></td>
                        <td><input type="text" placeholder="In title case" className="table-input designation-input" /></td>
                        <td><input type="text" placeholder="In title case" className="table-input organization-input" /></td>
                        <td><input type="email" placeholder="e.g. example@example.com" className="table-input email-input" /></td>
                        <td><input type="text" placeholder="+91 0000000000" className="table-input mobile-input" /></td>
                    </tr>
                    ))}
                </tbody>
            </table>

            <center><p>Are there more authors? Don't worry; just write the five authors' names and we will add other author(s) from your uploaded research paper's file.</p></center>


            <center>        
                <h3 className='text_with_background'>Address for Communication</h3>
            </center>


            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <div className='column_input_component'>
                    <label htmlFor="title">Country:</label>
                    <input className='small_input' type="text" placeholder='Enter Country Name' id="country" name="country" required/>
                </div>

                <div className='column_input_component'>
                    <label htmlFor="title">State:</label>
                    <input className='small_input' type="text" placeholder='Enter State Name' id="state" name="state" required/>
                </div>

                <div className='column_input_component'>
                    <label htmlFor="title">City/District:</label>
                    <input className='small_input' type="text" placeholder='Enter City name' id="city" name="city" required/>
                </div>

                <div className='column_input_component'>
                    <label htmlFor="title">Postal code:</label>
                    <input className='small_input' type="text" placeholder='Enter Postal Code' id="postal_code" name="postal_code" required/>
                </div>
            </div>

            <center>
                    <div className='column_input_component' style={{ width: '40%', display: 'flex', flexDirection: 'column'}}>
                        <label htmlFor="title">Reviewer Referral Id :</label>
                        <input className='small_input not_required_field' type="text" placeholder='Enter reviewer referral Id ' id="reviewerReferralId" name="reviewerReferralId"/>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <input type="checkbox" name="privacy_policy" value="privacy_policy" required/>
                        <div style={{ width: '10px'}}></div>
                        <label htmlFor="privacy_policy">I agree with the <span><a href="#">journal/website's policies</a></span> </label>
                    </div>

                    <div style={{ height: '20px'}}></div>

                    <div style={{ display: 'flex', width: '20%', alignItems: 'center', justifyContent: 'center'}}>
                        <button type="submit" className="submit_button">Submit</button>
                    </div>
            </center>
            </form>

        </>
    )
}

export default SubmitPaperPageNew





// import React, { useEffect, useState } from "react";
// import Header from '../components/NewCustomComponents/Header';
// import { db, storage } from '../../../backend/firebase'; // Adjust the import path as necessary
// import { getFirestore, collection, addDoc, serverTimestamp, doc, getDoc } from "firebase/firestore/lite";
// import { ref, uploadBytes, getDownloadURL } from "@firebase/storage";

// import './SubmitPaperPageNew.css';

// function SubmitPaperPageNew() {
//     const [areas, setAreas] = useState([]);
//     const [loading, setLoading] = useState(false);

//     const [formData, setFormData] = useState({
//         title: '',
//         abstract: '',
//         keywords: '',
//         researchArea: '',
//         message: '',
//         author: {
//             name: '',
//             designation: '',
//             organization: '',
//             email: '',
//             mobile: ''
//         },
//         file: null
//     });

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         if (name in formData.author) {
//             setFormData({ ...formData, author: { ...formData.author, [name]: value } });
//         } else {
//             setFormData({ ...formData, [name]: value });
//         }
//     };

//     const handleFileChange = (e) => {
//         setFormData({ ...formData, file: e.target.files[0] });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (!formData.file) {
//             alert('Please upload a file');
//             return;
//         }

//         // Start loading (Show Circular Progress)
//         setLoading(true);

//         try {
//             // Split keywords into an array
//             const keywordsArray = formData.keywords.split(',').map(keyword => keyword.trim());

//             // Construct the author array from the table inputs
//             const authorArray = [
//                 formData.author, // Add the first author
//                 ...Array.from(document.querySelectorAll('.custom-table tbody tr')).slice(1).map((row) => ({
//                     name: row.querySelector('.name-input').value.trim(),
//                     designation: row.querySelector('.designation-input').value.trim(),
//                     organization: row.querySelector('.organization-input').value.trim(),
//                     email: row.querySelector('.email-input').value.trim(),
//                     mobile: row.querySelector('.mobile-input').value.trim(),
//                 })),
//             ];

//             // Fetch the current volume and issue
//             const currentDoc = await getDoc(doc(db, 'Current', 'current'));
//             if (!currentDoc.exists()) {
//                 throw new Error('Current document does not exist');
//             }
//             const currentData = currentDoc.data();
//             const volumeId = `Volume${currentData.volume}`;
//             const issueId = `Issue${currentData.issue}`;

//             // Create a storage reference with the timestamped file name
//             const timestamp = Date.now();
//             const storageRef = ref(storage, `papers/${timestamp}_${formData.file.name}`);

//             // Upload the file
//             await uploadBytes(storageRef, formData.file);

//             // Get the file URL
//             const fileURL = await getDownloadURL(storageRef);

//             // Add form data to Firestore
//             const paperData = {
//                 title: formData.title,
//                 abstract: formData.abstract,
//                 keywords: keywordsArray, // Save the array of keywords
//                 researchArea: formData.researchArea,
//                 message: formData.message,
//                 authors: authorArray, // Save the array of authors
//                 fileURL: fileURL,
//                 status: 'pending',
//                 timestamp: serverTimestamp()
//             };

//             // Add the document to PapersQueueCollection
//             const papersQueueCollectionRef = collection(db, 'PapersQueueCollection');
//             await addDoc(papersQueueCollectionRef, paperData);

//             alert('Journal submitted successfully!');

//             // Reset form data
//             setFormData({
//                 title: '',
//                 abstract: '',
//                 keywords: '',
//                 researchArea: '',
//                 message: '',
//                 author: {
//                     name: '',
//                     designation: '',
//                     organization: '',
//                     email: '',
//                     mobile: ''
//                 },
//                 file: null
//             });
//         } catch (error) {
//             console.error("Error submitting journal: ", error);
//             alert('Error submitting journal: ' + error.message);
//         } finally {
//             // Stop loading (Hide Circular Progress)
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         const fetchAreas = async () => {
//             try {
//                 const docRef = doc(db, "Research_Areas", "research_areas");
//                 const docSnap = await getDoc(docRef);

//                 if (docSnap.exists()) {
//                     setAreas(docSnap.data().areas);
//                 } else {
//                     console.log("No such document!");
//                 }
//             } catch (error) {
//                 console.error("Error fetching document: ", error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchAreas();
//     }, []);

//     return (
//         <>
//             {loading && (
//                 <div className="loading-overlay">
//                     <div className="loading-indicator">
//                         <div className="spinner"></div>
//                     </div>
//                 </div>
//             )}

//             <Header />
//             <center>
//                 <h2>Submit Research Paper</h2>
//             </center>

//             <h3><b>Important Instructions</b></h3>

//             <form onSubmit={handleSubmit}>
//                 <ul>
//                     <li>
//                         We recommend to read the publication guidelines/process, Fees & Payment and FAQs before submitting your research paper.
//                     </li>
//                     <li>
//                         Kindly fill all the details properly as certificate will be generated on the basis of the information provided as under.
//                     </li>
//                     <li>
//                         All input fields marked with red left border are mandatory, they must be filled in.
//                     </li>
//                     <li>
//                         It is important that you provide functioning email address and functioning mobile number of the first author correctly because all communication will occur on those email address and/or mobile number.
//                     </li>
//                     <li>
//                         Details of the paper (Title, Abstract, Keywords, Author Name(s), Designation(s), Organization Name(s)) must be same as mentioned in the research paper which you are submitting.
//                     </li>
//                     <li>
//                         Please write Abstract in Sentence case, email address in lower case and all other fields in Title Case (Capitalize first character of each words). It's better NOT to write in UPPER CASE.
//                     </li>
//                 </ul>

//                 <center>
//                     <h3 className='text_with_background'>Please fill in the details of the research paper.</h3>
//                 </center>
//                 <div className='input_contianer'>
//                     <div className='row_input_component'>
//                         <label htmlFor="title">Title:</label>
//                         <input className='red_border_input' placeholder='Please write in title case (Not in CAPITAL CASE)' type="text" id="title" name="title" required
//                             onChange={handleInputChange} />
//                     </div>
//                     <div className='row_input_component'>
//                         <label htmlFor="abstract">Abstract:</label>
//                         <input className='red_border_input' placeholder='Short background information about the research' type="text" id="abstract" name="abstract" required
//                             onChange={handleInputChange} />
//                     </div>
//                     <div className='row_input_component'>
//                         <label htmlFor="keywords">Keywords:</label>
//                         <input className='red_border_input' placeholder='Comma spearted list (ex: lorem, epusm, endor...)' type="text" id="keywords" name="keywords" required
//                             onChange={handleInputChange} />
//                     </div>
//                     <div className='row_input_component'>
//                         <label htmlFor="paper">Select Research Area:</label>
//                         <select
//                             name="researchArea"
//                             value={formData.researchArea}
//                             onChange={handleInputChange}
//                             className="red_border_input"
//                         >
//                             <option value="" disabled>Select Research Area</option>
//                             {areas.map((area, index) => (
//                                 <option key={index} value={area}>
//                                     {area}
//                                 </option>
//                             ))}
//                         </select>
//                     </div>

//                     <div className='row_input_component' >
//                         <label htmlFor="paper">Select Research Paper:</label>
//                         <div style={{ width: '80%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                             <input className='red_border_input' type="file" id="paper" name="paper" accept=".pdf,.doc,.docx,.txt" required
//                                 style={{ width: '49%', padding: '10px' }}
//                                 onChange={handleFileChange}
//                             />
//                             <p style={{ width: '49%', textWrap: 'wrap', fontSize: '14px', marginTop: '2px' }}>(.docx or .doc (Microsoft Office Word) or .odt (Open Document Text) file only) (Please format the document in single column layout, not in 2 columns.)</p>

//                         </div>

//                     </div>


//                     <div className='row_input_component'>
//                         <label htmlFor="message">Message to Editor or Reviewer:</label>
//                         <input className='red_border_input not_required_field' placeholder='Enter your message here...' type="text" id="message" name="message" onChange={handleInputChange} />
//                     </div>


//                 </div>

//                 <center>
//                     <h3 className='text_with_background'>Please fill in the details of the author(s) as per the guidelines.</h3>
//                 </center>

//                 <center>
//                     <table className='custom-table'>
//                         <thead>
//                             <tr>
//                                 <th>Author Name</th>
//                                 <th>Designation</th>
//                                 <th>Organization</th>
//                                 <th>Email</th>
//                                 <th>Mobile</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <tr>
//                                 <td><input className='red_border_input name-input' placeholder='First Author Name' type="text" name="name" required onChange={handleInputChange} /></td>
//                                 <td><input className='red_border_input designation-input' placeholder='First Author Designation' type="text" name="designation" required onChange={handleInputChange} /></td>
//                                 <td><input className='red_border_input organization-input' placeholder='First Author Organization' type="text" name="organization" required onChange={handleInputChange} /></td>
//                                 <td><input className='red_border_input email-input' placeholder='First Author Email' type="email" name="email" required onChange={handleInputChange} /></td>
//                                 <td><input className='red_border_input mobile-input' placeholder='First Author Mobile' type="text" name="mobile" required onChange={handleInputChange} /></td>
//                             </tr>
//                             {/* Additional rows for co-authors */}
//                             <tr>
//                                 <td><input className='red_border_input name-input' placeholder='Co-author Name' type="text" name="name" /></td>
//                                 <td><input className='red_border_input designation-input' placeholder='Co-author Designation' type="text" name="designation" /></td>
//                                 <td><input className='red_border_input organization-input' placeholder='Co-author Organization' type="text" name="organization" /></td>
//                                 <td><input className='red_border_input email-input' placeholder='Co-author Email' type="email" name="email" /></td>
//                                 <td><input className='red_border_input mobile-input' placeholder='Co-author Mobile' type="text" name="mobile" /></td>
//                             </tr>
//                             <tr>
//                                 <td><input className='red_border_input name-input' placeholder='Co-author Name' type="text" name="name" /></td>
//                                 <td><input className='red_border_input designation-input' placeholder='Co-author Designation' type="text" name="designation" /></td>
//                                 <td><input className='red_border_input organization-input' placeholder='Co-author Organization' type="text" name="organization" /></td>
//                                 <td><input className='red_border_input email-input' placeholder='Co-author Email' type="email" name="email" /></td>
//                                 <td><input className='red_border_input mobile-input' placeholder='Co-author Mobile' type="text" name="mobile" /></td>
//                             </tr>
//                             <tr>
//                                 <td><input className='red_border_input name-input' placeholder='Co-author Name' type="text" name="name" /></td>
//                                 <td><input className='red_border_input designation-input' placeholder='Co-author Designation' type="text" name="designation" /></td>
//                                 <td><input className='red_border_input organization-input' placeholder='Co-author Organization' type="text" name="organization" /></td>
//                                 <td><input className='red_border_input email-input' placeholder='Co-author Email' type="email" name="email" /></td>
//                                 <td><input className='red_border_input mobile-input' placeholder='Co-author Mobile' type="text" name="mobile" /></td>
//                             </tr>
//                             <tr>
//                                 <td><input className='red_border_input name-input' placeholder='Co-author Name' type="text" name="name" /></td>
//                                 <td><input className='red_border_input designation-input' placeholder='Co-author Designation' type="text" name="designation" /></td>
//                                 <td><input className='red_border_input organization-input' placeholder='Co-author Organization' type="text" name="organization" /></td>
//                                 <td><input className='red_border_input email-input' placeholder='Co-author Email' type="email" name="email" /></td>
//                                 <td><input className='red_border_input mobile-input' placeholder='Co-author Mobile' type="text" name="mobile" /></td>
//                             </tr>
//                             {/* Add more rows as needed */}
//                         </tbody>
//                     </table>
//                 </center>

//                 <center>
//                     {/* <button className='custom-button' type="submit" disabled={loading}>Submit Paper</button> */}
//                     <div style={{ height: '20px'}}></div>

//                      <div style={{ display: 'flex', width: '20%', alignItems: 'center', justifyContent: 'center'}}>
//                          <button type="submit" className="submit_button">Submit</button>
//                      </div>
//                 </center>

//             </form>
//         </>
//     );
// }

// export default SubmitPaperPageNew;












// import React, { useEffect, useState } from "react";
// import Header from '../components/NewCustomComponents/Header'
// import { db, storage } from '../../../backend/firebase';
// import { getFirestore, collection, addDoc, serverTimestamp, doc, getDoc } from "firebase/firestore/lite";
// import { ref, uploadBytes, getDownloadURL } from "@firebase/storage";
// import './SubmitPaperPageNew.css';

// function SubmitPaperPageNew() {
//   const [areas, setAreas] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const [formData, setFormData] = useState({
//     title: '',
//     abstract: '',
//     keywords: '',
//     researchArea: '',
//     message: '',
//     author: {
//       name: '',
//       designation: '',
//       organization: '',
//       email: '',
//       mobile: ''
//     },
//     address: {
//       country: '',
//       state: '',
//       city: '',
//       postalCode: ''
//     },
//     file: null
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     if (name in formData.author) {
//       setFormData({ ...formData, author: { ...formData.author, [name]: value } });
//     } else if (name in formData.address) {
//       setFormData({ ...formData, address: { ...formData.address, [name]: value } });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleFileChange = (e) => {
//     setFormData({ ...formData, file: e.target.files[0] });
//   };

//   const validateForm = () => {
//     const requiredFields = [
//       'title', 'abstract', 'keywords', 'author.name',
//       'author.email', 'address.country', 'address.state', 
//       'address.city', 'address.postalCode'
//     ];

//     let isValid = true;

//     // Validate required fields
//     requiredFields.forEach(field => {
//       if (!getFieldValue(field)) {
//         isValid = false;
//         markFieldAsError(field);
//       } else {
//         clearFieldError(field);
//       }
//     });

//     // Validate keywords format
//     if (!formData.keywords.split(',').every(keyword => keyword.trim().length > 0)) {
//       isValid = false;
//       markFieldAsError('keywords');
//     } else {
//       clearFieldError('keywords');
//     }

//     return isValid;
//   };

//   const getFieldValue = (field) => {
//     const keys = field.split('.');
//     return keys.reduce((prev, curr) => prev ? prev[curr] : null, formData);
//   };

//   const markFieldAsError = (field) => {
//     const fieldId = field.replace('.', '_');
//     document.getElementById(fieldId).classList.add('error');
//   };

//   const clearFieldError = (field) => {
//     const fieldId = field.replace('.', '_');
//     document.getElementById(fieldId).classList.remove('error');
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) {
//       alert('Please fill all required fields correctly.');
//       return;
//     }

//     if (!formData.file) {
//       alert('Please upload a file');
//       return;
//     }

//     setLoading(true);

//     try {
//       const keywordsArray = formData.keywords.split(',').map(keyword => keyword.trim());

//       const authorArray = [
//         formData.author,
//         ...Array.from(document.querySelectorAll('.custom-table tbody tr')).slice(1).map((row) => ({
//           name: row.querySelector('.name-input').value.trim(),
//           designation: row.querySelector('.designation-input').value.trim(),
//           organization: row.querySelector('.organization-input').value.trim(),
//           email: row.querySelector('.email-input').value.trim(),
//           mobile: row.querySelector('.mobile-input').value.trim(),
//         })),
//       ];

//       const currentDoc = await getDoc(doc(db, 'Current', 'current'));
//       if (!currentDoc.exists()) {
//         throw new Error('Current document does not exist');
//       }
//       const currentData = currentDoc.data();
//       const volumeId = `Volume${currentData.volume}`;
//       const issueId = `Issue${currentData.issue}`;

//       const timestamp = Date.now();
//       const storageRef = ref(storage, `papers/${timestamp}_${formData.file.name}`);

//       await uploadBytes(storageRef, formData.file);
  
//       const fileURL = await getDownloadURL(storageRef);

//       const paperData = {
//         title: formData.title,
//         abstract: formData.abstract,
//         keywords: keywordsArray,
//         researchArea: formData.researchArea,
//         message: formData.message,
//         authors: authorArray,
//         address: formData.address,
//         fileURL: fileURL,
//         status: 'pending',
//         timestamp: serverTimestamp()
//       };

//       const papersQueueCollectionRef = collection(db, 'PapersQueueCollection');
//       await addDoc(papersQueueCollectionRef, paperData);

//       alert('Journal submitted successfully!');
//       setFormData({
//         title: '',
//         abstract: '',
//         keywords: '',
//         researchArea: '',
//         message: '',
//         author: {
//           name: '',
//           designation: '',
//           organization: '',
//           email: '',
//           mobile: ''
//         },
//         address: {
//           country: '',
//           state: '',
//           city: '',
//           postalCode: ''
//         },
//         file: null
//       });
//     } catch (error) {
//       console.error("Error submitting journal: ", error);
//       alert('Error submitting journal: ' + error.message);
//     } finally {
//       setLoading(false);
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

//   return (
//     <>
//       {loading && (
//         <div className="loading-overlay">
//           <div className="loading-indicator">
//             <div className="spinner"></div>
//           </div>
//         </div>
//       )}

//       <Header />
//       <center>
//         <h2>Submit Research Paper</h2>
//       </center>

//       <h3><b>Important Instructions</b></h3>

//       <form onSubmit={handleSubmit}>
//         <ul>
//           <li>We recommend to read the publication guidelines/process, Fees & Payment and FAQs before submitting your research paper.</li>
//           <li>Kindly fill all the details properly as certificate will be generated on the basis of the information provided as under.</li>
//           <li>All input fields marked with red left border are mandatory, they must be filled in.</li>
//           <li>It is important that you provide functioning email address and functioning mobile number of the first author correctly because all communication will occur on those email address and/or mobile number.</li>
//           <li>Details of the paper (Title, Abstract, Keywords, Author Name(s), Designation(s), Organization Name(s)) must be same as mentioned in the research paper which you are submitting.</li>
//           <li>Please write Abstract in Sentence case, email address in lower case and all other fields in Title Case (Capitalize first character of each words). It's better NOT to write in UPPER CASE.</li>
//         </ul>

//         <center>
//           <h3 className='text_with_background'>Please fill in the details of the research paper.</h3>
//         </center>
//         <div className='input_contianer'>
//           <div className='row_input_component'>
//             <label htmlFor="title">Title:</label>
//             <input className='red_border_input required_field' type="text" id="title" name="title" value={formData.title} required onChange={handleInputChange} />
//           </div>
//           <div className='row_input_component'>
//             <label htmlFor="abstract">Abstract:</label>
//             <input className='red_border_input required_field' type="text" id="abstract" name="abstract" value={formData.abstract} required onChange={handleInputChange} />
//           </div>
//           <div className='row_input_component'>
//             <label htmlFor="keywords">Keywords:</label>
//             <input className='red_border_input required_field' type="text" id="keywords" name="keywords" value={formData.keywords} required onChange={handleInputChange} />
//           </div>
//           <div className='row_input_component'>
//             <label htmlFor="researchArea">Select Research Area:</label>
//             <select id="researchArea" name="researchArea" value={formData.researchArea} onChange={handleInputChange}>
//               <option value="">Select an option</option>
//               {areas.map((area, index) => (
//                 <option key={index} value={area}>{area}</option>
//               ))}
//             </select>
//           </div>
//           <div className='row_input_component'>
//             <label htmlFor="message">Message:</label>
//             <input type="text" id="message" name="message" value={formData.message} onChange={handleInputChange} />
//           </div>
//         </div>

//         <center>
//           <h3 className='text_with_background'>Please fill in the details of the first author.</h3>
//         </center>

//         <div className='input_contianer'>
//           <div className='row_input_component'>
//             <label htmlFor="author_name">Author's Name:</label>
//             <input className='red_border_input required_field' type="text" id="author_name" name="name" value={formData.author.name} required onChange={handleInputChange} />
//           </div>
//           <div className='row_input_component'>
//             <label htmlFor="author_designation">Author's Designation:</label>
//             <input type="text" id="author_designation" name="designation" value={formData.author.designation} onChange={handleInputChange} />
//           </div>
//           <div className='row_input_component'>
//             <label htmlFor="author_organization">Author's Organization:</label>
//             <input type="text" id="author_organization" name="organization" value={formData.author.organization} onChange={handleInputChange} />
//           </div>
//           <div className='row_input_component'>
//             <label htmlFor="author_email">Author's Email:</label>
//             <input className='red_border_input required_field' type="email" id="author_email" name="email" value={formData.author.email} required onChange={handleInputChange} />
//           </div>
//           <div className='row_input_component'>
//             <label htmlFor="author_mobile">Author's Mobile:</label>
//             <input type="tel" id="author_mobile" name="mobile" value={formData.author.mobile} onChange={handleInputChange} />
//           </div>
//         </div>

//         <center>
//           <h3 className='text_with_background'>Please fill in the address details of the author.</h3>
//         </center>

//         <div className='input_contianer'>
//           <div className='row_input_component'>
//             <label htmlFor="address_country">Country:</label>
//             <input className='red_border_input required_field' type="text" id="address_country" name="country" value={formData.address.country} required onChange={handleInputChange} />
//           </div>
//           <div className='row_input_component'>
//             <label htmlFor="address_state">State:</label>
//             <input className='red_border_input required_field' type="text" id="address_state" name="state" value={formData.address.state} required onChange={handleInputChange} />
//           </div>
//           <div className='row_input_component'>
//             <label htmlFor="address_city">City:</label>
//             <input className='red_border_input required_field' type="text" id="address_city" name="city" value={formData.address.city} required onChange={handleInputChange} />
//           </div>
//           <div className='row_input_component'>
//             <label htmlFor="address_postalCode">Postal Code:</label>
//             <input className='red_border_input required_field' type="text" id="address_postalCode" name="postalCode" value={formData.address.postalCode} required onChange={handleInputChange} />
//           </div>
//         </div>

//         <div className='row_input_component'>
//           <label htmlFor="file">Upload Research Paper:</label>
//           <input type="file" id="file" name="file" onChange={handleFileChange} />
//         </div>

//         <div className='button_container'>
//           <button type="submit">Submit</button>
//         </div>
//       </form>
//     </>
//   );
// }

// export default SubmitPaperPageNew;
