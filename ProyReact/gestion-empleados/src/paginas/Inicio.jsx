import { useState, useEffect } from 'react'
import Empleado from '../components/Empleado'
const Inicio = () => {
	const [empleados, setEmpleados] = useState([
		{
		  nombre: "Jaime Suasnabar",
		  direccion: "Gaxy Soft",
		  email: "correo@correo.com",
		  telefono: "4545454545",
		  notas: "Nada",
		  id: 1
		},
		{
		  nombre: "Pablo Rodriguez",
		  direccion: "Tasal nao",
		  email: "correo@correo.com",
		  telefono: "4545454545",
		  notas: "Nada",
		  id: 2
		}
	  ])
	return (
		<div>
			<h1 className='font-black text-2xl text-blue-900'>Listado de Empleado</h1>
			<p className='mt-3'>Administra los empleados</p>
			<table className=' w-full mt-5 table-auto shadow bg-white'>
				<thead className=' bg-blue-800 text-white'>
					<tr>
						<th>Nombre</th>
						<th>Direccion</th>
						<th>Email</th>
						<th>Telefono</th>
						<th>Acciones</th>
					</tr>
				</thead>
				<tbody>
					{empleados.map(empleado=>{
						return (<Empleado
							key={empleado.id}
							empleado={empleado}
						/>)
					})}

				</tbody>
			</table>
		</div>	
	)
		
}

export default Inicio