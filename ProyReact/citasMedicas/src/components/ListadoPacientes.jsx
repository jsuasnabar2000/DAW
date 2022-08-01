import React from 'react'
import Paciente from './Paciente'

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
	return (
		<div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
			<h2 className=' font-black text-2xl text-center'>Listado de Pacientes</h2>
			<p className='font-bold text-center text-indigo-600'>Editar y Eliminar Pacientes</p>
			{
				pacientes.map((paciente)=>(
					<Paciente key={paciente.id} paciente={paciente} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente}/>
				))
			}
			
			


		</div>
	)
}

export default ListadoPacientes