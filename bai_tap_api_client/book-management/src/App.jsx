import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookList from "../../book-management/src/component/book/BookList";
import BookCreate from "../../book-management/src/component/book/BookCreate";
import BookEdit from "../../book-management/src/component/book/BookEdit.jsx";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<BookList />} />
                <Route path="/create" element={<BookCreate />} />
                <Route path="/edit/:id" element={<BookEdit />} />
            </Routes>
        </Router>
    );
}

export default App;
