import React from 'react'
import {BanknoteArrowUpIcon, Box, LayoutDashboard, Search} from "lucide-react";
import NavigationLink from "./NavigationLink.jsx";
import Logo from "../logo.jsx";
import {useLocation} from "react-router-dom";

// Les liens de la barre de navigation
const links = [
  {
    text: "Dashboard", icon: <LayoutDashboard size={18}/>, link: "/", index: "dashboard"
  }, {
    text: "Inventaire", icon: <Box size={18}/>, link: "/inventory/product", index: "inventory"
  }, {
    text: "Ventes", icon: <BanknoteArrowUpIcon size={18}/>, link: "/sale/new", index: "sale"
  }
]

const NavigationBar = () => {
  const location = useLocation()

  const isActive = (index) => location.pathname === "/" && index === "dashboard" || location.pathname.includes(index)

  return (
    <div className="bg-white/90 p-1 sm:p-2 rounded-full flex justify-between items-center">
      <div className="bg-white p-2 rounded-full shadow">
        <Search size={18}/>
      </div>

      <div className="flex gap-1 sm:gap-4">
        {links.map(link => (
          <NavigationLink text={link.text} icon={link.icon} link={link.link} active={isActive(link.index)}/>
        ))}
      </div>

      <div className="pr-2">
        <Logo/>
      </div>

    </div>
  )
}
export default NavigationBar
