import React, { useState } from "react";
import ContactInfo from "./ContactInfo";
import PropTypes from "prop-types";
import styles from "./CityInput.module.css";

const CityInput = ({ className = "" }) => {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
    setState(""); // Reset state when country changes
  };

  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  const statesByCountry = {
    USA: ["California", "Texas", "New York"],
    Canada: ["Ontario", "Quebec", "British Columbia"],
    India: [
      "Andhra Pradesh",
      "Arunachal Pradesh",
      "Assam",
      "Bihar",
      "Chhattisgarh",
      "Goa",
      "Gujarat",
      "Haryana",
      "Himachal Pradesh",
      "Jharkhand",
      "Karnataka",
      "Kerala",
      "Madhya Pradesh",
      "Maharashtra",
      "Manipur",
      "Meghalaya",
      "Mizoram",
      "Nagaland",
      "Odisha",
      "Punjab",
      "Rajasthan",
      "Sikkim",
      "Tamil Nadu",
      "Telangana",
      "Tripura",
      "Uttar Pradesh",
      "Uttarakhand",
      "West Bengal",
      "Andaman and Nicobar Islands",
      "Chandigarh",
      "Dadra and Nagar Haveli and Daman and Diu",
      "Lakshadweep",
      "Delhi",
      "Puducherry",
      "Ladakh",
      "Jammu and Kashmir",
    ],
  };

  return (
    <div className={[styles.cityInput, className].join(" ")}>
      <div className={styles.submitButton}>
        <div className={styles.state} style={{ fontSize: "20px", color: "black" }}>
          Country
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.frameItem} />
          <select
            className={styles.selectState}
            value={country}
            onChange={handleCountryChange}
            style={{ width: '400px', outline: 'none', border: '1px solid #ccc', padding: '10px', borderRadius: '5px'}} id="fileType" 
          >
            <option value="" disabled>
              Select Country
            </option>
            {Object.keys(statesByCountry).map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
          {/* <div className={styles.socialLinks}>
            <img className={styles.vectorIcon1} alt="" src="/vector-21.svg" />
          </div> */}
        </div>
      </div>

      <div className={styles.agreementCheckbox}>
        <div className={styles.submitButtonParent}>
          <div className={styles.submitButton}>
            <div className={styles.state}>State</div>
            <div className={styles.rectangleGroup}>
              <div className={styles.frameItem} />
              <select
                className={styles.selectState}
                value={state}
                onChange={handleStateChange}
                disabled={!country}
                style={{ width: '400px', outline: 'none', border: '1px solid #ccc', padding: '10px', borderRadius: '5px'}} id="fileType" 
              >
                <option value="" disabled>
                  Select State
                </option>
                {country &&
                  statesByCountry[country].map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
              </select>
              
            </div>
          </div>
          <ContactInfo cityDistrict="City/District" />
          
        </div>
        <div className={styles.serviceDescription}>
          <div className={styles.reviewerReferralIdParent}>
            <div className={styles.reviewerReferralId}>Reviewer Referral Id </div>
            <div className={styles.rectangleContainer}>
              <div className={styles.frameInner} />
              <input style={{width: '100%',}}
                className={styles.enterReviewerReferral}
                placeholder="Enter reviewer referral Id"
                type="text"
              />
            </div>
          </div>
        </div>
      </div>
      <ContactInfo cityDistrict="Postal code" />
    </div>
  );
};

CityInput.propTypes = {
  className: PropTypes.string,
};

export default CityInput;



// import ContactInfo from "./ContactInfo";
// import PropTypes from "prop-types";
// import styles from "./CityInput.module.css";





// const CityInput = ({ className = "" }) => {
//   return (
//     <div className={[styles.cityInput, className].join(" ")}>
      
//       <div className={styles.submitButton}>
//             <div className={styles.state} style={{ fontSize: '20px', color: 'black'}}>Country</div>
//             <div className={styles.rectangleGroup}>
//               <div className={styles.frameItem} />
//               <div className={styles.selectState}>Select Country</div>
//               <div className={styles.socialLinks}>
//                 <img
//                   className={styles.vectorIcon1}
//                   alt=""
//                   src="/vector-21.svg"
//                 />
//               </div>
//             </div>
//           </div>
//       <div className={styles.agreementCheckbox}>
//         <div className={styles.submitButtonParent}>
//           <div className={styles.submitButton}>
//             <div className={styles.state}>State</div>
//             <div className={styles.rectangleGroup}>
//               <div className={styles.frameItem} />
//               <div className={styles.selectState}>Select State</div>
//               <div className={styles.socialLinks}>
//                 <img
//                   className={styles.vectorIcon1}
//                   alt=""
//                   src="/vector-21.svg"
//                 />
//               </div>
//             </div>
//           </div>
//           <ContactInfo cityDistrict="City/District" />
//         </div>
//         <div className={styles.serviceDescription}>
//           <div className={styles.reviewerReferralIdParent}>
//             <div className={styles.reviewerReferralId}>
//               Reviewer Referral Id 
//             </div>
//             <div className={styles.rectangleContainer}>
//               <div className={styles.frameInner} />
//               <input
//                 className={styles.enterReviewerReferral}
//                 placeholder="Enter reviewer referral Id "
//                 type="text"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//       <ContactInfo cityDistrict="Postal code" />
//     </div>
//   );
// };

// CityInput.propTypes = {
//   className: PropTypes.string,
// };

// export default CityInput;




// import InputRows from "./InputRows";
// import PropTypes from "prop-types";
// import styles from "./AuthorFields.module.css";

