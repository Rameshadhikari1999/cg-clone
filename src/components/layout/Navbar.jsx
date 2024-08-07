import React, { useEffect, useState } from "react";
import MobileNav from "./MobileNav";
import { LuMenu } from "../../assets/icons.jsx";
import logoIcon from "../../assets/images/logo.png";
import "./style.css";
import { menu,  topMenuLeftItem, topMenuRightItem } from "../../assets/contents.jsx";
import {
  IoMdArrowDropdown,
  IoMdArrowDropup,
} from "../../assets/icons.jsx";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [menuIndex, setMenuIndex] = useState(0);
  const [disWidth, setDisWidth] = useState(innerWidth > 1024 ? true : false);
  // console.log(disWidth);

  const onClose = () => {
    setOpen(false);
  };
  const handleMenuTitle = (index) => {
    setMenuIndex(index === menuIndex ? 0 : index);
  };

  useEffect(() => {
    const handleResize = () => {
      setDisWidth(innerWidth > 1024 ? true : false);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <nav className="w-full fixed top-0 left-0">

      {/* top bar for desktop */}
      {disWidth && (<div 
      // id="navbar"
      className=" py-4 px-6 md:px-8 lg:px-10 w-full  bg-blue-950 
      ">
        <div id="navbar" className="w-full flex items-center justify-between">
        <div id="left" className="w-2/3 flex items-baseline justify-center gap-5">
        {topMenuLeftItem.map((item, index) => (
            <p
              key={index}
              className="flex items-center gap-1 text-gray-400 font-sans text-base cursor-pointer"
            >
              <item.icon />
              <span className="">{item.title}</span>
            </p>
          ))}
        </div>
        <div id="right" className="w-1/3 flex items-baseline justify-center gap-5">
        {topMenuRightItem.map((item, index) => (
            <p
              key={index}
              className="flex items-center gap-1 text-gray-400 font-sans text-base  cursor-pointer"
            >
             {item.icon && <item.icon />}
              <span className="">{item.title && item.title}</span>
            </p>
          ))}
        </div>
        </div>
      </div>)}


      <div className="py-4 px-6 md:px-8 lg:px-10 w-full flex items-center justify-between bg-white">
        {/* mobile menu icon */}
        <div className="lg:hidden">
          <LuMenu
            size={30}
            onClick={() => setOpen(!open)}
            className="cursor-pointer text-primary"
          />
        </div>

        {/* logo  */}
        <div className="w-1/2 md:w-1/4 lg:w-1/6 flex items-center justify-center hover:scale-105 transition-all ease-linear duration-150">
          <img
            className="w-full h-full cursor-pointer"
            src={logoIcon}
            alt="logo"
          />
        </div>
        
          {/* navbar for desktop  */}
          {disWidth && <div className="flex items-center justify-center gap-5">

            {menu.map((item, index) => (
              <ul key={index} className="flex flex-col">
              <li
                
                className=" flex gap-2 items-center text-primary font-sans text-base cursor-pointer"
              >
                <span>{item.title}</span>
               {item.subMenu.length !== 0 ? menuIndex === item.id ? <IoMdArrowDropup onClick={() => handleMenuTitle(item.id)} /> : <IoMdArrowDropdown onClick={() => handleMenuTitle(item.id)} />:""}
              </li>

              <li className="fixed top-[20%] left-50 z-10 bg-white rounded">
                {item.subMenu.length > 0 && menuIndex === item.id && (
                  <ul className="flex flex-col gap-2 items-center px-4 py-2">
                    {item.subMenu.map((subItem, subIndex) => (
                      <li
                        key={subIndex}
                        className=" text-primary font-sans text-base cursor-pointer"
                      >
                        {subItem.title}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              </ul>
            ))}
            
          </div>}

        {/* mobilr nav  */}
        <div
          className={`fixed top-0 right-0 w-full h-screen bg-quaternary ${
            open ? "translate-x-0" : "-translate-x-full"
          } transition-all ease-in-out duration-300 `}
        >
          <MobileNav onClick={onClose} />
        </div>

      </div>

    </nav>
  );
};

export default Navbar;
