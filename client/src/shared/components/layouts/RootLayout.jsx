import React from 'react'
import BackgroundSVG from "../backgroundSVG.jsx";
import NavigationBar from "../navigation bar/NavigationBar.jsx";
import {Outlet} from "react-router-dom";
import UIContainer from "../UIContainer.jsx";

const RootLayout = () => {
  return (
    <div className="relative flex overflow-hidden h-screen w-screen">
      <div className="fixed -z-50 left-1/2 -translate-1/2 -top-1/2">
        <BackgroundSVG/>
      </div>

      <div className="w-full flex-1 p-2 sm:p-4 gap-2 sm:gap-4 flex flex-col">
        <NavigationBar/>

        <div className="relative flex-1">
          <div className="flex absolute inset-0">
            <Outlet/>

            <UIContainer/>
          </div>
        </div>
      </div>
    </div>
  )
}
export default RootLayout
