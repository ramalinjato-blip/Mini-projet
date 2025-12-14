import React from 'react'
import {Link} from "react-router-dom";

const HeaderLink = ({ text, icon, link }) => {
  return (
    <Link to={link} className="flex items-center gap-4 bg-gray-300 p-1 pr-4 rounded-full">
      <div className="bg-white grid place-items-center p-1.5 rounded-full">
        {icon}
      </div>
      {text}
    </Link>
  )
}
export default HeaderLink
