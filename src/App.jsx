import './App.css'
import { Navigate, useNavigate } from 'react-router-dom'
import { useState } from 'react';

function App() {
  const navigate = useNavigate();
  const gotoResult=()=>{
    navigate("/result");
  }
  const [file, setFile] = useState(null);
  const [active,setActive] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setActive(!active);

  };
  return (
    <>
    <h2>AI RESUME ANALYZER</h2>
    <div className="maincontainer">
      <div className='container'>
      <h4>Upload your resume</h4>
      <p>Get instant feedback on your resume with AI-powered analysis</p>
      <form action="" method="post">
        <input type="file" className='file' id='file' onChange={handleFileChange}/>
        <label htmlFor="file">
          <div className={active ? "uploaddone" : 'upload'}>
        <div className='imagediv'>
          {file ? 
          (<>
            <img src="src/assets/circle-check-big.svg" alt="uploadicon" className='icondone'/>
          </>
          )
          :(
            <>
                <img src="src/assets/cloud-upload.svg" alt="uploadicon" className='icon' />
            </>
          )
          }
        </div>
        {file ? (
          <>
          <p className='text textdone'>File Selected: {file.name}</p>
            <p className='text text2'>File ready for analysis</p>
            <p className='text text2'>PDF or DOCX (MAX 5MB)</p>
          </>
      ) : (
        <>
          <p className='text'>Click to upload your resume</p>
                <p className='text text2'>or drag and drop</p>
                <p className='text text2'>PDF or DOCX (MAX 5MB)</p>
        </>
      )}
      </div>
        </label>
      </form>
      <div className='btndiv'>
        <button className={active ? 'btndone' : 'btn' } onClick={gotoResult}>Analyze Resume</button>
      </div>
    </div>
    </div>
    <div className="mainbotton">
          <div className="bottom">
      <div className="box box1">
        <div>
          <img src="src/assets/target.png" alt="target" />
        </div>
        <p className='p1'>ATS Score</p>
        <p className='p2'>Check compatibility</p>
      </div>
      <div className="box box2">
                <div >
          <img src="src/assets/bulb.png" alt="" />
        </div>
        <p className='p1'>Smart Suggestions</p>
        <p className='p2'>Improve your resume</p>
      </div>
      <div className="box box3">
              <div>
          <img src="src/assets/download.png" alt="" />
        </div>
        <p className='p1'>Detailed Report</p>
        <p className='p2'>Download PDF report</p>
      </div>
    </div>
    </div>
    </>
  )
}

export default App
