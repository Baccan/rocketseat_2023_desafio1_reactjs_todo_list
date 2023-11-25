import styles from './Header.module.css';
import logotipo from '../assets/logotipo-todo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logotipo} alt='Logotipo - Todo List' title='Logotipo - Todo List' />
    </header>
  );
}