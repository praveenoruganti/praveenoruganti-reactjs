import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { authentication, provider } from "../firebase";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

function Login() {
  const [{ user }, dispatch] = useStateValue();

  const signIn = () => {
    authentication
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__body">
      <img
          src="https://www.freeiconspng.com/thumbs/logo-whatsapp-png/logo-whatsapp-transparent-background-22.png"
          alt=""
        />
        <div className="login__text">
          <h1>Welcome To WhatsApp Clone</h1>
        </div>

        <Button onClick={signIn}>SignIn with Google</Button>

      </div>
    </div>
  );
}

export default Login;
