import { Navigate, useNavigate } from "react-router-dom";
import './Result.css'
function Result() {
    const navigate = useNavigate();
    const gotoMain=()=>{
        navigate('/');
    }
    return(
        <>
            <div className="rnav">
                <img src="src/assets/arrow-left.svg" alt=""  onClick={gotoMain}/>
                <img src="src/assets/file-text.svg" alt="" className='logo' onClick={gotoMain}/>
                <h3>AI RESUME ANALYZER</h3>
            </div>
            <div className="mainbox">
                <div className="rbox rbox1">ATS</div>
                <div className="rbox rbox2">skill match</div>
                <div className="rbox rbox3">resume Strength</div>
            </div>
            <div className="rmaincontainer">
                <div className="rcontainer">
                    <div className="cont container1">skills found</div>
                    <div className="cont container1">skills to add</div>
                    <div className="cont container1">skills distribution</div>
                </div>
                <div className="rcontainer">
                    <div className="cont container2">recommendation job role</div>
                    <div className="cont container2">suggested improvement</div>
                    <div className="cont container2">resume compostion</div>
                </div>
            </div>
        </>
    )
}

export default Result;