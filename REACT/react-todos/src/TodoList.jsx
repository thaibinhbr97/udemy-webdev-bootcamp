import List from '@mui/material/List';
import TodoItem from './TodoItem';

import { useState } from 'react';

const initialTodos = [
    { id: '1', text: 'walk the dog', completed: false },
    { id: '2', text: 'eat the burger', completed: false },
    { id: '3', text: 'fold the clothes', completed: true },
    { id: '4', text: 'take a walk', completed: false },
]

export default function TodoList() {
    const [todos, setTodos] = useState(initialTodos);
    const removeTodo = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.filter((t) => t.id !== id);
        })
    }
    const toggleTodo = (id) => {
        setTodos(prevTodos => {
            return prevTodos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed };
                } else {
                    return todo;
                }
            })
        })
    };

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {todos.map((todo) => (
                <TodoItem todo={todo} key={todo.id} remove={removeTodo} toggle={() => toggleTodo(todo.id)} />
            ))}
        </List >
    )
}
