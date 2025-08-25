import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../api.js";

function BookEdit() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [quantity, setQuantity] = useState("");

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const res = await api.get(`/books/${id}`);
                setTitle(res.data.title);
                setQuantity(res.data.quantity);
            } catch (err) {
                alert("Không tìm thấy sách!");
            }
        };
        fetchBook();
    }, [id]);

    const handleSave = async (e) => {
        e.preventDefault();
        try {
            await api.put(`/books/${id}`, { title, quantity: Number(quantity) });
            alert("Cập nhật thành công!");
            navigate("/");
        } catch (err) {
            alert("Cập nhật thất bại!");
        }
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>Edit</h1>
            <form onSubmit={handleSave}>
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
                <button type="submit">Save</button>
            </form>
        </div>
    );
}

export default BookEdit;
