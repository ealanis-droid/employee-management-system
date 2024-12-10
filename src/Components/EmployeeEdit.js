import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const EmployeeEdit = ({ employees, onEdit, department, hireDate }) => {
    const { id } = useParams();
    const employee = employees.find(emp => emp.id === parseInt(id));
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const updatedEmployee = {
            id: employee.id,
            name: event.target.name.value,
            email: event.target.email.value,
            phone: event.target.phone.value,
            department: event.target.department.value,
            // Add other fields as necessary
        };
        onEdit(updatedEmployee);
        navigate(`/employee/${employee.id}`);
    };

    if (!employee) {
        return <div>Employee not found</div>;
    }

    return (
        <div className="employee-detail">
            <h2>Edit Employee</h2>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <th><label htmlFor="name">Name:</label></th>
                            <td>
                                <input type="text" name="name" defaultValue={employee.name} />
                            </td>
                        </tr>
                        <tr>
                            <th><label htmlFor="email">Email:</label></th>
                            <td>
                                <input type="email" name="email" defaultValue={employee.email} />
                            </td>
                        </tr>
                        <tr>
                            <th><label htmlFor="phone">Phone:</label></th>
                            <td>
                                <input type="tel" name="phone" defaultValue={employee.phone} />
                            </td>
                        </tr>
                        <tr>
                            <th><label htmlFor="department">Department:</label></th>
                            <td>
                                <input type="text" name="department" defaultValue={department} />
                            </td>
                        </tr>
                        <tr>
                            <th><label htmlFor="hireDate">Hire Date:</label></th>
                            <td>
                                <input type="text" name="hireDate" value={hireDate} readOnly />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button type="edit-btn">Save</button>
            </form>
            <Link to="/" className="back-link">Back to Home</Link>
        </div>
    );
};

export default EmployeeEdit;
