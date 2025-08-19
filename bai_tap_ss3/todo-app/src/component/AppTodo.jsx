import React, { Component } from "react";

class AppTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            item: "",
        };
    }

    handleChange = (event) => {
        this.setState({ item: event.target.value });
    };

    handleAddItem = () => {
        const { item, list } = this.state;
        if (item.trim() !== "") {
            this.setState({
                list: [...list, item],
                item: "",
            });
        }
    };

    render() {
        return (
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
                    <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">
                        Todo List
                    </h2>

                    {/* Input + Button */}
                    <div className="flex space-x-2 mb-6">
                        <input
                            type="text"
                            value={this.state.item}
                            onChange={this.handleChange}
                            placeholder="Nhập công việc..."
                            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <button
                            onClick={this.handleAddItem}
                            className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-lg transition duration-200"
                        >
                            Add
                        </button>
                    </div>

                    {/* Danh sách công việc */}
                    <ul className="space-y-2">
                        {this.state.list.map((todo, index) => (
                            <li
                                key={index}
                                className="bg-gray-50 px-4 py-2 rounded-lg shadow-sm border border-gray-200"
                            >
                                {todo}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default AppTodo;
