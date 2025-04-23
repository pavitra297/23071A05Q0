import Hero from '../components/common/Hero'
import { FiShoppingBag, FiTruck, FiUsers, FiCreditCard } from 'react-icons/fi'

const About = () => {
  // Company stats
  const stats = [
    { id: 1, name: 'Products', value: '5,000+' },
    { id: 2, name: 'Customers', value: '25,000+' },
    { id: 3, name: 'Countries', value: '15+' },
    { id: 4, name: 'Satisfaction', value: '99%' }
  ]

  // Team members
  const teamMembers = [
    {
      id: 1,
      name: 'Jane Doe',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/3746314/pexels-photo-3746314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 2,
      name: 'John Smith',
      role: 'CTO',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 3,
      name: 'Emily Johnson',
      role: 'Marketing Director',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 4,
      name: 'Michael Chen',
      role: 'Customer Success',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <Hero 
        title="About ShopEase"
        subtitle="Providing quality products and excellent customer service since 2015"
        image="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      {/* Our Story */}
      <section className="py-16 container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              ShopEase was founded in 2015 with a simple mission: to make online shopping easy, affordable, and enjoyable for everyone. What started as a small venture has grown into a trusted e-commerce platform serving thousands of customers worldwide.
            </p>
            <p className="text-gray-600 mb-4">
              Our dedicated team works tirelessly to curate high-quality products across multiple categories, ensuring that our customers have access to the best items at competitive prices. We believe that shopping should be a hassle-free experience, which is why we've built ShopEase with user-friendliness and convenience in mind.
            </p>
            <p className="text-gray-600">
              As we continue to grow, our commitment to excellence remains unwavering. We're constantly innovating and improving our services to provide an even better shopping experience for our valued customers.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3184341/pexels-photo-3184341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Team working together"
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
        </div>
      </section>
      
      {/* Company Stats */}
      <section className="bg-gray-50 py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.id} className="bg-white p-6 rounded-lg shadow-sm text-center transform transition-transform hover:scale-105">
                <div className="text-3xl font-bold text-primary-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 container-custom">
        <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600 mb-4">
              <FiShoppingBag className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Quality</h3>
            <p className="text-gray-600">
              We're committed to offering only the highest quality products to our customers.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600 mb-4">
              <FiTruck className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Reliability</h3>
            <p className="text-gray-600">
              Count on us for timely deliveries and consistent service that exceeds expectations.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600 mb-4">
              <FiUsers className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Customer-First</h3>
            <p className="text-gray-600">
              Our customers are at the heart of everything we do. Your satisfaction is our priority.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600 mb-4">
              <FiCreditCard className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Transparency</h3>
            <p className="text-gray-600">
              We believe in clear, honest communication and fair pricing without hidden costs.
            </p>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="bg-gray-50 py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About