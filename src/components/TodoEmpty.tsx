import { ClipboardText } from 'phosphor-react';

import styles from './TodoEmpty.module.css'

export function TodoEmpty() {
  return (
    <div className={styles.container}>
      <ClipboardText size={64} />
      <div className={styles.content}>
        <p className={styles.title}>
          Você ainda não tem tarefas cadastradas
        </p>
        <p className={styles.description}>
          Crie tarefas e organize seus itens a fazer
        </p>
      </div>
    </div>
  )
}