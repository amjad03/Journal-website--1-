// import React, { useState } from "react";
// import PropTypes from "prop-types";
// import styles from "./SubmitPaperPage.module.css";
// import Header from "../components/NewCustomComponents/Header";
// import '../components/FrameComponent7.module.css';
// import '../components/Fieldset.module.css';
// import '../components/CityInput.module.css';
// import '../components/ContactInfo.module.css';


// const SubmitPaperPage = () => {
//   const [country, setCountry] = useState("");
//   const [state, setState] = useState("");
//   const [selectedFile, setSelectedFile] = useState(null);

//   const handleCountryChange = (event) => {
//     setCountry(event.target.value);
//     setState("");
//   };

//   const handleStateChange = (event) => {
//     setState(event.target.value);
//   };

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Handle form submission, e.g., send data to the server or validate inputs
//     console.log({
//       country,
//       state,
//       selectedFile,
//     });
//   };

//   const statesByCountry = {
//     USA: ["California", "Texas", "New York"],
//     Canada: ["Ontario", "Quebec", "British Columbia"],
//     India: [
//       "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa",
//       "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala",
//       "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland",
//       "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
//       "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands",
//       "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Lakshadweep", "Delhi",
//       "Puducherry", "Ladakh", "Jammu and Kashmir"
//     ]
//   };

//   return (
//     <>
//       <Header/>
//       <div className={styles.submitPaperPage}>
//         <header className={styles.header}>
//           <h1>Submit Your Research Paper</h1>
//         </header>

//         <section className={styles.formContainer}>
//           <form onSubmit={handleSubmit} className={styles.formFields}>
//             <div className={styles.fieldset}>
//               <div className={styles.rectangleParent2}>
//                 <div className={styles.frameChild2} />
//                 <h3 className={styles.authorsDetails}>Please fill in the details of the research paper.</h3>
//               </div>
//               <div className={styles.inputFields}>
//                 <div className={styles.inputLabels}>
//                   <div className={styles.fieldNames}>
//                     <div className={styles.title}>Title</div>
//                     <div className={styles.abstract}>Abstract</div>
//                     <div className={styles.keywords}>Keywords</div>
//                     <div className={styles.researchArea}>Research Area</div>
//                     <div className={styles.selectResearchPaper}>Select Research Paper</div>
//                     <div className={styles.messageToEditor}>Message to Editor or Reviewer</div>
//                   </div>
//                 </div>
//                 <div className={styles.frameParent}>
//                   <div className={styles.rectangleParent}>
//                     <div className={styles.frameChild} />
//                     <input style={{ width: '100%' }} className={styles.pleaseWriteIn} placeholder="Please write in title case" type="text" />
//                   </div>
//                   <div className={styles.rectangleGroup}>
//                     <div className={styles.frameItem} />
//                     <input style={{ width: '100%' }} className={styles.shortBackgroundInformation} placeholder="Short background information about the research" type="text" />
//                   </div>
//                   <div className={styles.rectangleContainer}>
//                     <div className={styles.frameInner} />
//                     <input style={{ width: '100%' }} className={styles.commaSpeartedList} placeholder="Comma separated list (e.g., lorem, ipsum, dolor...)" type="text" />
//                   </div>
//                   <div className={styles.researchArea1}>
//                     <div className={styles.groupDiv}>
//                       <div className={styles.rectangleDiv} />
//                       <select style={{ width: '400px', outline: 'none', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }} id="fileType" onChange={() => {}}>
//                         <option value="" disabled>Select research area</option>
//                         {Object.keys(statesByCountry).map((country) => (
//                           <option key={country} value={country}>{country}</option>
//                         ))}
//                       </select>
//                     </div>
//                     <div className={styles.upload}>
//                       <div className={styles.fileSelection}>
//                         <div className={styles.fileInput}>
//                           <div className={styles.fileInputChild} />
//                           <div className={styles.fileLabel}>
//                             <div className={styles.fileLabelChild} />
//                             <input type="file" onChange={handleFileChange} />
//                           </div>
//                         </div>
//                       </div>
//                       <div className={styles.docxOrDoc}>
//                         (.docx or .doc or .odt file only) Please format the document in single column layout.
//                       </div>
//                     </div>
//                   </div>
//                   <div className={styles.rectangleParent1}>
//                     <div className={styles.frameChild1} />
//                     <textarea
//                       onChange={() => {}}
//                       rows="7"
//                       style={{ border: 'none', width: '100%', padding: '10px', fontSize: '16px', backgroundColor: '#ebebeb' }}
//                       placeholder="Enter your message here"
//                     />
//                   </div>
//                 </div>
//               </div>
//               <div className={styles.authors}>
//                 <div className={styles.rectangleParent2}>
//                   <div className={styles.frameChild2} />
//                   <h3 className={styles.authorsDetails}>Authors' Details</h3>
//                 </div>
//                 <div className={styles.dontWriteDr}>
//                   Don't write Dr. Prof. Mr. Mrs. Miss etc. salutations before authors' names. These are against international standards.
//                 </div>
//               </div>
//               <div className={styles.authorFields}>
//                 <div className={styles.authorInputs}>
//                   <div className={styles.additionalAuthors}>
//                     {[...Array(5)].map((_, index) => (
//                       <div key={index} className={styles.authorRow}>
//                         <div className={styles.authorNameInput}>
//                           <input style={{ width: '100%' }} className={styles.inTitleCase} placeholder="In title case" type="text" />
//                           <input style={{ width: '100%' }} className={styles.inTitleCase} placeholder="Designation" type="text" />
//                         </div>
//                         <div className={styles.organizationInput}>
//                           <input style={{ width: '100%' }} className={styles.inTitleCase} placeholder="Organization" type="text" />
//                         </div>
//                         <InputRows emailAddress="Email Address" />
//                         <InputRows emailAddress="Mobile Number" />
//                       </div>
//                     ))}
//                   </div>
//                   <div className={styles.addressForm}>
//                     <div className={styles.areThereMore}>
//                       Are there more authors? Don't worry; just write the five authors' names and we will add other author(s) from your uploaded research paper's file.
//                     </div>
//                     <div className={styles.rectangleParent12}>
//                       <div className={styles.frameChild12} />
//                       <h3 className={styles.addressForCommunication}>Address for Communication</h3>
//                     </div>
//                     <div className={styles.contactInfo}>
//                       <ContactInfo cityDistrict="City/District" />
//                       <ContactInfo cityDistrict="Postal code" />
//                     </div>
//                     <div className={styles.serviceDescription}>
//                       <div className={styles.reviewerReferralIdParent}>
//                         <div className={styles.reviewerReferralId}>Reviewer Referral Id</div>
//                         <div className={styles.rectangleContainer}>
//                           <div className={styles.frameInner} />
//                           <input style={{ width: '100%' }} className={styles.enterReviewerReferral} placeholder="Enter reviewer referral Id" type="text" />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className={styles.stateCityInputWrapper}>
//                 <div className={styles.submitButton}>
//                   <input type="checkbox" />
//                   <span>I agree with the journal/website's policies</span>
//                 </div>
//                 <div className={styles.submitButtonContainer}>
//                   <button type="submit">Submit</button>
//                 </div>
//               </div>
//             </div>
//           </form>
//         </section>
//       </div>
//     </>
//   );
// };

// const InputRows = ({ emailAddress }) => (
//   <div className={styles.inputRows}>
//     <div className={styles.inputNamesRows}>
//       <div className={styles.emailAddress}>{emailAddress}</div>
//       <div className={styles.rectangleParent7}>
//         <div className={styles.frameChild7} />
//         <input style={{ width: '100%' }} className={styles.inTitleCase10} placeholder="In title case" type="text" />
//       </div>
//     </div>
//   </div>
// );

// const ContactInfo = ({ cityDistrict }) => (
//   <div className={styles.contactInfoItem}>
//     <div className={styles.contactLabel}>{cityDistrict}</div>
//     <div className={styles.inputWrapper}>
//       <input className={styles.enterCityOr} placeholder={`Enter ${cityDistrict.toLowerCase()} name`} type="text" />
//     </div>
//   </div>
// );

// SubmitPaperPage.propTypes = {
//   country: PropTypes.string,
//   state: PropTypes.string,
//   selectedFile: PropTypes.object,
// };

// export default SubmitPaperPage;




var a = 10;
// import React, { useState } from "react";
// import axios from "axios"; // You can use any HTTP client library you prefer
// import FrameComponent6 from "../components/FrameComponent6";
// import Fieldset from "../components/Fieldset";
// import AuthorFields from "../components/AuthorFields";
// import CityInput from "../components/CityInput";
// import FrameComponent7 from "../components/FrameComponent7";
// import Footer from "../components/Footer";
// import styles from "./SubmitPaperPage.module.css";
// import Header from "../components/NewCustomComponents/Header";
// import InputRows from "../components/InputRows";
// import ContactInfo from "../components/ContactInfo";


// import '../components/FrameComponent6.module.css';
// import '../components/FrameComponent7.module.css';
// import '../components/Fieldset.module.css';
// import '../components/CityInput.module.css';
// import '../components/ContactInfo.module.css';

// const SubmitPaperPage = ( {className = ""} ) => {

//   // const [formData, setFormData] = useState({
//   //   title: '',
//   //   abstract: '',
//   //   keywords: '',
//   //   researchArea: '',
//   //   file: null,
//   //   messageToEditor: '',
//   //   authors: [],
//   //   country: '',
//   //   state: '',
//   //   city: '',
//   //   postalCode: '',
//   //   reviewerReferralId: ''
//   // });

//   // const handleChange = (e) => {
//   //   const { name, value } = e.target;
//   //   setFormData({ ...formData, [name]: value });
//   // };

//   // const handleFileChange = (e) => {
//   //   setFormData({ ...formData, file: e.target.files[0] });
//   // };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
    
//   //   const data = new FormData();
//   //   data.append('title', formData.title);
//   //   data.append('abstract', formData.abstract);
//   //   data.append('keywords', formData.keywords);
//   //   data.append('researchArea', formData.researchArea);
//   //   data.append('file', formData.file);
//   //   data.append('messageToEditor', formData.messageToEditor);
//   //   data.append('authors', JSON.stringify(formData.authors)); // Assuming authors are in an array
//   //   data.append('country', formData.country);
//   //   data.append('state', formData.state);
//   //   data.append('city', formData.city);
//   //   data.append('postalCode', formData.postalCode);
//   //   data.append('reviewerReferralId', formData.reviewerReferralId);

//   //   console.log(data);

//   //   // try {
//   //   //   await axios.post('/api/submit-paper', data, {
//   //   //     headers: {
//   //   //       'Content-Type': 'multipart/form-data'
//   //   //     }
//   //   //   });
//   //   //   alert('Paper submitted successfully!');
//   //   // } catch (error) {
//   //   //   console.error('Error submitting paper:', error);
//   //   // }
//   // };


//   const [country, setCountry] = useState("");
//   const [state, setState] = useState("");

//   const handleCountryChange = (event) => {
//     setCountry(event.target.value);
//     setState(""); // Reset state when country changes
//   };

//   const handleStateChange = (event) => {
//     setState(event.target.value);
//   };

