package com.jsuasnabar.appApi01.controllers;

import com.jsuasnabar.appApi01.models.EmpleadoModel;
import com.jsuasnabar.appApi01.services.EmpleadoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

@RestController
@RequestMapping("/empleados")
public class EmpleadoController {
    @Autowired
    EmpleadoService empleadoService;

    @GetMapping()
    public ArrayList<EmpleadoModel> obtenerEmpleado(){
        return empleadoService.obtenerEmpleados();
    }
    @GetMapping(path = "/{id}")
    public Optional<EmpleadoModel> obtenerEmpleadoPorId(@PathVariable("id") Long id){
        return empleadoService.obtenerPorId(id);
    }
    @PostMapping()
    public EmpleadoModel uardarEmpleado(@RequestBody EmpleadoModel empleado){
        return empleadoService.guardarEmpleado(empleado);
    }
    @DeleteMapping(path = "/{id}")
    public String eliminarEmpleado(@PathVariable("id") Long id){
        boolean eliminado = empleadoService.eliminarEmpleado(id);
        if (eliminado){
            return "Se elimino el empleado con id";
        }else{
            return "No se pudo eliminar";
        }
    }
}
