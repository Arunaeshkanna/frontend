import React, { useState } from 'react';
import './DonnersPage.css';

const DonorsPage = () => {
  const [donors, setDonors] = useState([
    { name: 'John Doe', bloodType: 'A+', contact: '(123) 456-7890' },
    { name: 'Jane Smith', bloodType: 'O-', contact: '(098) 765-4321' }
  ]);

  const [newDonor, setNewDonor] = useState({ name: '', bloodType: '', contact: '' });
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewDonor({ ...newDonor, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the new donor to the list
    setDonors([...donors, newDonor]);
    // Clear the form
    setNewDonor({ name: '', bloodType: '', contact: '' });
    // Show alert
    setShowAlert(true);
    console.log("Alert state: ", showAlert); // For debugging
    setTimeout(() => {
      setShowAlert(false);
      console.log("Alert state after timeout: ", showAlert); // For debugging
    }, 3000); // Hide the alert after 3 seconds
  };

  return (
    <div className="donors-page">
      <h1>Blood Donors</h1>
      <p>List of registered blood donors:</p>
      <table className="donors-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Blood Type</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {donors.map((donor, index) => (
            <tr key={index}>
              <td>{donor.name}</td>
              <td>{donor.bloodType}</td>
              <td>{donor.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Add New Donor</h2>
      <form onSubmit={handleSubmit} className="donor-form">
        <div className="form-group">
          <label>Name:</label>
          <input 
            type="text" 
            name="name" 
            value={newDonor.name} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Blood Type:</label>
          <input 
            type="text" 
            name="bloodType" 
            value={newDonor.bloodType} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Contact:</label>
          <input 
            type="text" 
            name="contact" 
            value={newDonor.contact} 
            onChange={handleChange} 
            required 
          />
        </div>
        <button type="submit" className="submit-button">Add Donor</button>
      </form>

      {showAlert && <div key={Date.now()} className="alert">Donor added successfully!</div>}
    </div>
  );
};

export default DonorsPage;
