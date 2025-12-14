import React from 'react'
import PageHeader from "../PageHeader.jsx";
import {NavLink, Outlet} from "react-router-dom";
import Container from "../Container.jsx";

const mainButton = [
  { text: "plan order", index: true },
  { text: "add", }
]

const links = [
  { title: "Produits", link: "/inventory/product" },
  { title: "Commandes", link: "/inventory/order" },
  { title: "Audit", link: "/inventory/audit" }
]

const InventoryLayout = () => {
  return (
    <Container>
      <PageHeader title="Inventaire" mainButton={mainButton}/>

      <div className=" flex divide-x border-b divide-gray-400 border-gray-400">
        {links.map(link => (
          <NavLink
            to={link.link}
            className={ ({isActive}) => `py-1 px-4 ${isActive ? "bg-gray-200 " : "bg-transparent hover:bg-gray-200"}` }
          >
            {link.title}
          </NavLink>
        ))}
      </div>

      <Outlet/>

    </Container>
  )
}
export default InventoryLayout
