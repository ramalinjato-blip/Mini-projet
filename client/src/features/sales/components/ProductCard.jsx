import React from 'react'
import {useNavigate} from "react-router-dom";
import {getCategoryTheme} from "../../../shared/services/utilities.js";

const ProductCard = ({ name, price, categories }) => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`?type=drawer&content=addCart&title=Facture`)
  }

  //const cardTheme = "bg-amber-50"

  //const labelTheme = "bg-amber-200 text-amber-800"

  const { card } = getCategoryTheme(categories[0]?.color)

  return (
    <div
      onClick={handleClick}
      className={`cursor-pointer flex flex-col gap-2 p-2 rounded-xl text-gray-700 hover:-translate-y-1 transition-all ${card}`}
    >
      <div className="flex gap-2">
        <span className="flex-1 truncate">{name}</span>
        <span className="font-semibold">{price?.toLocaleString()} ar</span>
      </div>

      {categories.length > 0 ? (
        <div className="flex flex-wrap gap-1">
          {categories.map(category => {

            const { label } = getCategoryTheme(category?.color)

            return <span className={`text-xs rounded w-fit px-2 py-0.5 ${label}`}>{category.name}</span>
          })}
        </div>
      ) : <span className={`text-xs rounded w-fit px-2 py-0.5 bg-gray-500`}/>}

    </div>
  )
}
export default ProductCard
