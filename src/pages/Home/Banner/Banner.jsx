import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import bannerImg2 from "../../../assets/images/banner2.svg";
import bannerImg3 from "../../../assets/images/banner3.svg";
import deliveryManTiny from "../../../assets/images/deliveryman-tiny.svg";

const Banner = () => {
  const slideContainerClass =
    "bg-base-100 text-base-content transition-colors duration-300 pt-8 px-6 pb-20 sm:pt-12 sm:px-12 lg:px-16 lg:pb-16 rounded-3xl max-w-7xl mx-auto my-6 border border-base-200 shadow-sm text-left relative";

  const customRenderIndicator = (clickHandler, isSelected, index, label) => {
    return (
      <span
        onClick={clickHandler}
        onKeyDown={clickHandler}
        role="button"
        tabIndex={0}
        aria-label={`${label} ${index + 1}`}
        className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer inline-block mr-2 ${
          isSelected ? "w-8 bg-primary" : "w-3 bg-base-content/20"
        }`}
      />
    );
  };

  return (
    <div className="w-full px-4 lg:px-0 global-carousel-wrapper">
      <Carousel
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        stopOnHover={true}
        emulateTouch={true}
        renderIndicator={customRenderIndicator}
      >
        {/* --- Slide 1 --- */}
        <div>
          <div className={slideContainerClass}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[auto] lg:min-h-[420px]">
              <div className="flex flex-col space-y-4 md:space-y-6">
                <div className="w-24 md:w-32 opacity-80">
                  <img
                    src={deliveryManTiny}
                    alt="Delivery Man"
                    className="w-full h-auto"
                  />
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-[52px] font-extrabold tracking-tight leading-tight -mt-3">
                  We Make Sure Your <br />
                  <span className="text-secondary drop-shadow-sm">
                    Parcel Arrives
                  </span>{" "}
                  On Time <br />
                  <span className="text-base-content/90">— No Fuss.</span>
                </h1>

                <p className="text-sm md:text-base text-base-content/70 max-w-md font-medium leading-relaxed">
                  Enjoy fast, reliable parcel delivery with real-time tracking
                  and zero hassle. From personal packages to business shipments
                  — we deliver on time, every time.
                </p>

                <div className="flex flex-wrap gap-4 items-center pt-2">
                  <button className="btn btn-secondary text-neutral-900 font-bold rounded-full px-6 flex items-center gap-2 shadow-md shadow-secondary/20 hover:brightness-105 transition-all">
                    Track Your Parcel
                    <span className="bg-neutral-900 text-secondary w-6 h-6 rounded-full flex items-center justify-center text-xs font-black">
                      →
                    </span>
                  </button>
                  <button className="btn btn-outline border-base-content/20 text-base-content hover:bg-base-content hover:text-base-100 rounded-full px-7 font-bold transition-all">
                    Be A Rider
                  </button>
                </div>
              </div>

              <div className="flex justify-center items-center w-full h-full mt-6 lg:mt-0">
                <svg
                  viewBox="0 0 500 400"
                  className="w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[450px] max-h-[350px] h-auto drop-shadow-xl"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M150 300 L250 100 L350 100 L350 300 Z"
                    className="stroke-base-content"
                    strokeWidth="4"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M350 160 L450 160 L450 300 L350 300"
                    className="stroke-base-content"
                    strokeWidth="4"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M260 200 L310 200 L320 260 L270 260 Z"
                    className="fill-secondary stroke-base-content"
                    strokeWidth="3"
                  />
                  <path
                    d="M260 210 L230 230"
                    className="stroke-base-content"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="225"
                    cy="235"
                    r="8"
                    className="stroke-base-content fill-base-100"
                    strokeWidth="3"
                  />
                  <rect
                    x="360"
                    y="230"
                    width="80"
                    height="60"
                    className="fill-primary stroke-base-content"
                    strokeWidth="3"
                    rx="4"
                  />
                  <line
                    x1="400"
                    y1="230"
                    x2="400"
                    y2="290"
                    className="stroke-base-100"
                    strokeWidth="3"
                  />
                  <rect
                    x="370"
                    y="170"
                    width="65"
                    height="55"
                    className="fill-secondary stroke-base-content"
                    strokeWidth="3"
                    rx="4"
                  />
                  <line
                    x1="402"
                    y1="170"
                    x2="402"
                    y2="225"
                    className="stroke-neutral-900"
                    strokeWidth="3"
                  />
                  <circle
                    cx="180"
                    cy="320"
                    r="25"
                    className="fill-base-100 stroke-base-content"
                    strokeWidth="4"
                  />
                  <circle
                    cx="180"
                    cy="320"
                    r="12"
                    className="fill-secondary stroke-base-content"
                    strokeWidth="3"
                  />
                  <circle
                    cx="180"
                    cy="320"
                    r="3"
                    className="fill-base-content"
                  />
                  <circle
                    cx="390"
                    cy="320"
                    r="25"
                    className="fill-base-100 stroke-base-content"
                    strokeWidth="4"
                  />
                  <circle
                    cx="390"
                    cy="320"
                    r="12"
                    className="fill-secondary stroke-base-content"
                    strokeWidth="3"
                  />
                  <circle
                    cx="390"
                    cy="320"
                    r="3"
                    className="fill-base-content"
                  />
                  <line
                    x1="100"
                    y1="350"
                    x2="450"
                    y2="350"
                    className="stroke-base-content/40"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <line
                    x1="130"
                    y1="360"
                    x2="250"
                    y2="360"
                    className="stroke-base-content/20"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <line
                    x1="380"
                    y1="360"
                    x2="430"
                    y2="360"
                    className="stroke-base-content/20"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* --- Slide 2 --- */}
        <div>
          <div className={slideContainerClass}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[auto] lg:min-h-[420px]">
              <div className="flex flex-col space-y-4 md:space-y-6">
                <div className="w-24 md:w-32 opacity-80">
                  <img
                    src={deliveryManTiny}
                    alt="Delivery Man"
                    className="w-full h-auto"
                  />
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-[52px] font-extrabold tracking-tight leading-tight -mt-3">
                  Fastest <span className="text-secondary">Delivery</span> &
                  Easy <span className="text-secondary">Pickup</span>
                </h1>
                <p className="text-sm md:text-base text-base-content/70 max-w-md font-medium leading-relaxed">
                  Enjoy fast, reliable parcel delivery with real-time tracking
                  and zero hassle. From personal packages to business shipments
                  — we deliver on time, every time.
                </p>
                <div className="flex flex-wrap gap-4 items-center pt-2">
                  <button className="btn btn-secondary text-neutral-900 font-bold rounded-full px-6 flex items-center gap-2 shadow-md shadow-secondary/20 hover:brightness-105 transition-all">
                    Track Your Parcel
                    <span className="bg-neutral-900 text-secondary w-6 h-6 rounded-full flex items-center justify-center text-xs font-black">
                      →
                    </span>
                  </button>
                  <button className="btn btn-outline border-base-content/20 text-base-content hover:bg-base-content hover:text-base-100 rounded-full px-7 font-bold transition-all">
                    Be A Rider
                  </button>
                </div>
              </div>

              <div className="flex justify-center items-center w-full h-full mt-6 lg:mt-0">
                <img
                  src={bannerImg2}
                  alt="Fastest Delivery"
                  className="w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[450px] max-h-[350px] h-auto object-contain drop-shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* --- Slide 3 --- */}
        <div>
          <div className={slideContainerClass}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[auto] lg:min-h-[420px]">
              <div className="flex flex-col space-y-4 md:space-y-6">
                <div className="w-24 md:w-32 opacity-80">
                  <img
                    src={deliveryManTiny}
                    alt="Delivery Man"
                    className="w-full h-auto"
                  />
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-[52px] font-extrabold tracking-tight leading-tight -mt-3">
                  Delivery in <span className="text-secondary">30 Minutes</span>{" "}
                  at your doorstep
                </h1>
                <p className="text-sm md:text-base text-base-content/70 max-w-md font-medium leading-relaxed">
                  Enjoy fast, reliable parcel delivery with real-time tracking
                  and zero hassle. From personal packages to business shipments
                  — we deliver on time, every time.
                </p>
                <div className="flex flex-wrap gap-4 items-center pt-2">
                  <button className="btn btn-secondary text-neutral-900 font-bold rounded-full px-6 flex items-center gap-2 shadow-md shadow-secondary/20 hover:brightness-105 transition-all">
                    Track Your Parcel
                    <span className="bg-neutral-900 text-secondary w-6 h-6 rounded-full flex items-center justify-center text-xs font-black">
                      →
                    </span>
                  </button>
                  <button className="btn btn-outline border-base-content/20 text-base-content hover:bg-base-content hover:text-base-100 rounded-full px-7 font-bold transition-all">
                    Be A Rider
                  </button>
                </div>
              </div>

              <div className="flex justify-center items-center w-full h-full mt-6 lg:mt-0">
                <img
                  src={bannerImg3}
                  alt="30 Mins Delivery"
                  className="w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[450px] max-h-[350px] h-auto object-contain drop-shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
