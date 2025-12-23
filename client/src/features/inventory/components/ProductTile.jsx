import React from 'react'
import {Dot} from "lucide-react";

const ProductTile = ({name, categoryName, label, stock, indice, color}) => {
  return (
    <li className="relative flex items-center gap-2 py-2 px-1 h-12">
      <span className="flex-1 truncate">{name}</span>
      <div className="min-w-25 md:min-w-32 flex justify-center">
        <span className={`w-fit flex items-center rounded py-0.5 px-2 text-xs font-semibold ${label}`}>{categoryName}</span>
      </div>
      <div
        className="flex flex-col md:flex-row text-xs -translate-y-1 md:translate-0 md:gap-2 md:items-center min-w-30 md:min-w-2xs lg:min-w-sm">
        <span className="flex items-center">
          <span className="w-4">{stock}</span> <Dot/> {indice}
        </span>
        <div className="relative flex-1">
          <span className="absolute h-1 w-full bg-gray-300 rounded"/>
          <span style={{width: `${stock}%`}} className={`absolute h-1 rounded transition ${color}`}/>
        </div>
      </div>
    </li>
  )
}
export default ProductTile
