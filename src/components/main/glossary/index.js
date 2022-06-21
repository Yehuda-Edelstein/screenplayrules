import React, { useEffect, useState } from "react";
import "./style.index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Glossary(props) {
  useEffect(() => {
    document.title = "Screenplay Rules - Glossary";
  }, []);

  const [termList, setTermList] = useState([]);
  const [searched, setSearched] = useState("");

  const filtered = termList.filter((term) =>
    Object.values(term).some(
      (val) => typeof val === "string" && term.term_name.includes(searched)
    )
  );

  useEffect(() => {
    fetch("http://localhost:8000/api/glossary/")
      .then((res) => res.json())
      .then((res) => setTermList(res));
  }, []);

  return (
    <div>
      <div className="termSearch">
        <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
        <input
          type="text"
          placeholder="Search..."
          value={searched}
          onChange={(ev) => setSearched(ev.target.value)}
        />
      </div>
      <div className="termList">
        {filtered.map((term) => (
          <div key={term.term_name} className="termContainer">
            <div className="termName">{term.term_name}</div>
            <div className="termDefinition">{term.definition}</div>
            <div className="termExample">{term.example}</div>
            {/* <div className='termFooter'>
                            <div>Like/Dislike or Concerned?</div>
                            <div>Question</div>
                        </div> */}
          </div>
        ))}
        {/* add a loading situation before so there isn't a glimpse of this message before loading terms. */}
        {filtered.length === 0 && (
          <div>
            Sorry, no such term yet. Check the spelling or just keep scrolling.
            You'll find it.
          </div>
        )}
      </div>
      {/* <div className='nextPageFooter'>
                <div>Next...</div>
            </div> */}
    </div>
  );
}

export default Glossary;
