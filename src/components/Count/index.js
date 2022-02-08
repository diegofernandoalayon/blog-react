import {suma} from './utils'
import { useState} from 'react'

export default function Count ({inital}){
  // const Inital = 0
  const [contador, setContador] = useState(inital)

  // const resultado = suma(1,3)

  return (
    <>
      <h1>count {contador} </h1>
      <button onClick={()=>{setContador(actual => actual += 1)}}>+</button>
      <button onClick={() => {setContador(inital)}}>reset</button>
      <button onClick={()=>{setContador(actual => actual -= 1)}}>-</button>
    </>
  )
}

