import PropTypes from "prop-types";
import styles from "./ArticleDetails.module.css";
import { Timestamp } from 'firebase/firestore/lite'; // Import Timestamp if you are using v9 or above
import '../components/Table.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import RelatedPapersComponent from "./NewCustomComponents/RelatedPaper";
import AuthorsDesk from "./NewCustomComponents/AuthorsDesk";


// const ArticleDetails = ({ className = "" }) => {
//   return (
const ArticleDetails = ({ paper, className = ""  }) => {
  let formattedDate = 'Not Available';

  // Function to convert Firestore timestamp to JavaScript Date
  const convertTimestampToDate = (timestamp) => {
    if (timestamp && typeof timestamp.seconds === 'number') {
      // Create a date object from seconds and nanoseconds
      const date = new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000);
      return date.toLocaleDateString(); // Format the date as needed
    }
    return 'Invalid Timestamp';
  };

  if (paper.timestamp) {
    formattedDate = convertTimestampToDate(paper.timestamp);
  }

  if (!paper) {
    return <div>No paper data available</div>;
  }

  const authors = paper.authors.map(author => author.name).join(', ');

  const data = [
      { label: 'Author', value: authors },
      { label: 'Country', value: 'India' },
      { label: 'Abstract', value: `${paper.abstract}` },
      { label: 'Keywords', value: `${paper.keywords}` },
      { label: 'Field', value: `${paper.researchArea}` },
      { label: 'Published in', value: `Volume 6, Issue 3, May-June 2024` },
      { label: 'Published on', value: `${formattedDate}` },
      // { label: 'Cite this', value: authors }, // If you want to use it elsewhere
      { label: 'DOI', value: `${paper.fileURL}` },
  ];
  

  // const data = [
  //   { label: 'Author', value: `${paper.author.name}` },
  //   { label: 'Country', value: 'India' },
  //   { label: 'Abstract', value: `${paper.abstract}` },
  //   { label: 'Keywords', value: `${paper.keywords}` },
  //   { label: 'Field', value: `${paper.researchArea}` },
  //   { label: 'Published in', value: `Volume 6, Issue 3, May-June 2024` },
  //   { label: 'Published on', value: `${formattedDate}` },
  //   // { label: 'Cite this', value: `${paper.author.name}` },
  //   { label: 'DOI', value: `${paper.fileURL}` },

  // ];

  return(
    <>
    <div style={{width: '100%', display: 'flex', alignItems: 'center',justifyContent: 'space-evenly'}}>
      <div className="table-container">
        {data.map((row, index) => (
          <div key={index} className="table-row">
            <div className="table-cell label">{row.label}</div>
            <div className="table-cell value">{row.label == 'DOI' ? <a href={`${row.value}`} target="_blank">{row.value}</a> : row.value}</div>
          </div>
        ))}
      </div>

      {/* <div style={{ width: '20px'}}></div> */}

      {/* <div className="authors_desk">
        Author's Desk
        <hr />
        <a href="">Current Issue</a><br />
        <a href="">Indexing</a><br />
        <a href="">Open Access</a><br />
        <a href="">Author's Guidelines</a><br />
        <a href="">Call For Paper</a><br />
        <a href="">Online Submission</a><br />
        <a href="">Reviewer Policy</a><br />
        <a href="">Reviewer Guidelines</a><br />
        <a href="">Plagiarism Policies</a><br />
        <a href="">Withdrawal Policies</a><br />

        <div style={{ height: '10px'}}></div>

      <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center'}}>
        <button className="submit_button">Submit Article</button>

      </div>
      </div> */}
      <AuthorsDesk/>
    </div>

    <div style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <a href={paper.fileURL} target="_blank" style={{ width: '15%'}} className="submit_button">
        <FontAwesomeIcon icon={faFilePdf} color='white' />
        &nbsp;View/Download PDF file
      </a>
    </div>

    <hr style={{ width: '80%', color: 'black'}}/>
    <RelatedPapersComponent 
      // currentKeywords={paper.keywords} 
      // currentTitle={paper.title} 
      paper={paper}
    />


    {/* <section className={[styles.articleDetails, className].join(" ")}>
      

      <form className={styles.articleHeader}>
        <div className={styles.articleInfo}>
          <div className={styles.infoLabelsParent}>
            <div className={styles.infoLabels}>
              <div className={styles.infoLabelsChild} />
              <div className={styles.authors}>Author(s):</div>
            </div>
            <div className={styles.articleInfoValues}>
              <div className={styles.articleInfoValuesChild} />
              <input
                className={styles.mukeshKumarMeenaJb}
                placeholder={paper.author.name
                  // Mukesh Kumar Meena, J.B. Khan
                }
                type="text"
              />
            </div>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.country}>Country</div>
            </div>
            <div className={styles.rectangleGroup}>
              <div className={styles.frameItem} />
              <input className={styles.india} placeholder="India" type="text" />
            </div>
          </div>
          <div className={styles.articleContent}>
            <div className={styles.abstractTitleParent}>
              <div className={styles.abstractTitle}>
                <div className={styles.abstractTitleChild} />
                <div className={styles.abstract}>Abstract</div>
              </div>
              <div className={styles.abstractRect} />
            </div>
            <div className={styles.thisStudyPresentsContainer}>
              <p className={styles.thisStudyPresents}>
                {/* This study presents a comprehensive phytosociological analysis
                of tree species in the Dabla beed area of Churu District,
                Rajasthan, India, exploring seasonal variations in species
                composition, diversity, dominance, and evenness. The research
                was conducted across three seasons: rainy, winter, and summer,
                utilizing quadrat sampling methods to assess various ecological
                parameters. The findings reveal distinct seasonal shifts in the
                dominance and distribution of key species. During the rainy
                season, species such as Acacia senegal and Acacia tortilis
                exhibit high dominance and contribute to elevated species
                diversity and evenness. In winter, Maytenus emarginata and
                Acacia senegal emerge as prominent species, maintaining moderate
                diversity with increased dominance. The summer season sees a
                notable decline in diversity and evenness, accompanied by
                heightened dominance, with Calotropis procera and Clerodendrum
                phlomidis being particularly influential. These seasonal
                dynamics underscore the importance of adaptive management and
                conservation strategies to maintain the ecological integrity and
                biodiversity of the tree community in this arid region. The
                study highlights the critical need for targeted conservation
                efforts to ensure the sustainability of the diverse and dynamic
                tree populations in the Dabla beed area.
                {paper.abstract}
              </p>
            </div>
            <div className={styles.keywordsContentParent}>
              <div className={styles.keywordsContent}>
                <div className={styles.keywordsContentChild} />
                <div className={styles.keywords}>Keywords</div>
              </div>
              <div className={styles.keywordsContent1}>
                <div className={styles.keywordsContentItem} />
                <div className={styles.phytosociologicalAnalysisTr}>
                  {/* Phytosociological analysis, tree species diversity, seasonal
                  variation, ecological dominance, conservation strategies
                  {paper.keywords}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.rectangleContainer}>
              <div className={styles.frameInner} />
              <div className={styles.field}>Field</div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.rectangleDiv} />
              <input
                className={styles.biologyAgriculture}
                // placeholder={`Biology > Agriculture / Botany`}
                placeholder={paper.researchArea}
                type="text"
              />
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.rectangleParent1}>
              <div className={styles.frameChild1} />
              <div className={styles.publishedIn}>Published In</div>
            </div>
            <div className={styles.rectangleParent2}>
              <div className={styles.frameChild2} />
              <input
                className={styles.volume6Issue}
                placeholder="Volume 6, Issue 3, May-June 2024"
                type="text"
              />
            </div>
          </div>
          <div className={styles.groupDiv}>
            <div className={styles.rectangleParent3}>
              <div className={styles.frameChild3} />
              <div className={styles.publishedOn}>Published On</div>
            </div>
            <div className={styles.rectangleParent4}>
              <div className={styles.frameChild4} />
              <div className={styles.div}>{formattedDate}</div>
              {/* {console.log(paper.timestamp)}
              
            </div>
          </div>
          <div className={styles.frameParent1}>
            <textarea
              className={styles.frameTextarea}
              placeholder="Cite This"
              rows={4}
              cols={11}
            />
            <div className={styles.rectangleParent5}>
              <div className={styles.frameChild5} />
              <div className={styles.phytosociologicalStudyOf}>
                Phytosociological Study of Tree Species of Dabla Beed Area,
                Churu District Rajasthan, India - Mukesh Kumar Meena, J.B.
                Khan - IJFMR Volume 6, Issue 3, May-June 2024. DOI
                10.36948/ijfmr.2024.v06i03.24001
              </div>
            </div>
          </div>
          <div className={styles.frameParent2}>
            <div className={styles.rectangleParent6}>
              <div className={styles.frameChild6} />
              <div className={styles.doi}>DOI</div>
            </div>
            <div className={styles.rectangleParent7}>
              <div className={styles.frameChild7} />
              <input
                className={styles.httpsdoiorg1036948ijfmr}
                placeholder="https://doi.org/10.36948/ijfmr.2024.v06i03.24001"
                type="text"
              />
            </div>
          </div>
          <div className={styles.frameParent3}>
            <div className={styles.rectangleParent8}>
              <div className={styles.frameChild8} />
              <div className={styles.shortDoi}>Short DOI</div>
            </div>
            <div className={styles.rectangleParent9}>
              <div className={styles.frameChild9} />
              <input
                className={styles.httpsdoiorggt24vz}
                placeholder="https://doi.org/gt24vz"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.footerTop}>
            <div className={styles.footerTopLeft}>
              <div className={styles.authorsDesk}>
                <h2 className={styles.authorsDesk1}>Author’s Desk</h2>
                <div className={styles.footerTopLinks}>
                  <div className={styles.footerTopLinksChild} />
                  <div className={styles.currentIssue}>
                    <div className={styles.issueIcon}>
                      <img
                        className={styles.vectorIcon}
                        loading="lazy"
                        alt=""
                        src="/vector8.svg"
                      />
                    </div>
                    <div className={styles.currentIssue1}>Current Issue </div>
                  </div>
                  <div className={styles.linkIcons}>
                    <div className={styles.icon}>
                      <img
                        className={styles.vectorIcon1}
                        loading="lazy"
                        alt=""
                        src="/vector8.svg"
                      />
                    </div>
                    <div className={styles.indexing}>Indexing</div>
                  </div>
                  <div className={styles.linkIcons1}>
                    <div className={styles.vectorWrapper}>
                      <img
                        className={styles.vectorIcon2}
                        loading="lazy"
                        alt=""
                        src="/vector8.svg"
                      />
                    </div>
                    <div className={styles.openAccess}>Open Access</div>
                  </div>
                  <div className={styles.linkIcons2}>
                    <div className={styles.vectorContainer}>
                      <img
                        className={styles.vectorIcon3}
                        loading="lazy"
                        alt=""
                        src="/vector8.svg"
                      />
                    </div>
                    <div className={styles.authorsGuidelines}>
                      Author's Guidelines
                    </div>
                  </div>
                  <div className={styles.linkIcons3}>
                    <div className={styles.vectorFrame}>
                      <img
                        className={styles.vectorIcon4}
                        loading="lazy"
                        alt=""
                        src="/vector8.svg"
                      />
                    </div>
                    <div className={styles.callForPaper}>Call For Paper</div>
                  </div>
                  <div className={styles.linkIcons4}>
                    <div className={styles.vectorWrapper1}>
                      <img
                        className={styles.vectorIcon5}
                        loading="lazy"
                        alt=""
                        src="/vector8.svg"
                      />
                    </div>
                    <div className={styles.onlineSubmission}>
                      Online Submission
                    </div>
                  </div>
                  <div className={styles.linkIcons5}>
                    <div className={styles.vectorWrapper2}>
                      <img
                        className={styles.vectorIcon6}
                        loading="lazy"
                        alt=""
                        src="/vector8.svg"
                      />
                    </div>
                    <div className={styles.reviewerPolicy}>Reviewer Policy</div>
                  </div>
                  <div className={styles.linkIcons6}>
                    <div className={styles.vectorWrapper3}>
                      <img
                        className={styles.vectorIcon7}
                        loading="lazy"
                        alt=""
                        src="/vector8.svg"
                      />
                    </div>
                    <div className={styles.reviewerGuidelines}>
                      Reviewer Guidelines
                    </div>
                  </div>
                  <div className={styles.linkIcons7}>
                    <div className={styles.vectorWrapper4}>
                      <img
                        className={styles.vectorIcon8}
                        loading="lazy"
                        alt=""
                        src="/vector8.svg"
                      />
                    </div>
                    <div className={styles.plagiarismPolicies}>
                      Plagiarism Policies
                    </div>
                  </div>
                  <div className={styles.withdrawalPolicies}>
                    <div className={styles.policiesIcon}>
                      <img
                        className={styles.vectorIcon9}
                        loading="lazy"
                        alt=""
                        src="/vector8.svg"
                      />
                    </div>
                    <div className={styles.withdrawalPolicies1}>
                      Withdrawal Policies
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.submitArticle}>
                <button className={styles.groupButton}>
                  <div className={styles.frameChild10} />
                  <b className={styles.submitArticle1}>Submit Article</b>
                </button>
              </div>
            </div>
            <div className={styles.downloads}>
              <div className={styles.menuscriptTemplate}>
                <h2 className={styles.downloads1}>Downloads</h2>
                <div className={styles.template}>
                  <div className={styles.templateChild} />
                  <div className={styles.templateIcon}>
                    <div className={styles.vectorWrapper5}>
                      <img
                        className={styles.vectorIcon10}
                        loading="lazy"
                        alt=""
                        src="/vector8.svg"
                      />
                    </div>
                    <div className={styles.menuscriptTemplate1}>
                      Menuscript Template
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.downloadLinks}>
                <div className={styles.downloadIcons}>
                  <img
                    className={styles.vectorIcon11}
                    loading="lazy"
                    alt=""
                    src="/vector8.svg"
                  />
                </div>
                <div className={styles.copyrightForm}>Copyright form</div>
              </div>
              <div className={styles.downloadLinks1}>
                <div className={styles.vectorWrapper6}>
                  <img
                    className={styles.vectorIcon12}
                    loading="lazy"
                    alt=""
                    src="/vector8.svg"
                  />
                </div>
                <div className={styles.coverPage}>Cover Page</div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section> */}
    </>
  );
};

