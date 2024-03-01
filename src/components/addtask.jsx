import React, { useEffect, useState } from "react";
import Tasks from './tasks';

const ToDoForm = () => {
    const [tasks, setTasks] = useState(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks'));
        return storedTasks || [];
    });
    const [taskInput, setTaskInput] = useState("");

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    function addTask(e) {
        e.preventDefault();
        const newTask = { name: taskInput };
        setTasks([...tasks, newTask]);
        setTaskInput("");
    }

    function removeTask(index) {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    }

    function renameTask(index, newName) {
        const updatedTasks = [...tasks];
        updatedTasks[index].name = newName;
        setTasks(updatedTasks);
    }

    return (
        <div className="bg-gray-900 rounded-xl px-4 py-4 shadow-lg">
            <form onSubmit={addTask} className="space-x-4">
                <button className="text-white bg-[#0080FE] py-1 px-2 rounded-xl">Add task</button>
                <input
                    className="bg-gray-700 py-1 px-2 rounded-xl text-white"
                    type="text"
                    placeholder="write your task..."
                    value={taskInput}
                    onChange={(e) => setTaskInput(e.target.value)}
                />
            </form>
            {tasks.map((task, index) => (
                <Tasks
                    key={index}
                    {...task}
                    onRename={(newName) => renameTask(index, newName)}
                    removeTask={() => removeTask(index)}
                />
            ))}
        </div>
    );
}

export default ToDoForm;