// hoc는 다른 컴포넌트를 갖는 함수이다.
// ex. auth함수

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authUser } from "../_actions/userAction";

export default (SpecificComponent, option, adminRoute = null) => {
  // option 값
  // null     => 아무나 출입이 가능한 페이지
  // true     => 로그인한 유저만 출입이 가능한 페이지
  // false    => 로그인한 유저는 출입 불가능한 페이지
  // admin은 true주면됨
  const AuthenticationCheck = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
      // dispatch
      dispatch(authUser()).then((response) => {
        console.log(response.payload.emailVerified);

        // 이메일 인증 안된 사용자는 홈으로 팅군다.
        if (option && !response.payload.emailVerified) {
          alert("이메일 인증을 진행해주세요.");
          props.history.push("/");
        }

        // isn't login
        if (!response.payload.isAuth) {
          if (option) {
            props.history.push("/login");
          }
        } else {
          // is login
          if (adminRoute && !response.payload.isAdmin) {
            props.history.push("/");
          } else {
            if (option === false) {
              props.history.push("/");
            }
          }
        }
      });
    }, []);
    return <SpecificComponent />;
  };
  return AuthenticationCheck;
};
