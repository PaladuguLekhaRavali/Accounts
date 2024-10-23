import React, { useState } from 'react';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [errors, setErrors] = useState({}); // State for error messages

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {}; // Object to hold new errors

    // Validation logic
    if (!name) {
      newErrors.name = 'Name is required.';
    }
    if (!email) {
      newErrors.email = 'Email is required.';
    }
    if (!password) {
      newErrors.password = 'Password is required.';
    }

    // If there are errors, update state and do not proceed
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Handle registration logic here
    alert(`Registered with Name: ${name}, Email: ${email}`);
    // Clear the form after successful registration
    setName('');
    setEmail('');
    setPassword('');
    setErrors({}); // Clear errors
  };

  return (
    <div className="container mt-5">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
          />
          {errors.name && <small className="text-danger">{errors.name}</small>}
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
          {errors.email && <small className="text-danger">{errors.email}</small>}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          {errors.password && <small className="text-danger">{errors.password}</small>}
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
};

export default Register;
