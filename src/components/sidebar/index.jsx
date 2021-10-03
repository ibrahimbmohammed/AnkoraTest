import React from "react";
import Menu from "../menu";
import logo from "../../assets/svg/logo.svg"
import userAvatar from "../../assets/img/Ellipse.png"



const Sidebar =  ({ navItems, open }) => {
  return (
    <>
    <div className="flex justify-between items-start flex-col h-screen ">
    <div className="p-4 ml-5 mt-5">
    <img className="object-contain h-7 w-full  " src={logo} alt={'logo'}/>
    </div>
    <div className="p-4 ml-5 mt-5">
      <Menu navItems={navItems} />
    </div>
    <div className="flex items-center space-x-2 p-4 ml-5 mb-10">
      <div className="">
      <img className="object-contain h-18 w-full " src={userAvatar} alt={'user avatar'}/>
      </div>
      <div className="flex flex-col items-start">
       <p className="text-md font-semibold">Acme Clinic, Inc.</p>
       <p className="text-xs text-gray-600">Marvin Tunji-ola.</p>
       <p className="text-xs text-red-600">View Profile.</p> 
      </div>
    </div>
    </div>
    </>
  );
}

export default Sidebar;


//space-y-24