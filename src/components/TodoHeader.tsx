import styles from './TodoHeader.module.css';

interface TodoHeaderProps {
  totalTasks: number;
  totalDoneTasks: number;
}

export function TodoHeader({ totalTasks, totalDoneTasks }: TodoHeaderProps) {
  return (
    <header className={styles.header}>
      <span className={styles.totalTasks}>
        Tarefas criadas 
        <span className={styles.counter}>
          {totalTasks}
        </span>
      </span>
      
      <span className={styles.doneTasks}>
        Concluídas 
        <span className={styles.counter}>
          {totalDoneTasks} de {totalTasks}
        </span>
      </span>
    </header>
  )
}