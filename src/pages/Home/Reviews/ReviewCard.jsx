import React from "react";

const ReviewCard = ({ reviews }) => {
  const { userName, user_email, review, user_photoURL } = reviews;
  return (
    <div className="max-w-md mx-auto bg-[#F4F4F4] p-8 rounded-[32px] font-sans shadow-sm">
      <div className="mb-4">
        <svg
          className="w-12 h-12 text-primary opacity-80"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      {/* Testimonial Text */}
      <p className="text-[#4A5568] text-base leading-relaxed mb-6 font-normal">
        {review}
      </p>

      {/* Dotted Divider */}
      <div className="border-t-2 border-dotted border-[#A0AEC0] mb-6 opacity-60"></div>

      <div className="flex items-center gap-4">
        <div className="w-14 h-14">
          <img
            src={user_photoURL}
            alt=""
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div>
          <h4 className="text-primary text-lg font-bold leading-tight">
            {userName}
          </h4>
          <p className="text-[#718096] text-sm mt-0.5">{user_email}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
