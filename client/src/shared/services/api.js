export const fetchProducts = async () => {
  const res = await fetch("/products.json")
  if (!res.ok) throw new Error("Erreur fetch products")
  return res.json()
}

export const fetchCategories = async () => {
  const res = await fetch("/categories.json")
  if (!res.ok) throw new Error("Erreur fetch categories")
  return res.json()
}
