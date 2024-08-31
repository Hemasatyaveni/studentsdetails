// src/StudentForm.js

import React, { useState } from 'react';

function StudentForm() {
  const [formData, setFormData] = useState({
    name: '',
    branch: '',
    rollno: '',
    email: '',
  });

  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwnWZqQouaJbkjQF4HE9p5d48JpzvWmVsdeTMqgiXcDYOWdvtxyAVfxpDb19cMBuEGjYg/exec';

    fetch(scriptURL, { method: 'POST', body: new FormData(event.target) })
      .then((response) => {
        setStatusMessage('Submitted successfully!');
        setFormData({ name: '', branch: '', rollno: '', email: '' }); // Reset form fields
      })
      .catch((error) => {
        setStatusMessage('Error! Form submission failed.');
        console.error('Error!', error.message);
      });
  };

  return (
    <div className="container">
      <h1>Student Details Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="branch">Branch:</label>
          <input
            type="text"
            id="branch"
            name="branch"
            value={formData.branch}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="rollno">Roll No:</label>
          <input
            type="text"
            id="rollno"
            name="rollno"
            value={formData.rollno}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {statusMessage && <div id="status">{statusMessage}</div>}
    </div>
  );
}

export default StudentForm;
