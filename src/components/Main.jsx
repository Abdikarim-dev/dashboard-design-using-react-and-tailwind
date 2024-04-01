import React from "react";
import Button from "./Button";
import CustomDate from "./Date";
import LineGraph from "./LineGraph";
import TopSales from "./TopSales";

function Main() {
  return (
    <div className="px-10 pt-[1rem]">
      <header className="flex justify-between items-center">
        <h2 className="text-3xl font-semibold">Dashboard</h2>
        <div className="flex justify-between items-center gap-3">
          <CustomDate />
          <Button />
        </div>
      </header>
      <section className="flex justify-between items-center pt-[0.5rem]">
        <div className="w-[350px] flex justify-between border border-[#E4E4E7] rounded-lg px-4 py-3">
          <div>
            <h3 className="pb-3 text-lg">Total Revenue</h3>
            <p className="text-3xl font-semibold">$45,231.89</p>
            <p className="text-[#82828A] text-md">+20.1% from last month</p>
          </div>
          <div>
            <i class="fa-solid fa-dollar-sign text-[#82828A]"></i>
          </div>
        </div>
        <div className="w-[350px] flex justify-between border border-[#E4E4E7] rounded-lg px-4 py-3">
          <div>
            <h3 className="pb-3 text-lg">Total Revenue</h3>
            <p className="text-3xl font-semibold">$45,231.89</p>
            <p className="text-[#82828A] text-md">+20.1% from last month</p>
          </div>
          <div>
            <i class="fa-solid fa-dollar-sign text-[#82828A]"></i>
          </div>
        </div>
        <div className="w-[350px] flex justify-between border border-[#E4E4E7] rounded-lg px-4 py-3">
          <div>
            <h3 className="pb-3 text-lg">Total Revenue</h3>
            <p className="text-3xl font-semibold">$45,231.89</p>
            <p className="text-[#82828A] text-md">+20.1% from last month</p>
          </div>
          <div>
            <i class="fa-solid fa-dollar-sign text-[#82828A]"></i>
          </div>
        </div>
        <div className="w-[350px] flex justify-between border border-[#E4E4E7] rounded-lg px-4 py-3">
          <div>
            <h3 className="pb-3 text-lg">Total Revenue</h3>
            <p className="text-3xl font-semibold">$45,231.89</p>
            <p className="text-[#82828A] text-md">+20.1% from last month</p>
          </div>
          <div>
            <i class="fa-solid fa-dollar-sign text-[#82828A]"></i>
          </div>
        </div>
      </section>
      <section className="pt-[1rem]">
        <div className=" flex justify-between items-center gap-3">
            <LineGraph />
            <TopSales />
        </div>
      </section>
    </div>
  );
}

export default Main;
