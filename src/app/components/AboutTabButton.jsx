import React from "react";

const AboutTabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-white border-b border-secondary-500"
    : "text-[#ADB7BE]";

  return (
    <>
      <button onClick={selectTab}>
        <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
          {children}
        </p>
      </button>
    </>
  );
};

export default AboutTabButton;