//   const statesByCountry = {
//     USA: ["California", "Texas", "New York"],
//     Canada: ["Ontario", "Quebec", "British Columbia"],
//     India: [
//       "Andhra Pradesh",
//       "Arunachal Pradesh",
//       "Assam",
//       "Bihar",
//       "Chhattisgarh",
//       "Goa",
//       "Gujarat",
//       "Haryana",
//       "Himachal Pradesh",
//       "Jharkhand",
//       "Karnataka",
//       "Kerala",
//       "Madhya Pradesh",
//       "Maharashtra",
//       "Manipur",
//       "Meghalaya",
//       "Mizoram",
//       "Nagaland",
//       "Odisha",
//       "Punjab",
//       "Rajasthan",
//       "Sikkim",
//       "Tamil Nadu",
//       "Telangana",
//       "Tripura",
//       "Uttar Pradesh",
//       "Uttarakhand",
//       "West Bengal",
//       "Andaman and Nicobar Islands",
//       "Chandigarh",
//       "Dadra and Nagar Haveli and Daman and Diu",
//       "Lakshadweep",
//       "Delhi",
//       "Puducherry",
//       "Ladakh",
//       "Jammu and Kashmir",
//     ],
//   };

//   return (
//     <div className={styles.submitPaperPage}>
     
//       <Header/>
//       {/* <FrameComponent6 /> */}
//       <section className={[styles.topNavbarParent, className].join(" ")}>
//       <div className={styles.topNavbar}>
//         <div className={styles.navbarItems}>
          
//           <div className={styles.content}>
//             <div className={styles.main}>
              
//               <div className={styles.submission}>
//                 <h1 className={styles.submitResearchPaper}>
//                   Submit Research Paper
//                 </h1>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <h2 className={styles.importantInstructions}>Important Instructions</h2>
//       <div className={styles.weRecommendToReadThePubliWrapper}>
//         <h3 className={styles.weRecommendToContainer}>
//           <ul className={styles.weRecommendToReadThePubli}>
//             <li className={styles.weRecommendToReadThePubli1}>
//               <span className={styles.weRecommendTo}>
//                 We recommend to read the 
//               </span>
//               <span className={styles.publicationGuidelinesprocess}>
//                 publication guidelines/process
//               </span>
//               <span className={styles.span}>, </span>
//               <span className={styles.feesPayment}>{`Fees & Payment`}</span>
//               <span className={styles.and}> and </span>
//               <span className={styles.faqs}>FAQs</span>
//               <span> before submitting your research paper.</span>
//             </li>
//             <li className={styles.kindlyFillAllTheDetailsPr}>
//               <span>
//                 Kindly fill all the details properly as certificate will be
//                 generated on the basis of the information provided as under.
//               </span>
//             </li>
//             <li className={styles.allInputFieldsMarkedWithR}>
//               <span>
//                 All input fields marked with red left border are mandatory, they
//                 must be filled in.
//               </span>
//             </li>
//             <li className={styles.itIsImportantThatYouProvi}>
//               <span>
//                 It is important that you provide functioning email address and
//                 functioning mobile number of the first author correctly because
//                 all communication will occur on those email address and/or
//                 mobile number.
//               </span>
//             </li>
//             <li className={styles.detailsOfThePaperTitleA}>
//               <span>
//                 Details of the paper (Title, Abstract, Keywords, Author Name(s),
//                 Designation(s), Organization Name(s)) must be same as mentioned
//                 in the research paper which you are submitting.
//               </span>
//             </li>
//             <li>
//               <span>
//                 Please write Abstract in Sentence case, email address in lower
//                 case and all other fields in Title Case (Capitalize first
//                 character of each words). It's better NOT to write in UPPER
//                 CASE.
//               </span>
//             </li>
//           </ul>
//         </h3>
//       </div>
//       {/* <div className={styles.rectangleParent5}>
//         <div className={styles.frameChild6} />
//         <h3 className={styles.pleaseFillIn}>
//           Please fill in the details of the research paper.
//         </h3>
//       </div> */}
//       </section>

//       <div className={styles.formBoundary} />
//       <section className={styles.formContainer}>
//         <div className={styles.formFields}>
//           {/* <Fieldset 
//             // onChange={handleChange}
//             // onFileChange={handleFileChange}
//           /> */}
//           <div className={[styles.fieldset, className].join(" ")}>
//             <div className={styles.rectangleParent2}>
//                 <div className={styles.frameChild2} />
//                 <h3 className={styles.authorsDetails}>Please fill in the details of the research paper.</h3>
//               </div>
//             <div className={styles.inputFields}>
//               <div className={styles.inputLabels}>
//                 <div className={styles.fieldNames}>
//                   <div className={styles.title}>Title</div>
//                   <div className={styles.abstract}>Abstract</div>
//                   <div className={styles.keywords}>Keywords</div>
//                   <div className={styles.researchArea}>Research Area</div>
//                   <div className={styles.selectResearchPaper}>
//                     Select Research Paper
//                   </div>
//                   <div className={styles.messageToEditor}>
//                     Message to Editor or Reviewer
//                   </div>
//                 </div>
//               </div>
//               <div className={styles.frameParent}>
//                 <div className={styles.rectangleParent}>
//                   <div className={styles.frameChild} />
//                   <input style={{ width: '100%',}}
//                     className={styles.pleaseWriteIn}
//                     placeholder="Please write in title case (Not in CAPITAL CASE)"
//                     type="text"
//                   />
//                 </div>
//                 <div className={styles.rectangleGroup}>
//                   <div className={styles.frameItem} />
//                   <input style={{ width: '100%',}}
//                     className={styles.shortBackgroundInformation}
//                     placeholder="Short background information about the research"
//                     type="text"
//                   />
//                 </div>
//                 <div className={styles.rectangleContainer}>
//                   <div className={styles.frameInner} />
//                   <input style={{ width: '100%',}}
//                     className={styles.commaSpeartedList}
//                     placeholder="Comma spearted list (ex: lorem, epusm, endor...)"
//                     type="text"
//                   />
//                 </div>
//                 <div className={styles.researchArea1}>
//                   <div className={styles.groupDiv}>
//                     <div className={styles.rectangleDiv} />
//                     <div className={styles.selectResearchArea}>
//                       {/* Select research area */}
//                       <select style={{ width: '400px', outline: 'none', border: '1px solid #ccc', padding: '10px', borderRadius: '5px'}} id="fileType" onChange={{}}>
//                         <option value="" disabled>Select research area</option>
//                         <option value="Computer Science">Computer Science</option>
//                         <option value="Artificial Intelligence">Artificial Intelligence</option>
//                         <option value="Machine Learning">Machine Learning</option>
//                         <option value="Data Science">Data Science</option>
//                         <option value="Information Technology">Information Technology</option>
//                         <option value="Software Engineering">Software Engineering</option>
//                         <option value="Cybersecurity">Cybersecurity</option>
//                         <option value="Networks and Communications">Networks and Communications</option>
//                         <option value="Cloud Computing">Cloud Computing</option>
//                         <option value="Internet of Things (IoT)">Internet of Things (IoT)</option>
//                         <option value="Big Data">Big Data</option>
//                         <option value="Blockchain Technology">Blockchain Technology</option>
//                         <option value="Human-Computer Interaction">Human-Computer Interaction</option>
//                         <option value="Bioinformatics">Bioinformatics</option>
//                         <option value="Computational Biology">Computational Biology</option>
//                         <option value="Robotics">Robotics</option>
//                         <option value="Natural Language Processing">Natural Language Processing</option>
//                         <option value="Computer Vision">Computer Vision</option>
//                         <option value="Algorithms and Data Structures">Algorithms and Data Structures</option>
//                         <option value="Theoretical Computer Science">Theoretical Computer Science</option>
//                         <option value="Embedded Systems">Embedded Systems</option>
//                         <option value="Digital Signal Processing">Digital Signal Processing</option>
//                         <option value="Virtual Reality and Augmented Reality">Virtual Reality and Augmented Reality</option>
//                         <option value="Quantum Computing">Quantum Computing</option>
//                         <option value="Systems and Control">Systems and Control</option>
//                         <option value="Multimedia Systems">Multimedia Systems</option>
//                         <option value="Database Systems">Database Systems</option>
//                         <option value="Distributed Systems">Distributed Systems</option>
//                         <option value="Software Testing and Quality Assurance">Software Testing and Quality Assurance</option>
//                         <option value="Mobile Computing">Mobile Computing</option>

//                       </select>
//                     </div>
//                     {/* <div className={styles.dropdownIcon}>
//                       <img
//                         className={styles.vectorIcon}
//                         alt=""
//                         src="/vector-11.svg"
//                       />
//                     </div> */}
//                   </div>
//                   <div className={styles.upload}>
//                     <div className={styles.fileSelection}>
//                       <div className={styles.fileInput}>
//                         <div className={styles.fileInputChild} />
//                         <div className={styles.fileLabel}>
//                           <div className={styles.fileLabelChild} />
//                           {/* <div className={styles.chooseFile}>Choose file</div> */}
//                           <input type="file" onChange={{}} />
//                           </div>
//                         {/* <div className={styles.fileName}>
//                           <div className={styles.noFileChosen}>No file chosen</div>
//                         </div> */}
//                       </div>
//                     </div>
//                     <div className={styles.docxOrDoc}>
//                       (.docx or .doc (Microsoft Office Word) or .odt (Open Document
//                       Text) file only) (Please format the document in single column
//                       layout, not in 2 columns.)
//                     </div>
//                   </div>
//                 </div>
//                 <div className={styles.rectangleParent1}>
//                   <div className={styles.frameChild1} />
//                   <div className={styles.enterYourMessage}>
//                   <textarea
//                     // value={{'Enter your message here'}}
//                     onChange={{}}
//                     rows="7"
//                     style={{border:'none', width: '100%', padding: '10px', fontSize: '16px' , backgroundColor: '#ebebeb'}}
//                     placeholder="Enter your text"
//                   />
//                   {/* <input style={{ width: '100%',}}
//                     className={styles.commaSpeartedList}
//                     placeholder="Comma spearted list (ex: lorem, epusm, endor...)"
//                     type="text"
//                   /> */}
//                     {/* Enter your message here...
//                     */}
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className={styles.authors}>
//               <div className={styles.rectangleParent2}>
//                 <div className={styles.frameChild2} />
//                 <h3 className={styles.authorsDetails}>Authors' Details</h3>
//               </div>
//               <div className={styles.dontWriteDr}>
//                 Don't write Dr. Prof. Mr. Mrs. Miss etc. salutations before authors'
//                 names, these will be removed, these are against international
//                 standard.
//               </div>
//             </div>
//           </div>
          
