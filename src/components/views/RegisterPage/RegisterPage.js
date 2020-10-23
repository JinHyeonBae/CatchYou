import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../_actions/userAction";
import { withRouter } from "react-router-dom";
import Banner from "../_partials/Banner/Banner";

function RegisterPage(props) {


  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Name, setName] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (Password !== ConfirmPassword) {
      return alert("비밀번호와 비밀번호 확인은 같아야 합니다.");
    }

    let body = {
      email: Email,
      password: Password,
      name: Name,
    };

  };

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
                type="text"
                placeholder="Name"
                required={true}
                value={Name}
                onChange={onNameHandler}></input>
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
              <input
                className="form-control"
                type="password"
                placeholder="ConfirmPassword"
                required={true}
                value={ConfirmPassword}
                onChange={onConfirmPasswordHandler}></input>
            </div>
            <div className="form-group">
              <button className="btn-primary btn-login">Join</button>
            </div>
          </fieldset>
        </form>
      </section>
    </main>
  );
}

export default withRouter(RegisterPage);
