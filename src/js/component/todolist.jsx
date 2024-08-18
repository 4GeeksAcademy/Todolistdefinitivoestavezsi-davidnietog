import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faTrash } from "@fortawesome/free-solid-svg-icons";

const TodoList = () => {
    const [inputValue, setInputValue] = useState('');
    const [tasks, setTasks] = useState(['Hacer la comida', 'Limpiar la casa', 'Sacar al perro'])

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && inputValue.trim() !== '') {
            setTasks([...tasks, inputValue]);
            setInputValue('');
        }
    };
    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
      };

      return (
        <>
            <div className="container" id="todoList">
                <h1>to do list</h1>
                <ul>
                    <li>
                        <input 
                            className="form-control form-control-lg" 
                            type="text" 
                            placeholder="Añadir tareas aquí" 
                            aria-label=".form-control-lg example" 
                            onChange={e => setInputValue(e.target.value)} 
                            value={inputValue}
                            onKeyDown={handleKeyDown}
                        />
                    </li>
                    {tasks.map((task, index) => (
                        <li key={index}>{task} <button className="deleteButton" onClick={() => deleteTask(index)}>
                        <FontAwesomeIcon icon={faTrash} />
                      </button></li>
                    ))}
                </ul>
                <div className="todoList-footer">{tasks.length} tasks left</div>
            </div>
        </>
    );
}
export default TodoList;