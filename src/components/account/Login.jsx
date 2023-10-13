import React, { useState } from "react";
import { loginAccount } from "../../store/account/accountAction";
import { useDispatch } from "react-redux";
import { MdCancel } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub, AiFillFacebook } from "react-icons/ai";
import { toggleLog, toggleReg } from "../../store/account/accountSlice";
import styles from "./reglog.module.css";

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
      <div className="fixed -top-52 left-0 bottom-0 right-0 z-10 bg-[#00000086] flex items-center justify-center text-white">
        <div
          className={`w-1/4 py-6 flex flex-col items-center relative rounded-2xl ${styles.bgModal}`}
        >
          <MdCancel
            onClick={() => dispatch(toggleLog())}
            className=" absolute top-4 right-4 fill-white z-10 w-7 h-7"
          />
          <h2 className=" font-bold text-3xl my-4">Авторизация</h2>
          <input
            type="text"
            placeholder="Name"
            className={styles.modalInp}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Password"
            className={styles.modalInp}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <button className={styles.modalBtn} onClick={userLogin}>
            Войти
          </button>
          <p
            onClick={() => {
              dispatch(toggleLog());
              dispatch(toggleReg());
            }}
            className="mt-7 text-xl"
          >
            Зарегистрироваться сейчас
          </p>
          <p className="mt-7">Другие способы входа</p>
          <div className="flex mt-6">
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
