import React from "react";

const WorkCard = ({ work }) => {
  const { icon, title, desc } = work;
  return (
    <div className="card bg-base-100 w-full rounded-2xl border border-base-200/50 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="card-body p-8 flex flex-col items-start text-left space-y-4">
        <div className="text-4xl text-primary p-2 bg-base-200/50 rounded-xl">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-secondary tracking-tight leading-snug">
          {title}
        </h3>
        <p className="text-sm md:text-base text-base-content/70 font-medium leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default WorkCard;
