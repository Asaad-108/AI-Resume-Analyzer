import './App.css'

function App() {

  return (
    <>
    <h2>AI RESUME ANALYZER</h2>
    <div className="maincontainer">
      <div className='container'>
      <h4>Upload your resume</h4>
      <p>Get instant feedback on your resume with AI-powered analysis</p>
      <form action="" method="post">
        <input type="file" className='file' id='file'/>
        <label htmlFor="file">
          <div className="uploaddone">
        <div className='imagediv'>
          <img src="src/assets/upload.svg" alt="uploadicon" className='icondone' />
        </div>
        <p className='text'>Click to upload your resume</p>
        <p className='text'>or drag and drop</p>
        <p className='text'>PDF or DOCX (MAX 5MB)</p>
      </div>
        </label>
      </form>
      <div className='btndiv'>
        <button className='btndone'>Analyze Resume</button>
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
