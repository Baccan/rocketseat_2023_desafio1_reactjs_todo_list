import { useState } from 'react';
import { PlusCircle } from 'phosphor-react';

import styles from './SearchBar.module.css';

interface SearchBarProps {
  handleNewTask: (title: string) => void;
}

export function SearchBar({ handleNewTask }: SearchBarProps) {
    const [title, setTitle] = useState('')

    function onCreateNewTask() {
      if (!title) return
      handleNewTask(title)
      setTitle('')
    }

    return (
      <div className={styles.searchBar}>
          <input 
            type="text" 
            name="addInput" 
            placeholder="Adicionar uma nova tarefa" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button 
            type="button"
            onClick={onCreateNewTask}
          >
            Criar {<PlusCircle size={16} />}
          </button>
      </div>
    );
}