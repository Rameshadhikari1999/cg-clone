import React, { useState } from "react";
import {
  IoClose,
  IoMdArrowDropdown,
  IoMdArrowDropup,
} from "../../assets/icons.jsx";

import { menu } from "../../assets/contents.jsx";

const MobileNav = ({ onClick }) => {
  const [menuIndex, setMenuIndex] = useState(0);

  const handleMenuTitle = (index) => {
    setMenuIndex(index === menuIndex ? 0 : index);
  };
  return (
    <nav className="w-full h-full p-5">
      <div className="float-right p-5 bg-primary rounded-full hover:bg-secondary">
        <IoClose size={30} onClick={onClick} />
      </div>
      <div className="w-full pt-10">
        <div className=" flex flex-col w-3/4 mx-auto gap-3">
         {menu.map((item, index) =>( 
          <ul key={index} className="w-full py-2 px-4  bg-primary rounded transition-all ease-in-out duration-1000">
           
            <li className="flex items-center justify-between">
              <span className="uppercase font-semibold tracking-wide cursor-pointer">{item.title}</span>
              {item.subMenu.length > 1 && (menuIndex === item.id ? (
                <IoMdArrowDropup onClick={() => handleMenuTitle(item.id)} size={30} />
              ) : (
                <IoMdArrowDropdown
                  onClick={() => handleMenuTitle(item.id)}
                  size={30}
                />
              ))}
            </li>

            {item.subMenu.length > 0 && menuIndex === item.id && (
              <li className="flex flex-col gap-2 items-center py-2 px-4 ">
                {item.subMenu.map((subItem, subIndex) => (
                  <span key={subIndex} className=" w-full px-4 capitalize ">
                  {subItem.title}
                </span>
                ))}
                
              </li>
            )}

          </ul>))}
          
          {/* <li>Home</li> */}
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
