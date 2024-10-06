import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import DonorsPage from './components/DonnersPage';
import ReportsPage from './components/ReportsPage';
import AppointmentPage from './components/AppointmentPage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/donors" element={<DonorsPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/appointment" element={<AppointmentPage />} />
      </Routes>
    </Router>
  );
};

export default App;
