import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api.js";

function BookList() {
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        try {
            const res = await api.get("/books");
            setBooks(res.data);
        } catch (err) {
            alert("Lỗi tải dữ liệu!");
        }
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm("Bạn có chắc chắn muốn xóa?")) {
            try {
                await api.delete(`/books/${id}`);
                alert("Xóa thành công!");
                fetchBooks();
            } catch (err) {
                alert("Xóa thất bại!");
            }
        }
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>Library</h1>
            <Link to="/create">
                <button>Add a new Book</button>
            </Link>
            <table border="1" width="100%" style={{ marginTop: "20px" }}>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Quantity</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {books.map((book) => (
                    <tr key={book.id}>
                        <td>{book.title}</td>
                        <td>{book.quantity}</td>
                        <td>
                            <Link to={`/edit/${book.id}`}>
                                <button>Edit</button>
                            </Link>
                            <button onClick={() => handleDelete(book.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default BookList;