ArticleDetails.propTypes = {
  className: PropTypes.string,
};

export default ArticleDetails;







// INSERT INTO User (UserID, Name, Email, Phone, UserType) VALUES
// (1, 'Amit Sharma', 'amit.sharma@gmail.com', '9876543210', 'Host'),
// (2, 'Neha Patel', 'neha.patel@gmail.com', '9865432109', 'Guest'),
// (3, 'Ravi Kumar', 'ravi.kumar@gmail.com', '9786543210', 'Host'),
// (4, 'Priya Singh', 'priya.singh@gmail.com', '9745632108', 'Admin'),
// (5, 'Rajesh Gupta', 'rajesh.gupta@gmail.com', '9834567890', 'Guest'),
// (6, 'Sanya Sharma', 'sanya.sharma@gmail.com', '9876987654', 'Host'),
// (7, 'Anil Verma', 'anil.verma@gmail.com', '9756432109', 'Admin'),
// (8, 'Meera Rao', 'meera.rao@gmail.com', '9823456789', 'Guest'),
// (9, 'Karan Patel', 'karan.patel@gmail.com', '9789123456', 'Host'),
// (10, 'Divya Saini', 'divya.saini@gmail.com', '9712345678', 'Admin'),
// (11, 'Deepak Nair', 'deepak.nair@gmail.com', '9900990099', 'Host'),
// (12, 'Sanya Kapoor', 'sanya.kapoor@gmail.com', '9934567890', 'Guest'),
// (13, 'Amitabh Bachchan', 'amitabh.bachchan@gmail.com', '9823456790', 'Admin'),
// (14, 'Sneha Mehta', 'sneha.mehta@gmail.com', '9701234567', 'Guest'),
// (15, 'Rohit Desai', 'rohit.desai@gmail.com', '9776543210', 'Host'),
// (16, 'Pooja Gupta', 'pooja.gupta@gmail.com', '9812345670', 'Admin'),
// (17, 'Vikram Singh', 'vikram.singh@gmail.com', '9956789012', 'Guest'),
// (18, 'Ritika Agarwal', 'ritika.agarwal@gmail.com', '9745678901', 'Host'),
// (19, 'Rajiv Joshi', 'rajiv.joshi@gmail.com', '9801234567', 'Admin'),
// (20, 'Kavita Sharma', 'kavita.sharma@gmail.com', '9998765432', 'Guest');

