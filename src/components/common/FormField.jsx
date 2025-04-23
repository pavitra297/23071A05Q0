const FormField = ({ 
  id, 
  label, 
  type = 'text', 
  value, 
  onChange, 
  placeholder = '', 
  required = false,
  error = '',
  className = ''
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      <label htmlFor={id} className="label">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      
      {type === 'textarea' ? (
        <textarea
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`input ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
          rows="4"
        ></textarea>
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`input ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
        />
      )}
      
      {error && <p className="error">{error}</p>}
    </div>
  )
}

export default FormField