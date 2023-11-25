import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

import { Header } from './components/Header'
import { SearchBar } from './components/SearchBar';
import { TodoHeader } from './components/TodoHeader';
import { TodoEmpty } from './components/TodoEmpty';
import { Task } from './components/Task';

import styles from './App.module.css';

import './global.css'

export function App() {
  const [tasks, setTasks] = useState([
    { 
      id: uuidv4(), 
      title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. 1', 
      isCompleted: false,
    },
    {
      id: uuidv4(), 
      title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. 2', 
      isCompleted: false,
    },
    {
      id: uuidv4(), 
      title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. 3', 
      isCompleted: true,
    },
  ])

  function onToggleTaskCompletion(id: string) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        }
      }
      return task
    })

    setTasks(updatedTasks)
  }

  function onDeleteTask(id: string) {
    const updatedTasks = tasks.filter((task) => task.id !== id)

    setTasks(updatedTasks)
  }

  function handleNewTask(title: string) {
    const newTask = {
      id: uuidv4(),
      title,
      isCompleted: false,
    }

    setTasks([...tasks, newTask])
  }

  function getTotalDoneTasks() {
    return tasks.reduce((total, task) => {
      if (task.isCompleted) {
        return total + 1
      }
      return total
    }
    , 0)
  }

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <SearchBar handleNewTask={handleNewTask} />

        <main>
          <TodoHeader totalTasks={tasks.length} totalDoneTasks={getTotalDoneTasks()} />
          
          {tasks.length === 0 ? (
            <TodoEmpty />
          ) : tasks.map((task) => {
            return (
              <Task 
                key={task.id} {...task} 
                onToggleTaskCompletion = {onToggleTaskCompletion} 
                onDeleteTask = {onDeleteTask}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}