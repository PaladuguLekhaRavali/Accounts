import React, { useState } from 'react';

const Account = () => {
  const [name, setName] = useState('Lekha');
  const [email, setEmail] = useState('Ravali@gmail.com');
  const [password, setPassword] = useState('password123');
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

    // Handle account update logic here
    alert(`Updated account info for ${name}`);
    // Clear the form after successful update
    setName('');
    setEmail('');
    setPassword('');
    setErrors({}); // Clear errors
  };

  return (
    <div className="container mt-5">
      <h2>Account Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
          />
          {errors.password && <small className="text-danger">{errors.password}</small>}
        </div>
        <button type="submit" className="btn btn-primary">Update Account</button>
      </form>
    </div>
  );
};

export default Account;
