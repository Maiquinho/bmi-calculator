import styles from './App.module.css';
import { Form } from './components/Form';
import { Header } from './components/Header';

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

        <div className={styles.column}>
        Col 2
        </div>

      </div>
    </div>
  )
}