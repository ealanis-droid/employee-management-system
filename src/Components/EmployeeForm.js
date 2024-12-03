import '../styles/Employee.css';
import React, { useState } from 'react';

const EmployeeForm = ({ onSubmit }) => {

    const getInitialFormState = () => ({
        id: Math.floor(Math.random() * 1000000),
        name: '',
        email: '',
        phone: ''
    });

    const [formData, setFormData] = useState(getInitialFormState);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevData => ({ ...prevData, [id]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.phone) {
            alert("Please fill in all fields.");
            return; // Exit the function if validation fails
        }
        console.log(formData);
        if (onSubmit) {
            onSubmit(formData);
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
            <button type="submit">Add</button>
        </form>
    );
};

export default EmployeeForm;
