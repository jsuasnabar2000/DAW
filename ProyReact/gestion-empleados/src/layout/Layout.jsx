//import React from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
const Layout = () => {
	const location = useLocation()
	const urlActual = location.pathname	
	return (
		<div className="md:flex md:min-h-screen">
			<div className=" md:w-1/4 bg-blue-900 px-5 py-10">
				<h2 className='text-2xl font-black text-center text-white'>Admin Empleados</h2>
				<nav>
					<Link className={`${urlActual === '/empleados'? 'text-blue-300' : 'text-white'} text-xl block mt-2 hover:text-blue-300`} to="/empleados">Empleados</Link>
					<Link className={`${urlActual === '/empleados/nuevo'? 'text-blue-300' : 'text-white'} text-xl block mt-2 hover:text-blue-300`}  to="/empleados/nuevo">Nuevo Empleado</Link>
					<Link className={`${urlActual === '/empleados/editar'? 'text-blue-300' : 'text-white'} text-xl block mt-2 hover:text-blue-300`}  to="/empleaos/editar/10">Editar Empleado</Link>
				</nav>
			</div>
			<div className=" md:w-3/4 p-10 md:h-screen overflow-scroll bg-gray-100">
				<Outlet />
			</div>
		</div>
	)
}

export default Layout