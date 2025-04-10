import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <Link
          href={"/"}
          className="text-2xl md:text-4xl p-4 text-white font-semibold"
        >
          ITC
        </Link>
        {/* <p className="text-slate-600">All Rights Reserved.</p> */}
      </div>
    </footer>
  );
};

export default Footer;
