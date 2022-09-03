import "./AgePredictor.css";
import axios from "axios";
import {useState} from "react";

const AgePredictor = () => {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [val, setVal] = useState<string>('');
    const predictAge = () => {
        setIsLoading(true)
        axios.get(`https://api.agify.io/?name=${val}`)
            .then(function (response) {
                alert(`Your Age is ${response.data.age}`)
                setIsLoading(false)
            })
            .catch(function (error) {
                setIsLoading(false)
            })
    }
    return (
        <div className="age-predictor">
            <h2>Age predictor</h2>

            <p>Type in your name and see what's your predicted age is.</p>

            <input type="text" value={val} onChange={(e) => setVal(e.target.value)}/>
            <button disabled={isLoading}
                    onClick={() => predictAge()}>{isLoading ? "Loading..." : "Check your age"}</button>
        </div>
    );
};

export default AgePredictor;
