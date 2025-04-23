import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import CartItem from '../components/cart/CartItem'
import { FiShoppingBag, FiArrowRight } from 'react-icons/fi'

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, clearCart, cartTotal } = useCart()
  const [checkoutStep, setCheckoutStep] = useState(0)
  
  // Empty cart view
  if (cart.length === 0) {
    return (
      <div className="container-custom py-12">
        <div className="text-center py-16 max-w-md mx-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-6">
            <FiShoppingBag className="h-8 w-8 text-gray-500" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">
            Looks like you haven't added any items to your cart yet.
          </p>
          <Link to="/catalogue" className="btn-primary">
            Start Shopping
          </Link>
        </div>
      </div>
    )
  }
  
  // Calculate subtotal, tax, and total
  const subtotal = cartTotal
  const tax = subtotal * 0.08 // Assuming 8% tax
  const shipping = 12.99
  const total = subtotal + tax + shipping
  
  return (
    <div className="container-custom py-8">
      <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold">Cart Items ({cart.length})</h2>
            </div>
            
            <div className="divide-y divide-gray-200">
              {cart.map(item => (
                <div key={item.id} className="p-6">
                  <CartItem
                    item={item}
                    onUpdateQuantity={updateQuantity}
                    onRemove={removeFromCart}
                  />
                </div>
              ))}
            </div>
            
            <div className="p-6 border-t border-gray-200 bg-gray-50">
              <button
                onClick={clearCart}
                className="text-red-600 hover:text-red-800 text-sm font-medium transition-colors"
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden sticky top-24">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold">Order Summary</h2>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Tax (8%)</span>
                <span className="font-medium">${tax.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">${shipping.toFixed(2)}</span>
              </div>
              
              <div className="border-t border-gray-200 pt-4 mt-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">Total</span>
                  <span className="text-lg font-bold text-primary-600">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-gray-50">
              <button
                onClick={() => setCheckoutStep(1)}
                className="btn-primary w-full flex items-center justify-center"
              >
                Proceed to Checkout <FiArrowRight className="ml-2" />
              </button>
              
              <Link
                to="/catalogue"
                className="text-primary-600 hover:text-primary-800 text-sm font-medium mt-4 block text-center"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Checkout Modal */}
      {checkoutStep > 0 && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 animate-fade-in">
            <h3 className="text-xl font-bold mb-4">Checkout Process</h3>
            <p className="text-gray-600 mb-6">
              This is a demo application. In a real e-commerce site, you would proceed to payment processing.
            </p>
            <div className="flex justify-end">
              <button
                onClick={() => setCheckoutStep(0)}
                className="btn-secondary mr-3"
              >
                Close
              </button>
              <button
                onClick={() => {
                  // Simulate order processing
                  clearCart()
                  setCheckoutStep(0)
                }}
                className="btn-primary"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart