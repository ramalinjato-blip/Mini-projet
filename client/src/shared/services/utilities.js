export const getProductCategories = (product, categories = []) => {
  if (!product?.categoryIds) return []

  let newCts = []

  const cts = categories.filter(cat =>
    product.categoryIds.includes(cat.id)
  )

  product.categoryIds.forEach(id => {
    const category = cts.find(ct => ct.id === id)

    if (category) newCts = [...newCts, category]
  })

  return newCts
}

export const getCategoryTheme = (color) => {
  const themes = {
    blue: {
      card: "bg-blue-50",
      label: "bg-blue-200 text-blue-800"
    },
    red: {
      card: "bg-red-50",
      label: "bg-red-200 text-red-800"
    },
    green: {
      card: "bg-green-50",
      label: "bg-green-200 text-green-800"
    },
    orange: {
      card: "bg-orange-50",
      label: "bg-orange-200 text-orange-800"
    },
    yellow: {
      card: "bg-yellow-50",
      label: "bg-yellow-200 text-yellow-800"
    },
    purple: {
      card: "bg-purple-50",
      label: "bg-purple-200 text-purple-800"
    },
    gray: {
      card: "bg-gray-50",
      label: "bg-gray-200 text-gray-800"
    },
    brown: {
      card: "bg-amber-50",
      label: "bg-amber-200 text-amber-800"
    }
  }

  return themes[color] || themes.gray
}

export const getRandomIds = (count = 3, min = 1, max = 24) => {
  const ids = new Set()

  while (ids.size < count) {
    const random = Math.floor(Math.random() * (max - min + 1)) + min
    ids.add(random)
  }

  return Array.from(ids)
}

export const getPopularProducts = (products, count = 3) => {
  if (!products?.length) return []

  const randomIds = getRandomIds(count, 1, 24)

  return products.filter(product =>
    randomIds.includes(product.id)
  )
}
