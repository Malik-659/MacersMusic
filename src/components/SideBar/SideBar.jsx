import React, { useEffect } from "react";
import logo from "../../images/logo.svg";
import { GoHomeFill } from "react-icons/go";
import { BiSolidPlaylist, BiSearch } from "react-icons/bi";
import { FaRadio } from "react-icons/fa6";
import { IoMdAddCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IoLogOut } from "react-icons/io5";
import { BsPersonFill } from "react-icons/bs";
import { toggleLog, toggleReg } from "../../store/account/accountSlice";
import Login from "../account/Login";
import Register from "../account/Register";
import { logout } from "../../helpers/function";

const SideBar = () => {
  const { modalReg, modalLog } = useSelector((state) => state.account);

  useEffect(() => {
    if (modalLog || modalReg) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList = [];
    }
  }, [modalLog, modalReg]);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <>
      <div className="pl-3 pt-8 pb-8 flex items-center w-full bg-[#00000000] fixed z-20 ">
        <img src={logo} alt="" className="pl-8 " />
        <div className="flex w-1/3 h-12 bg-[#1A1E1F] relative rounded-3xl items-center ml-20 p-5">
          <BiSearch className="w-7 h-7 fill-[#bababa]" />
          <input
            type="text"
            placeholder="Search"
            className="bg-inherit w-full ml-8 text-white opacity-75 h-8 outline-none "
          />
        </div>
      </div>
      <div className="inline-block bg-[#00000000] h-screen fixed top-24 z-20">
        <div className="bg-[#00000000] pl-8 pr-8">
          <div className="w-14 h-56 bg-[#1A1E1F] mt-10 mb-5 flex flex-col justify-around items-center rounded-3xl p-3 ">
            <GoHomeFill
              className="w-7 h-7 fill-[#bababa]"
              onClick={() => navigate("/")}
            />
            <BiSolidPlaylist
              className="w-7 h-7 fill-[#bababa]"
              onClick={() => navigate("/playlist")}
            />
            <FaRadio
              className="w-7 h-7 fill-[#bababa]"
              onClick={() => navigate("/radio")}
            />
            <IoMdAddCircle
              className="w-7 h-7 fill-[#bababa]"
              onClick={() => navigate("/add-music")}
            />
          </div>
          <div className="w-14 h-32 bg-[#1A1E1F] flex flex-col justify-around p-2 items-center rounded-3xl">
            <BsPersonFill
              className="w-7 h-7 fill-[#bababa]"
              onClick={() => dispatch(toggleLog())}
            />
            <IoLogOut
              className="w-7 h-7 fill-[#bababa]"
              onClick={() => logout()}
            />
          </div>
        </div>
      </div>
      {modalLog && <Login />}
      {modalReg && <Register />}
    </>
  );
};

export default SideBar;
