import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import li from "./assets/li.png";
import gh from "./assets/gh.png";
import "./CSS/contact.css";
import Typed from "typed.js";
import Swal from "sweetalert2";


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
      Swal.fire({
        title: "Bot Detected",
        text: "Message not sent.",
        icon: "warning",
        confirmButtonColor: "var(--accent-color)",
      });
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
          Swal.fire({
            title: "Success!",
            text: "Your message has been sent successfully.",
            icon: "success",
            confirmButtonColor: "var(--accent-color)",
            background: "var(--bg-secondary)",
            color: "var(--text-primary)",
          });
          form.current.reset();
        },
        (error) => {
          Swal.fire({
            title: "Error!",
            text: "Failed to send the message. Please try again later.",
            icon: "error",
            confirmButtonColor: "var(--accent-color)",
            background: "var(--bg-secondary)",
            color: "var(--text-primary)",
          });
          console.error(error);
        }
      )
      .finally(() => {
        submitButton.disabled = false;
        submitButton.textContent = "Send Message";
      });
  };


  return (
    <section className="contact-section" id="contact">
      <div className="contact-wrapper">
        <div className="contact-info animate__animated animate__fadeInLeft">
          <div className="typed-container">
            <h1 className="typed-title">
              <span ref={typedRef}></span>
            </h1>
          </div>
          <p className="contact-subtitle">
            Have a project in mind or just want to say hi? Feel free to reach out. 
            I'm always open to discussing new opportunities and creative ideas.
          </p>
          
          <div className="contact-methods">
            <div className="method-item">
              <span className="method-label">Email</span>
              <a href="mailto:clifbellecabrera@gmail.com" className="method-link">
                clifbellecabrera@gmail.com
              </a>
            </div>
          </div>

          <div className="social-links">
            <button 
              className="social-btn"
              onClick={() => window.open("https://www.linkedin.com/in/clifbelle-cabrera-676150372/", "_blank")}
              title="LinkedIn"
            >
              <img src={li} alt="LinkedIn" />
            </button>
            <button 
              className="social-btn"
              onClick={() => window.open("https://github.com/theboy0112", "_blank")}
              title="GitHub"
            >
              <img src={gh} alt="GitHub" />
            </button>
          </div>
        </div>

        <div className="contact-form-wrapper animate__animated animate__fadeInRight">
          <div className="glass-card contact-card">
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  className="form-input"
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  className="form-input"
                  required
                />
              </div>


              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="How can I help you?"
                  className="form-textarea"
                  required
                ></textarea>
              </div>

              <input
                type="text"
                name="honeypot"
                className="honeypot"
                tabIndex="-1"
                autoComplete="off"
              />

              <button type="submit" className="submit-button">
                <span>Send Message</span>
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}



export default Contact;
