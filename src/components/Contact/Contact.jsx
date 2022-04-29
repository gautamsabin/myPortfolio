import { useState } from "react";
import "./Contact.scss";
import Button from "../Button/Button";
import contact from "../../assets/contact-us.png";
import axios from "axios";

export default function Contact() {
  const initialValues = { fullName: "", email: "", textarea: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    if (Object.keys(formErrors).length === 0) {
      setFormValues(formValues);
    }
    console.log(formValues);
    await axios
      .post("http://localhost:8626/user/contact/", {
        name: formValues.fullName,
        email: formValues.email,
        message: formValues.textarea,
      })
      .then(function (response) {
        console.log(response);
        // window.alert("Message send successfully")
      })
      .catch(function (error) {
        console.log(error);
        // window.alert("Message send failed")
      });
  };

  const checkValidate = () => {
    setFormErrors(validate(formValues));
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const nameregex = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
    if (!values.fullName) {
      errors.fullName = "Fullname is required";
    } else if (!nameregex.test(values.fullName)) {
      errors.fullName = "Invalid name format";
    }
    if (!values.email) {
      errors.email = "email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email";
    }
    if (!values.textarea) {
      errors.textarea = "textarea is required";
    }
    return errors;
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src={contact} alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="FullName"
            onChange={handleChange}
            value={formValues.fullName}
            onBlur={checkValidate}
          />
          <p>{formErrors.fullName}</p>
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={formValues.email}
            onBlur={checkValidate}
          />
          <p>{formErrors.email}</p>
          <textarea
            placeholder="Message"
            name="textarea"
            value={formValues.textarea}
            onChange={handleChange}
            onBlur={checkValidate}
          ></textarea>
          <p>{formErrors.textarea}</p>
          <Button type="submit" value="send" />
        </form>
      </div>
    </div>
  );
}
