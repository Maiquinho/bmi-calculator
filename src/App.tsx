import styles from './App.module.css';
import { Card } from './components/Card';
import { Form } from './components/Form';
import { Header } from './components/Header';
import { bmiLevels } from './helpers/bmi';

export default function App() {
  return (
    <div className={styles.main}>
      <Header />

      <div className={styles.container}>
        <div className={styles.column}>
          <h1>Calcule o seu IMC.</h1>
          <p>IMC é a sigla para Indice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>
          
         <Form />
        </div>

        <div className={`${styles.column} ${styles.flex}`}>
          <div className={styles.grid}>
            {bmiLevels.map((item, key) => (
              <Card key={key} item={item} />
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}