// INSERT INTO Profile (ProfileID, UserID, Bio, PhotoURL) VALUES
// (1, 1, 'Host with a passion for welcoming travelers.', 'http://example.com/photo1.jpg'),
// (2, 2, 'Guest looking for amazing stays around India.', 'http://example.com/photo2.jpg'),
// (3, 3, 'Experienced host with several properties.', 'http://example.com/photo3.jpg'),
// (4, 4, 'Admin ensuring smooth operations.', 'http://example.com/photo4.jpg'),
// (5, 5, 'Frequent traveler and guest.', 'http://example.com/photo5.jpg'),
// (6, 6, 'Host with a love for cultural exchanges.', 'http://example.com/photo6.jpg'),
// (7, 7, 'Admin with a background in customer service.', 'http://example.com/photo7.jpg'),
// (8, 8, 'Guest with an eye for unique stays.', 'http://example.com/photo8.jpg'),
// (9, 9, 'Host providing top-notch hospitality.', 'http://example.com/photo9.jpg'),
// (10, 10, 'Admin with a knack for problem-solving.', 'http://example.com/photo10.jpg'),
// (11, 11, 'Dedicated host with great reviews.', 'http://example.com/photo11.jpg'),
// (12, 12, 'Guest who enjoys exploring new places.', 'http://example.com/photo12.jpg'),
// (13, 13, 'Admin and public figure in the hospitality industry.', 'http://example.com/photo13.jpg'),
// (14, 14, 'Guest who values comfort and convenience.', 'http://example.com/photo14.jpg'),
// (15, 15, 'Host with multiple properties across the country.', 'http://example.com/photo15.jpg'),
// (16, 16, 'Admin ensuring quality standards.', 'http://example.com/photo16.jpg'),
// (17, 17, 'Guest seeking memorable experiences.', 'http://example.com/photo17.jpg'),
// (18, 18, 'Host offering unique stays in historical places.', 'http://example.com/photo18.jpg'),
// (19, 19, 'Admin focused on improving user experience.', 'http://example.com/photo19.jpg'),
// (20, 20, 'Guest with a preference for homely environments.', 'http://example.com/photo20.jpg');

