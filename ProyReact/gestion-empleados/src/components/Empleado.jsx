import React from 'react'

const Empleado = ({empleado}) => {
	return (
		<tr>
			<td className=' p-3 border-y-2'>{empleado.nombre}</td>
			<td className=' p-3 border-y-2'>{empleado.direccion}</td>
			<td className=' p-3 border-y-2'>{empleado.email}</td>
			<td className=' p-3 border-y-2'>{empleado.telefono}</td>
			<td className=' p-3 border-y-2'>
				<button>Ver</button>
				<button>Editar</button>
				<button>Eliminar</button>

			</td>
		</tr>
	)
	
}

export default Empleado