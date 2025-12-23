import React, {useEffect, useState} from 'react'
import {ArrowDownNarrowWide, Dot} from "lucide-react";
import {fetchCategories, fetchProducts} from "../../../shared/services/api.js";
import {getCategoryTheme, getProductCategories} from "../../../shared/services/utilities.js";
import ProductTile from "../components/ProductTile.jsx";

const fakeCount = [12, 87, 3, 56, 91, 44, 18, 60, 72, 5, 29, 100, 8, 67, 39, 14, 77, 2, 95, 33, 48, 21, 64, 10]

const InventoryProductPage = () => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      try {
        const [productsData, categoriesData] = await Promise.all([
          fetchProducts(),
          fetchCategories()
        ])

        const modifiedProduct = productsData.map((product, index) => {
          const mainCategoryId = product.categoryIds[0]
          const cat = getProductCategories(product, categoriesData)

          const newCat = cat.find(c => c.id === mainCategoryId)
          const stock = fakeCount[index]
          return {
            id: product.id,
            name: product.name,
            price: product.price,
            category: newCat,
            stock
          }
        })

        setProducts(modifiedProduct)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    loadData().then(() => console.log("Data fetched correctly"))

  }, [])

  return (
    <div className="flex flex-col gap-2">
      <div className="sticky top-0 bg-gray-300 flex gap-2 p-1 rounded-xl z-10">
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
      </div>

      <ul className="flex-1 divide-y divide-gray-300">
        {products.map((product) => {

          const { label } = getCategoryTheme(product.category.color)
          const stock = product.stock
          const indice = stock >= 60 ? "élevé" : stock >= 40 ? "normal" : stock >= 10 ? "bas" : "très bas"
          const color = stock >= 60 ? "bg-blue-400" : stock >= 40 ? "bg-green-400" : stock >= 10 ? "bg-orange-400" : "bg-red-400"

          return (
            <ProductTile key={product.id} name={product.name} categoryName={product.category.name} label={label} stock={stock} indice={indice} color={color}/>
          )
        })}
      </ul>
    </div>
  )
}
export default InventoryProductPage