//           {/* <AuthorFields 
//             // onChange={handleChange}
//           /> */}
//           <div className={[styles.authorFields, className].join(" ")}>
//       <div className={styles.authorInputs}>
//         <div className={styles.additionalAuthors}>
//           <div className={styles.authorFourDetails}>
//             <div className={styles.singleAuthor}>
//               <div className={styles.authorNameInput}>
//                 <div className={styles.authorNamePlaceholder}>#</div>
//                 <div className={styles.name}>Name</div>
//               </div>
//               <div className={styles.designation}>Designation</div>
//             </div>
//             <div className={styles.authorDesignationInput}>
//               <div className={styles.communicationAddressLabelWrapper}>
//                 <div className={styles.communicationAddressLabel}>1.</div>
//               </div>
//               <div className={styles.rectangleParent}>
//                 <div className={styles.frameChild} />
//                 <input style={{ width: '100%',}}
//                   className={styles.inTitleCase}
//                   placeholder="In title case"
//                   type="text"
//                 />
//               </div>
//               <div className={styles.rectangleGroup}>
//                 <div className={styles.frameItem} />
//                 <input style={{ width: '100%',}}
//                   className={styles.inTitleCase1}
//                   placeholder="In title case"
//                   type="text"
//                 />
//               </div>
//             </div>
//           </div>
//           <div className={styles.authorRows}>
//             <div className={styles.fieldsRows}>
//               <div className={styles.additionalInputs}>2.</div>
//             </div>
//             <div className={styles.rectangleContainer}>
//               <div className={styles.frameInner} />
//               <div className={styles.inTitleCase2}>
//                 <input style={{ width: '100%',}}
//                   className={styles.inTitleCase}
//                   placeholder="In title case"
//                   type="text"
//                 />
//               </div>
//             </div>
//             <div className={styles.groupDiv}>
//               <div className={styles.rectangleDiv} />
//               <div className={styles.inTitleCase3}>
//                 <input style={{ width: '100%',}}
//                   className={styles.inTitleCase}
//                   placeholder="In title case"
//                   type="text"
//                 />
//               </div>
//             </div>
//           </div>
//           <div className={styles.authorRows1}>
//             <div className={styles.wrapper}>
//               <div className={styles.div}>3.</div>
//             </div>
//             <div className={styles.rectangleParent1}>
//               <div className={styles.frameChild1} />
//               <div className={styles.inTitleCase4}>
//                 <input style={{ width: '100%',}}
//                   className={styles.inTitleCase}
//                   placeholder="In title case"
//                   type="text"
//                 />
//               </div>
//             </div>
//             <div className={styles.rectangleParent2}>
//               <div className={styles.frameChild2} />
//               <div className={styles.inTitleCase5}>
//                 <input style={{ width: '100%',}}
//                   className={styles.inTitleCase}
//                   placeholder="In title case"
//                   type="text"
//                 />
//               </div>
//             </div>
//           </div>
//           <div className={styles.authorRows2}>
//             <div className={styles.container}>
//               <div className={styles.div1}>4.</div>
//             </div>
//             <div className={styles.rectangleParent3}>
//               <div className={styles.frameChild3} />
//               <div className={styles.inTitleCase6}>
//                 <input style={{ width: '100%',}}
//                   className={styles.inTitleCase}
//                   placeholder="In title case"
//                   type="text"
//                 />
//               </div>
//             </div>
//             <div className={styles.rectangleParent4}>
//               <div className={styles.frameChild4} />
//               <div className={styles.inTitleCase7}>
//                 <input style={{ width: '100%',}}
//                   className={styles.inTitleCase}
//                   placeholder="In title case"
//                   type="text"
//                 />
//               </div>
//             </div>
//           </div>
//           <div className={styles.authorRows3}>
//             <div className={styles.frame}>
//               <div className={styles.div2}>5.</div>
//             </div>
//             <div className={styles.rectangleParent5}>
//               <div className={styles.frameChild5} />
//               <div className={styles.inTitleCase8}>
//                 <input style={{ width: '100%',}}
//                   className={styles.inTitleCase}
//                   placeholder="In title case"
//                   type="text"
//                 />
//               </div>
//             </div>
//             <div className={styles.rectangleParent6}>
//               <div className={styles.frameChild6} />
//               <div className={styles.inTitleCase9}>
//                 <input style={{ width: '100%',}}
//                   className={styles.inTitleCase}
//                   placeholder="In title case"
//                   type="text"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className={styles.inputRows}>
//           <div className={styles.inputNamesRows}>
//             <div className={styles.organization}>Organization</div>
//             <div className={styles.rectangleParent7}>
//               <div className={styles.frameChild7} />
//               <input style={{ width: '100%',}}
//                 className={styles.inTitleCase10}
//                 placeholder="In title case"
//                 type="text"
//               />
//             </div>
//           </div>
//           <div className={styles.rectangleParent8}>
//             <div className={styles.frameChild8} />
//             <div className={styles.inTitleCase11}>
//               <input style={{ width: '100%',}}
//                   className={styles.inTitleCase}
//                   placeholder="In title case"
//                   type="text"
//                 />
//             </div>
//           </div>
//           <div className={styles.rectangleParent9}>
//             <div className={styles.frameChild9} />
//             <div className={styles.inTitleCase12}>
//               <input style={{ width: '100%',}}
//                   className={styles.inTitleCase}
//                   placeholder="In title case"
//                   type="text"
//                 />
//             </div>
//           </div>
//           <div className={styles.rectangleParent10}>
//             <div className={styles.frameChild10} />
//             <div className={styles.inTitleCase13}>
//               <input style={{ width: '100%',}}
//                   className={styles.inTitleCase}
//                   placeholder="In title case"
//                   type="text"
//                 />
//             </div>
//           </div>
//           <div className={styles.rectangleParent11}>
//             <div className={styles.frameChild11} />
//             <div className={styles.inTitleCase14}>
//               <input style={{ width: '100%',}}
//                   className={styles.inTitleCase}
//                   placeholder="In title case"
//                   type="text"
//                 />
//             </div>
//           </div>
//         </div>
//         <InputRows emailAddress="Email Address" />
//         <InputRows emailAddress="Mobile Number" />
//       </div>
//       <div className={styles.addressForm}>
//         <div className={styles.areThereMore}>
//           Are there more authors? Don't worry; just write the five authors'
//           names and we will add other author(s) from your uploaded research
//           paper's file.
//         </div>
//         <div className={styles.rectangleParent12}>
//           <div className={styles.frameChild12} />
//           <h3 className={styles.addressForCommunication}>
//             Address for Communication
//           </h3>
//         </div>
//       </div>
//     </div>
//         </div>
//       </section>
//       <section className={styles.stateCityInputWrapper}>
//         <form className={styles.stateCityInput}>
//           {/* <div className={styles.country}>Country</div> */}
//           {/* <CityInput 
//             // onChange={handleChange}
//           /> */}
//           <div className={[styles.cityInput, className].join(" ")}>
//       <div className={styles.submitButton}>
//         <div className={styles.state} style={{ fontSize: "20px", color: "black" }}>
//           Country
//         </div>
//         <div className={styles.rectangleGroup}>
//           <div className={styles.frameItem} />
//           <select
//             className={styles.selectState}
//             value={country}
//             onChange={handleCountryChange}
//             style={{ width: '400px', outline: 'none', border: '1px solid #ccc', padding: '10px', borderRadius: '5px'}} id="fileType" 
//           >
//             <option value="" disabled>
//               Select Country
//             </option>
//             {Object.keys(statesByCountry).map((country) => (
//               <option key={country} value={country}>
//                 {country}
//               </option>
//             ))}
//           </select>
//           {/* <div className={styles.socialLinks}>
//             <img className={styles.vectorIcon1} alt="" src="/vector-21.svg" />
//           </div> */}
//         </div>
//       </div>

//       <div className={styles.agreementCheckbox}>
//         <div className={styles.submitButtonParent}>
//           <div className={styles.submitButton}>
//             <div className={styles.state}>State</div>
//             <div className={styles.rectangleGroup}>
//               <div className={styles.frameItem} />
//               <select
//                 className={styles.selectState}
//                 value={state}
//                 onChange={handleStateChange}
//                 disabled={!country}
//                 style={{ width: '400px', outline: 'none', border: '1px solid #ccc', padding: '10px', borderRadius: '5px'}} id="fileType" 
//               >
//                 <option value="" disabled>
//                   Select State
//                 </option>
//                 {country &&
//                   statesByCountry[country].map((state) => (
//                     <option key={state} value={state}>
//                       {state}
//                     </option>
//                   ))}
//               </select>
              
//             </div>
//           </div>
//           <ContactInfo cityDistrict="City/District" />
          
//         </div>
//         <div className={styles.serviceDescription}>
//           <div className={styles.reviewerReferralIdParent}>
//             <div className={styles.reviewerReferralId}>Reviewer Referral Id </div>
//             <div className={styles.rectangleContainer}>
//               <div className={styles.frameInner} />
//               <input style={{width: '100%',}}
//                 className={styles.enterReviewerReferral}
//                 placeholder="Enter reviewer referral Id"
//                 type="text"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* <ContactInfo cityDistrict="Postal code" /> */}
//       <div className={[styles.contactInfo, className].join(" ")}>
//       <div className={styles.citydistrict}>Postal Code</div>
//       <div className={styles.rectangleParent}>
//         <div className={styles.frameChild} />
//         <div className={styles.enterCityName}>
//         <input style={{ width: '100%',outline: 'none', border: 'none', backgroundColor: '#ebebebeb', padding: '8px', fontSize:'18px', forcedColorAdjust: 'none'}}
//               className={styles.pleaseWriteIn}
//               placeholder={'Postal Code'}
//               type="text"
//             />
//         </div>
//       </div>
//     </div>
//     </div>
//           <FrameComponent7 />
//           {/* <button onClick={} type="submit">Submit</button> */}

//         </form>
//       </section>
//       <Footer
//         cooltext4611840960970061="/cooltext461184096097006-1@2x.png"
//         bookPng1="/bookpng-1@2x.png"
//         logo="/vector-13.svg"
//       />

//     </div>
//   );
// };

// export default SubmitPaperPage;























// import React, { useState } from 'react';
// import Footer from "../components/Footer";
// import "./SubmitPaperPage.module.css";
// import Header from "../components/NewCustomComponents/Header";

// const SubmitPaperPage = () => {
//   const [selectedFileType, setSelectedFileType] = useState('');

//   const handleFileChange = (e) => {
//     setFormData({ ...formData, file: e.target.files[0] });
//   };


//   return (

//     <div style={{}}>
//       <Header />

//       <center style={{ backgroundColor: '#D9E3F0',}}>
//         <h1 style={{paddingTop: '8px', paddingBottom: '8px'}}>Submit a New Journal</h1>
//       </center>

//       <div style={{ padding: '20px'}}>
//         <h1><b>Important Instructions</b></h1>
//         <ul>
//           <li>
//           We recommend to read the <a>publication guidelines/process</a>, Fees & Payment and FAQs before submitting your research paper.
//           </li>
//           <li>
//           Kindly fill all the details properly as certificate will be generated on the basis of the information provided as under.        </li>
//           <li>
//           All input fields marked with red left border are mandatory, they must be filled in.        </li>
//           <li>
//           It is important that you provide functioning email address and functioning mobile number of the first author correctly because all communication will occur on those email address and/or mobile number.        </li>
//           <li>
//           Details of the paper (Title, Abstract, Keywords, Author Name(s), Designation(s), Organization Name(s)) must be same as mentioned in the research paper which you are submitting.        </li>
//           <li>
//           Please write Abstract in Sentence case, email address in lower case and all other fields in Title Case (Capitalize first character of each words). It's better NOT to write in UPPER CASE.        </li>
//         </ul>
      
     
//         <div style={{ width: '1200px', display: 'flex', flexDirection: 'column', alignItems: 'start', padding: '20px', margin: '20px'}}>
//           <div style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}> 
//             <h3 style={{fontSize: '30px', margin: '20px'}}>Title</h3>
//             <input placeholder='Title' style={{fontSize: '20px', width: '70%', backgroundColor: '#EFEFEF', padding: '15px', borderRadius: '12px', borderLeft: '6px solid red', borderRight: '0px', borderTop: '0px', borderBottom: '0px'}} type="text" />

//           </div>

//           <div style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
//             <h3 style={{fontSize: '30px', margin: '20px'}}>Abstract</h3>
//             <input placeholder='Abstract' style={{fontSize: '20px', width: '70%', backgroundColor: '#EFEFEF', padding: '15px', borderRadius: '12px', borderLeft: '6px solid red', borderRight: '0px', borderTop: '0px', borderBottom: '0px'}} type="text" />

//           </div>