// INSERT INTO Listing (ListingID, HostID, Title, Description, Price, Location, PhotoURL) VALUES
// (1, 1, 'Cozy Apartment in Mumbai', 'A comfortable apartment in the heart of Mumbai.', 5000.00, 'Mumbai', 'http://example.com/listing1.jpg'),
// (2, 2, 'Luxury Villa in Goa', 'Experience luxury in a beautiful villa by the beach.', 15000.00, 'Goa', 'http://example.com/listing2.jpg'),
// (3, 3, 'Penthouse in Bangalore', 'Spacious penthouse with a city view.', 12000.00, 'Bangalore', 'http://example.com/listing3.jpg'),
// (4, 4, 'Budget Room in Delhi', 'Affordable and clean room in central Delhi.', 2000.00, 'Delhi', 'http://example.com/listing4.jpg'),
// (5, 5, 'Modern Studio in Chennai', 'A modern studio with all amenities.', 3500.00, 'Chennai', 'http://example.com/listing5.jpg'),
// (6, 6, 'Beachside Cottage in Kerala', 'Charming cottage located on the beach.', 8000.00, 'Kerala', 'http://example.com/listing6.jpg'),
// (7, 7, 'Historic Home in Jaipur', 'Stay in a traditional home with historic charm.', 6000.00, 'Jaipur', 'http://example.com/listing7.jpg'),
// (8, 8, 'Elegant Apartment in Hyderabad', 'Stylish apartment with modern decor.', 7000.00, 'Hyderabad', 'http://example.com/listing8.jpg'),
// (9, 9, 'Countryside Retreat in Punjab', 'Relax in a peaceful countryside setting.', 4000.00, 'Punjab', 'http://example.com/listing9.jpg'),
// (10, 10, 'Luxury Condo in Kolkata', 'High-end condo with premium amenities.', 14000.00, 'Kolkata', 'http://example.com/listing10.jpg'),
// (11, 11, 'Chic Loft in Mumbai', 'Trendy loft with urban style.', 6000.00, 'Mumbai', 'http://example.com/listing11.jpg'),
// (12, 12, 'Traditional House in Rajasthan', 'Experience traditional living in Rajasthan.', 5000.00, 'Rajasthan', 'http://example.com/listing12.jpg'),
// (13, 13, 'Seaside Villa in Goa', 'Villa with stunning sea views.', 16000.00, 'Goa', 'http://example.com/listing13.jpg'),
// (14, 14, 'Quaint Cabin in Uttarakhand', 'Rustic cabin perfect for a getaway.', 4500.00, 'Uttarakhand', 'http://example.com/listing14.jpg'),
// (15, 15, 'Spacious Home in Ahmedabad', 'Large home with family-friendly features.', 7000.00, 'Ahmedabad', 'http://example.com/listing15.jpg'),
// (16, 16, 'Comfortable Bungalow in Delhi', 'Bungalow with a homely feel.', 5500.00, 'Delhi', 'http://example.com/listing16.jpg'),
// (17, 17, 'Stylish Studio in Bangalore', 'Compact studio with modern amenities.', 4000.00, 'Bangalore', 'http://example.com/listing17.jpg'),
// (18, 18, 'Luxury Suite in Mumbai', 'Elegant suite with high-end features.', 13000.00, 'Mumbai', 'http://example.com/listing18.jpg'),
// (19, 19, 'Artistic Loft in Chennai', 'Loft with artistic decor and space.', 6500.00, 'Chennai', 'http://example.com/listing19.jpg'),
// (20, 20, 'Serene Villa in Himachal Pradesh', 'Villa with breathtaking mountain views.', 9000.00, 'Himachal Pradesh', 'http://example.com/listing20.jpg');

// INSERT INTO Booking (BookingID, GuestID, ListingID, StartDate, EndDate, TotalPrice) VALUES
// (1, 2, 1, '2024-09-01', '2024-09-10', 45000.00),
// (2, 5, 2, '2024-10-01', '2024-10-07', 105000.00),
// (3, 8, 3, '2024-11-01', '2024-11-05', 60000.00),
// (4, 11, 4, '2024-12-01', '2024-12-02', 2000.00),
// (5, 14, 5, '2024-12-10', '2024-12-15', 17500.00),
// (6, 17, 6, '2024-09-15', '2024-09-20', 40000.00),
// (7, 20, 7, '2024-10-15', '2024-10-22', 42000.00),
// (8, 13, 8, '2024-11-20', '2024-11-25', 35000.00),
// (9, 16, 9, '2024-12-05', '2024-12-10', 16000.00),
// (10, 19, 10, '2024-12-12', '2024-12-20', 112000.00),
// (11, 2, 11, '2024-10-05', '2024-10-10', 30000.00),
// (12, 5, 12, '2024-11-10', '2024-11-12', 12000.00),
// (13, 8, 13, '2024-12-01', '2024-12-10', 144000.00),
// (14, 11, 14, '2024-09-25', '2024-09-30', 22500.00),
// (15, 14, 15, '2024-10-05', '2024-10-10', 35000.00),
// (16, 17, 16, '2024-11-01', '2024-11-05', 27500.00),
// (17, 20, 17, '2024-12-05', '2024-12-12', 34000.00),
// (18, 13, 18, '2024-09-01', '2024-09-07', 91000.00),
// (19, 16, 19, '2024-10-20', '2024-10-30', 75000.00),
// (20, 19, 20, '2024-12-01', '2024-12-10', 85000.00);

