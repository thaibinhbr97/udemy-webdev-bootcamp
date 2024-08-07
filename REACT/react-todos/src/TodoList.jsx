import { Box } from '@mui/material';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import TodoForm from "./TodoForm";
import TodoItem from './TodoItem';

import { useEffect, useState } from 'react';

const getInitialData = () => {
    const data = JSON.parse(localStorage.getItem("todos"));
    if (!data) return [];
    return data;
}


export default function TodoList() {
    const [todos, setTodos] = useState(getInitialData);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const removeTodo = (id) => {
        setTodos(prevTodos => prevTodos.filter((t) => t.id !== id));
    };
    const toggleTodo = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo);
        })
    };
    const addTodo = (text) => {
        setTodos(prevTodos => [...prevTodos, { id: crypto.randomUUID(), text: text, completed: false }]);
    };

    return (
        <Box sx={{
            display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', m: 3
        }}>
            <Typography variant="h2" component="h1" sx={{ flexGrow: 1 }}>
                Todos
            </Typography>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {todos.map((todo) => (
                    <TodoItem todo={todo} key={todo.id} remove={removeTodo} toggle={() => toggleTodo(todo.id)} />
                ))}
                <TodoForm add={addTodo} />
            </List >
        </Box>
    )
}
