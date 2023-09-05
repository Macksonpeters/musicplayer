import { useState } from "react";
import { PaystackButton } from "react-paystack";

const Paystack = () => {
  const publicKey = "pk_test_be88588d46d1fa35e0a4994384da44f9a9498616";
  //   const amount = 1000000; //Remember, set in kobo!
  const [email, setEmail] = useState("");
  const [Amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const amount = Amount * 100;
  

  console.log(amount);

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! Try Again"),
  };

  return (
    <div>
      <div className="pt-20 ">
        <div className="checkout-form">
          <div className="checkout-field">
            <label>Name</label>
            <input
              type="text"
              id="name"
              className="ms-3 outline outline-red-300 mb-5"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="checkout-field">
            <label>Email</label>
            <input
              type="text"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              className="ms-3 outline outline-red-300 mb-5"
            />
          </div>
          <div className="checkout-field">
            <label>Amount</label>
            <input
              type="number"
              id="amount"
              onChange={(e) => setAmount(e.target.value)}
              className="ms-3 outline outline-red-300 mb-5"
            />
          </div>
          <div className="checkout-field">
            <label>Phone</label>
            <input
              type="text"
              id="phone"
              onChange={(e) => setPhone(e.target.value)}
              className="ms-3 outline outline-red-300 mb-5"
            />
          </div>
          <PaystackButton className="paystack-button" {...componentProps} />
        </div>
      </div>
    </div>
  );
};

export default Paystack;
