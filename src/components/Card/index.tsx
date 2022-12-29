import { bmiLevel } from '../../helpers/bmi';
import styles from './styles.module.css';


interface CardProps {
    item: bmiLevel
}


export function Card({ item }: CardProps){
    return(
        <div>Card</div>
    )
}