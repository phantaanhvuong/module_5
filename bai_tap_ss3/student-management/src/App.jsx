import "./App.css";
import React, { Component } from "react";
import StudentForm from "./component/StudentForm";
import StudentTable from "./component/StudentList.jsx";
import StudentList from "./component/StudentList.jsx";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentList: [
                { name: "Nguyễn Văn A", phone: "0123456789", email: "a@gmail.com" },
                { name: "Trần Thị B", phone: "0987654321", email: "b@gmail.com" },
                { name: "Lê Văn C", phone: "0912345678", email: "c@gmail.com" },
            ],
            form: { name: "", phone: "", email: "" },
            isValid: false,
            indexSelected: -1,
        };
    }

    handleChange = (event) => {
        this.setState(
            (state) => {
                const form = { ...state.form };
                form[event.target.name] = event.target.value;
                return { form };
            },
            () => this.checkInvalidForm()
        );
    };

    checkInvalidForm = () => {
        const { name, phone, email } = this.state.form;
        const value = name && phone && email && /^\d+$/.test(phone);
        this.setState({ isValid: value });
    };

    handleSubmit = () => {
        if (this.state.isValid) {
            const newList = [...this.state.studentList];
            if (this.state.indexSelected > -1) {
                newList.splice(this.state.indexSelected, 1, this.state.form);
            } else {
                newList.push(this.state.form);
            }
            this.setState({
                studentList: newList,
                form: { name: "", phone: "", email: "" },
                isValid: false,
                indexSelected: -1,
            });
        } else {
            alert("Vui lòng nhập đầy đủ thông tin hợp lệ!");
        }
    };

    handleSelect = (studentSelected, index) => {
        this.setState({
            form: JSON.parse(JSON.stringify(studentSelected)),
            indexSelected: index,
        });
    };

    handleDelete = (index) => {
        const newList = [...this.state.studentList];
        newList.splice(index, 1);
        this.setState({ studentList: newList });
    };

    render() {
        return (
            <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
                <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-3xl">
                    <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
                        Student List
                    </h1>

                    {/* Form component */}
                    <StudentForm
                        form={this.state.form}
                        onChange={this.handleChange}
                        onSubmit={this.handleSubmit}
                    />

                    {/* Table component */}
                    <StudentList
                        students={this.state.studentList}
                        onEdit={this.handleSelect}
                        onDelete={this.handleDelete}
                    />
                </div>
            </div>
        );
    }
}

export default App;