// INSERT INTO Review (ReviewID, ReviewerID, ReviewedUserID, Rating, Comment, Date) VALUES
// (1, 2, 1, 5, 'Excellent host! Very welcoming.', '2024-09-11'),
// (2, 5, 2, 4, 'Great villa, but a bit expensive.', '2024-10-08'),
// (3, 8, 3, 5, 'Amazing penthouse with stunning views.', '2024-11-06'),
// (4, 11, 4, 3, 'Room was okay, but could be cleaner.', '2024-12-03'),
// (5, 14, 5, 4, 'Modern studio with good amenities.', '2024-12-16'),
// (6, 17, 6, 5, 'Beautiful cottage and great location.', '2024-09-21'),
// (7, 20, 7, 4, 'Historic home with a unique charm.', '2024-10-23'),
// (8, 13, 8, 5, 'Stylish apartment and excellent service.', '2024-11-26'),
// (9, 16, 9, 4, 'Peaceful retreat, but a bit far from the city.', '2024-12-11'),
// (10, 19, 10, 5, 'Luxurious condo, highly recommend!', '2024-12-21'),
// (11, 2, 11, 5, 'Great loft with an urban feel.', '2024-10-15'),
// (12, 5, 12, 4, 'Traditional house with all basic amenities.', '2024-11-13'),
// (13, 8, 13, 5, 'Beautiful seaside villa, would stay again.', '2024-12-08'),
// (14, 11, 14, 3, 'Cabin was nice, but maintenance was lacking.', '2024-09-29'),
// (15, 14, 15, 4, 'Large home, perfect for families.', '2024-10-11'),
// (16, 17, 16, 4, 'Comfortable bungalow, but location could be better.', '2024-11-04'),
// (17, 20, 17, 5, 'Villa with amazing views and tranquility.', '2024-12-07'),
// (18, 13, 18, 5, 'Artistic loft with great ambiance.', '2024-09-08'),
// (19, 16, 19, 4, 'Stylish studio, good for a short stay.', '2024-10-25'),
// (20, 19, 20, 5, 'Serene villa with excellent service.', '2024-12-09');

// INSERT INTO Payment (PaymentID, BookingID, Amount, Date, Status) VALUES
// (1, 1, 45000.00, '2024-09-01', 'Completed'),
// (2, 2, 105000.00, '2024-10-01', 'Completed'),
// (3, 3, 60000.00, '2024-11-01', 'Completed'),
// (4, 4, 2000.00, '2024-12-01', 'Completed'),
// (5, 5, 17500.00, '2024-12-10', 'Completed'),
// (6, 6, 40000.00, '2024-09-15', 'Completed'),
// (7, 7, 42000.00, '2024-10-15', 'Completed'),
// (8, 8, 35000.00, '2024-11-20', 'Completed'),
// (9, 9, 16000.00, '2024-12-05', 'Completed'),
// (10, 10, 112000.00, '2024-12-12', 'Completed'),
// (11, 11, 30000.00, '2024-10-05', 'Completed'),
// (12, 12, 12000.00, '2024-11-10', 'Completed'),
// (13, 13, 144000.00, '2024-12-01', 'Completed'),
// (14, 14, 22500.00, '2024-09-25', 'Completed'),
// (15, 15, 35000.00, '2024-10-05', 'Completed'),
// (16, 16, 27500.00, '2024-11-01', 'Completed'),
// (17, 17, 34000.00, '2024-12-05', 'Completed'),
// (18, 18, 91000.00, '2024-09-01', 'Completed'),
// (19, 19, 75000.00, '2024-10-20', 'Completed'),
// (20, 20, 85000.00, '2024-12-01', 'Completed');

// INSERT INTO SocialNetwork (SocialNetworkID, Name, URL) VALUES
// (1, 'Facebook', 'http://facebook.com'),
// (2, 'Twitter', 'http://twitter.com'),
// (3, 'Instagram', 'http://instagram.com'),
// (4, 'LinkedIn', 'http://linkedin.com'),
// (5, 'Pinterest', 'http://pinterest.com'),
// (6, 'Snapchat', 'http://snapchat.com'),
// (7, 'Reddit', 'http://reddit.com'),
// (8, 'Tumblr', 'http://tumblr.com'),
// (9, 'YouTube', 'http://youtube.com'),
// (10, 'WhatsApp', 'http://whatsapp.com'),
// (11, 'WeChat', 'http://wechat.com'),
// (12, 'Telegram', 'http://telegram.com'),
// (13, 'Flickr', 'http://flickr.com'),
// (14, 'Vimeo', 'http://vimeo.com'),
// (15, 'Quora', 'http://quora.com'),
// (16, 'Tiktok', 'http://tiktok.com'),
// (17, 'Skype', 'http://skype.com'),
// (18, 'Meetup', 'http://meetup.com'),
// (19, 'Viber', 'http://viber.com'),
// (20, 'Line', 'http://line.com');

// INSERT INTO UserSocialNetwork (UserSocialNetworkID, UserID, SocialNetworkID, SocialNetworkProfileURL) VALUES
// (1, 1, 1, 'http://facebook.com/amit.sharma'),
// (2, 2, 2, 'http://twitter.com/neha.patel'),
// (3, 3, 3, 'http://instagram.com/ravi.kumar'),
// (4, 4, 4, 'http://linkedin.com/priya.singh'),
// (5, 5, 5, 'http://pinterest.com/rajesh.gupta'),
// (6, 6, 6, 'http://snapchat.com/sanya.sharma'),
// (7, 7, 7, 'http://reddit.com/anil.verma'),
// (8, 8, 8, 'http://tumblr.com/meera.rao'),
// (9, 9, 9, 'http://youtube.com/karan.patel'),
// (10, 10, 10, 'http://whatsapp.com/divya.saini'),
// (11, 11, 11, 'http://wechat.com/deepak.nair'),
// (12, 12, 12, 'http://telegram.com/sanya.kapoor'),
// (13, 13, 13, 'http://flickr.com/amitabh.bachchan'),
// (14, 14, 14, 'http://vimeo.com/sneha.mehta'),
// (15, 15, 15, 'http://quora.com/rohit.desai'),
// (16, 16, 16, 'http://tiktok.com/pooja.gupta'),
// (17, 17, 17, 'http://skype.com/vikram.singh'),
// (18, 18, 18, 'http://meetup.com/ritika.agarwal'),
// (19, 19, 19, 'http://viber.com/rajiv.joshi'),
// (20, 20, 20, 'http://line.com/kavita.sharma');

