import "./signin.css";

export const SignInForm = () => {
  return (
    <form action="Sign In">
      <input className="email" type="text" placeholder="Email" />
      <input className="password" type="password" placeholder="Password" />
      <input type="submit" className="sign-in" href="#" />
    </form>
  );
};
