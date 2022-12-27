import React from "react";

const LeftNavMenuItem = ({ text, icon, className, action }) => {
  return (
    <div
      className={
        "text-white text-sm cursor-pointer h-10 flex items-center px-3 mb-[1px] rounded-lg hover:bg-white/[0.15] " +
        className
      }
      onClick={action}
    >
      <span className="text-xl mr-5 hover:text-red-600 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:duration-300">
        {icon}
      </span>
      {text}
    </div>
  );
};

export default LeftNavMenuItem;
