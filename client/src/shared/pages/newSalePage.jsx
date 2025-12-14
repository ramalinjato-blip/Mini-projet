import React, {useEffect, useState} from 'react'
import {Funnel, Search} from "lucide-react";
import ProductSection from "../components/ProductSection.jsx";
import {fetchCategories, fetchProducts} from "../services/api.js";
import {getPopularProducts} from "../services/utilities.js";

const NewSalePage = () => {
  const [isOpen, setIsOpen] = useState(false)

  const [popular, setPopularProducts] = useState([])
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      try {
        const [productsData, categoriesData] = await Promise.all([
          fetchProducts(),
          fetchCategories()
        ])

        setProducts(productsData)
        setCategories(categoriesData)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    loadData().then(() => console.log("Data fetched correctly"))

  }, [])

  useEffect(() => {
    if (products.length) {
      const popular = getPopularProducts(products)
      setPopularProducts(popular)
    }
  }, [products])

  return (
    <div className="h-full flex justify-center pt-20">
      <div className="relative h-fit">
        <div
          onClick={() => setIsOpen(true)}
          className={`flex flex-col bg-white shadow-lg gap-2 w-md md:w-xl lg:w-2xl overflow-hidden rounded-3xl transition-all duration-700 ease-[cubic-bezier(.18,.76,.33,.86)] ${isOpen ? "h-90" : "h-12"}`}
        >
          <div className="flex items-center min-h-12">
            <Search className="ml-4 mr-2 text-gray-400"/>
            <input className="flex-1 text-base outline-none" type="text" placeholder="Rechercher ..." />
          </div>

          <div className="relative flex flex-col gap-2 px-4 h-full overflow-auto pb-4 ">
            <div className="sticky top-0 bg-linear-to-b from-white to-transparent flex items-center pl-1 gap-1 z-10">
              <Funnel size={14}/>
              <span className="border-l border-gray-300 h-4 mx-2"/>
              <span className="filter-button">Boisson</span>
              <span className="filter-button">Alimentaire</span>
              <span className="filter-button">Alcool</span>
            </div>

            <div className="flex flex-col gap-2">
              <ProductSection title={"Populaire en ce moment"} products={popular} categories={categories}/>
              <ProductSection title={"Tout les produits"} products={products} categories={categories} />
            </div>
          </div>
        </div>
        {isOpen && (
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2.5 right-4 px-2 rounded-xl hover:button-red hover:translate-0"
          >
            Close
          </button>
        )}

      </div>
    </div>
  )
}
export default NewSalePage
