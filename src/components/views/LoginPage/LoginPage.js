import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../_actions/userAction";
import { withRouter } from "react-router-dom";
import "./loginStyle.scss";
import Banner from "../_partials/Banner/Banner";

function LoginPage(props) {
 
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    // console.log("email", Email);
    // console.log("password", Password);

    // body에다가 이메일 패스워드 담아서 보낸다
    let body = {
      email: Email,
      password: Password,
    };


  };

  // const onNaverLogin = () => {
  //   Axios.get("/api/OAuth/naver").then((response) => {
  //     console.log(response.headers);
  //     if (response.data.success) {
  //       alert("네이버 로그인 성공!");
  //       props.history.push("/");
  //       window.location.reload();
  //     } else {
  //       alert("네이버 로그인 실패");
  //     }
  //   });
  // };

  return (
    <main id="main">
      <section className="form-sec">
        <form className="contact-form" onSubmit={onSubmitHandler}>
          <fieldset>
            <div className="form-group">
              <input
                className="form-control"
                type="email"
                placeholder="Email"
                required={true}
                value={Email}
                onChange={onEmailHandler}></input>
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                required={true}
                value={Password}
                onChange={onPasswordHandler}></input>
            </div>
            <div className="form-group">
              <a href="/">Forget Password?</a>
              <button className="btn-primary btn-login">Login</button>
            </div>
          </fieldset>
        </form>
        {/* <button className="btn-naver" onClick={onNaverLogin}>
          <a href="http://localhost:5000/api/OAuth/naver">네이버로그인</a>
        </button> */}
      </section>
    </main>
  );
}

export default withRouter(LoginPage);
