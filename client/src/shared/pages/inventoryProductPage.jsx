import React from 'react'
import {ArrowDownNarrowWide, Dot} from "lucide-react";

const InventoryProductPage = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="bg-gray-300 flex gap-2 p-1 rounded-xl">
        <button className="flex-1 button-icon bg-transparent">
          Nom
          <ArrowDownNarrowWide size={14}/>
        </button>
        <button className="justify-center button-icon bg-transparent w-25 md:w-32">
          Categorie
        </button>
        <button className="justify-center button-icon bg-transparent w-30 md:min-w-2xs lg:w-sm">
          Stock actuel
        </button>
        <button className="justify-end button-icon bg-transparent w-24 sm:w-30">
          Prix unitaire
        </button>
      </div>

      <ul className="flex-1">
        <li className="relative flex items-center gap-2 py-2 px-1 h-10">
          <span className="flex-1 truncate">Gouty beurre</span>
          <div className="min-w-25 md:min-w-32 flex justify-center">
            <span className="w-fit flex items-center bg-orange-200 rounded py-0.5 px-2 text-xs text-orange-800 font-semibold">snack</span>
          </div>
          <div className="flex flex-col md:flex-row text-xs -translate-y-1 md:translate-0 md:gap-2 md:items-center min-w-30 md:min-w-2xs lg:min-w-sm">
            <span className="flex items-center">20 <Dot/> high</span>
            <div className="relative flex-1">
              <span className="absolute h-1 w-full bg-gray-300 rounded"/>
              <span style={{ width: "64%" }} className="absolute h-1 bg-green-400 rounded transition"/>
            </div>
          </div>
          <span className="font-semibold min-w-24 sm:min-w-30 text-right">1 500 ar</span>
        </li>
      </ul>

    </div>
  )
}
export default InventoryProductPage
