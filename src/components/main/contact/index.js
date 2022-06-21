import { faPaperPlane } from "@fortawesome/free-solid-svg-icons/faPaperPlane";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import "./style.index.scss";

function Contact(props) {
  useEffect(() => {
    document.title = "Screenplay Rules - Contact";
  }, []);

  // Maybe add a boolean for plural to change the (s)
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("CONTACT FORM");
  const [time, setTime] = useState("DAY");
  const [name, setName] = useState("YOU");
  const [description, setDescription] = useState(
    "big fan of the Screenplay Rules website"
  );
  const [message, setMessage] = useState("");

  const [type, setType] = useState({
    type: "QUESTION",
    text: "ask a question",
  });

  const [topic, setTopic] = useState({
    topic: "SCREENTOUR",
    text: "the screentour.",
  });

  function handleSubmit() {
    fetch("http://localhost:8000/api/messages/", {
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        type: type.type,
        subject: topic.topic,
        message: message,
      }),
      method: "POST",
    });
    // add a navigate to 'script has been sent component'
    // .then(navigate("/blog"));
  }

  return (
    <div>
      <div className="contactContainer">
        <form>
          <div className="main">
            <div className="shortContainer">
              <input
                id="short"
                placeholder="Name..."
                spellCheck="false"
                type="text"
                maxLength="33"
                required
                onChange={(ev) => setName(ev.target.value)}
              ></input>
              <input
                id="short"
                placeholder="Email..."
                spellCheck="false"
                type="text"
                required
                onChange={(ev) => setEmail(ev.target.value)}
              ></input>
            </div>
            <div className="dropDownDivContainer">
              <div className="dropDownDiv">
                <select
                  onChange={(ev) => {
                    let selected = ev.target[ev.target.selectedIndex];
                    setType({
                      type: ev.target.value,
                      text: selected.dataset.text,
                    });
                  }}
                  required
                >
                  <option
                    id="QUESTION"
                    value="QUESTION"
                    data-text="ask-a-question"
                  >
                    Question
                  </option>
                  <option
                    id="COMMENT"
                    value="COMMENT"
                    data-text="leave a comment"
                  >
                    Comment
                  </option>
                  <option
                    id="CONCERN"
                    value="CONCERN"
                    data-text="voice a concern"
                  >
                    Concern
                  </option>
                  <option id="OTHER" value="OTHER" data-text="say something">
                    Other
                  </option>
                </select>
              </div>
              <div className="dropDownDiv">
                <select
                  onChange={(ev) => {
                    let selected = ev.target[ev.target.selectedIndex];
                    setTopic({
                      topic: ev.target.value,
                      text: selected.dataset.text,
                    });
                  }}
                  required
                >
                  <option
                    id="SCREENTOUR"
                    value="SCREENTOUR"
                    data-text="the screentour."
                  >
                    Screentour
                  </option>
                  <option
                    id="GLOSSARY"
                    value="GLOSSARY"
                    data-text="the glossary section."
                  >
                    Glossary
                  </option>
                  <option id="OTHER" value="OTHER" data-text="something.">
                    Other
                  </option>
                </select>
              </div>
            </div>
            <textarea
              placeholder="Message..."
              required
              type="text"
              rows="5"
              onChange={(ev) => setMessage(ev.target.value)}
            ></textarea>
          </div>

          <div className="extra">
            <div className="shortExtraContainer">
              <div className="shortExtra">
                <input
                  placeholder="Location..."
                  spellCheck="false"
                  type="text"
                  maxLength="33"
                  onChange={(ev) => setLocation(ev.target.value)}
                ></input>
              </div>
              <div className="shortExtra">
                <input
                  placeholder="Time..."
                  spellCheck="false"
                  type="text"
                  maxLength="10"
                  onChange={(ev) => setTime(ev.target.value)}
                ></input>
              </div>
            </div>
            <textarea
              placeholder="Description..."
              type="text"
              maxLength="100"
              rows="1"
              onChange={(ev) => setDescription(ev.target.value)}
            ></textarea>
          </div>
        </form>
        {/* </div> */}
        <div>
          <div className="page">
            <div className="slugline">
              INT.&nbsp;
              <div className="location">
                <span>{location}</span> - <span>{time}</span>
              </div>
            </div>
            <div className="description">
              <span className="name">{name}</span>, a <span>{description}</span>
              , enters the contact page to <span>{type.text}</span> about{" "}
              <span>{topic.text}</span>
            </div>
            <div className="messageContainer">
              <div className="character">{name}</div>
              <div className="message">{message}</div>
            </div>
          </div>
          <div className="messageFooter">
            Send your script...
            <FontAwesomeIcon
              className="sendIcon"
              icon={faPaperPlane}
              onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
