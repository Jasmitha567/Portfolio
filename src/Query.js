import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Query() {

  const form = useRef();

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (event) => {

    event.preventDefault();

    setSubmitted(false);
    setError(false);

    emailjs
      .sendForm(
        "service_1qiha4q",
        "template_o9mrjwk",
        form.current,
        {
          publicKey: "EmYGMg27ul8B0fkwH",
        }
      )
      .then(() => {

        setSubmitted(true);

        form.current.reset();

      })
      .catch(() => {

        setError(true);

      });
  };

  return (
    <section id="contact" className="query section">

      <div className="section-heading">
        <p>LET'S CONNECT</p>
        <h2>Have a Query?</h2>
      </div>

      <div className="query-container">

        <div className="query-intro">

          <h3>Ask me anything.</h3>

          <p>
            Have a question, want to discuss a project, or simply want
            to get in touch? Send me a message and I'll get back to you.
          </p>

          <p>
            You can also reach me directly at:
          </p>

          <a href="mailto:potlurijasmitha@gmail.com">
            potlurijasmitha@gmail.com
          </a>

        </div>


        <form
          ref={form}
          className="query-form"
          onSubmit={sendEmail}
        >

          <label htmlFor="name">
            Name
          </label>

          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your name"
            required
          />


          <label htmlFor="phone">
            Phone Number
          </label>

          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder="Your phone number"
            required
          />


          <label htmlFor="email">
            Email
          </label>

          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your email address"
            required
          />


          <label htmlFor="message">
            Query
          </label>

          <textarea
            id="message"
            name="message"
            placeholder="Write your query here..."
            rows="6"
            required
          />


          <button type="submit">
            Send Query
          </button>


          {submitted && (
            <p className="form-success">
              Your query has been sent successfully.
            </p>
          )}

          {error && (
            <p className="form-error">
              Something went wrong. Please try again.
            </p>
          )}

        </form>

      </div>

    </section>
  );
}

export default Query;