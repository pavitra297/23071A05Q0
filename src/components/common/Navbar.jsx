import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FiMenu, FiX, FiShoppingCart, FiUser } from 'react-icons/fi'
import { useCart } from '../../context/CartContext'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { itemCount } = useCart()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const navLinkClass = ({ isActive }) => 
    `transition duration-200 py-2 px-3 ${
      isActive 
        ? 'text-primary-600 font-medium' 
        : 'text-gray-700 hover:text-primary-600'
    }`

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <span className="text-2xl font-bold text-primary-600">ShopEase</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            <NavLink to="/catalogue" className={navLinkClass}>Shop</NavLink>
            <NavLink to="/about" className={navLinkClass}>About</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
          </div>

          {/* User Actions */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <NavLink to="/login" className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 transition duration-200">
              <FiUser className="text-lg" />
              <span>Login</span>
            </NavLink>
            <NavLink to="/cart" className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 transition duration-200">
              <div className="relative">
                <FiShoppingCart className="text-lg" />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-accent-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </div>
              <span>Cart</span>
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              type="button"
              className="p-2 text-gray-700 hover:text-primary-600 transition duration-200"
              onClick={toggleMenu}
              aria-expanded={isOpen}
            >
              <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
              {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-16 inset-x-0 z-50 animate-fade-in">
          <div className="container-custom py-4 space-y-1">
            <NavLink 
              to="/" 
              className={navLinkClass} 
              onClick={closeMenu}
            >
              Home
            </NavLink>
            <NavLink 
              to="/catalogue" 
              className={navLinkClass} 
              onClick={closeMenu}
            >
              Shop
            </NavLink>
            <NavLink 
              to="/about" 
              className={navLinkClass} 
              onClick={closeMenu}
            >
              About
            </NavLink>
            <NavLink 
              to="/contact" 
              className={navLinkClass} 
              onClick={closeMenu}
            >
              Contact
            </NavLink>
            <div className="border-t border-gray-200 my-3 pt-3 flex flex-col space-y-2">
              <NavLink 
                to="/login" 
                className="flex items-center space-x-2 text-gray-700"
                onClick={closeMenu}
              >
                <FiUser className="h-5 w-5" />
                <span>Login</span>
              </NavLink>
              <NavLink 
                to="/cart" 
                className="flex items-center space-x-2 text-gray-700"
                onClick={closeMenu}
              >
                <div className="relative">
                  <FiShoppingCart className="h-5 w-5" />
                  {itemCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-accent-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                      {itemCount}
                    </span>
                  )}
                </div>
                <span>Cart</span>
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar