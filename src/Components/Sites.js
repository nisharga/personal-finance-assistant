import React, { useRef } from "react";
import { jsPDF } from "jspdf";

const Sites = ({ data }) => {
  const pdfRef = useRef(null);

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
        doc.save("sites.pdf");
      },
    });
  };
  return (
    <div>
      <div className="pdf-container">
        <button onClick={generatePDF} className="nav-btn pdf-btn">
          PDF
        </button>
      </div>
      <h1>Sites</h1>
      {data ? (
        <ul ref={pdfRef}>
          {data?.answer.map((item, key) => (
            <p
              key={key}
              style={{ whiteSpace: "pre-wrap", overflowWrap: "break-word" }}
            >
              {item}
            </p>
          ))}
        </ul>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default Sites;
