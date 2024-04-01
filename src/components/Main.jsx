import React from "react";
import Button from "./Button";
import CustomDate from "./Date";
import LineGraph from "./LineGraph";
import TopSales from "./TopSales";
import Overview from "./Overview";

function Main() {
  const review = [
    {
      name:"Total Revenue",
      price:"$45,231.89",
      review:"+20.1% from last month",
      icon:"fa-solid fa-dollar-sign"

    },
    {
      name:"Subscriptions",
      price:"+2350",
      review:"+180.1% from last month",
      icon:"fa-solid fa-user-group"
    },
    {
      name:"Sales",
      price:"+12,234",
      review:"+19% from last month",
      icon:"fa-solid fa-weight-scale"
    },
    {
      name:"Active Now",
      price:"+573",
      review:"+201 since last hour",
      icon:"fa-solid fa-chart-line"
    },
  ]
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
        {
          review.map(review=>(
            <Overview name={review.name} price={review.price} review={review.review} icon={review.icon} />
          ))
        }
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
