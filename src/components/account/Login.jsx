import React, { useState } from "react";
import { loginAccount } from "../../store/account/accountAction";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: "",
    password: "",
  });

  function userLogin() {
    for (let key in user) {
      if (!user[key].trim()) return alert("empty");
    }

    dispatch(loginAccount(user));
  }

  return (
    <div>
      <div className="w-1/3 relative">
        <h2>Авторизация</h2>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button onClick={userLogin}>Войти</button>
      </div>
    </div>
  );
};

export default Login;
