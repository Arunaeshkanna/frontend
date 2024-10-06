import './AppointmentPage.css';
import { useState } from 'react';

const AppointmentPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the form from refreshing the page
    setFormSubmitted(true); // Set state to indicate form submission
    alert('Appointment scheduled successfully!'); // Show alert message
  };

  return (
    <div className="appointment-page">
      <div className="form-container">
        <h1>Schedule an Appointment</h1>
        <form className="appointment-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="patientName">Patient Name:</label>
            <input type="text" id="patientName" name="patientName" required />
          </div>
          <div className="form-group">
            <label htmlFor="contactNumber">Contact Number:</label>
            <input type="tel" id="contactNumber" name="contactNumber" required />
          </div>
          <div className="form-group">
            <label htmlFor="appointmentDate">Appointment Date:</label>
            <input type="date" id="appointmentDate" name="appointmentDate" required />
          </div>
          <div className="form-group">
            <label htmlFor="notes">Notes:</label>
            <textarea id="notes" name="notes" rows="4" />
          </div>
          <button type="submit" className="submit-button">Schedule Appointment</button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentPage;
