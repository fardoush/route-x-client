import React from "react";
import serviceImage from "../../../assets/images/service.png";
import ServiceCard from "./ServiceCard";

const OurServices = () => {
  const services = [
    {
      id: 1,
      image: "../../../assets/images/service.png",
      title: "Express & Standard Delivery",
      desc: "We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4-6 hours from pick-up to drop-off.",
    },
    {
      id: 2,
      image: "../../../assets/images/service.png",
      title: "Nationwide Delivery",
      desc: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48-72 hours.",
    },
    {
      id: 3,
      image: "../../../assets/images/service.png",
      title: "Fulfillment Solution",
      desc: "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    },
    {
      id: 4,
      image: "../../../assets/images/service.png",
      title: "Cash on Home Delivery",
      desc: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    },
    {
      id: 5,
      image: "../../../assets/images/service.png",
      title: "Corporate Service / Contract In Logistics",
      desc: "Customized corporate services which includes warehouse and inventory management support.",
    },
    {
      id: 6,
      image: "../../../assets/images/service.png",
      title: "Parcel Return",
      desc: "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    },
  ];

  return (
    <section className="rounded-2xl  text-base-content py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto rounded-[32px] md:p-4 text-center">
        <div className="max-w-3xl mx-auto mb-12 md:mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">
            Our Services
          </h2>
          <p className="text-sm md:text-base opacity-80 font-medium leading-relaxed max-w-2xl mx-auto">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
