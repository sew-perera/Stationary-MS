import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

let user = null;
let userLocal = JSON.parse(localStorage.getItem("USERDATA"));

export const Authorized = user || userLocal;

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const login = async () => {
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      const loggedUser = userCredentials.user;
      localStorage.setItem("USERDATA", JSON.stringify(loggedUser));
      user = loggedUser;
      navigate("/home");
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };

  return (
    <div>
      <h className="text-6xl font-bold text-emerald-700">Sign in</h>
      <br />
      <div className="pt-8 text-xl font-bold">
        <label>User Name</label>
        <br />
        <input className="text-center p-2 w-1/2 text-lg font-semibold border-2 rounded-lg border-gray-500"
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        ></input>
      </div>
      <br />
      <div className="pt-8 text-xl font-bold">
        <label>Password</label>
        <br />
        <input className="text-center p-2 w-1/2 text-lg font-semibold border-2 rounded-lg border-gray-500"
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        ></input>
        <br />
      </div>
      <button className="mt-4 bg-emerald-700 text-white text-center p-2 w-32 text-lg font-bold transform hover:scale-105 rounded-lg " onClick={login}>Login</button>

      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
