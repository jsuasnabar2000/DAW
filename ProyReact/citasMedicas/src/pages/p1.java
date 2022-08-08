package com.universidad; 
 
import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.xml.XmlBeanFactory;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
 
public class UniversidadLogic{ 
 
  public static void main(String[] args){
      Resource recurso = new ClassPathResource("springconfig.xml");
      BeanFactory factory = new XmlBeanFactory(recurso);
 
      EstudianteBean estudianteBean = (EstudianteBean)factory.getBean("estudiante");
 
      estudianteBean.mostrarEstudianteActual();
   }
}