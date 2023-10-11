import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerAccount } from "../../store/account/accountAction";

const Register = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: "",
    mail: "",
    password: "",
  });

  function addUser() {
    for (let key in user) {
      if (!user[key].trim()) return alert("empty");
    }

    dispatch(registerAccount(user));
  }

  return (
    <div className="">
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Mail"
        onChange={(e) => setUser({ ...user, mail: e.target.value })}
      />
      <input
        type="text"
        placeholder="Password"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <button onClick={addUser}>Registration</button>
    </div>
  );
};

export default Register;
