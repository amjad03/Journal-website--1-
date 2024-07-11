import SubmitButton from "./SubmitButton";
import PropTypes from "prop-types";
import styles from "./MessageForm.module.css";

const MessageForm = ({ className = "" }) => {
  return (
    <section className={[styles.messageForm, className].join(" ")}>
      <div className={styles.formContainer}>
        <div className={styles.formContainerChild} />
        <div className={styles.formFields}>
          <form className={styles.inputFields}>
            <div className={styles.nameField}>
              <div className={styles.nameContainer}>
                <h3 className={styles.youCanAlso}>
                  You can also send a message to us by submitting the below
                  form.
                </h3>
              </div>
              <div className={styles.formInputFields}>
                <div className={styles.nameInput}>
                  <div className={styles.rectangleParent}>
                    <div className={styles.frameChild} />
                    <input
                      className={styles.name}
                      placeholder="Name"
                      type="text"
                    />
                  </div>
                  <div className={styles.rectangleGroup}>
                    <div className={styles.frameItem} />
                    <input
                      className={styles.phone}
                      placeholder="Phone"
                      type="text"
                    />
                  </div>
                  <div className={styles.rectangleContainer}>
                    <div className={styles.frameInner} />
                    <input
                      className={styles.email}
                      placeholder="Email"
                      type="text"
                    />
                  </div>
                </div>
                <textarea
                  className={styles.formInputFieldsChild}
                  placeholder="Enter your message...."
                  rows={10}
                  cols={25}
                />
              </div>
            </div>
            <SubmitButton sendMessage="Send Message" />
          </form>
        </div>
      </div>
    </section>
  );
};

MessageForm.propTypes = {
  className: PropTypes.string,
};

export default MessageForm;
