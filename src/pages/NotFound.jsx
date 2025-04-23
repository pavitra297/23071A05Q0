import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="container-custom py-16 text-center">
      <div className="max-w-md mx-auto">
        <h1 className="text-6xl font-bold text-primary-600 mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-6">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn-primary inline-flex">
          Return to Homepage
        </Link>
      </div>
    </div>
  )
}

export default NotFound