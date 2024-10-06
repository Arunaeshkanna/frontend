import './ReportsPage.css';

const ReportsPage = () => {
  return (
    <div className="reports-page">
      <h1>Blood Reports</h1>
      <p>Real-time hospital report records:</p>
      <table className="reports-table">
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>Report Date</th>
            <th>Blood Type</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {/* Example static data; replace with dynamic data from your API */}
          <tr>
            <td>John Doe</td>
            <td>2024-01-01</td>
            <td>A+</td>
            <td>Normal</td>
          </tr>
          <tr>
            <td>Jane Smith</td>
            <td>2024-01-02</td>
            <td>O-</td>
            <td>Critical</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ReportsPage;
