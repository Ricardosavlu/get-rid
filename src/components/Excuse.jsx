import React, { useState, useEffect } from "react";
import "./Excuse.css";

const Excuse = () => {
  const [quote, setQuote] = useState(
    " Click in the button bellow and generate your today apologize."
  );

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    let url = `https://gist.githubusercontent.com/Ricardosavlu/b5f83281587942f33b12f7399031e38b/raw/a445f9fa121d3033ca819ff5758459955694fd37/excuses.json`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        let dataQuotes = data.quotes;
        let randomNum = Math.floor(Math.random() * dataQuotes.length);
        let randomQuotes = dataQuotes[randomNum];
        setQuote(randomQuotes.quote);
      });
  };

  const handleClick = () => {
    getQuote();
  };
  return (
    <div className="excuse-container">
      <div className="text-container">
        <div className="text">
          <span>{quote}</span>
        </div>
      </div>

      <div className="generate-container">
        <button onClick={handleClick} id="generator">
          Generate Excuse
        </button>
      </div>
    </div>
  );
};

export default Excuse;
