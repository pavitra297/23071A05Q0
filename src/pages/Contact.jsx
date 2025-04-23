import { useState } from 'react'
import FormField from '../components/common/FormField'
import { isValidName, isValidEmail, isValidSubject, isValidMessage } from '../utils/validation'
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
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
    
    // Subject validation
    if (!formData.subject) {
      newErrors.subject = 'Subject is required'
    } else if (!isValidSubject(formData.subject)) {
      newErrors.subject = 'Subject should be at least 3 characters'
    }
    
    // Message validation
    if (!formData.message) {
      newErrors.message = 'Message is required'
    } else if (!isValidMessage(formData.message)) {
      newErrors.message = 'Message should be at least 10 characters'
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
        console.log('Contact form submitted:', formData)
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
            <h2 className="text-2xl font-bold text-gray-800">Message Sent!</h2>
            <p className="text-gray-600 mt-2">Thank you for contacting us. We'll get back to you as soon as possible.</p>
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => {
                setSubmitSuccess(false)
                setFormData({
                  name: '',
                  email: '',
                  subject: '',
                  message: ''
                })
              }}
              className="btn-primary"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container-custom py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-md bg-primary-100 text-primary-600">
                    <FiMapPin className="h-5 w-5" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-base font-medium text-gray-900">Our Store</h3>
                  <p className="mt-1 text-gray-600">123 Shopping Street</p>
                  <p className="text-gray-600">Retail City, RC 10101</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-md bg-primary-100 text-primary-600">
                    <FiPhone className="h-5 w-5" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-base font-medium text-gray-900">Phone</h3>
                  <p className="mt-1 text-gray-600">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-md bg-primary-100 text-primary-600">
                    <FiMail className="h-5 w-5" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-base font-medium text-gray-900">Email</h3>
                  <p className="mt-1 text-gray-600">info@shopease.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-md bg-primary-100 text-primary-600">
                    <FiClock className="h-5 w-5" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-base font-medium text-gray-900">Opening Hours</h3>
                  <p className="mt-1 text-gray-600">Monday - Friday: 9am - 8pm</p>
                  <p className="text-gray-600">Saturday - Sunday: 10am - 6pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-6">Send Us a Message</h2>
            
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FormField
                  id="name"
                  label="Your Name"
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
              </div>
              
              <FormField
                id="subject"
                label="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                error={errors.subject}
                className="mt-6"
              />
              
              <FormField
                id="message"
                label="Message"
                type="textarea"
                value={formData.message}
                onChange={handleChange}
                required
                error={errors.message}
                className="mt-6"
              />
              
              <div className="mt-6">
                <button
                  type="submit"
                  className={`btn-primary w-full sm:w-auto ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact