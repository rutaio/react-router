import { ContactForm } from './components/ContactForm';
import { ContactsInfo } from './components/ContactsInfo';
import '../ContactPage/contact.css';


export const ContactsPage = () => {
  return (
    <section className="contact">
      <h2>Share Your Review</h2>
      <div className="contact-form-container">
        <h3>Form</h3>
        <ContactForm  />
      </div>
      <div className="contact-info-container">
        <ContactsInfo />
      </div>
    </section>
  );
};
