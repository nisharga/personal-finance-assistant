import React, { useState } from "react";
import { jsPDF } from "jspdf";
import { useRef } from "react";
import "./Result.css";
import Tips from "./Tips";
import Sites from "./Sites";

const Result = ({ result, sitelooks, tips }) => {
  const pdfRef = useRef(null);
  const [selectedId, setSelectedId] = useState();

  const handleResult = (val) => {
    setSelectedId(val);
  };

  const generatePDF = () => {
    const content = pdfRef.current;
    const doc = new jsPDF({
      orientation: "p",
      unit: "mm",
      format: "a4",
    });
    doc.html(content, {
      width: 180,
      windowWidth: 700,
      margin: [20, 20, 20, 20],
      html2Canvas: { scale: 0.67 },
      callback: (doc) => {
        doc.save("result.pdf");
      },
    });
  };
  return (
    <div className="container">
      <div className="buttons">
        <button
          onClick={() => handleResult(1)}
          className="nav-btn nav-btn-color"
        >
          Result
        </button>
        <button
          onClick={() => handleResult(2)}
          className="nav-btn nav-btn-color"
        >
          Tips
        </button>
        <button
          onClick={() => handleResult(3)}
          className="nav-btn nav-btn-color"
        >
          Suggested Sites
        </button>
      </div>
      <div className="result-show-container">
        <div>
          {result === "" &&
            "First Fill The Form, Click Submit And wait sometime...... Then visit those tabs for result"}
          {selectedId === 1 && (
            <>
              <div className="pdf-container">
                <button
                  onClick={() => generatePDF()}
                  className="nav-btn pdf-btn"
                >
                  PDF
                </button>
              </div>
              <h1>Result</h1>
              <div>
                {result ? (
                  <div ref={pdfRef}>
                    {result?.answer.map((item, key) => (
                      <p key={key}>{item}</p>
                    ))}
                  </div>
                ) : (
                  <p>Loading......</p>
                )}
              </div>
            </>
          )}
          {selectedId === 2 && <Tips data={tips}></Tips>}
          {selectedId === 3 && <Sites data={sitelooks}></Sites>}
        </div>
      </div>
      <div className="regenerate-container">
        <a href="/" className="nav-btn regenerate-btn">
          Regenerate
        </a>
      </div>
    </div>
  );
};

export default Result;
