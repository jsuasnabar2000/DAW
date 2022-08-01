import { useState } from 'react'
import './App.css'

function ComponenteInicio() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">

        <h3>Inicio</h3>
		<p>Lorem ipsum dolor sit amet.</p>



      </header>
    </div>
  )
}

export default ComponenteInicio
