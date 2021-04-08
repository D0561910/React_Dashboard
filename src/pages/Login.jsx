import { useState } from "react";

// Using firebase
// import { signin } from "../helpers/auth";
// USing fake backend API
import { signInAPI, checkResponseStatus } from "../helpers/auth";
import classes from "./login.module.css";

// import images
// import waveimg from "../components/assets/wave.png";
import bgimg from "../components/assets/bg1.svg";
import avatar from "../components/assets/avatar1.svg";

const Login = () => {
  const [error, setError] = useState("");
  const [userState, setUserState] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const value = event.target.value;
    setUserState({
      ...userState,
      [event.target.name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    try {
      // Using firebase auth.
      // await signin(userState.username, userState.password);
      // window.location.href = "./dashboard";
      // Using backend API
      await signInAPI(userState.username, userState.password)
        .then(checkResponseStatus)
        .then((response) => response.json())
        .then((result) => {
          sessionStorage.setItem("dashobardToken", result.token);
          window.location.href = "/dashboard";
        })
        .catch((err) => setError(`${err}`));
    } catch (error) {
      setError(`${error.message}`);
    }
  };

  return (
    <div className={classes.login_container}>
      {/* <img className={classes.wave} src={waveimg} alt="wave.png" /> */}
      <div className={classes.login_card}>
        <div className={classes.login_images}>
          <img src={bgimg} alt="background_image.svg" />
        </div>
        <div className={classes.login_content}>
          <form
            className={classes.login_input_form}
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <img src={avatar} alt="avatar.svg" />
            <h2 className={classes.login_title}>Welcome</h2>
            <p>Fill in the form below to login to your account.</p>
            <br />
            <div className={`${classes.login_input_div} ${classes.login_one}`}>
              <div className={classes.login_input_area}>
                <input
                  className={classes.login_input_text}
                  placeholder="Username"
                  name="username"
                  type="text"
                  onChange={handleChange}
                  value={userState.username}
                />
              </div>
            </div>
            <div className={`${classes.login_input_div} ${classes.login_pass}`}>
              <div className={classes.login_input_area}>
                <input
                  className={classes.login_input_text}
                  placeholder="Password"
                  name="password"
                  type="password"
                  onChange={handleChange}
                  value={userState.password}
                />
              </div>
            </div>
            <div>
              <br />
              {error ? <p>{error}</p> : null}
              <input
                type="submit"
                className={classes.login_btn}
                value="Login"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
