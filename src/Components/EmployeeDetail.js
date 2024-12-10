import '../styles/Employee.css';
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const EmployeeDetail = ({ employees }) => {
    const { id } = useParams();
    const employee = employees.find(emp => emp.id === parseInt(id));

    if (!employee) {
        return (
            <div className="employee-detail">
                <div>Employee not found</div>
                <Link to="/" className="back-link">Back to Home</Link>
            </div>
        );
    }

    return (
        <div className="employee-detail">
            <h2>Employee Details</h2>
            <table>
                <tbody>
                    <tr>
                        <th><label htmlFor="name">Name: </label></th>
                        <td id="name">{employee.name}</td>
                    </tr>
                    <tr>
                        <th><label htmlFor="email">Email: </label></th>
                        <td id="email">{employee.email}</td>
                    </tr>
                    <tr>
                        <th><label htmlFor="phone">Phone: </label></th>
                        <td id="phone">{employee.phone}</td>
                    </tr>
                    <tr>
                        <th><label htmlFor="department">Department: </label></th>
                        <td id="department">{employee.department}</td>
                    </tr>
                    <tr>
                        <th><label htmlFor="hireDate">Hire Date: </label></th>
                        <td id="hireDate">{employee.hireDate}</td>
                    </tr>
                </tbody>
            </table>
            <Link to="/" className="back-link">Back to Home</Link>
        </div>
    );
};

export default EmployeeDetail;