// INSERT INTO Message (MessageID, SenderID, ReceiverID, Content, Timestamp) VALUES
// (1, 1, 2, 'Hello Neha, I hope you are enjoying your stay!', '2024-09-02 09:00:00'),
// (2, 2, 1, 'Hi Amit, everything is great. Thank you!', '2024-09-03 11:00:00'),
// (3, 3, 4, 'Priya, I have some questions about the booking.', '2024-11-02 15:30:00'),
// (4, 4, 3, 'Ravi, I need some information regarding the penthouse.', '2024-11-03 17:00:00'),
// (5, 5, 6, 'Sanya, the cottage is perfect. Thanks for the recommendation.', '2024-09-20 10:45:00'),
// (6, 6, 5, 'Rajesh, I hope the studio is working out for you.', '2024-12-11 12:00:00'),
// (7, 7, 8, 'Meera, can you provide some more details about the apartment?', '2024-11-25 16:00:00'),
// (8, 8, 7, 'Anil, I would like to confirm the booking details.', '2024-10-24 18:00:00'),
// (9, 9, 10, 'Divya, I have a few questions about the condo.', '2024-12-12 09:15:00'),
// (10, 10, 9, 'Sanya, the bungalow is lovely. Thanks!', '2024-12-13 14:00:00'),
// (11, 11, 12, 'Sneha, I need some information about the traditional house.', '2024-11-15 08:00:00'),
// (12, 12, 11, 'Deepak, thanks for your help with the booking.', '2024-12-01 13:00:00'),
// (13, 13, 14, 'Ritika, could you provide details on the cabin?', '2024-09-29 16:30:00'),
// (14, 14, 13, 'Amitabh, how was your stay at the seaside villa?', '2024-10-30 11:30:00'),
// (15, 15, 16, 'Vikram, can you confirm the availability of the villa?', '2024-11-05 09:45:00'),
// (16, 16, 15, 'Pooja, I hope the large home is comfortable.', '2024-10-15 12:00:00'),
// (17, 17, 18, 'Rajiv, the villa is fantastic. Thanks for your help!', '2024-12-06 10:00:00'),
// (18, 18, 17, 'Kavita, can you give more information about the suite?', '2024-11-12 15:15:00'),
// (19, 19, 19, 'Rohit, I need details on the artistic loft.', '2024-10-22 14:45:00'),
// (20, 20, 20, 'Ritika, thank you for the serene villa. It was amazing.', '2024-12-08 16:30:00');

// INSERT INTO Availability (AvailabilityID, ListingID, Date, IsAvailable) VALUES
// (1, 1, '2024-09-01', TRUE),
// (2, 1, '2024-09-02', TRUE),
// (3, 1, '2024-09-03', FALSE),
// (4, 2, '2024-10-01', TRUE),
// (5, 2, '2024-10-02', TRUE),
// (6, 2, '2024-10-03', FALSE),
// (7, 3, '2024-11-01', TRUE),
// (8, 3, '2024-11-02', TRUE),
// (9, 3, '2024-11-03', TRUE),
// (10, 4, '2024-12-01', TRUE),
// (11, 4, '2024-12-02', TRUE),
// (12, 5, '2024-12-10', TRUE),
// (13, 5, '2024-12-11', FALSE),
// (14, 6, '2024-09-15', TRUE),
// (15, 6, '2024-09-16', TRUE),
// (16, 7, '2024-10-15', TRUE),
// (17, 7, '2024-10-16', TRUE),
// (18, 8, '2024-11-20', TRUE),
// (19, 8, '2024-11-21', FALSE),
// (20, 9, '2024-12-05', TRUE);

// INSERT INTO Amenity (AmenityID, Name) VALUES
// (1, 'Wi-Fi'),
// (2, 'Air Conditioning'),
// (3, 'Parking'),
// (4, 'Swimming Pool'),
// (5, 'Gym'),
// (6, 'Breakfast'),
// (7, 'Pet-Friendly'),
// (8, 'Kitchen'),
// (9, 'Washer/Dryer'),
// (10, 'Heating'),
// (11, 'Hot Tub'),
// (12, 'Beachfront'),
// (13, 'Business Center'),
// (14, 'Spa'),
// (15, 'Barbecue'),
// (16, 'Playground'),
// (17, 'Garden'),
// (18, 'Balcony'),
// (19, 'Terrace'),
// (20, 'Elevator');

// INSERT INTO ListingAmenity (ListingAmenityID, ListingID, AmenityID) VALUES
// (1, 1, 1),
// (2, 1, 2),
// (3, 2, 4),
// (4, 2, 5),
// (5, 3, 6),
// (6, 3, 9),
// (7, 4, 1),
// (8, 4, 2),
// (9, 5, 3),
// (10, 5, 7),
// (11, 6, 12),
// (12, 6, 13),
// (13, 7, 8),
// (14, 7, 14),
// (15, 8, 5),
// (16, 8, 15),
// (17, 9, 2),
// (18, 9, 16),
// (19, 10, 10),
// (20, 10, 17);

// INSERT INTO City (CityID, Name, State, Country) VALUES
// (1, 'Mumbai', 'Maharashtra', 'India'),
// (2, 'Goa', 'Goa', 'India'),
// (3, 'Bangalore', 'Karnataka', 'India'),
// (4, 'Delhi', 'Delhi', 'India'),
// (5, 'Chennai', 'Tamil Nadu', 'India'),
// (6, 'Kerala', 'Kerala', 'India'),
// (7, 'Jaipur', 'Rajasthan', 'India'),
// (8, 'Hyderabad', 'Telangana', 'India'),
// (9, 'Punjab', 'Punjab', 'India'),
// (10, 'Kolkata', 'West Bengal', 'India'),
// (11, 'Ahmedabad', 'Gujarat', 'India'),
// (12, 'Rajasthan', 'Rajasthan', 'India'),
// (13, 'Uttarakhand', 'Uttarakhand', 'India'),
// (14, 'Himachal Pradesh', 'Himachal Pradesh', 'India'),
// (15, 'Madhya Pradesh', 'Madhya Pradesh', 'India'),
// (16, 'Assam', 'Assam', 'India'),
// (17, 'Sikkim', 'Sikkim', 'India'),
// (18, 'Nagaland', 'Nagaland', 'India'),
// (19, 'Manipur', 'Manipur', 'India'),
// (20, 'Tripura', 'Tripura', 'India');