//           <div style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
//             <h3 style={{fontSize: '30px', margin: '20px'}}>Keywords</h3>
//             <input placeholder='Keywords(Separated by comma(,)' style={{fontSize: '20px', width: '70%', backgroundColor: '#EFEFEF', padding: '15px', borderRadius: '12px', borderLeft: '6px solid red', borderRight: '0px', borderTop: '0px', borderBottom: '0px'}} type="text" />

//           </div>

//           <div style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
//             <h3 style={{fontSize: '30px', margin: '20px'}}>Research Area</h3>

//             <select
//                     id="fileType"
//                     value={selectedFileType}
//                     onChange={handleSelectionChange}
//                     className="custom-select"
//                     style={{fontSize: '20px',width: '73%', backgroundColor: '#EFEFEF', padding: '15px', borderRadius: '12px', borderLeft: '6px solid red', borderRight: '0px', borderTop: '0px', borderBottom: '0px'}}
//                   >
//                     <option value="Computer Science">Computer Science</option>
//                     <option value="Artificial Intelligence">Artificial Intelligence</option>
//                     <option value="Machine Learning">Machine Learning</option>
//                     <option value="Data Science">Data Science</option>
//                     <option value="Information Technology">Information Technology</option>
//                     <option value="Software Engineering">Software Engineering</option>
//                     <option value="Cybersecurity">Cybersecurity</option>
//                     <option value="Networks and Communications">Networks and Communications</option>
//                     <option value="Cloud Computing">Cloud Computing</option>
//                     <option value="Internet of Things (IoT)">Internet of Things (IoT)</option>
//                     <option value="Big Data">Big Data</option>
//                     <option value="Blockchain Technology">Blockchain Technology</option>
//                     <option value="Human-Computer Interaction">Human-Computer Interaction</option>
//                     <option value="Bioinformatics">Bioinformatics</option>
//                     <option value="Computational Biology">Computational Biology</option>
//                     <option value="Robotics">Robotics</option>
//                     <option value="Natural Language Processing">Natural Language Processing</option>
//                     <option value="Computer Vision">Computer Vision</option>
//                     <option value="Algorithms and Data Structures">Algorithms and Data Structures</option>
//                     <option value="Theoretical Computer Science">Theoretical Computer Science</option>
//                     <option value="Embedded Systems">Embedded Systems</option>
//                     <option value="Digital Signal Processing">Digital Signal Processing</option>
//                     <option value="Virtual Reality and Augmented Reality">Virtual Reality and Augmented Reality</option>
//                     <option value="Quantum Computing">Quantum Computing</option>
//                     <option value="Systems and Control">Systems and Control</option>
//                     <option value="Multimedia Systems">Multimedia Systems</option>
//                     <option value="Database Systems">Database Systems</option>
//                     <option value="Distributed Systems">Distributed Systems</option>
//                     <option value="Software Testing and Quality Assurance">Software Testing and Quality Assurance</option>
//                     <option value="Mobile Computing">Mobile Computing</option>

//             </select>
            
//           </div>

//           <div style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
//             <h3 style={{fontSize: '30px', margin: '20px'}}>Research Paper</h3>
//             <input style={{fontSize: '20px',width: '70%', backgroundColor: '#EFEFEF', padding: '15px', borderRadius: '12px', borderLeft: '6px solid red', borderRight: '0px', borderTop: '0px', borderBottom: '0px'}} type="file" onChange={handleFileChange} />
//           </div>

//           <div style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
//             <h3 style={{fontSize: '30px', margin: '20px'}}>Message to reviewer</h3>
//             <input placeholder='Write your message' style={{fontSize: '20px', width: '70%', backgroundColor: '#EFEFEF', padding: '15px', borderRadius: '12px', borderLeft: '6px solid red', borderRight: '0px', borderTop: '0px', borderBottom: '0px'}} type="text" />

//           </div>
//         </div>
//       </div>
//       <center style={{ backgroundColor: '#D9E3F0',}}>
//         <h1 style={{paddingTop: '8px', paddingBottom: '8px'}}>Authors' Details</h1>
//       </center>
      
//       <div style={{ padding: '20px'}}>     
//         <div style={{ width: '1200px', display: 'flex', flexDirection: 'column', alignItems: 'start', padding: '20px', margin: '20px'}}>
          
        
//           <div style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}> 
//             <h3 style={{fontSize: '30px', margin: '20px'}}>Name</h3>
//             <input placeholder='Name' style={{fontSize: '20px', width: '70%', backgroundColor: '#EFEFEF', padding: '15px', borderRadius: '12px', borderLeft: '6px solid red', borderRight: '0px', borderTop: '0px', borderBottom: '0px'}} type="text" />

//           </div>

//           <div style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
//             <h3 style={{fontSize: '30px', margin: '20px'}}>Designation</h3>
//             <input placeholder='Designation' style={{fontSize: '20px', width: '70%', backgroundColor: '#EFEFEF', padding: '15px', borderRadius: '12px', borderLeft: '6px solid red', borderRight: '0px', borderTop: '0px', borderBottom: '0px'}} type="text" />

//           </div>

//           <div style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
//             <h3 style={{fontSize: '30px', margin: '20px'}}>Organization</h3>
//             <input placeholder='Organization' style={{fontSize: '20px', width: '70%', backgroundColor: '#EFEFEF', padding: '15px', borderRadius: '12px', borderLeft: '6px solid red', borderRight: '0px', borderTop: '0px', borderBottom: '0px'}} type="text" />

//           </div>

//           <div style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
//             <h3 style={{fontSize: '30px', margin: '20px'}}>Email Address</h3>
//             <input placeholder='Email Address' style={{fontSize: '20px', width: '70%', backgroundColor: '#EFEFEF', padding: '15px', borderRadius: '12px', borderLeft: '6px solid red', borderRight: '0px', borderTop: '0px', borderBottom: '0px'}} type="text" />

//           </div>
//           <div style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
//             <h3 style={{fontSize: '30px', margin: '20px'}}>Mobile Number</h3>
//             <input placeholder='Mobile Number' style={{fontSize: '20px', width: '70%', backgroundColor: '#EFEFEF', padding: '15px', borderRadius: '12px', borderLeft: '6px solid red', borderRight: '0px', borderTop: '0px', borderBottom: '0px'}} type="text" />

//           </div>
//         </div>
//       </div>
//       <Footer cooltext4611840960970061="/cooltext461184096097006-1@2x.png" bookPng1="/bookpng-1@2x.png" logo="/vector-13.svg" />

//     </div>
    
//   );
// };

// export default SubmitPaperPage;


















// import React, { useState } from 'react';
// import Footer from '../components/Footer';
// import Header from '../components/NewCustomComponents/Header';
// import './SubmitPaperPage.module.css';

// const SubmitPaperPage = () => {
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
//       mobile: '',
//     },
//   });

//   const [file, setFile] = useState(null);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   const handleAuthorChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       author: {
//         ...prevFormData.author,
//         [name]: value,
//       },
//     }));
//   };

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();

//   //   const formDataObj = new FormData();
//   //   formDataObj.append('title', formData.title);
//   //   formDataObj.append('abstract', formData.abstract);
//   //   formDataObj.append('keywords', formData.keywords);
//   //   formDataObj.append('researchArea', formData.researchArea);
//   //   formDataObj.append('message', formData.message);
//   //   formDataObj.append('author', JSON.stringify(formData.author));
//   //   formDataObj.append('file', file);

//   //   try {
//   //     const response = await fetch('http://localhost:5173/submit-paper-page', {
//   //       method: 'POST',
//   //       body: formDataObj,
//   //     });

//   //     console.log("something went wrong")
//   //     if (response.ok) {
//   //       alert('Paper submitted successfully!');
//   //     } else {
//   //       alert('Error submitting paper');
//   //     }
//   //   } catch (error) {
//   //     console.error('Error:', error);
//   //     alert('Error submitting paper');
//   //   }
//   // };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
  
//     const formData = new FormData();
//     formData.append('title', formData.title);
//     formData.append('abstract', formData.abstract);
//     formData.append('keywords', formData.keywords);
//     formData.append('researchArea', formData.researchArea);
//     formData.append('message', formData.message);
//     formData.append('author[name]', formData.author.name);
//     formData.append('author[designation]', formData.author.designation);
//     formData.append('author[organization]', formData.author.organization);
//     formData.append('author[email]', formData.author.email);
//     formData.append('author[mobile]', formData.author.mobile);
//     formData.append('file', selectedFile);
  
//     try {
//       const response = await fetch('http://localhost:5000/submit', {
//         method: 'POST',
//         body: formData,
//       });
  
//       const result = await response.json();
//       if (response.ok) {
//         console.log('Submission successful:', result);
//         alert('Paper submitted successfully!');
//       } else {
//         console.error('Submission failed:', result);
//         alert('Error submitting paper');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Error submitting paper');
//     }
//   };
  
//   return (
//     <div>
//       <Header />

//       <center style={{ backgroundColor: '#D9E3F0' }}>
//         <h1 style={{ paddingTop: '8px', paddingBottom: '8px' }}>Submit a New Journal</h1>
//       </center>

//       <form onSubmit={handleSubmit} style={{ padding: '20px' }}>
//         <h1>
//           <b>Important Instructions</b>
//         </h1>
//         <ul>
//           <li>
//             We recommend to read the <a>publication guidelines/process</a>, Fees & Payment and FAQs before submitting your research paper.
//           </li>
//           <li>Kindly fill all the details properly as certificate will be generated on the basis of the information provided as under.</li>
//           <li>All input fields marked with red left border are mandatory, they must be filled in.</li>
//           <li>
//             It is important that you provide functioning email address and functioning mobile number of the first author correctly because all communication will occur on those email address and/or mobile number.
//           </li>
//           <li>Details of the paper (Title, Abstract, Keywords, Author Name(s), Designation(s), Organization Name(s)) must be same as mentioned in the research paper which you are submitting.</li>
//           <li>
//             Please write Abstract in Sentence case, email address in lower case and all other fields in Title Case (Capitalize first character of each words). It's better NOT to write in UPPER CASE.
//           </li>
//         </ul>

//         <div style={{ width: '1200px', display: 'flex', flexDirection: 'column', alignItems: 'start', padding: '20px', margin: '20px' }}>
//           <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//             <h3 style={{ fontSize: '30px', margin: '20px' }}>Title</h3>
//             <input
//               name="title"
//               placeholder="Title"
//               style={{ fontSize: '20px', width: '70%', backgroundColor: '#EFEFEF', padding: '15px', borderRadius: '12px', borderLeft: '6px solid red' }}
//               type="text"
//               value={formData.title}
//               onChange={handleInputChange}
//             />
//           </div>

//           <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//             <h3 style={{ fontSize: '30px', margin: '20px' }}>Abstract</h3>
//             <input
//               name="abstract"
//               placeholder="Abstract"
//               style={{ fontSize: '20px', width: '70%', backgroundColor: '#EFEFEF', padding: '15px', borderRadius: '12px', borderLeft: '6px solid red' }}
//               type="text"
//               value={formData.abstract}
//               onChange={handleInputChange}
//             />
//           </div>

//           <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//             <h3 style={{ fontSize: '30px', margin: '20px' }}>Keywords</h3>
//             <input
//               name="keywords"
//               placeholder="Keywords (Separated by comma)"
//               style={{ fontSize: '20px', width: '70%', backgroundColor: '#EFEFEF', padding: '15px', borderRadius: '12px', borderLeft: '6px solid red' }}
//               type="text"
//               value={formData.keywords}
//               onChange={handleInputChange}
//             />
//           </div>

