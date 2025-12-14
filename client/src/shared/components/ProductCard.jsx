import React from 'react'
import {useNavigate} from "react-router-dom";

const ProductCard = ({ name, price, category }) => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`?type=drawer&content=addCart&title=Facture`)
  }

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer flex flex-col gap-2 bg-amber-50 p-2 rounded-xl text-gray-700 hover:-translate-y-1 transition-all"
    >
      <div className="flex gap-2">
        <span className="flex-1 truncate">{name}</span>
        <span className="font-semibold">{price?.toLocaleString()} ar</span>
      </div>
      <span className="text-xs rounded bg-amber-200 text-amber-800 w-fit px-2 py-0.5">{category}</span>
    </div>
  )
}
export default ProductCard
