import { useState } from 'react'
import { Link } from 'react-router-dom'
import FormField from '../components/common/FormField'
import { isValidEmail, isValidPassword, isValidMobile, isValidName, isValidAge } from '../utils/validation'

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    age: '',
    password: '',
    confirmPassword: ''
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
    
    // Clear error when user types
    if (errors[id]) {
      setErrors(prev => ({
        ...prev,
        [id]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    // Name validation
    if (!formData.name) {
      newErrors.name = 'Name is required'
    } else if (!isValidName(formData.name)) {
      newErrors.name = 'Name should be at least 2 characters'
    }
    
    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    // Mobile validation
    if (!formData.mobile) {
      newErrors.mobile = 'Mobile number is required'
    } else if (!isValidMobile(formData.mobile)) {
      newErrors.mobile = 'Mobile number should be 10 digits'
    }
    
    // Age validation
    if (!formData.age) {
      newErrors.age = 'Age is required'
    } else if (!isValidAge(formData.age)) {
      newErrors.age = 'You must be at least 18 years old'
    }
    
    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (!isValidPassword(formData.password)) {
      newErrors.password = 'Password must be at least 8 characters with a number and special character'
    }
    
    // Confirm password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password'
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    if (validateForm()) {
      // Simulate API call with timeout
      setTimeout(() => {
        console.log('Form submitted:', formData)
        setSubmitSuccess(true)
        setIsSubmitting(false)
      }, 1000)
    } else {
      setIsSubmitting(false)
    }
  }

  if (submitSuccess) {
    return (
      <div className="py-12 container-custom">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md animate-fade-in">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600 mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Registration Successful!</h2>
            <p className="text-gray-600 mt-2">Your account has been created successfully.</p>
          </div>
          <div className="flex justify-center">
            <Link to="/login" className="btn-primary">
              Proceed to Login
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="py-12 container-custom">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6">Create an Account</h1>
        
        <form onSubmit={handleSubmit} noValidate>
          <FormField
            id="name"
            label="Full Name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            error={errors.name}
          />
          
          <FormField
            id="email"
            label="Email Address"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            error={errors.email}
          />
          
          <FormField
            id="mobile"
            label="Mobile Number"
            type="tel"
            value={formData.mobile}
            onChange={handleChange}
            required
            error={errors.mobile}
          />
          
          <FormField
            id="age"
            label="Age"
            type="number"
            value={formData.age}
            onChange={handleChange}
            required
            error={errors.age}
          />
          
          <FormField
            id="password"
            label="Password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
            error={errors.password}
          />
          
          <FormField
            id="confirmPassword"
            label="Confirm Password"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            error={errors.confirmPassword}
          />
          
          <button
            type="submit"
            className={`btn-primary w-full mt-6 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>
        
        <p className="text-center mt-6 text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-primary-600 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Register