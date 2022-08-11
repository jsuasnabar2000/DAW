package com.jsuasnabar.appApi01.services;

import com.jsuasnabar.appApi01.models.EmpleadoModel;
import com.jsuasnabar.appApi01.repositories.EmpleadoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class EmpleadoService {
    @Autowired
    EmpleadoRepository empleadoRepository;

    public ArrayList<EmpleadoModel> obtenerEmpleados(){
        return (ArrayList<EmpleadoModel>) empleadoRepository.findAll();
    }
    public Optional<EmpleadoModel> obtenerPorId(Long id){
        return empleadoRepository.findById(id);
    }
    //Permite Inserciion y Actualizacion
    //Insertar enviamos sin id
    //Actualizar enviamos con id
    public EmpleadoModel guardarEmpleado(EmpleadoModel empleado){
        return empleadoRepository.save(empleado);
    }
    public boolean eliminarEmpleado(Long id){
        try{
           empleadoRepository.deleteById(id);
           return true;
        }catch(Exception error){
            return false;
        }
    }
}
