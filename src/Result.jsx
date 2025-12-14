import { Navigate, useNavigate } from "react-router-dom";
import './Result.css'
function Result() {
    const navigate = useNavigate();
    const gotoMain=()=>{
        navigate('/');
    }
    return(
        <>
            <div className="nav">
                <img src="src/assets/arrow-left.svg" alt=""  onClick={gotoMain}/>
                <img src="src/assets/file-text.svg" alt="" className='logo' onClick={gotoMain}/>
                <h3>AI RESUME ANALYZER</h3>
            </div>
            <div className="mainbox">
                <div className="box box1">ATS</div>
                <div className="box box2">skill match</div>
                <div className="box box3">resume Strength</div>
            </div>
        </>
    )
}

export default Result;