// const AuthorFields = ({ className = "" }) => {


  
//   return (
//     <div className={[styles.authorFields, className].join(" ")}>
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
//                 <input
//                   className={styles.inTitleCase}
//                   placeholder="In title case"
//                   type="text"
//                 />
//               </div>
//               <div className={styles.rectangleGroup}>
//                 <div className={styles.frameItem} />
//                 <input
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
//               <div className={styles.inTitleCase2}>In title case</div>
//             </div>
//             <div className={styles.groupDiv}>
//               <div className={styles.rectangleDiv} />
//               <div className={styles.inTitleCase3}>In title case</div>
//             </div>
//           </div>
//           <div className={styles.authorRows1}>
//             <div className={styles.wrapper}>
//               <div className={styles.div}>3.</div>
//             </div>
//             <div className={styles.rectangleParent1}>
//               <div className={styles.frameChild1} />
//               <div className={styles.inTitleCase4}>In title case</div>
//             </div>
//             <div className={styles.rectangleParent2}>
//               <div className={styles.frameChild2} />
//               <div className={styles.inTitleCase5}>In title case</div>
//             </div>
//           </div>
//           <div className={styles.authorRows2}>
//             <div className={styles.container}>
//               <div className={styles.div1}>4.</div>
//             </div>
//             <div className={styles.rectangleParent3}>
//               <div className={styles.frameChild3} />
//               <div className={styles.inTitleCase6}>In title case</div>
//             </div>
//             <div className={styles.rectangleParent4}>
//               <div className={styles.frameChild4} />
//               <div className={styles.inTitleCase7}>In title case</div>
//             </div>
//           </div>
//           <div className={styles.authorRows3}>
//             <div className={styles.frame}>
//               <div className={styles.div2}>5.</div>
//             </div>
//             <div className={styles.rectangleParent5}>
//               <div className={styles.frameChild5} />
//               <div className={styles.inTitleCase8}>In title case</div>
//             </div>
//             <div className={styles.rectangleParent6}>
//               <div className={styles.frameChild6} />
//               <div className={styles.inTitleCase9}>In title case</div>
//             </div>
//           </div>
//         </div>
//         <div className={styles.inputRows}>
//           <div className={styles.inputNamesRows}>
//             <div className={styles.organization}>Organization</div>
//             <div className={styles.rectangleParent7}>
//               <div className={styles.frameChild7} />
//               <input
//                 className={styles.inTitleCase10}
//                 placeholder="In title case"
//                 type="text"
//               />
//             </div>
//           </div>
//           <div className={styles.rectangleParent8}>
//             <div className={styles.frameChild8} />
//             <div className={styles.inTitleCase11}>In title case</div>
//           </div>
//           <div className={styles.rectangleParent9}>
//             <div className={styles.frameChild9} />
//             <div className={styles.inTitleCase12}>In title case</div>
//           </div>
//           <div className={styles.rectangleParent10}>
//             <div className={styles.frameChild10} />
//             <div className={styles.inTitleCase13}>In title case</div>
//           </div>
//           <div className={styles.rectangleParent11}>
//             <div className={styles.frameChild11} />
//             <div className={styles.inTitleCase14}>In title case</div>
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
//   );
// };

// AuthorFields.propTypes = {
//   className: PropTypes.string,
// };

// export default AuthorFields;

























// import PropTypes from "prop-types";
// import styles from "./CityInput.module.css";
// import ContactInfo from "./ContactInfo";

// const CityInput = ({ className = "", formData, handleInputChange }) => {
//   return (
//     <div className={[styles.cityInput, className].join(" ")}>
//       <div className={styles.cityInputInner}>
//         <div className={styles.rectangleParent}>
//           <div className={styles.frameChild} />
//           <select
//             className={styles.selectCountry}
//             name="country"
//             value={formData.country}
//             onChange={handleInputChange}
//           >
//             <option value="">Select Country</option>
//             {/* Add options for countries here */}
//           </select>
//           <div className={styles.postalCodeInput}>
//             <img className={styles.vectorIcon} alt="" src="/vector-21.svg" />
//           </div>
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
//                 name="state"
//                 value={formData.state}
//                 onChange={handleInputChange}
//               >
//                 <option value="">Select State</option>
//                 {/* Add options for states here */}
//               </select>
//               <div className={styles.socialLinks}>
//                 <img
//                   className={styles.vectorIcon1}
//                   alt=""
//                   src="/vector-21.svg"
//                 />
//               </div>
//             </div>
//           </div>
//           <ContactInfo cityDistrict="City/District" formData={formData} handleInputChange={handleInputChange} />
//         </div>
//         <div className={styles.serviceDescription}>
//           <div className={styles.reviewerReferralIdParent}>
//             <div className={styles.reviewerReferralId}>
//               Reviewer Referral Id 
//             </div>
//             <div className={styles.rectangleContainer}>
//               <div className={styles.frameInner} />
//               <input
//                 className={styles.enterReviewerReferral}
//                 placeholder="Enter reviewer referral Id "
//                 type="text"
//                 name="reviewerReferralId"
//                 value={formData.reviewerReferralId}
//                 onChange={handleInputChange}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//       <ContactInfo cityDistrict="Postal code" formData={formData} handleInputChange={handleInputChange} />
//     </div>
//   );
// };

// CityInput.propTypes = {
//   className: PropTypes.string,
//   formData: PropTypes.object.isRequired,
//   handleInputChange: PropTypes.func.isRequired,
// };

// export default CityInput;
