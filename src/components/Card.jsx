import React from "react";
import pin from "../assets/images/pin.png";

const Card = ({
  imageUrl,
  title,
  location,
  description,
  startDate,
  endDate,
  googleMapsUrl,
}) => {
  return (
    <li className="flex flex-col sm:flex-row sm:gap-8 items-center justify-center sm:shadow-lg sm:max-w-[740px] rounded-lg py-3">
      <div className="w-full mb-4 sm:w-[128px] h-[175px] sm:ml-5 ">
        {/* image container */}
        <img
          src={imageUrl}
          alt={title}
          className="object-cover object-center w-full h-full  rounded-lg"
        />
      </div>
      <div className="sm:max-w-sm sm:h-[170px]">
        <div>
          <p className="flex items-center text-sm">
            <img src={pin} alt="Globe" className="w-3 h-4 inline-block mr-1" />
            <span className="uppercase tracking-widest">{location} </span>

            <span className="inline-block pl-3 text-[#918E9B]">
              <a className="underline" href={googleMapsUrl}>
                View on Google Maps
              </a>
            </span>
          </p>
          <h1 className="text-3xl sm:text-2xl font-bold py-2 sm:py-1 mb-1">
            {title}
          </h1>
        </div>
        <div>
          {/* card content */}
          <p className="text-sm font-bold">
            {startDate} - {endDate}
          </p>
          <p className="py-2 text-sm">{description}</p>
        </div>
      </div>
    </li>
  );
};

export default Card;
