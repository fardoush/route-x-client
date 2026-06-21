import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { TbTruckDelivery } from "react-icons/tb";
import { MdDeliveryDining } from "react-icons/md";
import { MdOutlineCorporateFare } from "react-icons/md";
import WorkCard from "./WorkCard";

const HowWork = () => {
  const works = [
    {
      id: 1,
      icon: <CiDeliveryTruck />,
      title: "Booking Pick & Drop",
      desc: "From personal packages to business shipments — we deliver on time, every time. ",
    },
    {
      id: 2,
      icon: <TbTruckDelivery />,
      title: "Cash On Delivery",
      desc: "From personal packages to business shipments — we deliver on time, every time. ",
    },
    {
      id: 3,
      icon: <MdDeliveryDining />,
      title: "Delivery Hub",
      desc: "From personal packages to business shipments — we deliver on time, every time. ",
    },
    {
      id: 4,
      icon: <MdOutlineCorporateFare />,
      title: "Booking SME & Corporate",
      desc: "From personal packages to business shipments — we deliver on time, every time. ",
    },
  ];

  return (
    <div className="py-20">
      <h2 className="text-secondary text-4xl font-black md:mb-8 mb-6">
        How it Works
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {works.map((work) => (
          <WorkCard key={work.id} work={work}></WorkCard>
        ))}
      </div>
    </div>
  );
};

export default HowWork;
