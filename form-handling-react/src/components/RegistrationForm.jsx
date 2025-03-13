import { useState } from "react";

const RegistrationForm = () => {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
      });

    const[error, setError] = useState({
        username: '',
        email: '',
        password: '',
      }
      )

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

      const validateForm = () => {
        const newErrors = {};
    
        if (!formData.username) {
          newErrors.username = 'Username is required';
        }
    
        if (!formData.email) {
          newErrors.email = 'Email is required';
        }
    
        if (!formData.password) {
          newErrors.password = 'Password is required';
        }
    
        setError(newErrors);
    
        return Object.keys(newErrors).length === 0;
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
          console.log('Form data submitted:', formData);
          setFormData({
            username: '',
            email: '',
            password: '',
          });
          setError({});
        }
      };

    return(
        <>
        <form action={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        {error.username && <p className="error">{error.username}</p>}

        
      </div>
      <div>
        <label htmlFor="email">email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {error.email && <p className="error">{error.email}</p>}

      </div>
      <div>
        <label htmlFor="password">password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {error.password && <p className="error">{error.password}</p>}

      </div>
      
        </form>





        </>
    )
}

export default RegistrationForm;


