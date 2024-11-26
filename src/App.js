import './App.css';
import EmployeeForm from './Components/EmployeeForm';
import React, { useState } from 'react';

function App() {
  const [employees, setEmployees] = useState([]);

  const addEmployee = (employee) => {
    const newEmployees = [...employees, employee];
    setEmployees(newEmployees);
  };

  const saveData = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
  };

  return (
    <div>
      <EmployeeForm onSubmit={addEmployee} />
      <button onClick={saveData}>Save Data</button>
    </div>
  );
}

export default App;
