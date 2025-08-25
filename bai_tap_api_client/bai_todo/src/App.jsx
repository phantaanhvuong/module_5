import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState("");

    // Lấy dữ liệu khi load trang
    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const res = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10");
                setTodos(res.data);
            } catch (err) {
                console.error(err);
                alert("Không thể tải dữ liệu");
            }
        };
        fetchTodos();
    }, []);

    // Hàm xử lý submit todo mới
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!task.trim()) {
            alert("Task không được để trống");
            return;
        }
        try {
            const res = await axios.post("https://jsonplaceholder.typicode.com/todos", {
                title: task,
                completed: false,
            });

            // API giả sẽ không lưu thật, nhưng ta thêm vào danh sách để thấy ngay
            setTodos([res.data, ...todos]);
            alert("Thêm todo thành công!");
            setTask(""); // reset input
        } catch (err) {
            console.error(err);
            alert("Thêm todo thất bại!");
        }
    };

    return (
        <div style={{ maxWidth: "600px", margin: "30px auto", textAlign: "center" }}>
            <h1>Todo List</h1>

            <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Nhập công việc..."
                    style={{ padding: "8px", width: "70%", marginRight: "10px" }}
                />
                <button type="submit" style={{ padding: "8px 15px" }}>Submit</button>
            </form>

            <ul style={{ textAlign: "left" }}>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <input type="checkbox" checked={todo.completed} readOnly />{" "}
                        {todo.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