//           <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//             <h3 style={{ fontSize: '30px', margin: '20px' }}>Research Area</h3>
//             <select
//               name="researchArea"
//               value={formData.researchArea}
//               onChange={handleInputChange}
//               style={{ fontSize: '20px', width: '73%', backgroundColor: '#EFEFEF', padding: '15px', borderRadius: '12px', borderLeft: '6px solid red' }}
//             >
//               <option value="Computer Science">Computer Science</option>
//               <option value="Artificial Intelligence">Artificial Intelligence</option>
//               <option value="Machine Learning">Machine Learning</option>
//               <option value="Data Science">Data Science</option>
//               <option value="Information Technology">Information Technology</option>
//               <option value="Software Engineering">Software Engineering</option>
//               <option value="Cybersecurity">Cybersecurity</option>
//               <option value="Robotics">Robotics</option>
//             </select>
//           </div>

//           <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//             <h3 style={{ fontSize: '30px', margin: '20px' }}>Message to Editor</h3>
//             <input
//               name="message"
//               placeholder="Message to Editor"
//               style={{ fontSize: '20px', width: '70%', backgroundColor: '#EFEFEF', padding: '15px', borderRadius: '12px' }}
//               type="text"
//               value={formData.message}
//               onChange={handleInputChange}
//             />
//           </div>

//           <h1 style={{ color: 'red' }}>Author Information</h1>

//           <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//             <h3 style={{ fontSize: '30px', margin: '20px' }}>Name</h3>
//             <input
//               name="name"
//               placeholder="Author Name"
//               style={{ fontSize: '20px', width: '70%', backgroundColor: '#EFEFEF', padding: '15px', borderRadius: '12px', borderLeft: '6px solid red' }}
//               type="text"
//               value={formData.author.name}
//               onChange={handleAuthorChange}
//             />
//           </div>

//           <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//             <h3 style={{ fontSize: '30px', margin: '20px' }}>Designation</h3>
//             <input
//               name="designation"
//               placeholder="Author Designation"
//               style={{ fontSize: '20px', width: '70%', backgroundColor: '#EFEFEF', padding: '15px', borderRadius: '12px', borderLeft: '6px solid red' }}
//               type="text"
//               value={formData.author.designation}
//               onChange={handleAuthorChange}
//             />
//           </div>

//           <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//             <h3 style={{ fontSize: '30px', margin: '20px' }}>Organization</h3>
//             <input
//               name="organization"
//               placeholder="Author Organization"
//               style={{ fontSize: '20px', width: '70%', backgroundColor: '#EFEFEF', padding: '15px', borderRadius: '12px', borderLeft: '6px solid red' }}
//               type="text"
//               value={formData.author.organization}
//               onChange={handleAuthorChange}
//             />
//           </div>

//           <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//             <h3 style={{ fontSize: '30px', margin: '20px' }}>Email</h3>
//             <input
//               name="email"
//               placeholder="Author Email"
//               style={{ fontSize: '20px', width: '70%', backgroundColor: '#EFEFEF', padding: '15px', borderRadius: '12px', borderLeft: '6px solid red' }}
//               type="email"
//               value={formData.author.email}
//               onChange={handleAuthorChange}
//             />
//           </div>

//           <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//             <h3 style={{ fontSize: '30px', margin: '20px' }}>Mobile</h3>
//             <input
//               name="mobile"
//               placeholder="Author Mobile"
//               style={{ fontSize: '20px', width: '70%', backgroundColor: '#EFEFEF', padding: '15px', borderRadius: '12px', borderLeft: '6px solid red' }}
//               type="text"
//               value={formData.author.mobile}
//               onChange={handleAuthorChange}
//             />
//           </div>

//           <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//             <h3 style={{ fontSize: '30px', margin: '20px' }}>Upload File</h3>
//             <input
//               type="file"
//               onChange={handleFileChange}
//               style={{ fontSize: '20px', width: '70%', backgroundColor: '#EFEFEF', padding: '15px', borderRadius: '12px', borderLeft: '6px solid red' }}
//             />
//           </div>

//           <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//             <button type="submit" style={{ fontSize: '20px', padding: '15px 30px', backgroundColor: '#4CAF50', color: 'white', borderRadius: '12px' }}>
//               Submit
//             </button>
//           </div>
//         </div>
//       </form>

//       <Footer />
//     </div>
//   );
// };

// export default SubmitPaperPage;





// import React, { useState } from 'react';
// import Footer from '../components/Footer';
// import Header from '../components/NewCustomComponents/Header';
// import './SubmitPaperPage.module.css';

// const SubmitPaperPage = () => {


//   const [formData, setFormData] = useState({
//     title: '',
//     abstract: '',
//     keywords: '',
//     researchArea: 'Computer Science',
//     message: '',
//     author: {
//       name: '',
//       designation: '',
//       organization: '',
//       email: '',
//       mobile: ''
//     },
//     file: null
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleAuthorChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       author: { ...formData.author, [name]: value }
//     });
//   };

//   const handleFileChange = (e) => {
//     setFormData({ ...formData, file: e.target.files[0] });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const formDataToSubmit = new FormData();
//     formDataToSubmit.append('file', formData.file);
//     formDataToSubmit.append('title', formData.title);
//     formDataToSubmit.append('abstract', formData.abstract);
//     formDataToSubmit.append('keywords', formData.keywords);
//     formDataToSubmit.append('researchArea', formData.researchArea);
//     formDataToSubmit.append('message', formData.message);
//     formDataToSubmit.append('authorName', formData.author.name);
//     formDataToSubmit.append('authorDesignation', formData.author.designation);
//     formDataToSubmit.append('authorOrganization', formData.author.organization);
//     formDataToSubmit.append('authorEmail', formData.author.email);
//     formDataToSubmit.append('authorMobile', formData.author.mobile);

//     try {
//       const response = await fetch('http://localhost:5001/upload-files', {
//         method: 'POST',
//         body: formDataToSubmit
//       });
//       const result = await response.json();
//       if (result.status === 'ok') {
//         alert('Paper submitted successfully!');
//       } else {
//         alert('Failed to submit paper');
//       }
//     } catch (error) {
//       console.error(error);
//       alert('An error occurred while submitting the paper');
//     }
//   };
  
//   return (
//     <div>
//       <Header />

//       <center style={{ backgroundColor: '#D9E3F0' }}>
//         <h1 style={{ paddingTop: '8px', paddingBottom: '8px' }}>Submit a New Journal</h1>
//       </center>

//       <form onSubmit={handleSubmit} style={{ padding: '20px' }}>
//         <h1>
//           <b>Important Instructions</b>
//         </h1>
//         <ul>
//           <li>
//             We recommend to read the <a>publication guidelines/process</a>, Fees & Payment and FAQs before submitting your research paper.
//           </li>
//           <li>Kindly fill all the details properly as certificate will be generated on the basis of the information provided as under.</li>
//           <li>All input fields marked with red left border are mandatory, they must be filled in.</li>
//           <li>
//             It is important that you provide functioning email address and functioning mobile number of the first author correctly because all communication will occur on those email address and/or mobile number.
//           </li>
//           <li>Details of the paper (Title, Abstract, Keywords, Author Name(s), Designation(s), Organization Name(s)) must be same as mentioned in the research paper which you are submitting.</li>
//           <li>
//             Please write Abstract in Sentence case, email address in lower case and all other fields in Title Case (Capitalize first character of each words). It's better NOT to write in UPPER CASE.
//           </li>
//         </ul>

//         <div style={{ width: '1200px', display: 'flex', flexDirection: 'column', alignItems: 'start', padding: '20px', margin: '20px' }}>
//           <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//             <h3 style={{ fontSize: '30px', margin: '20px' }}>Title</h3>
//             <input
//               name="title"
//               placeholder="Title"
//               style={{ fontSize: '20px', width: '70%', backgroundColor: '#EFEFEF', padding: '15px', borderRadius: '12px', borderLeft: '6px solid red' }}
//               type="text"
//               value={formData.title}
//               onChange={handleInputChange}
//             />
//           </div>

//           <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//             <h3 style={{ fontSize: '30px', margin: '20px' }}>Abstract</h3>
//             <input
//               name="abstract"
//               placeholder="Abstract"
//               style={{ fontSize: '20px', width: '70%', backgroundColor: '#EFEFEF', padding: '15px', borderRadius: '12px', borderLeft: '6px solid red' }}
//               type="text"
//               value={formData.abstract}
//               onChange={handleInputChange}
//             />
//           </div>

//           <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//             <h3 style={{ fontSize: '30px', margin: '20px' }}>Keywords</h3>
//             <input
//               name="keywords"
//               placeholder="Keywords (Separated by comma)"
//               style={{ fontSize: '20px', width: '70%', backgroundColor: '#EFEFEF', padding: '15px', borderRadius: '12px', borderLeft: '6px solid red' }}
//               type="text"
//               value={formData.keywords}
//               onChange={handleInputChange}
//             />
//           </div>

//           <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//             <h3 style={{ fontSize: '30px', margin: '20px' }}>Research Area</h3>
//             <select
//               name="researchArea"
//               value={formData.researchArea}
//               onChange={handleInputChange}
//               style={{ fontSize: '20px', width: '73%', backgroundColor: '#EFEFEF', padding: '15px', borderRadius: '12px', borderLeft: '6px solid red' }}
//             >
//               <option value="Computer Science">Computer Science</option>
//               <option value="Artificial Intelligence">Artificial Intelligence</option>
//               <option value="Machine Learning">Machine Learning</option>
//               <option value="Data Science">Data Science</option>
//               <option value="Information Technology">Information Technology</option>
//               <option value="Software Engineering">Software Engineering</option>
//               <option value="Cybersecurity">Cybersecurity</option>
//               <option value="Robotics">Robotics</option>
//             </select>
//           </div>

//           <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//             <h3 style={{ fontSize: '30px', margin: '20px' }}>Message to Editor</h3>
//             <input
//               name="message"
//               placeholder="Message to Editor"
//               style={{ fontSize: '20px', width: '70%', backgroundColor: '#EFEFEF', padding: '15px', borderRadius: '12px' }}
//               type="text"
//               value={formData.message}
//               onChange={handleInputChange}
//             />
//           </div>

//           <h1 style={{ color: 'red' }}>Author Information</h1>

//           <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//             <h3 style={{ fontSize: '30px', margin: '20px' }}>Name</h3>
//             <input
//               name="name"
//               placeholder="Author Name"
//               style={{ fontSize: '20px', width: '70%', backgroundColor: '#EFEFEF', padding: '15px', borderRadius: '12px', borderLeft: '6px solid red' }}
//               type="text"
//               value={formData.author.name}
//               onChange={handleAuthorChange}
//             />
//           </div>

//           <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//             <h3 style={{ fontSize: '30px', margin: '20px' }}>Designation</h3>
//             <input
//               name="designation"
//               placeholder="Author Designation"
//               style={{ fontSize: '20px', width: '70%', backgroundColor: '#EFEFEF', padding: '15px', borderRadius: '12px', borderLeft: '6px solid red' }}
//               type="text"
//               value={formData.author.designation}
//               onChange={handleAuthorChange}
//             />
//           </div>

//           <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//             <h3 style={{ fontSize: '30px', margin: '20px' }}>Organization</h3>
//             <input
//               name="organization"
//               placeholder="Author Organization"
//               style={{ fontSize: '20px', width: '70%', backgroundColor: '#EFEFEF', padding: '15px', borderRadius: '12px', borderLeft: '6px solid red' }}
//               type="text"
//               value={formData.author.organization}
//               onChange={handleAuthorChange}
//             />
//           </div>

