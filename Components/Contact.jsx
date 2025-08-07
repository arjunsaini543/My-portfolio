import React from "react";
import "../Css/Contact.css";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "93c86881-6e00-4147-b695-83ab7288c1bd");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("✅ Form Submitted Successfully");
      event.target.reset();
    } else {
      console.error("Error", data);
      setResult(`❌ ${data.message}`);
    }
  };

  return (
    <>
      <div
        className="banner-image"
        style={{ backgroundImage: `url("./banner-1.jpg")` }}
      >
        <h2 className="client-text " data-aos="zoom-in">
          Let's work together
        </h2>
        <div className="contact-section">
          <div className="contact-containr">
            <div className="contact-info" data-aos="fade-right">
              <img src="./contact-me.svg" alt="Contact Illustration" />
            </div>
            <div className="contact-form">
              <form onSubmit={onSubmit} data-aos="fade-up-left">
                <label>
                  <i className="icon1 fa-solid fa-user"></i> Your name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                />

                <label>
                  <i className="fa-solid fa-phone text-success"></i> Mobile
                  Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your mobile number"
                  required
                />

                <label>
                  <i className="fa-solid fa-message text-primary"></i> Write
                  your messages here
                </label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Enter your message"
                  required
                ></textarea>

                <button type="submit">
                  Submit now <i className="fa-solid fa-arrow-right"></i>
                </button>
              </form>
              <span className="contact-send-message">{result}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
