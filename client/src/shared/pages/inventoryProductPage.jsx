import React, {useEffect, useState} from 'react'
import {ArrowDownNarrowWide, Dot} from "lucide-react";
import {fetchCategories, fetchProducts} from "../services/api.js";
import {getCategoryTheme, getProductCategories} from "../services/utilities.js";

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
        <button className="justify-end button-icon bg-transparent w-24 sm:w-30">
          Total en stock
        </button>
      </div>

      <ul className="flex-1">
        {products.map((product, index) => {

          const { label } = getCategoryTheme(product.category.color)
          const stock = product.stock
          const indice = stock >= 60 ? "high" : stock >= 40 ? "medium" : stock >= 10 ? "low" : "danger"
          const color = stock >= 60 ? "bg-blue-400" : stock >= 40 ? "bg-green-400" : stock >= 10 ? "bg-orange-400" : "bg-red-400"

          return (
            <li key={product.id} className="relative flex items-center gap-2 py-2 px-1 h-10">
              <span className="flex-1 truncate">{product.name}</span>
              <div className="min-w-25 md:min-w-32 flex justify-center">
                <span
                  className={`w-fit flex items-center rounded py-0.5 px-2 text-xs font-semibold ${label}`}>{product.category.name}</span>
              </div>
              <div
                className="flex flex-col md:flex-row text-xs -translate-y-1 md:translate-0 md:gap-2 md:items-center min-w-30 md:min-w-2xs lg:min-w-sm">
                <span className="flex items-center"><span className="w-4">{stock}</span> <Dot/> {indice}</span>
                <div className="relative flex-1">
                  <span className="absolute h-1 w-full bg-gray-300 rounded"/>
                  <span style={{width: `${stock}%`}} className={`absolute h-1 rounded transition ${color}`}/>
                </div>
              </div>
              <span className="font-semibold min-w-24 sm:min-w-30 text-right">{(product.price * stock).toLocaleString()} ar</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default InventoryProductPage
