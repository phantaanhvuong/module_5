import React, {Component} from "react";

class StudentInfoComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [
                {id: 1, name: "Phan Tá Anh Vương", age: 20, address: "Hà Nội"},
                {id: 2, name: "Nguyễn Trí Đông", age: 21, address: "Đà Nẵng"},
                {id: 3, name: "Lê Thu Thảo", age: 22, address: "TP. HCM"},
                {id: 4, name: "Trần Trung Chiến", age: 19, address: "Hải Phòng"},
            ]
        }
    }

    render() {
        return (
            <div style={{padding: "20px"}}>
                <h2>Danh sách sinh viên</h2>
                <table border="1" width="100%" cellPadding="8">
                    <thead>
                    <tr style={{background: "#f0f0f0"}}>
                        <th>ID</th>
                        <th>Họ và tên</th>
                        <th>Tuổi</th>
                        <th>Địa chỉ</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.students.map((student,index) =>(
                        <tr key={student.id}>
                            <td>{index+1}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.address}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default StudentInfoComponent;