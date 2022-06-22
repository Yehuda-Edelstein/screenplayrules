import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./style.index.scss";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons/faPaperPlane";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SimpleContact(props) {
  useEffect(() => {
    document.title = "Screenplay Rules - Contact";
  }, []);

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageSent, setMessageSent] = useState(false);
  const navigate = useNavigate();

  function handleSubmit() {
    fetch("http://localhost:8000/api/messages/", {
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        message: message,
      }),
      method: "POST",
    }).catch((error) => console.log(error));
    setMessageSent(true);
  }

  return (
    <div className="feedbackContainer">
      {!messageSent ? (
        <div className="feedbackCard">
          <form className="feedbackForm">
            <div className="feedbackHeader">CONTACT</div>
            <div className="feedbackBody">
              <textarea
                placeholder="Email..."
                id="email"
                required
                rows="1"
                onChange={(ev) => setEmail(ev.target.value)}
              ></textarea>
              <textarea
                placeholder="Message..."
                id="message"
                required
                onChange={(ev) => setMessage(ev.target.value)}
              ></textarea>
            </div>
            <div className="feedbackFooter">
              <a
                href="https://codepen.io/AlexKP/pen/xJjYwZ"
                rel="noreferrer noopener"
                target="_blank"
              >
                form inspired by @AlexKP
              </a>
              <button onClick={handleSubmit}>
                <FontAwesomeIcon className="sendIcon" icon={faPaperPlane} />
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div>Message sent!</div>
      )}
    </div>
  );
}

export default SimpleContact;
