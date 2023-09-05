import { useState } from "react";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase";
import { Navigate } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInMessage, setSignInMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [newsletterConsent, setNewsletterConsent] = useState(false);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleNewsletterConsentChange = (e) =>
    setNewsletterConsent(e.target.checked);

  const handleSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSignInMessage("Sign-In Successful");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(`Login error: ${errorCode}`);
      });
  };

  if (signInMessage == "Sign-In Successful") {
    return <Navigate to="/home" replace={true} />;
  }

  return (
    <div className="pt-24 bg-black h-screen xl:h-97  text-white macksonMusic tracking-widest">
      <form
        onSubmit={handleSubmit}
        className="mt-30 xl:max-w-lg max-w-md mx-auto border-2 border-orangebg rounded text-white  "
      >
        <div>
          <h2 className="macksonMusic text-3xl  xl:px-10 font-extrabold tracking-widest py-5 bg-orangebg text-center">
            Mackson Music
          </h2>
        </div>

        <div className="py-5 flex flex-col px-5 text-lg">
          <label className="my-2 tracking-widest" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email address"
            value={email}
            onChange={handleEmailChange}
            className="tracking-widest outline-orange-100 outline outline-1  outline-offset-2 rounded px-3"
          />
        </div>
        <div className="py-5 flex flex-col px-5 text-lg">
          <label htmlFor="password" className="my-2 tracking-widest">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
            className="tracking-widest outline-orange-100 outline outline-1  outline-offset-2 rounded px-3"
          />
        </div>
        <div className="py-5 px-5 text-lg">
          <input
            type="checkbox"
            id="newsletterConsent"
            checked={newsletterConsent}
            onChange={handleNewsletterConsentChange}
          />
          <label htmlFor="newsletterConsent">
            I consent to the{" "}
            <Link className="text-orangebg font-bold">
              Terms and Conditions
            </Link>{" "}
            of Mackson Music
          </label>
        </div>

        <div className="py-5 flex justify-center  px-5 text-lg">
          <button
            type="submit"
            className="bg-orangebg py-1 px-4 rounded font-extrabold tracking-widest"
          >
            Sign In
          </button>
        </div>

        {errorMessage !== ""
          ? [
              <div className="px-5 mx-5 py-2 font-extrabold rounded tracking-widest text-center bg-orangebg">
                {errorMessage}
              </div>,
            ]
          : null}

        <div className="py-5 flex justify-center  px-5 text-lg">
          Do not have an account?{" "}
          <Link className="text-orangebg ps-2 font-extrabold" to="/register">
            Register
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signin;
