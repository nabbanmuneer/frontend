import React, { useState } from "react";
import { FcDatabase } from "react-icons/fc";
import icon from "../assets/payripe_logo.png"

function NavBar() {
const [nav, setNav] = useState(false);
const navbarhamburger=()=>{
    if(nav == true){
        setNav(false);
    }else {
        setNav(true)
    }
}

    return (
        <div className="bg-gradient-to-r from-emerald-500 to-yellow-300 w-screen cursor-context-menu relative h-16 ">
            <div className=" hidden justify-item-start  md:flex flex-row w-full h-full ">
                <div className="flex  text-white justify-around w-[70%]  items-center " >
                    <div className="font-bold text-2xl   w-40"> <img  src={icon} /> </div>
                    <div className="text-md font-bold ">PRODUCTS</div>
                    <div className="text-md font-bold ">SERVICES</div>
                    <div className="text-md font-bold ">RESOURCES</div>
                </div>
                <div className=" w-[25%]  font-bold text-white" >
                    <div className="flex  justify-end items-center h-full">
                        <div className=" m-3 lg:m-5 text-md">SIGN UP</div>
                        <div className="m-3 lg:m-5 " ><button className=" rounded-xl border-2 p-1">SIGN IN</button></div>
                    </div>
                </div>
            </div>
            <div className="flex md:hidden relative h-full items-center  ">
                <div onClick={navbarhamburger} > <FcDatabase size={25} /> </div><div className="font-bold text-2xl   w-40"> <img  src={icon} /> </div>
            </div>
            { nav == true ? 

            <div className=" absolute top-16 bg-gradient-to-r w-[150px] from-emerald-500 to-yellow-300 ">
                <div className=" border-b-2 p-2 text-white">PRODUCTS</div>
                <div className="  border-b-2 p-2 text-white">SERVICES</div>
                <div className="  border-b-2 p-2 text-white">RESOURCES</div>
            </div>:null
            }
        </div>

    );
}
export default NavBar;