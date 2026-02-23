import { useState } from "react";
import './App.css';

function App() {
  const titulo = <h1>Mi titulo</h1>
  const calculo = <h2>{sumar(5, 10)}</h2>
  return <div>{titulo}{calculo}</div>
}

function sumar(a, b) {
    const resultado = a + b
    return <p>{resultado}</p>
  }

export default App;