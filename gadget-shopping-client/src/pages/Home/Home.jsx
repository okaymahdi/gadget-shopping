import { Accordion } from '../../components/Home/Accordion'
import { Banner } from '../../components/Home/Banner'
import { FeaturedProducts } from '../../components/Home/FeaturedProducts'
import { UserReview } from '../../components/Home/UserReview'

export const Home = () => {
  return (
    <div>
      <Banner />
      <div className="container mx-auto">
        <div className="my-24">
          <h1 className="text-3xl font-semibold text-center mb-16">
            Featured Products
          </h1>
          <FeaturedProducts />
        </div>
        <div className="my-24">
          <h1 className="text-3xl font-semibold text-center mb-16">
            User Review
          </h1>
          <UserReview />
        </div>
        <div className="my-24">
          <h1 className="text-3xl font-semibold text-center mb-16">
            Freequently Asked Quistions
          </h1>
          <Accordion />
        </div>
      </div>
    </div>
  )
}
