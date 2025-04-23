import Hero from '../components/common/Hero'
import FeaturedProducts from '../components/home/FeaturedProducts'
import { Link } from 'react-router-dom'
import { FiShoppingBag, FiTruck, FiCreditCard, FiHeadphones } from 'react-icons/fi'

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero 
        title="Welcome to ShopEase"
        subtitle="Your one-stop shop for quality products at great prices"
        image="https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      {/* Features */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-4 animate-fade-in">
              <div className="bg-primary-100 p-3 rounded-full mb-4">
                <FiShoppingBag className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Wide Selection</h3>
              <p className="text-gray-600">Browse thousands of products across multiple categories</p>
            </div>

            <div className="flex flex-col items-center text-center p-4 animate-fade-in" style={{ animationDelay: '100ms' }}>
              <div className="bg-primary-100 p-3 rounded-full mb-4">
                <FiTruck className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Quick shipping to your doorstep within 2-3 business days</p>
            </div>

            <div className="flex flex-col items-center text-center p-4 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="bg-primary-100 p-3 rounded-full mb-4">
                <FiCreditCard className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Secure Payment</h3>
              <p className="text-gray-600">Multiple payment options with enhanced security</p>
            </div>

            <div className="flex flex-col items-center text-center p-4 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <div className="bg-primary-100 p-3 rounded-full mb-4">
                <FiHeadphones className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Our customer service team is always available to help</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <FeaturedProducts />

      {/* Call to Action */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Shop?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-primary-100">
            Explore our full collection of products and find exactly what you're looking for.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/catalogue" className="btn bg-white text-primary-700 hover:bg-gray-100">
              Browse Catalogue
            </Link>
            <Link to="/register" className="btn bg-primary-700 text-white hover:bg-primary-800">
              Create Account
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home