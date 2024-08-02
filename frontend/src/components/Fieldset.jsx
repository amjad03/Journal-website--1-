import PropTypes from "prop-types";
import styles from "./Fieldset.module.css";





const Fieldset = ({ className = "" }) => {

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div className={[styles.fieldset, className].join(" ")}>
      <div className={styles.rectangleParent2}>
          <div className={styles.frameChild2} />
          <h3 className={styles.authorsDetails}>Please fill in the details of the research paper.</h3>
        </div>
      <div className={styles.inputFields}>
        <div className={styles.inputLabels}>
          <div className={styles.fieldNames}>
            <div className={styles.title}>Title</div>
            <div className={styles.abstract}>Abstract</div>
            <div className={styles.keywords}>Keywords</div>
            <div className={styles.researchArea}>Research Area</div>
            <div className={styles.selectResearchPaper}>
              Select Research Paper
            </div>
            <div className={styles.messageToEditor}>
              Message to Editor or Reviewer
            </div>
          </div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <input style={{ width: '100%',}}
              className={styles.pleaseWriteIn}
              placeholder="Please write in title case (Not in CAPITAL CASE)"
              type="text"
            />
          </div>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <input style={{ width: '100%',}}
              className={styles.shortBackgroundInformation}
              placeholder="Short background information about the research"
              type="text"
            />
          </div>
          <div className={styles.rectangleContainer}>
            <div className={styles.frameInner} />
            <input style={{ width: '100%',}}
              className={styles.commaSpeartedList}
              placeholder="Comma spearted list (ex: lorem, epusm, endor...)"
              type="text"
            />
          </div>
          <div className={styles.researchArea1}>
            <div className={styles.groupDiv}>
              <div className={styles.rectangleDiv} />
              <div className={styles.selectResearchArea}>
                {/* Select research area */}
                <select style={{ width: '400px', outline: 'none', border: '1px solid #ccc', padding: '10px', borderRadius: '5px'}} id="fileType" onChange={{}}>
                  <option value="" disabled>Select research area</option>
                  <option value="Computer Science">Computer Science</option>
                  <option value="Artificial Intelligence">Artificial Intelligence</option>
                  <option value="Machine Learning">Machine Learning</option>
                  <option value="Data Science">Data Science</option>
                  <option value="Information Technology">Information Technology</option>
                  <option value="Software Engineering">Software Engineering</option>
                  <option value="Cybersecurity">Cybersecurity</option>
                  <option value="Networks and Communications">Networks and Communications</option>
                  <option value="Cloud Computing">Cloud Computing</option>
                  <option value="Internet of Things (IoT)">Internet of Things (IoT)</option>
                  <option value="Big Data">Big Data</option>
                  <option value="Blockchain Technology">Blockchain Technology</option>
                  <option value="Human-Computer Interaction">Human-Computer Interaction</option>
                  <option value="Bioinformatics">Bioinformatics</option>
                  <option value="Computational Biology">Computational Biology</option>
                  <option value="Robotics">Robotics</option>
                  <option value="Natural Language Processing">Natural Language Processing</option>
                  <option value="Computer Vision">Computer Vision</option>
                  <option value="Algorithms and Data Structures">Algorithms and Data Structures</option>
                  <option value="Theoretical Computer Science">Theoretical Computer Science</option>
                  <option value="Embedded Systems">Embedded Systems</option>
                  <option value="Digital Signal Processing">Digital Signal Processing</option>
                  <option value="Virtual Reality and Augmented Reality">Virtual Reality and Augmented Reality</option>
                  <option value="Quantum Computing">Quantum Computing</option>
                  <option value="Systems and Control">Systems and Control</option>
                  <option value="Multimedia Systems">Multimedia Systems</option>
                  <option value="Database Systems">Database Systems</option>
                  <option value="Distributed Systems">Distributed Systems</option>
                  <option value="Software Testing and Quality Assurance">Software Testing and Quality Assurance</option>
                  <option value="Mobile Computing">Mobile Computing</option>

                </select>
              </div>
              {/* <div className={styles.dropdownIcon}>
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src="/vector-11.svg"
                />
              </div> */}
            </div>
            <div className={styles.upload}>
              <div className={styles.fileSelection}>
                <div className={styles.fileInput}>
                  <div className={styles.fileInputChild} />
                  <div className={styles.fileLabel}>
                    <div className={styles.fileLabelChild} />
                    {/* <div className={styles.chooseFile}>Choose file</div> */}
                    <input type="file" onChange={handleFileChange} />
                    </div>
                  {/* <div className={styles.fileName}>
                    <div className={styles.noFileChosen}>No file chosen</div>
                  </div> */}
                </div>
              </div>
              <div className={styles.docxOrDoc}>
                (.docx or .doc (Microsoft Office Word) or .odt (Open Document
                Text) file only) (Please format the document in single column
                layout, not in 2 columns.)
              </div>
            </div>
          </div>
          <div className={styles.rectangleParent1}>
            <div className={styles.frameChild1} />
            <div className={styles.enterYourMessage}>
            <textarea
              // value={{'Enter your message here'}}
              onChange={{}}
              rows="7"
              style={{border:'none', width: '100%', padding: '10px', fontSize: '16px' , backgroundColor: '#ebebeb'}}
              placeholder="Enter your text"
            />
            {/* <input style={{ width: '100%',}}
              className={styles.commaSpeartedList}
              placeholder="Comma spearted list (ex: lorem, epusm, endor...)"
              type="text"
            /> */}
              {/* Enter your message here...
               */}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.authors}>
        <div className={styles.rectangleParent2}>
          <div className={styles.frameChild2} />
          <h3 className={styles.authorsDetails}>Authors' Details</h3>
        </div>
        <div className={styles.dontWriteDr}>
          Don't write Dr. Prof. Mr. Mrs. Miss etc. salutations before authors'
          names, these will be removed, these are against international
          standard.
        </div>
      </div>
    </div>
  );
};

