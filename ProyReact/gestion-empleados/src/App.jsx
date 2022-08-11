import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from './paginas/Inicio'
import Layout from './layout/Layout'
import EditarEmpleado from './paginas/EditarEmpleado'
import NuevoEmpleado from './paginas/NuevoEmpleado'

function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route path='/empleados' element={<Layout />}>
                  <Route index element={<Inicio />} />
                  <Route path='nuevo' element={<NuevoEmpleado />} />
                  <Route path='editar/:id' element={<EditarEmpleado />} />
              </Route>
          </Routes>
      </BrowserRouter>
  )
}

export default App
