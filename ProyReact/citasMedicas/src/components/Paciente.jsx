function Paciente({paciente, setPaciente, eliminarPaciente}) {
	//console.log(paciente);
	const handleEliminar = ()=>{
		const respuesta = confirm("¿Desea Eliminar el Paciente?")

		if(respuesta){
			eliminarPaciente(paciente.id)
		}
	}
	return (
		<div className=' bg-white px-5 py-5 rounded-xl shadow-xl mt-2 border-4 ml-5'>
		<p className=' font-bold text-gray-700 block'>
			Nombre: {" "}
			<span className='font-normal'>{paciente.nombre}</span>
		</p>
		<p className=' font-bold text-gray-700 block'>
			Dirección: {" "}
			<span className='font-normal'>{paciente.direccion}</span>
		</p>
		<p className=' font-bold text-gray-700 block'>
			Email: {" "}
			<span className='font-normal'>{paciente.email}</span>
		</p>
		<p className=' font-bold text-gray-700 block'>
			Fecha: {" "}
			<span className='font-normal'>2{paciente.fecha}</span>
		</p>
		<p className=' font-bold text-gray-700 block'>
			Sintomas: {" "}
			<span className='font-normal'>{paciente.sintomas}</span>
		</p>
		<div>
			<button
				type="button"
				className="px-10 py-2 bg-green-500 hover:bg-green-700 text-white rounded-xl mt-2 mx-3"
				onClick={()=>setPaciente(paciente)}
			>Editar</button>
			<button
				type="button"
				className="px-10 py-2 bg-red-600 hover:bg-red-800 text-white rounded-xl"
				onClick={handleEliminar}
			>Eliminar</button>
		</div>
	</div>
	)
}

export default Paciente