import '../EmployeeForm.css';
import React from 'react';

class EmployeeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: '', email: '', phone: ''};
    }

   handleChange = (e) => {
        const { id, value } = e.target;
        this.setState({ [id]: value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        if (this.props.onSubmit) {
            this.props.onSubmit(this.state);
        }
        this.setState({
            name: '',
            email: '',
            phone: ''
        });
    }

    render() {
        return (
            <form className="employee-form" onSubmit={this.handleSubmit}>   
                <h2>Add Employee</h2>
                <div>
                    Name: <input
                        type="text"
                        id="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        placeholder="Name"
                    />
                </div>
                <div>
                    Email: <input
                        type="email" 
                        id="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        placeholder="Email"
                    />
                </div>
                <div>
                    Phone: <input
                        type="tel"
                        id="phone"
                        value={this.state.phone}
                        onChange={this.handleChange}
                        placeholder="Phone"
                    />
                </div>
                <button type="submit">Add</button>
            </form>
        );
    }
}

export default EmployeeForm;
