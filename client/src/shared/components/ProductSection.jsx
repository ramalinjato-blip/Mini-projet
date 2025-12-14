import React from 'react'
import ProductCard from "./ProductCard.jsx";

const ProductSection = ({ title, products }) => {
  return (
    <div className="z-9">
      <p className="text-xs font-light text-gray-500 pl-2 pb-2">{title}</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {products.map(product => (
          <ProductCard name={product.name} price={product.price} category={product.category}/>
        ))}
      </div>
    </div>
  )
}
export default ProductSection
