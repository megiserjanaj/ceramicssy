import "./styles.scss";
import { useEffect } from "react";
import Form from "../../components/form/Form";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact";
  }, []);

  return (
    <div className="page--contact">
      <h2>Get in touch</h2>
      <p className="page--contact--intro">
        Contact Ceramicssy by completing the form below. Once you have submitted
        your enquiry, we will be in touch with you soon.
      </p>
      <Form />
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11984.564508566873!2d19.81869835!3d41.327544450000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1667388888475!5m2!1sen!2s"
          width="100%"
          height="600px"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
