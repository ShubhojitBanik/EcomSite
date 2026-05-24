import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate();

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    const login = async (e)=>{

        e.preventDefault();

        try {

            const res = await axios.post(

                "https://ujtrading-backend.onrender.com/api/admin/login",

                {
                    username,
                    password
                }

            );

            localStorage.setItem(
                "token",
                res.data.token
            );

            alert("Login Success");

            navigate("/admin");

        } catch(err) {

            alert("Wrong Credentials");

            console.log(err);

        }

    };

    return (

        <div
        style={{
            width:"400px",
            margin:"100px auto",
            background:"white",
            padding:"40px",
            borderRadius:"20px",
            boxShadow:
            "0 10px 30px rgba(0,0,0,0.1)"
        }}
        >

            <h1
            style={{
                marginBottom:"30px"
            }}
            >

                Admin Login

            </h1>

            <form onSubmit={login}>

                <input
                placeholder="Username"
                value={username}
                onChange={(e)=>
                    setUsername(e.target.value)
                }
                style={inputStyle}
                />

                <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e)=>
                    setPassword(e.target.value)
                }
                style={inputStyle}
                />

                <button
                style={{
                    width:"100%",
                    padding:"15px",
                    border:"none",
                    borderRadius:"12px",
                    background:"#6366f1",
                    color:"white",
                    fontSize:"16px",
                    cursor:"pointer"
                }}
                >

                    Login

                </button>

            </form>

        </div>

    );

}

const inputStyle = {

    width:"100%",

    padding:"15px",

    marginBottom:"15px",

    borderRadius:"12px",

    border:"1px solid #cbd5e1"

};

export default Login;