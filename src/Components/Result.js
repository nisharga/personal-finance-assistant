import React, { useState } from 'react';
import { jsPDF } from "jspdf";
import { useRef } from 'react';
import './Result.css';
import Tips from './Tips';
import Sites from './Sites';

const Result = () => {
  const [data, setData] = useState();
  const pdfRef = useRef(null);
  const [selectedId, setSelectedId] = useState();

  const handleResult = (val) => {
    setSelectedId(val);
    if (val === 1) {
      fetch("result.json")
        .then(res => res.json())
        .then(data => setData(data))
    }
    else if(val === 2){
      fetch("tips.json")
        .then(res => res.json())
        .then(data => setData(data))
    }
    else if(val===3){
      fetch("sites.json")
        .then(res => res.json())
        .then(data => setData(data))
    }

  }


  console.log(data);

  const generatePDF = () => {
    const content = pdfRef.current;
    const doc = new jsPDF(
      {
        orientation: 'p',
        unit: 'mm',
        format: 'a4',
      }
    );
    doc.html(content, {
      width: 180,
      windowWidth: 700,
      margin: [20, 20, 20, 20],
      html2Canvas: { scale: 0.67 },
      callback: (doc) => {
        doc.save('result.pdf')
      }
    });
  }
  return (
    <div className='container'>
      <div className='buttons'>
        <button onClick={() => handleResult(1)} className='nav-btn nav-btn-color'>Result</button>
        <button onClick={() => handleResult(2)} className='nav-btn nav-btn-color'>Tips</button>
        <button onClick={() => handleResult(3)} className='nav-btn nav-btn-color'>Suggested Sites</button>
      </div>
      <div className='result-show-container'>
        <div>

          {
            selectedId === 1 && <>
              <div className='pdf-container'>
                <button onClick={() => generatePDF()} className='nav-btn pdf-btn'>PDF</button>
              </div>
              <h1>Result</h1>
              <div>
                {
                  data ?
                    <div ref={pdfRef}>
                      {data?.answer.map((item, key) => <p key={key}>{item}</p>)}
                    </div>
                    :
                    <p>Please regenerate!!!</p>
                }
              </div>
            </>
          }
          {
            selectedId === 2 && <Tips data={data}></Tips>
          }
          {
            selectedId === 3 && <Sites data={data}></Sites>
          }
        </div>
      </div>
      <div className='regenerate-container'>
        <a href='/' className='nav-btn regenerate-btn' >Regenerate</a>
      </div>

    </div>
  );
};

export default Result;
