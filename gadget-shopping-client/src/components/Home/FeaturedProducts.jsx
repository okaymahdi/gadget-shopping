import { ProductCard } from '../Shared/ProductCard'

export const FeaturedProducts = () => {
  return (
    <div className="lg:flex gap-4 items-center justify-between">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  )
}
