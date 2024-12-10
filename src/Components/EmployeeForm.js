import '../styles/Employee.css';
import React, { useState } from 'react';

const EmployeeForm = ({ onSubmit }) => {
    const getInitialFormState = () => ({
        id: Math.floor(Math.random() * 1000000),
        name: '',
        email: '',
        phone: '',
        department: '',
        hireDate: new Date().toISOString().split('T')[0]
    });

    const [formData, setFormData] = useState(getInitialFormState);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevData => ({ ...prevData, [id]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.phone || !formData.department || !formData.hireDate) {
            alert("Please fill in all fields.");
            return; // Exit the function if validation fails
        }
        
        // Format phone number (e.g., (123) 456-7890)
        const formattedPhone = formData.phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
        const updatedFormData = { ...formData, phone: formattedPhone };

        console.log(updatedFormData);
        if (onSubmit) {
            onSubmit(updatedFormData);
        }
        setFormData(getInitialFormState());
    };

    return (
        <form className="employee-form" onSubmit={handleSubmit}>   
            <h2>Add Employee</h2>
            <div>
                Name: <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                />
            </div>
            <div>
                Email: <input
                    type="email" 
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                />
            </div>
            <div>
                Phone: <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                />
            </div>
            <div>
                <label htmlFor="department">Department: </label>
                <select id="department" value={formData.department} onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="Sales">Sales</option>
                    <option value="HR">HR</option>
                    <option value="Marketing">Marketing</option>
                    <option value="IT">IT</option>
                </select>
            </div>
            <div>
                <label htmlFor="hireDate">Hire Date: </label>
                <input
                    type="date"
                    id="hireDate"
                    value={formData.hireDate}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Add</button>
        </form>
    );
};

export default EmployeeForm;
