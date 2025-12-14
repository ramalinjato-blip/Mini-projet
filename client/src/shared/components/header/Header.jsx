import React from 'react'
import {BanknoteArrowUpIcon, Box, LayoutDashboard, Search} from "lucide-react";
import HeaderLink from "./HeaderLink.jsx";
import Logo from "../logo.jsx";

// les liens sur le header
const links = [
  {
    text: "Dashboard", icon: <LayoutDashboard size={18}/>, link: "/"
  }, {
    text: "Inventaire", icon: <Box size={18}/>, link: "/inventory"
  }, {
    text: "Ventes", icon: <BanknoteArrowUpIcon size={18}/>, link: "/sales"
  }
]

const Header = () => {
  return (
    <div className="bg-white/90 p-2 rounded-full flex justify-between items-center">
      <div className="bg-white p-2 rounded-full shadow">
        <Search size={18}/>
      </div>

      <div className="flex gap-4">
        {links.map(link => (
          <HeaderLink text={link.text} icon={link.icon} link={link.link}/>
        ))}
      </div>

      <div className="pr-2">
        <Logo/>
      </div>


    </div>
  )
}
export default Header
