import React from "react";
import liveTrackingImg from "../../../assets/images/live-tracking.png";
import callCenterSupport from "../../../assets/images/live-tracking.png";
import safeDelivery from "../../../assets/images/safe-delivery.png";
import FeatureCard from "./FeatureCard";

const Feature = () => {
  const features = [
    {
      id: 1,
      image: liveTrackingImg,
      title: "Live Parcel Tracking",
      desc: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind. ",
    },
    {
      id: 2,
      image: safeDelivery,
      title: "100% Safe Delivery",
      desc: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time. ",
    },
    {
      id: 3,
      image: callCenterSupport,
      title: "24/7 Call Center Support",
      desc: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    },
  ];
  return (
    <div className="grid grid-cols-1 gap-6">
      {features.map((feature) => (
        <FeatureCard key={feature.id} feature={feature} />
      ))}
    </div>
  );
};

export default Feature;