Fieldset.propTypes = {
  className: PropTypes.string,
};

export default Fieldset;



// import PropTypes from "prop-types";
// import styles from "./Fieldset.module.css";

// const Fieldset = ({ className = "", formData, handleInputChange, handleFileChange }) => {
//   return (
//     <div className={[styles.fieldset, className].join(" ")}>
//       <div className={styles.inputFields}>
//         <div className={styles.inputLabels}>
//           <div className={styles.fieldNames}>
//             <div className={styles.title}>Title</div>
//             <div className={styles.abstract}>Abstract</div>
//             <div className={styles.keywords}>Keywords</div>
//             <div className={styles.researchArea}>Research Area</div>
//             <div className={styles.selectResearchPaper}>
//               Select Research Paper
//             </div>
//             <div className={styles.messageToEditor}>
//               Message to Editor or Reviewer
//             </div>
//           </div>
//         </div>
//         <div className={styles.frameParent}>
//           <div className={styles.rectangleParent}>
//             <div className={styles.frameChild} />
//             <input
//               className={styles.pleaseWriteIn}
//               placeholder="Please write in title case (Not in CAPITAL CASE)"
//               type="text"
//               name="title"
//               value={formData.title}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className={styles.rectangleGroup}>
//             <div className={styles.frameItem} />
//             <input
//               className={styles.shortBackgroundInformation}
//               placeholder="Short background information about the research"
//               type="text"
//               name="abstract"
//               value={formData.abstract}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className={styles.rectangleContainer}>
//             <div className={styles.frameInner} />
//             <input
//               className={styles.commaSpeartedList}
//               placeholder="Comma spearted list (ex: lorem, epusm, endor...)"
//               type="text"
//               name="keywords"
//               value={formData.keywords}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className={styles.researchArea1}>
//             <div className={styles.groupDiv}>
//               <div className={styles.rectangleDiv} />
//               <div className={styles.selectResearchArea}>Select Research Area</div>
//             </div>
//           </div>
//           <div className={styles.selectResearchPaper1}>
//             <div className={styles.rectangleParent}>
//               <div className={styles.frameChild2} />
//               <input
//                 className={styles.selectFile}
//                 type="file"
//                 name="file"
//                 onChange={handleFileChange}
//               />
//             </div>
//           </div>
//           <div className={styles.messageToEditor1}>
//             <div className={styles.groupDiv}>
//               <div className={styles.rectangleDiv} />
//               <input
//                 className={styles.shortInformationMessage}
//                 placeholder="Short information / message for the editor or reviewer"
//                 type="text"
//                 name="messageToEditor"
//                 value={formData.messageToEditor}
//                 onChange={handleInputChange}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// Fieldset.propTypes = {
//   className: PropTypes.string,
//   formData: PropTypes.object.isRequired,
//   handleInputChange: PropTypes.func.isRequired,
//   handleFileChange: PropTypes.func.isRequired,
// };

// export default Fieldset;