//           <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//             <h3 style={{ fontSize: '30px', margin: '20px' }}>Email</h3>
//             <input
//               name="email"
//               placeholder="Author Email"
//               style={{ fontSize: '20px', width: '70%', backgroundColor: '#EFEFEF', padding: '15px', borderRadius: '12px', borderLeft: '6px solid red' }}
//               type="email"
//               value={formData.author.email}
//               onChange={handleAuthorChange}
//             />
//           </div>

//           <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//             <h3 style={{ fontSize: '30px', margin: '20px' }}>Mobile</h3>
//             <input
//               name="mobile"
//               placeholder="Author Mobile"
//               style={{ fontSize: '20px', width: '70%', backgroundColor: '#EFEFEF', padding: '15px', borderRadius: '12px', borderLeft: '6px solid red' }}
//               type="text"
//               value={formData.author.mobile}
//               onChange={handleAuthorChange}
//             />
//           </div>

//           <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//             <h3 style={{ fontSize: '30px', margin: '20px' }}>Upload File</h3>
//             <input
//               type="file"
//               onChange={handleFileChange}
//               style={{ fontSize: '20px', width: '70%', backgroundColor: '#EFEFEF', padding: '15px', borderRadius: '12px', borderLeft: '6px solid red' }}
//             />
//           </div>

//           <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//             <button type="submit" style={{ fontSize: '20px', padding: '15px 30px', backgroundColor: '#4CAF50', color: 'white', borderRadius: '12px' }}>
//               Submit
//             </button>
//           </div>
//         </div>
//       </form>

//       <Footer />
//     </div>
//   );
// };

// export default SubmitPaperPage;
















// import React, { useState } from 'react';
// import { db, storage } from './firebase'; // Adjust the import path as necessary
// import { collection, addDoc } from "firebase/firestore"; 
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

// const SubmitPaperPage = () => {
//   const [formData, setFormData] = useState({
//     title: '',
//     abstract: '',
//     keywords: '',
//     researchArea: 'Computer Science',
//     message: '',
//     author: {
//       name: '',
//       designation: '',
//       organization: '',
//       email: '',
//       mobile: ''
//     },
//     file: null
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const handleAuthorChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       author: {
//         ...prevData.author,
//         [name]: value
//       }
//     }));
//   };

//   const handleFileChange = (e) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       file: e.target.files[0]
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!formData.file) {
//       alert('Please upload a file.');
//       return;
//     }

//     try {
//       const storageRef = ref(storage, `papers/${formData.file.name}`);
//       const uploadTask = uploadBytesResumable(storageRef, formData.file);

//       uploadTask.on('state_changed', 
//         (snapshot) => {
//           // Observe state change events such as progress, pause, and resume
//         }, 
//         (error) => {
//           console.error('Upload error:', error);
//         }, 
//         async () => {
//           const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          
//           // Add data to Firestore
//           await addDoc(collection(db, "paperQueue"), {
//             title: formData.title,
//             abstract: formData.abstract,
//             keywords: formData.keywords,
//             researchArea: formData.researchArea,
//             message: formData.message,
//             author: {
//               name: formData.author.name,
//               designation: formData.author.designation,
//               organization: formData.author.organization,
//               email: formData.author.email,
//               mobile: formData.author.mobile
//             },
//             fileUrl: downloadURL,
//             submittedAt: new Date()
//           });

//           alert('Paper submitted successfully!');
//         }
//       );
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };
//   return (
//     <div>
//       <Header />

//       <center style={{ backgroundColor: '#D9E3F0' }}>
//         <h1 style={{ paddingTop: '8px', paddingBottom: '8px' }}>Submit a New Journal</h1>
//       </center>

//       <form onSubmit={handleSubmit} style={{ padding: '20px' }}>
//         <h1><b>Important Instructions</b></h1>
//         <ul>
//           <li>We recommend to read the <a href="#">publication guidelines/process</a>, Fees & Payment and FAQs before submitting your research paper.</li>
//           <li>Kindly fill all the details properly as certificate will be generated on the basis of the information provided as under.</li>
//           <li>All input fields marked with red left border are mandatory, they must be filled in.</li>
//           <li>It is important that you provide functioning email address and functioning mobile number of the first author correctly because all communication will occur on those email address and/or mobile number.</li>
//           <li>Details of the paper (Title, Abstract, Keywords, Author Name(s), Designation(s), Organization Name(s)) must be same as mentioned in the research paper which you are submitting.</li>
//           <li>Please write Abstract in Sentence case, email address in lower case and all other fields in Title Case (Capitalize first character of each words). It's better NOT to write in UPPER CASE.</li>
//         </ul>

//         <div style={{ width: '1200px', display: 'flex', flexDirection: 'column', alignItems: 'start', padding: '20px', margin: '20px' }}>
//           <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//             <h3 style={{ fontSize: '30px', margin: '20px' }}>Title</h3>
//             <input
//               name="title"
//               placeholder="Title"
//               style={{ fontSize: '20px', width: '70%', backgroundColor: '#EFEFEF', padding: '15px', borderRadius: '12px', borderLeft: '6px solid red' }}
//               type="text"
//               value={formData.title}
//               onChange={handleInputChange}
//             />
//           </div>

//           <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//             <h3 style={{ fontSize: '30px', margin: '20px' }}>Abstract</h3>
//             <input
//               name="abstract"
//               placeholder="Abstract"
//               style={{ fontSize: '20px', width: '70%', backgroundColor: '#EFEFEF', padding: '15px', borderRadius: '12px', borderLeft: '6px solid red' }}
//               type="text"
//               value={formData.abstract}
//               onChange={handleInputChange}
//             />
//           </div>

//           <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//             <h3 style={{ fontSize: '30px', margin: '20px' }}>Keywords</h3>
//             <input
//               name="keywords"
//               placeholder="Keywords (Separated by comma)"
//               style={{ fontSize: '20px', width: '70%', backgroundColor: '#EFEFEF', padding: '15px', borderRadius: '12px', borderLeft: '6px solid red' }}
//               type="text"
//               value={formData.keywords}
//               onChange={handleInputChange}
//             />
//           </div>

//           <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//             <h3 style={{ fontSize: '30px', margin: '20px' }}>Research Area</h3>
//             <select
//               name="researchArea"
//               value={formData.researchArea}
//               onChange={handleInputChange}
//               style={{ fontSize: '20px', width: '73%', backgroundColor: '#EFEFEF', padding: '15px', borderRadius: '12px', borderLeft: '6px solid red' }}
//             >
//               <option value="Computer Science">Computer Science</option>
//               <option value="Artificial Intelligence">Artificial Intelligence</option>
//               <option value="Machine Learning">Machine Learning</option>
//               <option value="Data Science">Data Science</option>
//               <option value="Information Technology">Information Technology</option>
//               <option value="Software Engineering">Software Engineering</option>
//               <option value="Cybersecurity">Cybersecurity</option>
//               <option value="Robotics">Robotics</option>
//             </select>
//           </div>

//           <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//             <h3 style={{ fontSize: '30px', margin: '20px' }}>Message to Editor</h3>
//             <input
//               name="message"
//               placeholder="Message to Editor"
//               style={{ fontSize: '20px', width: '70%', backgroundColor: '#EFEFEF', padding: '15px', borderRadius: '12px' }}
//               type="text"
//               value={formData.message}
//               onChange={handleInputChange}
//             />
//           </div>

//           <h1 style={{ color: 'red' }}>Author Information</h1>

//           <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//             <h3 style={{ fontSize: '30px', margin: '20px' }}>Name</h3>
//             <input
//               name="name"
//               placeholder="Author Name"
//               style={{ fontSize: '20px', width: '70%', backgroundColor: '#EFEFEF', padding: '15px', borderRadius: '12px', borderLeft: '6px solid red' }}
//               type="text"
//               value={formData.author.name}
//               onChange={handleAuthorChange}
//             />
//           </div>

//           <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//             <h3 style={{ fontSize: '30px', margin: '20px' }}>Designation</h3>
//             <input
//               name="designation"
//               placeholder="Author Designation"
//               style={{ fontSize: '20px', width: '70%', backgroundColor: '#EFEFEF', padding: '15px', borderRadius: '12px', borderLeft: '6px solid red' }}
//               type="text"
//               value={formData.author.designation}
//               onChange={handleAuthorChange}
//             />
//           </div>

//           <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//             <h3 style={{ fontSize: '30px', margin: '20px' }}>Organization</h3>
//             <input
//               name="organization"
//               placeholder="Author Organization"
//               style={{ fontSize: '20px', width: '70%', backgroundColor: '#EFEFEF', padding: '15px', borderRadius: '12px', borderLeft: '6px solid red' }}
//               type="text"
//               value={formData.author.organization}
//               onChange={handleAuthorChange}
//             />
//           </div>

//           <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//             <h3 style={{ fontSize: '30px', margin: '20px' }}>Email</h3>
//             <input
//               name="email"
//               placeholder="Author Email"
//               style={{ fontSize: '20px', width: '70%', backgroundColor: '#EFEFEF', padding: '15px', borderRadius: '12px', borderLeft: '6px solid red' }}
//               type="email"
//               value={formData.author.email}
//               onChange={handleAuthorChange}
//             />
//           </div>

//           <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//             <h3 style={{ fontSize: '30px', margin: '20px' }}>Mobile</h3>
//             <input
//               name="mobile"
//               placeholder="Author Mobile"
//               style={{ fontSize: '20px', width: '70%', backgroundColor: '#EFEFEF', padding: '15px', borderRadius: '12px', borderLeft: '6px solid red' }}
//               type="text"
//               value={formData.author.mobile}
//               onChange={handleAuthorChange}
//             />
//           </div>

//           <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//             <h3 style={{ fontSize: '30px', margin: '20px' }}>Upload File</h3>
//             <input
//               type="file"
//               onChange={handleFileChange}
//               style={{ fontSize: '20px', width: '70%', backgroundColor: '#EFEFEF', padding: '15px', borderRadius: '12px', borderLeft: '6px solid red' }}
//             />
//           </div>

//           <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//             <button type="submit" style={{ fontSize: '20px', padding: '15px 30px', backgroundColor: '#4CAF50', color: 'white', borderRadius: '12px' }}>
//               Submit
//             </button>
//           </div>
//         </div>
//       </form>

//       <Footer />
//     </div>
//   );
// };

// export default SubmitPaperPage;








import React, { useEffect, useState } from "react";
// import { db, storage, } from '../../firebase'; // Adjust the import path as necessary
import { db, storage, } from '../../../backend/firebase'; // Adjust the import path as necessary

// import { collection, addDoc } from "firebase/firestore"; 
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Header from '../components/NewCustomComponents/Header';

import { getFirestore, collection, addDoc, serverTimestamp, doc, getDoc } from "firebase/firestore/lite";
import { ref, uploadBytes, getDownloadURL } from "@firebase/storage";
// import { storage, db } from "./firebase"; // Ensure correct path to your Firebase config file




// import React, { useState } from 'react';
// import { storage, db } from './firebaseConfig'; // Adjust the import according to your firebase configuration file
// import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
// import { collection, addDoc, serverTimestamp, doc, getDoc } from 'firebase/firestore';
// import Header from './Header'; // Adjust the import according to your Header component file

