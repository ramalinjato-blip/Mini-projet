import React from 'react'
import {Link} from "react-router-dom";

const NavigationLink = ({ text, icon, link, active }) => {

  return (
    <Link
      to={link}
      className={`${active ? "w-60 bg-white" : ""} flex items-center gap-4 bg-gray-300 hover:bg-white w-fit md:w-40 md:hover:w-60 transition-all duration-700 p-1 sm:pr-4 rounded-full`}
    >
      <div className="bg-white w-18 sm:w-fit grid place-items-center p-1.5 rounded-full">
        {icon}
      </div>
      <p className="hidden sm:block">{text}</p>
    </Link>
  )
}
export default NavigationLink
