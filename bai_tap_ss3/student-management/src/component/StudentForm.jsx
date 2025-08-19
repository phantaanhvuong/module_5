import React, { Component } from "react";

class StudentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            phone: "",
            email: "",
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { name, phone, email } = this.state;
        if (name && phone && email) {
            this.props.onAdd({ name, phone: parseInt(phone), email });
            this.setState({ name: "", phone: "", email: "" });
        }
    };

    render() {
        return (
            <form
                onSubmit={this.handleSubmit}
                className="mb-6 bg-white shadow-md rounded p-4"
            >
                <div className="grid grid-cols-3 gap-4 mb-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Tên sinh viên"
                        value={this.state.name}
                        onChange={this.handleChange}
                        className="border p-2 rounded"
                    />
                    <input
                        type="number"
                        name="phone"
                        placeholder="Tuổi"
                        value={this.state.phone}
                        onChange={this.handleChange}
                        className="border p-2 rounded"
                    />
                    <input
                        type="text"
                        name="address"
                        placeholder="Địa chỉ"
                        value={this.state.email}
                        onChange={this.handleChange}
                        className="border p-2 rounded"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Thêm sinh viên
                </button>
            </form>
        );
    }
}

export default StudentForm;
