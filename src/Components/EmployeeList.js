import '../styles/Employee.css';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const EmployeeList = ({ employees, onDelete, onEdit }) => {
    const navigate = useNavigate();

    return (
        <div className="employee-list">
            <h1>Employee List</h1>
            <ul>
                {employees.map((employee) => (
                    <li key={employee.id} className="employee-list-item">
                        <Link to={`/employee/${employee.id}`} className="employee-link">
                            {employee.name}
                        </Link>
                        <button 
                            onClick={() => onDelete(employee.id)}
                            className="delete-btn"
                        >
                            Delete
                        </button>
                        <button 
                            onClick={() => {
                                console.log(`Editing employee with id: ${employee.id}`);
                                onEdit(employee.id);
                                navigate(`/employee/${employee.id}/edit`);
                            }}
                            className="edit-btn"
                        >
                            Edit
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EmployeeList; 