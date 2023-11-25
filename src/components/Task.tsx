import { Trash } from 'phosphor-react';

import styles from './Task.module.css'

interface TaskProps {
  id: string;
  title: string;
  isCompleted: boolean;
  onToggleTaskCompletion: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export function Task({ id, title, isCompleted, onToggleTaskCompletion, onDeleteTask }: TaskProps) {
  return (
    <div className={styles.task}>
      <label className={styles.customCheckbox}>
        <input type="checkbox" checked={isCompleted} onChange={() => onToggleTaskCompletion(id)} />
        <span className={styles.checkmark}></span>
      </label>
      <h1 className={isCompleted ? styles.completed : ''}>{title}</h1>
      
      <Trash size={24} onClick={() => onDeleteTask(id)} />
    </div>
  )
}