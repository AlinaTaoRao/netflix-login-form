import "./styles.css";
import { SignInForm } from "./sign-in-form/SignInForm.jsx";
import { SubHeader } from "./sub-header/SubHeader.jsx";

export const LoginFormContainer = () => {
  return (
    <div className="login-form-container">
      <SignInForm />
      <SubHeader />
      <hr />
      <img
        src="https://i.postimg.cc/hj9WcgVw/logo.png"
        className="logo"
        alt="logo"
      />
    </div>
  );
};
