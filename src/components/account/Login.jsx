import React, { useState } from "react";
import { loginAccount } from "../../store/account/accountAction";
import { useDispatch } from "react-redux";
import { MdCancel } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub, AiFillFacebook } from "react-icons/ai";
import { toggleLog, toggleReg } from "../../store/account/accountSlice";

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
    dispatch(toggleLog());
  }

  return (
    <>
      <div className="fixed top-0 left-0 bottom-0 right-0 z-10 bg-[#00000086] flex items-center justify-center text-white">
        <div className="w-1/4 py-4 flex flex-col items-center bg-[#525252bc] relative rounded-2xl">
          <MdCancel
            onClick={() => dispatch(toggleLog())}
            className=" absolute top-4 right-4 fill-white z-10 w-7 h-7"
          />
          <h2 className=" font-bold text-3xl">Авторизация</h2>
          <div className="p-5  flex flex-col items-center justify-center">
            <input
              type="text"
              placeholder="Name"
              className="w-25 h-14 rounded-2xl mb-5 p-5 outline-none bg-[#242424f0] text-white"
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Password"
              className="w-25 h-14 rounded-2xl p-5 outline-none bg-[#242424f0] text-white"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
          <button
            className="w-1/4 h-12 rounded-2xl bg-[#242424f0] text-white"
            onClick={userLogin}
          >
            Войти
          </button>
          <p
            onClick={() => {
              dispatch(toggleLog());
              dispatch(toggleReg());
            }}
            className="mt-7"
          >
            Зарегистрироваться сейчас
          </p>
          <p className="mt-7">Другие способы входа</p>
          <div className="flex mt-10">
            <FcGoogle className="w-11 h-11" />
            <AiFillFacebook className="w-11 h-11 mx-4 text-blue-400" />
            <AiFillGithub className="w-11 h-11" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
