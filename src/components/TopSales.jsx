import React from "react";

function TopSales() {
  return (
    <section className="w-[600px] h-[450px] border border-[#E4E4E7] rounded-lg px-4 py-5">
      <div>
        <div>
          <h2 className="text-xl pb-2 font-semibold">Recent Sales</h2>
          <p className="text-[#82828A]">You made 265 sales this month</p>
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4 pt-4">
        <div className="flex justify-between items-center gap-5">
          <div className="flex gap-5 ">
            <div>
              <img src="./assets/girl1.png" width={40} height={40} alt="" />
            </div>
            <div>
              <p className="text-md font-semibold">Olivia Martin</p>
              <p className="text-[#82828A]">olivia.martin@gmail.com</p>
            </div>
          </div>

          <div className="text-xl font-semibold">+ $1,999.01</div>
        </div>
        <div className="flex justify-between items-center gap-5">
          <div className="flex gap-5 ">
            <div>
              <img src="./assets/girl1.png" width={40} height={40} alt="" />
            </div>
            <div>
              <p className="text-md font-semibold">Olivia Martin</p>
              <p className="text-[#82828A]">olivia.martin@gmail.com</p>
            </div>
          </div>

          <div className="text-xl font-semibold">+ $1,999.01</div>
        </div>
        <div className="flex justify-between items-center gap-5">
          <div className="flex gap-5 ">
            <div>
              <img src="./assets/girl1.png" width={40} height={40} alt="" />
            </div>
            <div>
              <p className="text-md font-semibold">Olivia Martin</p>
              <p className="text-[#82828A]">olivia.martin@gmail.com</p>
            </div>
          </div>

          <div className="text-xl font-semibold">+ $1,999.01</div>
        </div>
        <div className="flex justify-between items-center gap-5">
          <div className="flex gap-5 ">
            <div>
              <img src="./assets/girl1.png" width={40} height={40} alt="" />
            </div>
            <div>
              <p className="text-md font-semibold">Olivia Martin</p>
              <p className="text-[#82828A]">olivia.martin@gmail.com</p>
            </div>
          </div>

          <div className="text-xl font-semibold">+ $1,999.01</div>
        </div>
        <div className="flex justify-between items-center gap-5">
          <div className="flex gap-5 ">
            <div>
              <img src="./assets/girl1.png" width={40} height={40} alt="" />
            </div>
            <div>
              <p className="text-md font-semibold">Olivia Martin</p>
              <p className="text-[#82828A]">olivia.martin@gmail.com</p>
            </div>
          </div>

          <div className="text-xl font-semibold">+ $1,999.01</div>
        </div>
        </div>
      </div>
    </section>
  );
}

export default TopSales;
