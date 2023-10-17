import React, { useEffect, useState } from "react";
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
import { FaBars, FaTimes } from "react-icons/fa";

const SideBar = () => {
  const { modalReg, modalLog, admin } = useSelector((state) => state.account);
  const [nav, setNav] = useState(false);

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
      <div className="pl-3 pt-8 flex items-center w-screen bg-[#00000000] fixed z-20">
        <img src={logo} alt="" className="pl-8 " />
        <div className="flex w-68 h-12 bg-[#1A1E1F] relative rounded-3xl items-center ml-20 p-5 mr-20 max-md:ml-10 mr-10">
          <BiSearch className="w-7 h-7 fill-[#bababa]" />
          <input
            type="text"
            placeholder="Search"
            className="bg-inherit w-full ml-8 text-white opacity-75 h-8 outline-none"
          />
        </div>
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-50 text-gray-500 
            md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </div>
      <div className="inline-block bg-[#00000000] h-screen fixed top-24 z-20 max-md:hidden">
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
            <FaRadio
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
      {nav && (
        <ul className="z-40 flex flex-col justify-center items-center fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 ">
          <FaTimes size={30} onClick={() => setNav(!nav)} className="" />
          <div>
            <div className="w-44 h-56 bg-[#1A1E1F] mt-10 mb-5 flex flex-col justify-around  rounded-3xl p-4 ">
              <div
                className="flex cursor-pointer"
                onClick={() => {
                  setNav(!nav);
                  navigate("/");
                }}
              >
                <GoHomeFill className="w-7 h-7 fill-[#bababa]  hover:fill-[#FACD66] duration-500 shadow-2xl shadow-yellow-500" />
                <h3 className="ml-2 text-xl font-bold">Home</h3>
              </div>
              <div
                className="flex cursor-pointer"
                onClick={() => {
                  setNav(!nav);
                  navigate("/playlist");
                }}
              >
                <BiSolidPlaylist className="w-7 h-7 fill-[#bababa] hover:fill-[#FACD66] duration-500 shadow-2xl shadow-yellow-500" />
                <h3 className="ml-2 text-xl font-bold">Play List</h3>
              </div>
              <div
                className="flex cursor-pointer"
                onClick={() => {
                  setNav(!nav);
                  navigate("/radio");
                }}
              >
                <FaRadio className="w-7 h-7 fill-[#bababa] hover:fill-[#FACD66] duration-500 shadow-2xl shadow-yellow-500" />
                <h3 className="ml-2 text-xl font-bold">Radio</h3>
              </div>
              {admin ? (
                <>
                  <div
                    className="flex cursor-pointer"
                    onClick={() => {
                      setNav(!nav);
                      navigate("/add-music");
                    }}
                  >
                    <IoMdAddCircle className="w-7 h-7 fill-[#bababa]" />
                    <h3 className="ml-2 text-xl font-bold">Create</h3>
                  </div>
                  <div
                    className="flex cursor-pointer"
                    onClick={() => {
                      setNav(!nav);
                      navigate("/favorite");
                    }}
                  >
                    <MdOutlineFavoriteBorder className="w-7 h-7 fill-[#bababa]" />
                    <h3 className="ml-2 text-xl font-bold">Likes</h3>
                  </div>
                </>
              ) : (
                <div
                  className="flex cursor-pointer"
                  onClick={() => {
                    setNav(!nav);
                    navigate("/favorite");
                  }}
                >
                  <MdOutlineFavoriteBorder className="w-7 h-7 fill-[#bababa]" />
                  <h3 className="ml-2 text-xl font-bold">Likes</h3>
                </div>
              )}
            </div>
            <div className="w-44 h-32 bg-[#1A1E1F] flex flex-col justify-around p-4  rounded-3xl">
              <div
                className="flex cursor-pointer"
                onClick={() => {
                  setNav(!nav);
                  dispatch(toggleLog());
                }}
              >
                <BsPersonFill className="w-7 h-7 fill-[#bababa] hover:fill-[#FACD66] duration-500 shadow-2xl shadow-yellow-500" />
                <h3 className="text-xl font-bold ml-2">Auth</h3>
              </div>
              <div
                className="flex cursor-pointer"
                onClick={() => {
                  {
                    setNav(!nav);
                    logout();
                  }
                }}
              >
                <IoLogOut className="w-7 h-7 fill-[#bababa] hover:fill-[#FACD66] duration-500 shadow-3xl shadow-yellow-500" />
                <h3 className=" text-xl font-bold ml-2">Logout</h3>
              </div>
            </div>
          </div>
        </ul>
      )}
    </>
  );
};

export default SideBar;
