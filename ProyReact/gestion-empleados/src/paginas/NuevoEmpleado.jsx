import React from 'react'
import Formulario from '../components/Formulario'
const NuevoEmpleado = () => {
	return (
		<div>
			<h1 className='font-black text-2xl text-blue-900'>Nuevo Empleado</h1>
			<p className='mt-3'>Llena los siguientes campos para registrar un empleado</p>
			<Formulario />
		</div>
	)
}

export default NuevoEmpleado