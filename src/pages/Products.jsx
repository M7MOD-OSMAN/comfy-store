import { Filters, PaginationContainer, ProductsContainer } from '../components'
import { customFetch } from '../utils'

export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ])
  const response = await customFetch('/products', { params })

  return { products: response.data.data, meta: response.data.meta, params }
}
// testing github desktop
const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  )
}

export default Products
