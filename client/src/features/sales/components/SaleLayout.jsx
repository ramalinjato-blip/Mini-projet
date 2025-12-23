import React from 'react'
import PageHeader from "../../../shared/components/PageHeader.jsx";
import {NavLink, Outlet} from "react-router-dom";
import Container from "../../../shared/components/UI container/Container.jsx";

const mainButton = [
  { text: "nouveau", index: true },
]

const links = [
  { title: "Nouveau achat", link: "/sale/new" },
  { title: "Activité", link: "/sale/activity" },
]

const SaleLayout = () => {
  return (
    <Container>
      <PageHeader title="Ventes" mainButton={mainButton}/>

      <div className="flex divide-x border-b divide-gray-400 border-gray-400">
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
export default SaleLayout
