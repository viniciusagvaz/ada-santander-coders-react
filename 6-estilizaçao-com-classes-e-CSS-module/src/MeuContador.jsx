import { useState } from "react"
import styles from './button.module.css'

export default function  MeuContador(){
   console.log('renderizando meu contador...')
   
   const [contador, setContador] = useState(0)
   
   function aumentar(){
      setContador(contador + 1)
   }
   
   return(
      <div className="container"> 
         <h1>Meu Contador</h1>
         <h3>{contador}</h3>
         <button className={styles.myButton} onClick={aumentar}>Aumentar</button>
      </div>
   )
}