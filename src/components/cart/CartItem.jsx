import { FiMinus, FiPlus, FiTrash2 } from 'react-icons/fi'

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  const incrementQuantity = () => {
    onUpdateQuantity(item.id, item.quantity + 1)
  }

  const decrementQuantity = () => {
    if (item.quantity > 1) {
      onUpdateQuantity(item.id, item.quantity - 1)
    }
  }

  const handleRemove = () => {
    onRemove(item.id)
  }

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center py-4 border-b border-gray-200 animate-fade-in">
      {/* Product Image */}
      <div className="w-full sm:w-20 h-20 mb-3 sm:mb-0 sm:mr-4">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover object-center rounded"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-medium text-gray-900 truncate">{item.name}</h3>
        <p className="text-sm text-gray-600 mt-1">${item.price.toFixed(2)}</p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center mt-3 sm:mt-0 sm:ml-6">
        <button
          type="button"
          onClick={decrementQuantity}
          className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700"
          aria-label="Decrease quantity"
        >
          <FiMinus className="h-4 w-4" />
        </button>
        <span className="mx-3 text-gray-700 w-6 text-center">{item.quantity}</span>
        <button
          type="button"
          onClick={incrementQuantity}
          className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700"
          aria-label="Increase quantity"
        >
          <FiPlus className="h-4 w-4" />
        </button>
      </div>

      {/* Total Price */}
      <div className="mt-3 sm:mt-0 sm:ml-6 font-medium text-gray-900">
        ${(item.price * item.quantity).toFixed(2)}
      </div>

      {/* Remove Button */}
      <button
        type="button"
        onClick={handleRemove}
        className="mt-3 sm:mt-0 sm:ml-6 p-1 text-gray-400 hover:text-red-500 transition-colors"
        aria-label="Remove item"
      >
        <FiTrash2 className="h-5 w-5" />
      </button>
    </div>
  )
}

export default CartItem