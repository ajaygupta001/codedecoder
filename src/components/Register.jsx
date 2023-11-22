
import React, { useState } from 'react';
import "../styles/register.css"; // Import the CSS file

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation here before submission
    if (validateForm()) {
      // Submit the form or call API here
      console.log('Form submitted:', formData);
    }
  };

  const validateForm = () => {
    // Basic validation - you can customize as per your requirements
    const { name, number, email, password } = formData;

    if (!name || !number || !email || !password) {
      alert('All fields are mandatory');
      return false;
    }

    if (!validateEmail(email)) {
      alert('Invalid email address');
      return false;
    }

    if (password.length < 8) {
      alert('Password should be at least 8 characters long');
      return false;
    }

    // Add more validations as needed

    return true;
  };

  const validateEmail = (email) => {
    // Email validation regex pattern
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <div className="register-container">
      <h2 className="register-heading">Register Page</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label>Number:</label>
          <input type="text" name="number" value={formData.number} onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="text" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
