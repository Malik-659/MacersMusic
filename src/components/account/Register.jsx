import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerAccount } from "../../store/account/accountAction";
import { MdCancel } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub, AiFillFacebook } from "react-icons/ai";
import { toggleLog, toggleReg } from "../../store/account/accountSlice";

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
    dispatch(toggleReg());
  }

  return (
    <>
      <div className="fixed -top-52 left-0 bottom-0 right-0 z-10 bg-[#00000086] flex items-center justify-center text-white">
        <div className="w-1/4  flex flex-col items-center py-4 bg-[#525252bc] relative rounded-2xl">
          <MdCancel
            onClick={() => dispatch(toggleReg())}
            className=" absolute top-4 right-4 fill-white z-10 w-7 h-7"
          />
          <h2 className=" font-bold text-3xl">Регистрация</h2>
          <div className="pt-5  flex flex-col items-center justify-center">
            <input
              type="text"
              placeholder="Name"
              className="w-25 h-14 rounded-2xl mb-5 p-5 outline-none bg-[#242424f0] text-white"
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Mail"
              className="w-25 h-14 rounded-2xl mb-5 p-5 outline-none bg-[#242424f0] text-white"
              onChange={(e) => setUser({ ...user, mail: e.target.value })}
            />
            <input
              type="text"
              placeholder="Password"
              className="w-25 h-14 rounded-2xl mb-5 p-5 outline-none bg-[#242424f0] text-white"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
          <button
            className="w-1/4 h-12 rounded-2xl bg-[#242424f0] text-white"
            onClick={addUser}
          >
            Registration
          </button>
          <p
            onClick={() => {
              dispatch(toggleReg());
              dispatch(toggleLog());
            }}
            className="mt-3"
          >
            У вас уже есть учётная запись?
          </p>
          <p className="mt-7">Другие способы входа</p>
          <div className="flex mt-6">
            <FcGoogle className="w-10 h-10" />
            <AiFillFacebook className="w-10 h-10 mx-4" />
            <AiFillGithub className="w-10 h-10" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
