import React from 'react'
import BackgroundSVG from "../backgroundSVG.jsx";
import Header from "../header/Header.jsx";
import {Outlet} from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="relative flex overflow-hidden h-screen w-screen">
      <div className="fixed -z-50 left-1/2 -translate-1/2 -top-1/2">
        <BackgroundSVG/>
      </div>

      <div className="w-full flex-1 p-4 gap-4 flex flex-col">
        <Header/>

        <div className="relative flex-1">
          <div className="absolute top-0 left-0 bottom-0 right-0 overflow-auto">
            <Outlet/>
          </div>
        </div>
      </div>

    </div>
  )
}
export default RootLayout
