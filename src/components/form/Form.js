import "./styles.scss";
import { useState } from "react";
import { db } from "../../firebase";

const Form = () => {
  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [fnameError, setFnameError] = useState();
  const [lnameError, setLnameError] = useState();
  const [emailError, setEmailError] = useState();
  const [messageError, setMessageError] = useState();

  const sendContactForm = (e) => {
    e.preventDefault();

    db.collection("contacts")
      .add({
        fname: fname,
        lname: lname,
        email: email,
        message: message,
      })
      .then(() => {
        alert("Your message has been submitted.");
      })
      .catch((error) => {
        alert(error.message);
      });

    setFname("");
    setLname("");
    setEmail("");
    setMessage("");
  };

  const validateFName = (input) => {
    var validName = String(input);
    if (validName == "" || validName.match(/^\d+$/)) {
      setFnameError("Please enter a valid first name!");
      return input;
    } else if (validName.match(/^[a-zA-Z]+ [a-zA-Z]+$/)) {
      setFnameError("");
    }
  };

  const validateLName = (input) => {
    var validName = String(input);
    if (validName == "" || validName.match(/^\d+$/)) {
      setLnameError("Please enter a valid last name!");
      return input;
    } else if (validName.match(/^[a-zA-Z]+ [a-zA-Z]+$/)) {
      setLnameError("");
    }
  };

  const validateMessage = (input) => {
    var validMessage = String(input);
    if (validMessage == "") {
      setMessageError("Please enter a message!");
    } else {
      setMessageError("");
    }
  };

  const validateEmail = (input) => {
    var validMail = String(input)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    if (validMail) {
      setEmailError("");
      return input;
    } else {
      setEmailError("Please enter a valid email!");
    }
  };

  const checkIfDisabled = () => {
    var disabled = false;
    if (fname && lname && email && message) {
      disabled = {};
    } else {
      disabled = {
        pointerEvents: "none",
        opacity: "0.7",
      };
    }
    return disabled;
  };

  return (
    <div
      className="contact--form"
      style={{
        backgroundImage: `url(${require("../../media/images/image12.jpg")})`,
      }}
    >
      <form onSubmit={sendContactForm}>
        <input
          type="text"
          name="fname"
          value={fname}
          placeholder="First Name *"
          onChange={(e) => {
            setFname(validateFName(e.target.value));
          }}
          className=""
          tabIndex={1}
          autoComplete="off"
        />
        <p className="input-error">{fnameError}</p>
        <input
          type="text"
          name="lname"
          value={lname}
          placeholder="Last Name *"
          onChange={(e) => {
            setLname(validateLName(e.target.value));
          }}
          tabIndex={2}
          autoComplete="off"
        />
        <p className="input-error">{lnameError}</p>
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Email *"
          onChange={(e) => {
            setEmail(validateEmail(e.target.value));
          }}
          tabIndex={3}
          autoComplete="off"
        />
        <p className="input-error">{emailError}</p>
        <textarea
          name="message"
          cols="30"
          rows="10"
          value={message}
          placeholder="..."
          onChange={(e) => {
            setMessage(validateMessage(e.target.value));
          }}
          tabIndex={4}
          autoComplete="off"
        ></textarea>
        <p className="input-error">{messageError}</p>
        <button
          type="submit"
          onClick={sendContactForm}
          style={checkIfDisabled()}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Form;