// INSERT INTO Host (HostID, UserID, Phone) VALUES
// (1, 1, '9876543210'),
// (2, 2, '9876543211'),
// (3, 3, '9876543212'),
// (4, 4, '9876543213'),
// (5, 5, '9876543214'),
// (6, 6, '9876543215'),
// (7, 7, '9876543216'),
// (8, 8, '9876543217'),
// (9, 9, '9876543218'),
// (10, 10, '9876543219'),
// (11, 11, '9876543220'),
// (12, 12, '9876543221'),
// (13, 13, '9876543222'),
// (14, 14, '9876543223'),
// (15, 15, '9876543224'),
// (16, 16, '9876543225'),
// (17, 17, '9876543226'),
// (18, 18, '9876543227'),
// (19, 19, '9876543228'),
// (20, 20, '9876543229');

// INSERT INTO Guest (GuestID, UserID) VALUES
// (1, 1),
// (2, 2),
// (3, 3),
// (4, 4),
// (5, 5),
// (6, 6),
// (7, 7),
// (8, 8),
// (9, 9),
// (10, 10),
// (11, 11),
// (12, 12),
// (13, 13),
// (14, 14),
// (15, 15),
// (16, 16),
// (17, 17),
// (18, 18),
// (19, 19),
// (20, 20);

// INSERT INTO Admin (AdminID, UserID) VALUES
// (1, 1),
// (2, 2),
// (3, 3),
// (4, 4),
// (5, 5),
// (6, 6),
// (7, 7),
// (8, 8),
// (9, 9),
// (10, 10),
// (11, 11),
// (12, 12),
// (13, 13),
// (14, 14),
// (15, 15),
// (16, 16),
// (17, 17),
// (18, 18),
// (19, 19),
// (20, 20);

// INSERT INTO Reservation (ReservationID, BookingID, ReservationDate) VALUES
// (1, 1, '2024-08-01'),
// (2, 2, '2024-09-05'),
// (3, 3, '2024-10-10'),
// (4, 4, '2024-11-15'),
// (5, 5, '2024-12-20'),
// (6, 6, '2024-09-25'),
// (7, 7, '2024-10-30'),
// (8, 8, '2024-11-05'),
// (9, 9, '2024-12-15'),
// (10, 10, '2024-08-20'),
// (11, 11, '2024-09-12'),
// (12, 12, '2024-10-15'),
// (13, 13, '2024-11-20'),
// (14, 14, '2024-12-25'),
// (15, 15, '2024-08-10'),
// (16, 16, '2024-09-30'),
// (17, 17, '2024-10-25'),
// (18, 18, '2024-11-10'),
// (19, 19, '2024-12-05'),
// (20, 20, '2024-08-15');

// INSERT INTO Maintenance (MaintenanceID, ListingID, Description, DateScheduled, Status) VALUES
// (1, 1, 'Clean air conditioning unit', '2024-08-10', 'Pending'),
// (2, 2, 'Fix leaky faucet', '2024-08-15', 'Completed'),
// (3, 3, 'Inspect electrical wiring', '2024-08-20', 'Pending'),
// (4, 4, 'Check plumbing', '2024-09-05', 'Completed'),
// (5, 5, 'Replace broken window', '2024-09-10', 'Pending'),
// (6, 6, 'Deep clean carpets', '2024-09-15', 'Completed'),
// (7, 7, 'Repaint walls', '2024-09-20', 'Pending'),
// (8, 8, 'Service heating system', '2024-10-01', 'Completed'),
// (9, 9, 'Repair kitchen appliances', '2024-10-05', 'Pending'),
// (10, 10, 'Inspect roof', '2024-10-10', 'Completed'),
// (11, 11, 'Check for mold', '2024-10-15', 'Pending'),
// (12, 12, 'Clean gutters', '2024-10-20', 'Completed'),
// (13, 13, 'Replace broken tiles', '2024-11-01', 'Pending'),
// (14, 14, 'Repair door locks', '2024-11-05', 'Completed'),
// (15, 15, 'Inspect foundation', '2024-11-10', 'Pending'),
// (16, 16, 'Service elevator', '2024-11-15', 'Completed'),
// (17, 17, 'Check for pest infestations', '2024-12-01', 'Pending'),
// (18, 18, 'Repair patio furniture', '2024-12-05', 'Completed'),
// (19, 19, 'Replace light fixtures', '2024-12-10', 'Pending'),
// (20, 20, 'Inspect fire alarms', '2024-12-15', 'Completed');

// INSERT INTO ListingPhoto (ListingPhotoID, ListingID, PhotoURL) VALUES
// (1, 1, 'http://example.com/images/mumbai_apartment_1.jpg'),
// (2, 1, 'http://example.com/images/mumbai_apartment_2.jpg'),
// (3, 2, 'http://example.com/images/goa_villa_1.jpg'),
// (4, 2, 'http://example.com/images/goa_villa_2.jpg'),
// (5, 3, 'http://example.com/images/bangalore_penthouse_1.jpg'),
// (6, 3, 'http://example.com/images/bangalore_penthouse_2.jpg'),
// (7, 4, 'http://example.com/images/delhi_room_1.jpg'),
// (8, 4, 'http://example.com/images/delhi_room_2.jpg'),
// (9, 5, 'http://example.com/images/chennai_studio_1.jpg'),
// (10, 5, 'http://example.com/images/chennai_studio_2.jpg'),
// (11, 6, 'http://example.com/images/kerala_cottage_1.jpg'),
// (12, 6, 'http://example.com/images/kerala_cottage_2.jpg'),
// (13, 7, 'http://example.com/images/jaipur_home_1.jpg'),
// (14, 7, 'http://example.com/images/jaipur_home_2.jpg'),
// (15, 8, 'http://example.com/images/hyderabad_apartment_1.jpg'),
// (16, 8, 'http://example.com/images/hyderabad_apartment_2.jpg'),
// (17, 9, 'http://example.com/images/punjab_retreat_1.jpg'),
// (18, 9, 'http://example.com/images/punjab_retreat_2.jpg'),
// (19, 10, 'http://example.com/images/kolkata_condo_1.jpg'),
// (20, 10, 'http://example.com/images/kolkata_condo_2.jpg');

