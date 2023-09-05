import { useState } from "react";
import { Link } from "react-router-dom";
import auth from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { BsEmojiFrown, BsEmojiSunglasses } from "react-icons/bs";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [newsletterConsent, setNewsletterConsent] = useState(false);
  const [termsConsent, setTermsConsent] = useState(false);
  const [password, setPassword] = useState("");
  const [registerMessage, setRegisterMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [report, setreport] = useState(false);

  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleFullNameChange = (e) => setFullName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);
  const handleNewsletterConsentChange = (e) =>
    setNewsletterConsent(e.target.checked);
  const handleTermsConsentChange = (e) => setTermsConsent(e.target.checked);

  const handleReport = () => {
    if (registerMessage == "") {
      setreport(true);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      email,
      fullName,
      password,

      phone,
      newsletterConsent,
      termsConsent
    )
      .then((userCredential) => {
        setRegisterMessage("Registration Successful");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setRegisterMessage(`Registration error: ${errorCode}`);
      });
  };

  return (
    <div className="py-24 bg-black h-auto  text-white macksonMusic tracking-widest">
      <form
        onSubmit={handleSubmit}
        className="mt-30  xl:max-w-lg max-w-md mx-auto border-2 border-orangebg rounded text-white  "
      >
        <div>
          <h2 className="macksonMusic text-3xl  xl:px-10 font-extrabold tracking-widest py-5 bg-orangebg text-center">
            Mackson Music
          </h2>
        </div>
        <div className="py-5 flex flex-col px-5 text-lg">
          <label htmlFor="fullName" className="text-white my-2 tracking-widest">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            placeholder="Enter your full name"
            value={fullName}
            onChange={handleFullNameChange}
            className=" outline-orange-100 outline outline-1  outline-offset-2 rounded px-3 tracking-widest"
            required
          />
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
            required
          />
        </div>
        <div className="py-5 flex flex-col px-5 text-lg">
          <label htmlFor="phone" className="my-2 tracking-widest">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="Enter your phone number"
            value={phone}
            onChange={handlePhoneChange}
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
            required
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
            I consent to receiving newsletters from Mackson Music
          </label>
        </div>
        <div className="py-5  px-5 text-lg">
          <input
            type="checkbox"
            id="termsConsent"
            checked={termsConsent}
            onChange={handleTermsConsentChange}
          />
          <label htmlFor="termsConsent">
            I have read and agree to the terms and conditions
          </label>
        </div>
        <div className="py-5 flex justify-center  px-5 text-lg">
          <button
            type="submit"
            onClick={handleReport}
            className="bg-orangebg py-1 px-4 rounded font-extrabold tracking-widest"
          >
            Register
          </button>
        </div>

        {report && (
          <>
            {registerMessage !== "" &&
            registerMessage == "Registration Successful"
              ? [
                  <p className="flex mx-5 rounded font-extrabold tracking-widest justify-center py-2 bg-orangebg">
                    {registerMessage}{" "}
                    <span>
                      <BsEmojiSunglasses className="text-black font-extrabold text-xl mx-2" />
                    </span>
                  </p>,
                ]
              : [
                  <p className="flex mx-5 rounded font-extrabold tracking-widest justify-center py-2 bg-orangebg">
                    {registerMessage}{" "}
                    <span>
                      <BsEmojiFrown className="text-black font-extrabold text-xl mx-2" />
                    </span>
                  </p>,
                ]}
          </>
        )}

        <div className="py-5 flex justify-center  px-5 text-lg">
          Already have an account?{" "}
          <Link className="text-orangebg ps-2 font-extrabold" to="/signin">
            Sign in
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
