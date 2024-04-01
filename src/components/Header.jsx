import React from "react";

function Header() {
  return (
    <div className="flex justify-between items-center px-6 py-2 border border-b-1 border-[#E4E4E7]">
      <div className="flex justify-between items-center gap-9">
        <div className="brand-name text-5xl tracking-widest ">Simple Dash.</div>
        <ul className="flex justify-between items-center text-lg gap-6 text-[#82828A]">
          <li className="text-black">Intro</li>
          <li>Customers</li>
          <li>Products</li>
          <li>Setting</li>
        </ul>
      </div>
      <div className="flex justify-between items-center gap-6">
        <input
          className="w-[300px] border border-[#E4E4E7] border-1 rounded px-3 py-1 outline-none"
          type="text"
          placeholder="Search..."
          name=""
          id=""
        />
        <img src="./assets/user.png" className="w-[30px] h-[30px]" alt="" />
      </div>
    </div>
  );
}

export default Header;