const SubmitPaperPage = () => {
  const [areas, setAreas] = useState([]);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.file) {
      alert('Please upload a file');
      return;
    }

    try {
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
      // const storageRef = ref(storage, `papers/${timestamp}_${formData.file.name}`);

      // // Upload the file
      // await uploadBytes(storageRef, formData.file);

      // // Get the file URL
      // const fileURL = await getDownloadURL(storageRef);

      // Create a storage reference
      const storageRef = ref(storage, `papers/${timestamp}_${formData.file.name}`);

      // Upload the file
      await uploadBytes(storageRef, formData.file);
  
      // Get the file URL
      const fileURL = await getDownloadURL(storageRef);

      // Add form data to Firestore
      const paperData = {
        title: formData.title,
        abstract: formData.abstract,
        keywords: formData.keywords,
        researchArea: formData.researchArea,
        message: formData.message,
        author: formData.author,
        fileURL: fileURL,
        status: 'pending',
        timestamp: serverTimestamp()
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
  // const [formData, setFormData] = useState({
  //   title: '',
  //   abstract: '',
  //   keywords: '',
  //   researchArea: '',
  //   message: '',
  //   author: {
  //     name: '',
  //     designation: '',
  //     organization: '',
  //     email: '',
  //     mobile: ''
  //   },
  //   file: null
  // });

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   if (name in formData.author) {
  //     setFormData({ ...formData, author: { ...formData.author, [name]: value } });
  //   } else {
  //     setFormData({ ...formData, [name]: value });
  //   }
  // };

  // const handleAuthorChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     author: {
  //       ...prevData.author,
  //       [name]: value
  //     }
  //   }));
  // };

  // const handleFileChange = (e) => {
  //   setFormData({ ...formData, file: e.target.files[0] });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  
  //   if (!formData.file) {
  //     alert('Please upload a file');
  //     return;
  //   }
  
  //   try {
  //     // Fetch the current volume and issue
  //     const currentDoc = await getDoc(doc(db, 'Current', 'current'));
  //     const currentData = currentDoc.data();
  //     const volumeId = `Volume${currentData.volume}`;
  //     const issueId = `Issue${currentData.issue}`;
  
  //     // Create a storage reference with the timestamped file name
  //     const timestamp = Date.now();
  //     const storageRef = ref(storage, `papers/${timestamp}_${formData.file.name}`);
  
  //     // Upload the file
  //     await uploadBytes(storageRef, formData.file);
  
  //     // Get the file URL
  //     const fileURL = await getDownloadURL(storageRef);
  
  //     // Add form data to Firestore
  //     const paperData = {
  //       title: formData.title,
  //       abstract: formData.abstract,
  //       keywords: formData.keywords,
  //       researchArea: formData.researchArea,
  //       message: formData.message,
  //       author: formData.author,
  //       fileURL: fileURL,
  //       status: 'pending',
  //       timestamp: serverTimestamp()
  //     };
  
  //     // Add the document to PapersQueueCollection
  //     await addDoc(collection(db, 'PapersQueueCollection'), paperData);
  
  //     alert('Journal submitted successfully!');
  
  //     // Reset form data
  //     setFormData({
  //       title: '',
  //       abstract: '',
  //       keywords: '',
  //       researchArea: '',
  //       message: '',
  //       author: {
  //         name: '',
  //         designation: '',
  //         organization: '',
  //         email: '',
  //         mobile: ''
  //       },
  //       file: null
  //     });
  //   } catch (error) {
  //     console.error("Error submitting journal: ", error);
  //     alert('Error submitting journal');
  //   }
  // };

  return (
    <div>
      <Header />

      <center style={{ backgroundColor: '#D9E3F0' }}>
        <h1 style={{ paddingTop: '8px', paddingBottom: '8px' }}>Submit a New Journal</h1>
      </center>

      <form onSubmit={handleSubmit} style={{ padding: '20px' }}>
        <h1><b>Important Instructions</b></h1>
        <ul>
          <li>We recommend to read the <a href="#">publication guidelines/process</a>, Fees & Payment and FAQs before submitting your research paper.</li>
          <li>Kindly fill all the details properly as certificate will be generated on the basis of the information provided as under.</li>
          <li>All input fields marked with red left border are mandatory, they must be filled in.</li>
          <li>It is important that you provide functioning email address and functioning mobile number of the first author correctly because all communication will occur on those email address and/or mobile number.</li>
          <li>Details of the paper (Title, Abstract, Keywords, Author Name(s), Designation(s), Organization Name(s)) must be same as mentioned in the research paper which you are submitting.</li>
          <li>Please write Abstract in Sentence case, email address in lower case and all other fields in Title Case (Capitalize first character of each words). It's better NOT to write in UPPER CASE.</li>
        </ul>

        <div style={{ width: '1200px', display: 'flex', flexDirection: 'column', alignItems: 'start', padding: '20px', margin: '20px' }}>
          <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h3 style={{ fontSize: '30px', margin: '20px' }}>Title</h3>
            <input
              name="title"
              placeholder="Title"
              style={{ fontSize: '20px', width: '70%', backgroundColor: '#EFEFEF', padding: '15px', borderRadius: '12px', borderLeft: '6px solid red' }}
              type="text"
              value={formData.title}
              onChange={handleInputChange}
            />
          </div>

          <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h3 style={{ fontSize: '30px', margin: '20px' }}>Abstract</h3>
            <input
              name="abstract"
              placeholder="Abstract"
              style={{ fontSize: '20px', width: '70%', backgroundColor: '#EFEFEF', padding: '15px', borderRadius: '12px', borderLeft: '6px solid red' }}
              type="text"
              value={formData.abstract}
              onChange={handleInputChange}
            />
          </div>

          <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h3 style={{ fontSize: '30px', margin: '20px' }}>Keywords</h3>
            <input
              name="keywords"
              placeholder="Keywords (Separated by comma)"
              style={{ fontSize: '20px', width: '70%', backgroundColor: '#EFEFEF', padding: '15px', borderRadius: '12px', borderLeft: '6px solid red' }}
              type="text"
              value={formData.keywords}
              onChange={handleInputChange}
            />
          </div>

          <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h3 style={{ fontSize: '30px', margin: '20px' }}>Research Area</h3>
            {/* <select
              name="researchArea"
              value={formData.researchArea}
              onChange={handleInputChange}
              style={{ fontSize: '20px', width: '73%', backgroundColor: '#EFEFEF', padding: '15px', borderRadius: '12px', borderLeft: '6px solid red' }}
            >
              <option value="Computer Science">Computer Science</option>
              <option value="Artificial Intelligence">Artificial Intelligence</option>
              <option value="Machine Learning">Machine Learning</option>
              <option value="Data Science">Data Science</option>
              <option value="Information Technology">Information Technology</option>
              <option value="Software Engineering">Software Engineering</option>
              <option value="Cybersecurity">Cybersecurity</option>
              <option value="Robotics">Robotics</option>
            </select> */}
            <select
            name="researchArea"
            value={formData.researchArea}
            onChange={handleInputChange}
            style={{ fontSize: '20px', width: '73%', backgroundColor: '#EFEFEF', padding: '15px', borderRadius: '12px', borderLeft: '6px solid red' }}
            >
              {areas.map((area, index) => (
                <option key={index} value={area}>
                  {area}
                </option>
              ))}
            </select>
          </div>

          <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h3 style={{ fontSize: '30px', margin: '20px' }}>Message to Editor</h3>
            <input
              name="message"
              placeholder="Message to Editor"
              style={{ fontSize: '20px', width: '70%', backgroundColor: '#EFEFEF', padding: '15px', borderRadius: '12px' }}
              type="text"
              value={formData.message}
              onChange={handleInputChange}
            />
          </div>

          <h3 style={{ fontSize: '30px', margin: '20px' }}>Author Details</h3>
          
          <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h3 style={{ fontSize: '30px', margin: '20px' }}>Name</h3>
            <input
              name="name"
              placeholder="Author's Name"
              style={{ fontSize: '20px', width: '70%', backgroundColor: '#EFEFEF', padding: '15px', borderRadius: '12px', borderLeft: '6px solid red' }}
              type="text"
              value={formData.author.name}
              onChange={handleAuthorChange}
            />
          </div>

          <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h3 style={{ fontSize: '30px', margin: '20px' }}>Designation</h3>
            <input
              name="designation"
              placeholder="Designation"
              style={{ fontSize: '20px', width: '70%', backgroundColor: '#EFEFEF', padding: '15px', borderRadius: '12px', borderLeft: '6px solid red' }}
              type="text"
              value={formData.author.designation}
              onChange={handleAuthorChange}
            />
          </div>

          <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h3 style={{ fontSize: '30px', margin: '20px' }}>Organization</h3>
            <input
              name="organization"
              placeholder="Organization"
              style={{ fontSize: '20px', width: '70%', backgroundColor: '#EFEFEF', padding: '15px', borderRadius: '12px', borderLeft: '6px solid red' }}
              type="text"
              value={formData.author.organization}
              onChange={handleAuthorChange}
            />
          </div>

          <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h3 style={{ fontSize: '30px', margin: '20px' }}>Email</h3>
            <input
              name="email"
              placeholder="Email"
              style={{ fontSize: '20px', width: '70%', backgroundColor: '#EFEFEF', padding: '15px', borderRadius: '12px', borderLeft: '6px solid red' }}
              type="email"
              value={formData.author.email}
              onChange={handleAuthorChange}
            />
          </div>

          <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h3 style={{ fontSize: '30px', margin: '20px' }}>Mobile</h3>
            <input
              name="mobile"
              placeholder="Mobile Number"
              style={{ fontSize: '20px', width: '70%', backgroundColor: '#EFEFEF', padding: '15px', borderRadius: '12px', borderLeft: '6px solid red' }}
              type="text"
              value={formData.author.mobile}
              onChange={handleAuthorChange}
            />
          </div>

          <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h3 style={{ fontSize: '30px', margin: '20px' }}>Upload File</h3>
            <input
              type="file"
              onChange={handleFileChange}
              style={{ fontSize: '20px', width: '70%', backgroundColor: '#EFEFEF', padding: '15px', borderRadius: '12px', borderLeft: '6px solid red' }}
            />
          </div>

          <button type="submit" style={{ fontSize: '20px', padding: '15px 30px', borderRadius: '12px', backgroundColor: '#4CAF50', color: 'white', marginTop: '20px', cursor: 'pointer' }}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default SubmitPaperPage;


// const SubmitPaperPage = () => {
//   // const [formData, setFormData] = useState({
//   //   title: '',
//   //   abstract: '',
//   //   keywords: '',
//   //   researchArea: 'Computer Science',
//   //   message: '',
//   //   author: {
//   //     name: '',
//   //     designation: '',
//   //     organization: '',
//   //     email: '',
//   //     mobile: ''
//   //   },
//   //   file: null
//   // });

//   // const handleInputChange = (e) => {
//   //   const { name, value } = e.target;
//   //   setFormData((prevData) => ({
//   //     ...prevData,
//   //     [name]: value
//   //   }));
//   // };

//   // const handleAuthorChange = (e) => {
//   //   const { name, value } = e.target;
//   //   setFormData((prevData) => ({
//   //     ...prevData,
//   //     author: {
//   //       ...prevData.author,
//   //       [name]: value
//   //     }
//   //   }));
//   // };

//   // const handleFileChange = (e) => {
//   //   setFormData((prevData) => ({
//   //     ...prevData,
//   //     file: e.target.files[0]
//   //   }));
//   // };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   if (!formData.file) {
//   //     alert('Please upload a file.');
//   //     return;
//   //   }

//   //   try {
//   //     const storageRef = ref(storage, `papers/${formData.file.name}`);
//   //     const uploadTask = uploadBytesResumable(storageRef, formData.file);

//   //     uploadTask.on('state_changed', 
//   //       (snapshot) => {
//   //         // Observe state change events such as progress, pause, and resume
//   //       }, 
//   //       (error) => {
//   //         console.error('Upload error:', error);
//   //       }, 
//   //       async () => {
//   //         const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          
//   //         // Add data to Firestore
//   //         await addDoc(collection(db, "paperQueue"), {
//   //           title: formData.title,
//   //           abstract: formData.abstract,
//   //           keywords: formData.keywords,
//   //           researchArea: formData.researchArea,
//   //           message: formData.message,
//   //           author: {
//   //             name: formData.author.name,
//   //             designation: formData.author.designation,
//   //             organization: formData.author.organization,
//   //             email: formData.author.email,
//   //             mobile: formData.author.mobile
//   //           },
//   //           fileUrl: downloadURL,
//   //           submittedAt: new Date()
//   //         });

//   //         alert('Paper submitted successfully!');
//   //       }
//   //     );
//   //   } catch (error) {
//   //     console.error('Error:', error);
//   //   }
//   // };

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
//     file: null
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     if (name in formData.author) {
//       setFormData({ ...formData, author: { ...formData.author, [name]: value } });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleAuthorChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       author: {
//         ...prevData.author,
//         [name]: value
//       }
//     }));
//   };

//   const handleFileChange = (e) => {
//     setFormData({ ...formData, file: e.target.files[0] });
//   };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
  
//   //   if (!formData.file) {
//   //     alert('Please upload a file');
//   //     return;
//   //   }
  
//   //   try {
//   //     // Create a storage reference
//   //     const storageRef = ref(storage, `papers/${formData.file.name}`);
      
//   //     // Upload the file
//   //     await uploadBytes(storageRef, formData.file);
  
//   //     // Get the file URL
//   //     const fileURL = await getDownloadURL(storageRef);
  
//   //     // Add form data to Firestore
//   //     await addDoc(collection(db, 'PapersQueueCollection'), {
//   //       title: formData.title,
//   //       abstract: formData.abstract,
//   //       keywords: formData.keywords,
//   //       researchArea: formData.researchArea,
//   //       message: formData.message,
//   //       author: formData.author,
//   //       fileURL: fileURL,
//   //       status: 'pending',
//   //       timestamp: serverTimestamp()
//   //     });
  
//   //     alert('Journal submitted successfully!');
  
//   //     // Reset form data
//   //     setFormData({
//   //       title: '',
//   //       abstract: '',
//   //       keywords: '',
//   //       researchArea: '',
//   //       message: '',
//   //       author: {
//   //         name: '',
//   //         designation: '',
//   //         organization: '',
//   //         email: '',
//   //         mobile: ''
//   //       },
//   //       file: null
//   //     });
//   //   } catch (error) {
//   //     console.error("Error submitting journal: ", error);
//   //     alert('Error submitting journal');
//   //   }
//   // };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();

//   //   if (!formData.file) {
//   //     alert('Please upload a file');
//   //     return;
//   //   }

//   //   // Upload file to Firebase Storage
//   //   const storageRef = storage.ref(`papers/${formData.file.name}`);
//   //   await storageRef.put(formData.file);
//   //   const fileURL = await storageRef.getDownloadURL();

//   //   // Add form data to Firestore
//   //   await db.collection('PapersQueueCollection').add({
//   //     title: formData.title,
//   //     abstract: formData.abstract,
//   //     keywords: formData.keywords,
//   //     researchArea: formData.researchArea,
//   //     message: formData.message,
//   //     author: formData.author,
//   //     fileURL: fileURL,
//   //     status: 'pending',
//   //     timestamp: firebase.firestore.FieldValue.serverTimestamp()
//   //   });

//   //   alert('Journal submitted successfully!');
//   //   setFormData({
//   //     title: '',
//   //     abstract: '',
//   //     keywords: '',
//   //     researchArea: '',
//   //     message: '',
//   //     author: {
//   //       name: '',
//   //       designation: '',
//   //       organization: '',
//   //       email: '',
//   //       mobile: ''
//   //     },
//   //     file: null
//   //   });
//   // };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     if (!formData.file) {
//       alert('Please upload a file');
//       return;
//     }
  
//     try {
      // // Create a storage reference
      // const storageRef = ref(storage, `papers/${formData.file.name}`);
      
      // // Upload the file
      // await uploadBytes(storageRef, formData.file);
  
      // // Get the file URL
      // const fileURL = await getDownloadURL(storageRef);
  
//       const volumeId = 'Volume1';
//       const issueId = 'Issue1';
  
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
  
//       // Use addDoc to add the document with an automatically generated ID
//       await addDoc(collection(db, `PapersCollection/${volumeId}/${issueId}`), paperData);
  
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
//         // volume: '1',
//         // issue: '1',
//         file: null
//       });
//     } catch (error) {
//       console.error("Error submitting journal: ", error);
//       alert('Error submitting journal');
//     }
//   };



//   return (
//     <div>
//       <Header />

//       <center style={{ backgroundColor: '#D9E3F0' }}>
//         <h1 style={{ paddingTop: '8px', paddingBottom: '8px' }}>Submit a New Journal</h1>
//       </center>

//       <form onSubmit={handleSubmit} style={{ padding: '20px' }}>
//         <h1><b>Important Instructions</b></h1>
//         <ul>
//           <li>We recommend to read the <a href="#">publication guidelines/process</a>, Fees & Payment and FAQs before submitting your research paper.</li>
//           <li>Kindly fill all the details properly as certificate will be generated on the basis of the information provided as under.</li>
//           <li>All input fields marked with red left border are mandatory, they must be filled in.</li>
//           <li>It is important that you provide functioning email address and functioning mobile number of the first author correctly because all communication will occur on those email address and/or mobile number.</li>
//           <li>Details of the paper (Title, Abstract, Keywords, Author Name(s), Designation(s), Organization Name(s)) must be same as mentioned in the research paper which you are submitting.</li>
//           <li>Please write Abstract in Sentence case, email address in lower case and all other fields in Title Case (Capitalize first character of each words). It's better NOT to write in UPPER CASE.</li>
//         </ul>

//         <div style={{ width: '1200px', display: 'flex', flexDirection: 'column', alignItems: 'start', padding: '20px', margin: '20px' }}>
//           <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//             <h3 style={{ fontSize: '30px', margin: '20px' }}>Title</h3>
//             <input
//               name="title"
//               placeholder="Title"
//               style={{ fontSize: '20px', width: '70%', backgroundColor: '#EFEFEF', padding: '15px', borderRadius: '12px', borderLeft: '6px solid red' }}
//               type="text"
//               value={formData.title}
//               onChange={handleInputChange}
//             />
//           </div>

//           <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//             <h3 style={{ fontSize: '30px', margin: '20px' }}>Abstract</h3>
//             <input
//               name="abstract"
//               placeholder="Abstract"
//               style={{ fontSize: '20px', width: '70%', backgroundColor: '#EFEFEF', padding: '15px', borderRadius: '12px', borderLeft: '6px solid red' }}
//               type="text"
//               value={formData.abstract}
//               onChange={handleInputChange}
//             />
//           </div>

//           <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//             <h3 style={{ fontSize: '30px', margin: '20px' }}>Keywords</h3>
//             <input
//               name="keywords"
//               placeholder="Keywords (Separated by comma)"
//               style={{ fontSize: '20px', width: '70%', backgroundColor: '#EFEFEF', padding: '15px', borderRadius: '12px', borderLeft: '6px solid red' }}
//               type="text"
//               value={formData.keywords}
//               onChange={handleInputChange}
//             />
//           </div>

//           <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//             <h3 style={{ fontSize: '30px', margin: '20px' }}>Research Area</h3>
//             <select
//               name="researchArea"
//               value={formData.researchArea}
//               onChange={handleInputChange}
//               style={{ fontSize: '20px', width: '73%', backgroundColor: '#EFEFEF', padding: '15px', borderRadius: '12px', borderLeft: '6px solid red' }}
//             >
//               <option value="Computer Science">Computer Science</option>
//               <option value="Artificial Intelligence">Artificial Intelligence</option>
//               <option value="Machine Learning">Machine Learning</option>
//               <option value="Data Science">Data Science</option>
//               <option value="Information Technology">Information Technology</option>
//               <option value="Software Engineering">Software Engineering</option>
//               <option value="Cybersecurity">Cybersecurity</option>
//               <option value="Robotics">Robotics</option>
//             </select>
//           </div>

//           <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//             <h3 style={{ fontSize: '30px', margin: '20px' }}>Message to Editor</h3>
//             <input
//               name="message"
//               placeholder="Message to Editor"
//               style={{ fontSize: '20px', width: '70%', backgroundColor: '#EFEFEF', padding: '15px', borderRadius: '12px' }}
//               type="text"
//               value={formData.message}
//               onChange={handleInputChange}
//             />
//           </div>

//           <h3 style={{ fontSize: '30px', margin: '20px' }}>Author Details</h3>
          
//           <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//             <h3 style={{ fontSize: '30px', margin: '20px' }}>Name</h3>
//             <input
//               name="name"
//               placeholder="Author's Name"
//               style={{ fontSize: '20px', width: '70%', backgroundColor: '#EFEFEF', padding: '15px', borderRadius: '12px', borderLeft: '6px solid red' }}
//               type="text"
//               value={formData.author.name}
//               onChange={handleAuthorChange}
//             />
//           </div>

//           <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//             <h3 style={{ fontSize: '30px', margin: '20px' }}>Designation</h3>
//             <input
//               name="designation"
//               placeholder="Designation"
//               style={{ fontSize: '20px', width: '70%', backgroundColor: '#EFEFEF', padding: '15px', borderRadius: '12px', borderLeft: '6px solid red' }}
//               type="text"
//               value={formData.author.designation}
//               onChange={handleAuthorChange}
//             />
//           </div>

//           <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//             <h3 style={{ fontSize: '30px', margin: '20px' }}>Organization</h3>
//             <input
//               name="organization"
//               placeholder="Organization"
//               style={{ fontSize: '20px', width: '70%', backgroundColor: '#EFEFEF', padding: '15px', borderRadius: '12px', borderLeft: '6px solid red' }}
//               type="text"
//               value={formData.author.organization}
//               onChange={handleAuthorChange}
//             />
//           </div>

//           <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//             <h3 style={{ fontSize: '30px', margin: '20px' }}>Email</h3>
//             <input
//               name="email"
//               placeholder="Email"
//               style={{ fontSize: '20px', width: '70%', backgroundColor: '#EFEFEF', padding: '15px', borderRadius: '12px', borderLeft: '6px solid red' }}
//               type="email"
//               value={formData.author.email}
//               onChange={handleAuthorChange}
//             />
//           </div>

//           <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//             <h3 style={{ fontSize: '30px', margin: '20px' }}>Mobile</h3>
//             <input
//               name="mobile"
//               placeholder="Mobile Number"
//               style={{ fontSize: '20px', width: '70%', backgroundColor: '#EFEFEF', padding: '15px', borderRadius: '12px', borderLeft: '6px solid red' }}
//               type="text"
//               value={formData.author.mobile}
//               onChange={handleAuthorChange}
//             />
//           </div>

//           <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//             <h3 style={{ fontSize: '30px', margin: '20px' }}>Upload File</h3>
//             <input
//               type="file"
//               onChange={handleFileChange}
//               style={{ fontSize: '20px', width: '70%', backgroundColor: '#EFEFEF', padding: '15px', borderRadius: '12px', borderLeft: '6px solid red' }}
//             />
//           </div>

//           <button type="submit" style={{ fontSize: '20px', padding: '15px 30px', borderRadius: '12px', backgroundColor: '#4CAF50', color: 'white', marginTop: '20px', cursor: 'pointer' }}>Submit</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default SubmitPaperPage;
