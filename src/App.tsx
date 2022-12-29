import styles from './App.module.css';
import { Header } from './components/Header';

export default function App() {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.container}>
        <div className={styles.column}>
        Col 1
        </div>
        <div className={styles.column}>
        Col 2
        </div>
      </div>
    </div>
  )
}