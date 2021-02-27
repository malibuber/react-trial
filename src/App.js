import React from 'react'
import Header from './components/Header'
import Tasks from "./components/Tasks"; 
import PropTypes from 'prop-types';
import { useState } from "react";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask , setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "sa",
      day: 'Feb 5th',
      reminder: false
    },
    {
      id: 2,
      text: "sa",
      day: 'Feb 5th',
      reminder: false
    }
    ,
    {
      id: 3,
      text: "sa",
      day: 'Feb 5th',
      reminder: false
    }
  ])

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  // toggle reminder

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id 
    ? {...task, reminder: !task.reminder} : task))
  }

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id ,...task}
    setTasks([...tasks , newTask]);
  };

  return (
    <div className="container">
        <Header title="as boy" onAdd={() => setShowAddTask(!showAddTask)} showAdd ={showAddTask}/>
        {showAddTask && <AddTask onAdd={addTask}/>}
        {
          tasks.length > 0 ? (
          <Tasks tasks={tasks} 
        onDelete={deleteTask}
        onToggle={toggleReminder}
        />
        ) : ("nothing bro")
      }
    </div>
  );
}


Header.prototype = {
  title: PropTypes.string.isRequired,
}

export default App;
