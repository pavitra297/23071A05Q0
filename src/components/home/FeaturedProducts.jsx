import { Link } from 'react-router-dom'
import { products } from '../../data/products'

const FeaturedProducts = () => {
  // Get first 3 products for featured section
  const featuredProducts = products.slice(0, 3)

  return (
    <section className="py-12 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Check out our most popular items that customers love. Quality products at great prices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div 
              key={product.id} 
              className="card group"
            >
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-64 w-full object-cover object-center group-hover:opacity-90 transition-opacity duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-semibold text-primary-600">${product.price.toFixed(2)}</span>
                  <Link to="/catalogue" className="btn-primary text-sm">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/catalogue" className="btn-accent">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts