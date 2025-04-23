// Email validation
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Password validation (min 8 chars, includes number and special char)
export const isValidPassword = (password) => {
  return password.length >= 8 && 
    /\d/.test(password) && 
    /[!@#$%^&*(),.?":{}|<>]/.test(password)
}

// Mobile number validation
export const isValidMobile = (mobile) => {
  const mobileRegex = /^\d{10}$/
  return mobileRegex.test(mobile)
}

// Name validation
export const isValidName = (name) => {
  return name.trim().length >= 2
}

// Age validation (must be at least 18)
export const isValidAge = (age) => {
  const ageNumber = parseInt(age, 10)
  return !isNaN(ageNumber) && ageNumber >= 18 && ageNumber <= 120
}

// Subject validation
export const isValidSubject = (subject) => {
  return subject.trim().length >= 3
}

// Message validation
export const isValidMessage = (message) => {
  return message.trim().length >= 10
}