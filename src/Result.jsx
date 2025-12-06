import { Navigate, useNavigate } from "react-router-dom";
function Result() {
    const navigate = useNavigate();
    const gotoMain=()=>{
        navigate('/');
    }
    return(
        <>
        <h1>Analysis Result</h1>
        <button onClick={gotoMain}>go back to main </button>
        </>
    )
}

export default Result;