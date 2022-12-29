import { FormEvent, useState } from 'react';
import styles from './styles.module.css';

export function Form(){
    const [heightField, setHeightField] = useState<number>(0);
    const [weightField, setWeightField] = useState<number>(0);


    function handleCalculateForm(e: FormEvent){
        e.preventDefault();

        if(heightField && weightField){
            alert('seu IMC é...')
        }else{
            alert('digite os campos corretamente!');
        }
    }


    return(
        <form className={styles.form} onSubmit={handleCalculateForm}>
            <input 
                type="number" 
                placeholder="Digite a sua altura. Ex: 1.5 (em metros)"
                value={heightField > 0 ? heightField : ''}
                onChange={e => setHeightField(parseFloat(e.target.value))}
            />
            <input 
                type="number" 
                placeholder="Digite a seu peso. Ex: 75.3 (em Kg)"
                value={weightField > 0 ? weightField : ''}
                onChange={e => setWeightField(parseFloat(e.target.value))}
            />

            <button type="submit">Calcular</button>
        </form>
    )
}