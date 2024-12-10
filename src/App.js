import './App.css';
import EmployeeForm from './Components/EmployeeForm';
import EmployeeList from './Components/EmployeeList';
import EmployeeDetail from './Components/EmployeeDetail';
import EmployeeEdit from './Components/EmployeeEdit';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [employees, setEmployees] = useState(() => {
    // Initialize state from localStorage
    const savedEmployees = localStorage.getItem('employees');
    return savedEmployees ? JSON.parse(savedEmployees) : [];
  });

  // Save to localStorage whenever employees changes
  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
  }, [employees]);

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter(emp => emp.id !== id));
  };

  const editEmployee = (updatedEmployee) => {
    setEmployees(employees.map(emp => emp.id === updatedEmployee.id ? updatedEmployee : emp));
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <EmployeeForm onSubmit={addEmployee}/>
              <EmployeeList 
                employees={employees} 
                onDelete={deleteEmployee}
                onEdit={editEmployee}
              />
            </>
          } />
          <Route path="/employee/:id" element={<EmployeeDetail employees={employees} />} />
          <Route path="/employee/:id/edit" element={<EmployeeEdit employees={employees} onEdit={editEmployee} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