// INSERT INTO Coupon (CouponID, Code, DiscountPercentage, ExpiryDate) VALUES
// (1, 'SAVE10', 10.00, '2024-08-31'),
// (2, 'SUMMER15', 15.00, '2024-09-15'),
// (3, 'WELCOME20', 20.00, '2024-10-01'),
// (4, 'FALL25', 25.00, '2024-10-31'),
// (5, 'WINTER30', 30.00, '2024-12-31'),
// (6, 'SPRING5', 5.00, '2024-06-30'),
// (7, 'NEWYEAR10', 10.00, '2024-01-15'),
// (8, 'HOLIDAY20', 20.00, '2024-12-20'),
// (9, 'EASTER15', 15.00, '2024-04-15'),
// (10, 'BLACKFRIDAY40', 40.00, '2024-11-29'),
// (11, 'CYBERMONDAY35', 35.00, '2024-12-02'),
// (12, 'BACK2SCHOOL10', 10.00, '2024-09-05'),
// (13, 'THANKYOU5', 5.00, '2024-11-15'),
// (14, 'LOYALTY15', 15.00, '2024-10-20'),
// (15, 'REPEAT10', 10.00, '2024-09-30'),
// (16, 'SAVE25', 25.00, '2024-08-15'),
// (17, 'SUMMERSALE20', 20.00, '2024-09-25'),
// (18, 'WINTERDEAL30', 30.00, '2024-12-10'),
// (19, 'SPRINGFEST10', 10.00, '2024-06-15'),
// (20, 'GIFT20', 20.00, '2024-12-05');


// INSERT INTO BookingCoupon (BookingCouponID, BookingID, CouponID) VALUES
// (1, 1, 1),
// (2, 2, 2),
// (3, 3, 3),
// (4, 4, 4),
// (5, 5, 5),
// (6, 6, 6),
// (7, 7, 7),
// (8, 8, 8),
// (9, 9, 9),
// (10, 10, 10),
// (11, 11, 11),
// (12, 12, 12),
// (13, 13, 13),
// (14, 14, 14),
// (15, 15, 15),
// (16, 16, 16),
// (17, 17, 17),
// (18, 18, 18),
// (19, 19, 19),
// (20, 20, 20);




// // ============================================================================================================
// // Test Case for Database Based on the ER-Model
// // Test Case ID: TC_DB_001

// // Description: Verify that a user can book a listing and apply a coupon to the booking. This will test the integration of the User, Listing, Booking, and Coupon tables, including the relationship between bookings and coupons through the BookingCoupon table.
// // Preconditions
// // The following data must be present:
// // At least one user with UserID = 1 (Guest).
// // At least one listing with ListingID = 1 (Host).
// // At least one coupon with CouponID = 1.
// // Test Steps

// // ==================1. Insert Test Data:======================

// // Ensure there is a user, listing, and coupon entry in the database.
// // -- User
// INSERT INTO User (UserID, Name, Email, Phone, UserType) VALUES
// (21, 'Rajesh Kumar', 'rajesh.kumar@gmail.com', '9876543210', 'Guest');

// // -- Listing
// INSERT INTO Listing (ListingID, HostID, Title, Description, Price, Location, PhotoURL) VALUES
// (21, 21, 'Luxury Apartment', 'A luxurious 3BHK apartment in the city center.', 150.00, 'Delhi', 'http://example.com/photo.jpg');

// // -- Coupon
// INSERT INTO Coupon (CouponID, Code, DiscountPercentage, ExpiryDate) VALUES
// (21, 'SAVE10', 10.00, '2024-08-31');

// // ==================2. Create a Booking:==================
// // Insert a booking entry for the guest to book the listing.
// INSERT INTO Booking (BookingID, GuestID, ListingID, StartDate, EndDate, TotalPrice) VALUES
// (21, 21, 21, '2024-08-01', '2024-08-07', 900.00);

// // ==================3. Apply a Coupon to the Booking:==================
// //Insert a record into BookingCoupon to apply the coupon to the booking.
// INSERT INTO BookingCoupon (BookingCouponID, BookingID, CouponID) VALUES
// (21, 21, 21);

// // ==================4. Retrieve Booking Details with Coupon:==================
// // Query the database to ensure the coupon is applied to the booking correctly.
// SELECT b.BookingID, b.GuestID, l.Title AS ListingTitle, c.Code AS CouponCode, c.DiscountPercentage
// FROM Booking b
// JOIN Listing l ON b.ListingID = l.ListingID
// LEFT JOIN BookingCoupon bc ON b.BookingID = bc.BookingID
// LEFT JOIN Coupon c ON bc.CouponID = c.CouponID
// WHERE b.BookingID = 21;

// // Expected Results
// // The booking record is correctly inserted and linked with the listing.
// // The coupon is correctly associated with the booking.
// // The query returns correct details with the applied coupon:
// // BookingID: 21
// // GuestID: 21
// // ListingTitle: Luxury Apartment
// // CouponCode: SAVE10
// // DiscountPercentage: 10.00
// // ---Postconditions---
// // The database has a valid booking with an applied coupon.
// // The test data can be cleaned up if necessary by deleting the test entries.


// // -- Cleanup
// DELETE FROM BookingCoupon WHERE BookingCouponID = 21;
// DELETE FROM Booking WHERE BookingID = 21;
// DELETE FROM Coupon WHERE CouponID = 21;
// DELETE FROM Listing WHERE ListingID = 21;
// DELETE FROM User WHERE UserID = 21;

// // This test case verifies that the relationships between User, Listing, Booking, and Coupon are functioning correctly and that the coupon application process is working as expected.