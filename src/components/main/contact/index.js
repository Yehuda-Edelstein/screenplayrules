import { faPaperPlane } from "@fortawesome/free-solid-svg-icons/faPaperPlane";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import "./style.index.scss";

function Contact(props) {
  useEffect(() => {
    document.title = "Screenplay Rules - Contact";
  }, []);

  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("CONTACT FORM");
  const [time, setTime] = useState("DAY");
  const [name, setName] = useState("YOU");
  const [description, setDescription] = useState(
    "big fan of the Screenplay Rules website"
  );
  const [type, setType] = useState("ask a question");
  const [topic, setTopic] = useState("the screentour.");
  const [message, setMessage] = useState("");

  function handleSubmit() {
    console.log(`${name}, ${email}, ${message}`);
  }

  return (
    <div>
      <div className="contactContainer">
        <form>
          <div className="main">
            <label>NAME</label>
            <input
              spellCheck="false"
              type="text"
              maxLength="33"
              required
              onChange={(ev) => setName(ev.target.value)}
            ></input>
            <label>EMAIL</label>
            <input
              spellCheck="false"
              type="text"
              required
              onChange={(ev) => setEmail(ev.target.value)}
            ></input>
            <div className="dropDownDivContainer">
              <div className="dropDownDiv">
                <label>TYPE</label>
                <select onChange={(ev) => setType(ev.target.value)} required>
                  <option value="ask a question">Question</option>
                  <option value="leave a comment">Comment</option>
                  <option value="voice a concern">Concern</option>
                  <option value="say something">Other</option>
                </select>
              </div>
              <div className="dropDownDiv">
                <label>TOPIC</label>
                <select onChange={(ev) => setTopic(ev.target.value)} required>
                  <option value="the screentour.">Screentour</option>
                  <option value="the glossary section.">Glossary</option>
                  <option value="something.">Other</option>
                </select>
              </div>
            </div>
            <label>MESSAGE</label>
            <textarea
              required
              type="text"
              rows="5"
              onChange={(ev) => setMessage(ev.target.value)}
            ></textarea>
          </div>
          <div className="extra">
            <label>LOCATION</label>
            <input
              spellCheck="false"
              type="text"
              maxLength="33"
              onChange={(ev) => setLocation(ev.target.value)}
            ></input>
            <label>TIME</label>
            <input
              spellCheck="false"
              type="text"
              maxLength="10"
              onChange={(ev) => setTime(ev.target.value)}
            ></input>
            <label>DESCRIPTION</label>
            <textarea
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
              , enters the contact page to <span>{type}</span> about{" "}
              <span>{topic}</span>
            </div>
            <div className="messageContainer">
              <div className="character">{name}</div>
              <div className="message">{message}</div>
            </div>
          </div>
          <div className="footer">
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
