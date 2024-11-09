
import React, { useState } from "react";
import './todo.css'


function EnhancedToDo() {
    const [todos, setToDos] = useState([]);
    const [inputText, setInputText] = useState('');
    const [editId, setEditId] = useState(null);
    const [editText, setEditText] = useState('');

    const AddToDo = () => {
        if (inputText.trim()) {
            const newToDo = {
                id: Date.now(),
                text: inputText,
                completed: false
            };
            setToDos([...todos, newToDo]);
            setInputText('');
        }
    };

    const editTodo = (id, text) => {
        setEditId(id);
        setEditText(text);
    };

    const saveEdit = (id) => {
        const updatedTodo = todos.map(todo =>
            todo.id === id ? { ...todo, text: editText } : todo
        );
        setToDos(updatedTodo);
        setEditId(null);
        setEditText('');
    };

    const deleteTodo = (id) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setToDos(updatedTodos);
    };

    return (
        <div>
            <h1>ToDo List</h1>
            <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Add your todo"
            />
            <button onClick={AddToDo}>Add to do</button>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {editId === todo.id ? (
                            <>
                                <input
                                    type="text"
                                    value={editText}
                                    onChange={(e) => setEditText(e.target.value)}
                                />
                                <button onClick={() => saveEdit(todo.id)}>Save</button>
                            </>
                        ) : (
                            <>
                                <input
                                    type="checkbox"
                                    checked={todo.completed}
                                    onChange={() =>
                                        setToDos(todos.map((t) =>
                                            t.id === todo.id ? { ...t, completed: !t.completed } : t
                                        ))
                                    }
                                />
                                <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                                    {todo.text}
                                </span>
                                <button onClick={() => editTodo(todo.id, todo.text)}>Edit</button>
                                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default EnhancedToDo;
