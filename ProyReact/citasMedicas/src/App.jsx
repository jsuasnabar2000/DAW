import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'

function App() {
  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})
  const eliminarPaciente=(id)=>{
    const pacientesActualizados = pacientes.filter( (paciente)=>paciente.id != id )
    setPacientes(pacientesActualizados)
  }

  return (
    <div className='container mx-auto mt-10'>
      <Header />
      <div className='flex mt-5'>
        <Formulario pacientes={pacientes} setPacientes={setPacientes} paciente={paciente} setPaciente={setPaciente} />
        <ListadoPacientes pacientes={pacientes} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente} />
      </div>
    </div>
  )
}

export default App
