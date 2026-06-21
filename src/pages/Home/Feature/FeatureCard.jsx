import React from "react";

const FeatureCard = ({ feature }) => {
  const { image, title, desc } = feature;
  return (
    <div className="flex flex-col md:flex-row items-center bg-base-200 border border-primary rounded-3xl p-6 md:p-8 w-full shadow-sm gap-6 md:gap-8 transition-colors duration-300">
      <div className="w-[200px] h-[200px] flex justify-center items-center">
        <img
          src={image}
          alt={title || "Feature Illustration"}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="hidden md:block w-[1px] h-32 border-l border-dashed border-gray-300 dark:border-gray-700"></div>
      <div className="w-full md:w-3/5 text-center md:text-left">
        <h2 className="text-primary font-bold text-xl md:text-2xl mb-3 tracking-wide">
          {title}
        </h2>
        <p className="text-base-200 dark:text-dark-muted text-sm md:text-base leading-relaxed font-light">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
