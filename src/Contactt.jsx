import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import contact from "./assets/contact.png";
import dcc from "./assets/dcc.png";
import email from "./assets/email.png";
import li from "./assets/li.png";
import gh from "./assets/gh.png";
import "./CSS/contact.css";
import Typed from "typed.js";

function Contact() {
  const typedRef = useRef(null);
  const form = useRef();

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Get in touch", "Message me"],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1500,
      loop: true,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    const honeypot = form.current.querySelector('input[name="honeypot"]').value;
    if (honeypot) {
      alert("Bot detected. Message not sent.");
      return;
    }

    const submitButton = form.current.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.textContent = "Sending...";

    emailjs
      .sendForm(
        "service_e5ngyy6",
        "template_yn8kixe",
        form.current,
        "dcauHtnGsdkNIMdna"
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Failed to send message.");
          console.error(error);
        }
      )
      .finally(() => {
        submitButton.disabled = false;
        submitButton.textContent = "Send Message";
      });
  };

  return (
    <div className="contact-container">
      <div className="typed-section">
        <h1 className="typed-title">
          <span ref={typedRef}></span>
        </h1>
      </div>
      <div className="form-section">
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            className="form-input"
            required
          />
          <input
            type="email"
            name="reply_to"
            placeholder="Your Email"
            className="form-input"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="form-textarea"
            required
          ></textarea>
          <input
            type="text"
            name="honeypot"
            className="honeypot"
            tabIndex="-1"
            autoComplete="off"
          />
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </div>
   </div>
  );
}
      {/* <img src={li} />
      <button
        onClick={() =>
          window.open(
            "https://www.linkedin.com/in/clifbelle-cabrera-676150372/",
            "_blank"
          )
        }
      >
        LinkedIn
      </button>

      <img src={gh} />

      <button
        onClick={() => window.open("https://github.com/theboy0112", "_blank")}
      >
        Github
      </button> */}
 

export default Contact;
