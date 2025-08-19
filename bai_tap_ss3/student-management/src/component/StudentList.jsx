import React, { Component } from "react";

class StudentList extends Component {
    render() {
        const { students, onDelete } = this.props;
        return (
            <table className="table-auto w-full border-collapse border border-gray-300">
                <thead>
                <tr className="bg-gray-200">
                    <th className="border px-4 py-2">ID</th>
                    <th className="border px-4 py-2">Tên</th>
                    <th className="border px-4 py-2">Số điện thoai</th>
                    <th className="border px-4 py-2">Email</th>
                    <th className="border px-4 py-2">Hành động</th>
                </tr>
                </thead>
                <tbody>
                {students.length > 0 ? (
                    students.map((student,index) => (
                        <tr key={student.id}>
                            <td className="border px-4 py-2">{index +1}</td>
                            <td className="border px-4 py-2">{student.name}</td>
                            <td className="border px-4 py-2">{student.phone}</td>
                            <td className="border px-4 py-2">{student.email}</td>
                            <td className="border px-4 py-2 text-center">
                                <button
                                    onClick={() => onDelete(student.id)}
                                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                >
                                    Xóa
                                </button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="5" className="text-center p-4">
                            Không có sinh viên nào
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        );
    }
}

export default StudentList;

