import React, { useRef } from 'react';
import { jsPDF } from "jspdf";

const Tips = ({data}) => {
    const pdfRef = useRef(null);
    
    const generatePDF = () => {
        const content = pdfRef.current;
        const doc = new jsPDF(
            {
                orientation: 'p',
                unit:'mm',
                format: 'a4',
            }
        );
        doc.html(content, {
            width: 180,
            windowWidth: 700,
            margin: [20,20,20,20],
            html2Canvas: {scale:0.67},
            callback: (doc)=>{
                doc.save('tips.pdf')
            }
        });
    }
    return (
        <div>
            <div className='pdf-container'>
                <button onClick={generatePDF} className='nav-btn pdf-btn'>PDF</button>
            </div>
            <h1>Tips</h1>
            {
                data ?
                    <ul ref={pdfRef}>
                        {
                            data?.answer.map((item, key) => <li key={key}><p style={{ whiteSpace: 'pre-wrap', overflowWrap: 'break-word' }}>{item.slice(2)}</p></li>)
                        }
                    </ul>
                    :
                    <p>Please regenerate!!!</p>
            }
        </div>
    );
};

export default Tips;