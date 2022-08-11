import React from 'react'
import { Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'

const Formulario = () => {
	const nuevoClienteSchema=Yup.object().shape({
		nombre:Yup.string().min(5, 'El Nombre es muy corto').required('El Nombre es obligatorio'),
		direccion:Yup.string().min(10, 'El dato es muy corto').required('La direccion es obligatoria'),
		email:Yup.string().email('El no es válido').required('El email es requerido'),
		telefono:Yup.number().typeError('Número no válido').integer('El numero no es válido').positive('El numero no es válido').required('El telefono es requerido')
	})
	const handleSubmit = async (values)=>{
		//console.log(values);
		try{
			const url = "http://localhost:4000/empleados"
			const respuesta = fetch(url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(values)
			})
			console.log(respuesta);
		}catch(error){
			console.log(error);
		}
	}
	return (
		<div className=' bg-white mt-5 px-5 py-5 rounded-lg shadow-lg mx-auto'>
			<h2 className='text-gray-600 font-bold text-xl uppercase text-center'>Agregar Empleado</h2>
			<Formik
				initialValues={
					{
						nombre: '',
						direccion: '',
						email: '',
						telefono: '',
						notas: ''
					}
				}
				onSubmit={
					async (values, { resetForm })=>{
						await handleSubmit(values)
						resetForm()
					}
				}
				validationSchema={nuevoClienteSchema}
			>
				{
					({errors, touched})=>{
						return(
						<Form className='mt-5'>
						<div className='mb-4'>
							<label htmlFor="nombre" className=' text-gray-800'>Nombre</label>
							<Field 
								id='nombre'
								name='nombre'
								type='text'
								placeholder='Nombre del Empleado'
								className=' mt-2 block w-full p-3 bg-gray-100 border-2'
							/>
							{ errors.nombre && touched.nombre ? (<div className='text-red-700'><ErrorMessage name='nombre' /></div>) : null }
						</div>
						<div className='mb-4'>
							<label htmlFor="direccion" className=' text-gray-800'>Dirección</label>
							<Field 
								id='direccion'
								name='direccion'
								type='text'
								placeholder='Direccion del Empleado'
								className=' mt-2 block w-full p-3 bg-gray-100 border-2'
							/>
							{ errors.direccion && touched.direccion ? (<div className='text-red-700'><ErrorMessage name='direccion' /></div>) : null }

						</div>
						<div className='mb-4'>
							<label htmlFor="email" className=' text-gray-800'>Correo Electrónico</label>
							<Field 
								id='email'
								name='email'
								type='email'
								placeholder='correo@correo.com'
								className=' mt-2 block w-full p-3 bg-gray-100 border-2'
							/>
							{ errors.email && touched.email ? (<div className='text-red-700'><ErrorMessage name='email' /></div>) : null }

						</div>
						<div className='mb-4'>
							<label htmlFor="telefono" className=' text-gray-800'>Teléfono</label>
							<Field 
								id='telefono'
								name='telefono'
								type='tel'
								placeholder='Teléfono'
								className=' mt-2 block w-full p-3 bg-gray-100 border-2'
							/>
							{ errors.telefono && touched.telefono ? (<div className='text-red-700'><ErrorMessage name='telefono' /></div>) : null }							
						</div>
						<div className='mb-4'>
							<label htmlFor="notas" className=' text-gray-800'>Notas:</label>
							<Field 
								as='textarea'
								id='notas'
								name='notas'
								type='text'
								placeholder='Observaciones del empleado'
								className=' mt-2 block w-full p-3 bg-gray-100 border-2'
							/>
						</div>
						<input type="submit" value="Agregar Empleado" className='mt-5 w-full bg-blue-800 p-3 text-white font-bold text-lg rounded-xl hover:bg-blue-900' />
					</Form>
	
					)}
				}
			</Formik>
		</div>
	)
}

export default Formulario