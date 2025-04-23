import { createContext, useContext, useState, useEffect } from 'react'

// Create the cart context
const CartContext = createContext()

// Custom hook to use the cart context
export const useCart = () => {
  return useContext(CartContext)
}

// Cart provider component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  
  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart))
      } catch (error) {
        console.error('Failed to parse cart from localStorage:', error)
        setCart([])
      }
    }
  }, [])
  
  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])
  
  // Add item to cart
  const addToCart = (product) => {
    setCart(prevCart => {
      // Check if product is already in cart
      const existingItem = prevCart.find(item => item.id === product.id)
      
      if (existingItem) {
        // If already in cart, increment quantity
        return prevCart.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        )
      } else {
        // If new item, add to cart with quantity 1
        return [...prevCart, { ...product, quantity: 1 }]
      }
    })
  }
  
  // Update item quantity
  const updateQuantity = (productId, newQuantity) => {
    setCart(prevCart => 
      prevCart.map(item => 
        item.id === productId 
          ? { ...item, quantity: newQuantity } 
          : item
      )
    )
  }
  
  // Remove item from cart
  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId))
  }
  
  // Clear entire cart
  const clearCart = () => {
    setCart([])
  }
  
  // Calculate cart total
  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity, 
    0
  )
  
  // Count total items
  const itemCount = cart.reduce(
    (count, item) => count + item.quantity, 
    0
  )
  
  // Values to provide
  const value = {
    cart,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    cartTotal,
    itemCount
  }
  
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}