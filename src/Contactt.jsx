import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const honeypot = form.current.querySelector('input[name="honeypot"]').value;
    if (honeypot) {
      alert("Bot detected. Message not sent.");
      return;
    }

    emailjs
      .sendForm("service_e5ngyy6", "template_yn8kixe", form.current, "dcauHtnGsdkNIMdna")
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Failed to send message.");
          console.error(error);
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      style={{ maxWidth: "400px", margin: "2rem auto", display: "flex", flexDirection: "column", gap: "10px" }}
    >
      <input type="text" name="from_name" placeholder="Your Name" required />
      <input type="email" name="reply_to" placeholder="Your Email" required />
      <textarea name="message" placeholder="Your Message" required></textarea>
      <input type="text" name="honeypot" style={{ display: "none" }} />
      <button type="submit">Send</button>
    </form>
  );
}

export default Contact;
