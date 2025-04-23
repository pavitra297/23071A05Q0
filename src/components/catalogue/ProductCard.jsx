import { useState } from 'react'
import { FiShoppingCart, FiCheck } from 'react-icons/fi'

const ProductCard = ({ product, onAddToCart }) => {
  const [isAdding, setIsAdding] = useState(false)
  
  const handleAddToCart = () => {
    setIsAdding(true)
    onAddToCart(product)
    
    // Reset after animation
    setTimeout(() => {
      setIsAdding(false)
    }, 1500)
  }

  return (
    <div className="card group">
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
          <button
            type="button"
            onClick={handleAddToCart}
            className={`btn transition-all duration-200 ${
              isAdding 
                ? 'bg-green-500 text-white' 
                : 'bg-primary-600 text-white hover:bg-primary-700'
            }`}
          >
            {isAdding ? (
              <>
                <FiCheck className="mr-1" /> Added
              </>
            ) : (
              <>
                <FiShoppingCart className="mr-1" /> Add to Cart
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard