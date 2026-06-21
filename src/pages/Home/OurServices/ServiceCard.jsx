import React from "react";

const ServiceCard = ({ service }) => {
  const { image, title, desc } = service;

  return (
    <div className="group relative card bg-base-100 w-full rounded-2xl border border-base-200/50 shadow-sm overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-xl">
      <div className="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0" />
      <div className="card-body p-8 flex flex-col items-start text-left space-y-4 relative z-10">
        <div className="w-16 h-16 p-3 bg-base-200/50 rounded-xl flex items-center justify-center transition-colors duration-300 group-hover:bg-base-100/20">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain"
          />
        </div>
        <h3 className="text-xl font-bold text-secondary tracking-tight leading-snug transition-colors duration-300 group-hover:text-base-100">
          {title}
        </h3>
        <p className="text-sm md:text-base text-base-content/70 font-medium leading-relaxed transition-colors duration-300 group-hover:text-base-100/90">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
