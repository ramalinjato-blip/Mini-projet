import React from 'react'
import ProductCard from "./ProductCard.jsx";
import {getProductCategories} from "../services/utilities.js";

const ProductSection = ({ title, products, categories }) => {
  return (
    <div className="z-9">
      <p className="text-xs font-light text-gray-500 pl-2 pb-2">{title}</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {products.map(product => {

          const category = getProductCategories(product, categories)
          return <ProductCard name={product.name} price={product.price} categories={category}/>
        })}
      </div>
    </div>
  )
}
export default ProductSection
