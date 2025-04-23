const Hero = ({ title, subtitle, image, overlay = true }) => {
  return (
    <div className="relative bg-gray-900 text-white">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${image})`,
          opacity: 0.7
        }}
      ></div>
      
      {/* Overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-black opacity-40"></div>
      )}
      
      {/* Content */}
      <div className="relative container-custom py-20 md:py-32 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight animate-fade-in">{title}</h1>
        {subtitle && (
          <p className="text-lg md:text-xl max-w-3xl animate-slide-in">{subtitle}</p>
        )}
      </div>
    </div>
  )
}

export default Hero