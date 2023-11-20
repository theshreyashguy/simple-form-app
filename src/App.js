import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(formData.name === '' || formData.mobile  === ''|| formData.email === '' || formData.address === ''){
      alert('Fill the Form Completly');
    }
    else{
    try {
      const response = await fetch('http://localhost:3001/submitForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form submitted successfully!');
        setFormData({
          name: '',
          mobile: '',
          email: '',
          address: '',
        })
        alert('Form submitted successfully!');
      } else {
        alert.error('Form submission failed!');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  }
  };

  return (
      <div className="App">
        <form className="main" onSubmit={handleSubmit}>
          <label>
            <p>Name:</p>
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
          </label>
          <br />
          <label>
            <p>Mobile:</p>
            <input className='mobieNo' type="number" name="mobile" value={formData.mobile} onChange={handleChange} />
          </label>
          <br />
          <label>
            <p>Email:</p>

            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </label>
          <br />
          <label>
            <p>Address:</p>

            <textarea name="address" value={formData.address} onChange={handleChange} />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
  );
}

export default App;
