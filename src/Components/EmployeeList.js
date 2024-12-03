import '../styles/Employee.css';
import React from 'react';
import { Link } from 'react-router-dom';

const EmployeeList = ({ employees, onDelete }) => {
    return (
        <div className="employee-list">
            <h1>Employee List</h1>
            <ul>
                {employees.map((employee) => (
                    <li key={employee.id} className="employee-list-item">
                        <Link to={`/employees/${employee.id}`} className="employee-link">
                            {employee.name}
                        </Link>
                        <button 
                            onClick={() => onDelete(employee.id)}
                            className="delete-btn"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EmployeeList; 