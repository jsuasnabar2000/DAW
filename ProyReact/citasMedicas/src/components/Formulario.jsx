import React from 'react'
import { useState, useEffect } from 'react'
import Error from './Error'

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
	const [nombre, setNombre] = useState("")
	const [direccion, setDireccion] = useState("")
	const [email, setEmail] = useState("")
	const [fecha, setFecha] = useState("")
	const [sintomas, setSintomas] = useState("")
	const [error, setError] = useState(false)

	useEffect(()=>{
		if(Object.keys(paciente).length>0){
			setNombre(paciente.nombre)
			setDireccion(paciente.direccion)
			setEmail(paciente.email)
			setFecha(paciente.fecha)
			setSintomas(paciente.sintomas)
		}
	}, [paciente])
	const handlerSubmit = (e)=>{
		e.preventDefault()
		if([nombre, direccion, email, fecha, sintomas].includes('')){
			setError(true)
			return
		}
		const objetoPaciente = {
			nombre,
			direccion,
			email,
			fecha,
			sintomas
		}
		if(paciente.id){
			objetoPaciente.id=paciente.id
			const pacientesActualizados = pacientes.map((pacienteState)=>(pacienteState.id===paciente.id ? objetoPaciente : pacienteState))
			setPacientes(pacientesActualizados)
			setPaciente({})
		}else{
			objetoPaciente.id=generarId()
			setPacientes([...pacientes, objetoPaciente])
		}

		setNombre("")
		setDireccion("")
		setEmail("")
		setFecha("")
		setSintomas("")
		setError(false)
	}
	const generarId = ()=>{
		const fecha = Date.now().toString(36)
		const aleatorio = Math.random().toString(36).substring(2)
		return fecha+aleatorio
	}
	
	return (
		<div className='md:w-1/2 lg:w-2/5'>
			<h2 className=' font-black text-2xl text-center'>Formulario de Pacientes</h2>
			<p className='font-bold text-center text-indigo-600'>Ingreso de Datos</p>

			<form className=' bg-indigo-300 px-5 py-5 rounded-xl shadow-xl mt-2'
			onSubmit={ handlerSubmit } 
			>
				{error && (<Error texto="Todos los campos son obligatorios" />)}
				<div className='mb-3'>
					<label htmlFor="nombre" className=' font-bold text-gray-700 block'>Nombre del Paciente:</label>
					<input 
						id='nombre'
						type="text"
						className='w-full border-2 p-2 rounded-lg placeholder-indigo-600'
						placeholder='Nombre del paciente'
						value={nombre}
						onChange={(e)=>setNombre(e.target.value)}
					/>
				</div>
				<div className='mb-3'>
					<label htmlFor="direccion" className=' font-bold text-gray-700 block'>Dirección del Paciente:</label>
					<input 
						id='direccion'
						type="text"
						className='w-full border-2 p-2 rounded-lg placeholder-indigo-600'
						placeholder='Dirección del paciente'
						value={direccion}
						onChange={(e)=>setDireccion(e.target.value)}

					/>
				</div>
				<div className='mb-3'>
					<label htmlFor="email" className=' font-bold text-gray-700 block'>Correo del Paciente:</label>
					<input 
						id='email'
						type="text"
						className='w-full border-2 p-2 rounded-lg placeholder-indigo-600'
						placeholder='Correo del paciente'
						value={email}
						onChange={(e)=>setEmail(e.target.value)}

					/>
				</div>
				<div className='mb-3'>
					<label htmlFor="fecha" className=' font-bold text-gray-700 block'>Fecha:</label>
					<input 
						id='fecha'
						type="date"
						className='w-full border-2 p-2 rounded-lg'
						value={fecha}
						onChange={(e)=>setFecha(e.target.value)}

					/>
				</div>
				<div className='mb-3'>
					<label htmlFor="sintomas" className=' font-bold text-gray-700 block'>Síntomas:</label>
					<textarea 
						id='sintomas'
						className='w-full border-2 p-2 rounded-lg'
						placeholder='Ingrese los síntomas'
						value={sintomas}
						onChange={(e)=>setSintomas(e.target.value)}

					/>
				</div>
				<input 
					type="submit" 
					value={paciente.id?'Guardar Paciente':'Agregar Paciente'} 
					className=' bg-indigo-600 p-3 w-full text-white hover:bg-indigo-800 transition-colors rounded-xl'
				/>
			</form>
		</div>
	)
}

export default Formulario