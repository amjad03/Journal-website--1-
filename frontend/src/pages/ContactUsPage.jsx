
import JournalDetails from "../components/JournalDetails";
import ContactInfo1 from "../components/ContactInfo1";
import MessageForm from "../components/MessageForm";
import Footer from "../components/Footer";
import styles from "./ContactUsPage.module.css";
import Header from "../components/NewCustomComponents/Header";

const ContactUsPage = () => {
  return (
    <div className={styles.contactUsPage}>
    <Header/>
     
      {/* <div className={styles.contactUsPageChild} /> */}
      <section className={styles.content}>
       
        
        <JournalDetails />
        <ContactInfo1 />
      </section>
      <MessageForm />
      <div className={styles.frameDiv}>
        <div className={styles.frameItem} />
      </div>
      <Footer
        cooltext4611840960970061="/cooltext461184096097006-1@2x.png"
        bookPng1="/bookpng-11@2x.png"
        logo="/vector-13.svg"
      />
    </div>
  );
};

export default ContactUsPage;
