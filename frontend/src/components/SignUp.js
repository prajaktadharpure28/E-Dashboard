import React,{useState} from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const collectData = () => {
        console.warn(name, email, password);

    }


    return (
        <div className="register">
            <h1>SignUp</h1>
            <input className="inputBox" type="text" 
            value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter your name" />
            <input className="inputBox" type="email"
            value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email" />
            <input className="inputBox" type="password"
            value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your password" />
            <button onClick={collectData} className="appButton" type="button">SignUp</button>

        </div>


    );
}

export default SignUp;