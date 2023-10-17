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
import { toggleLog } from "../../store/account/accountSlice";
import Login from "../account/Login";
import Register from "../account/Register";
import { logout } from "../../helpers/function";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { getMusicPlayer } from "../../store/music/musicAction";

const SideBar = () => {
  const { modalReg, modalLog, admin } = useSelector((state) => state.account);

  useEffect(() => {
    if (modalLog || modalReg) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList = [];
    }
  }, [modalLog, modalReg]);

  useEffect(() => {
    dispatch(getMusicPlayer());
  }, []);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <>
      <div className="pl-3 pt-8 flex items-center w-full bg-[#00000000] fixed z-20 ">
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
              className="w-7 h-7 fill-[#bababa]  hover:fill-[#FACD66] duration-500 shadow-2xl shadow-yellow-500"
              onClick={() => navigate("/")}
            />
            <BiSolidPlaylist
              className="w-7 h-7 fill-[#bababa] hover:fill-[#FACD66] duration-500 shadow-2xl shadow-yellow-500"
              onClick={() => navigate("/playlist")}
            />
            <AiOutlinePlusCircle
              className="w-7 h-7 fill-[#bababa] hover:fill-[#FACD66] duration-500 shadow-2xl shadow-yellow-500"
              onClick={() => navigate("/radio")}
            />
            {admin ? (
              <>
                <IoMdAddCircle
                  className="w-7 h-7 fill-[#bababa]"
                  onClick={() => navigate("/add-music")}
                />
                <MdOutlineFavoriteBorder
                  onClick={() => navigate("/favorite")}
                  className="w-7 h-7 fill-[#bababa]"
                />
              </>
            ) : (
              <MdOutlineFavoriteBorder
                onClick={() => navigate("/favorite")}
                className="w-7 h-7 fill-[#bababa]"
              />
            )}
          </div>
          <div className="w-14 h-32 bg-[#1A1E1F] flex flex-col justify-around p-2 items-center rounded-3xl">
            <BsPersonFill
              className="w-7 h-7 fill-[#bababa] hover:fill-[#FACD66] duration-500 shadow-2xl shadow-yellow-500"
              onClick={() => dispatch(toggleLog())}
            />
            <IoLogOut
              className="w-7 h-7 fill-[#bababa] hover:fill-[#FACD66] duration-500 shadow-3xl shadow-yellow-500"
              onClick={() => {
                logout();
              }}
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
