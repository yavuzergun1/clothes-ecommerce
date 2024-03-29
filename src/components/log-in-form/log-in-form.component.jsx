import { useState, useContext } from "react";
import { message } from "antd";
import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import "antd/dist/antd.css";
import { UserContext } from "../../contexts/user.context";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import "./sign-in-form.styles.scss";
import { useNavigate } from "react-router";

const defaultFormFields = {
  email: "",
  password: "",
};

const LogInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const navigate = useNavigate();
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
    navigate("/");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          message.error("Invalid Password");
          break;
        case "auth/user-not-found":
          message.error("Invalid email");
          break;

        default:
          console.log(error);
      }
    }
    resetFormFields();
    navigate("/");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          {/* we write type=button if we not it works also submiting function. we dont want it */}
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Contunie With Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LogInForm;
