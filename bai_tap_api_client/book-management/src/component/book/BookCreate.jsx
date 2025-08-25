import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api.js";

function BookCreate() {
    const [title, setTitle] = useState("");
    const [quantity, setQuantity] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post("/books", { title, quantity: Number(quantity) });
            alert("Tạo mới thành công!");
            navigate("/");
        } catch (err) {
            alert("Tạo mới thất bại!");
        }
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>Add a new Book</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title: </label>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label>Quantity: </label>
                    <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                </div>
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default BookCreate;
