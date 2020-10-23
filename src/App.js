import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import "./css/color-themes";
import "./css/animate.css";
import "./css/animation.css";
import "./css/bootstrap.css";
import "./css/color-switcher-design.css";
import "./css/flaticon.css";
import "./css/font-awesome.css";
import "./css/hover.css";
import "./css/jquery-ui.css";
import "./css/jquery.bootstrap-touchspin.css";
import "./css/jquery.fancybox.min.css";
import "./css/jquery.mCustomScrollbar.min.css";
import "./css/main.css";
import "./css/owl.css";
import "./css/responsive.css";
import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import Auth from "./hoc/auth";
import Header from "./components/views/_partials/Header/Header";
import Sidebar from "./components/views/_partials/Sidebar/Sidebar";
import HiddenNavbar from "./components/views/_partials/HiddenNavbar/HiddenNavBar";
import BackTop from "./components/views/_partials/BackTop/BackTop";
import Loader from "./components/views/_partials/Loader/Loader";
import Footer from "./components/views/_partials/Footer/Footer";
import InitOther from "./InitOther";

function App() {
  InitOther();
  return (
    <div className="page-wrapper">
      {/* <Search /> */}
      {/* // null     => 아무나 출입이 가능한 페이지
            // true     => 로그인한 유저만 출입이 가능한 페이지
            // false    => 로그인한 유저는 출입 불가능한 페이지
            // admin은 true주면됨 */}
      <Router>
        <Loader />
        <Header />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
        </Switch>
        <Sidebar />
        <HiddenNavbar />
        <BackTop />
      </Router>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
