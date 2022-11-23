import React, { useEffect } from "react";

function Glossary(props) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.title = "Screenplay Rules - Glossary";
  }, []);
  return <div></div>;
}

export default Glossary;
