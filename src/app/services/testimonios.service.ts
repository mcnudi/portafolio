import { Injectable } from '@angular/core';
import { iTestimonios } from '../interfaces/itestimonios';

@Injectable({
  providedIn: 'root'
})
export class TestimoniosService {
private testimonios: iTestimonios[] = [
    {
      descripcion: "Carmen formó parte de mis equipos dentro del área de Gestión del Mantenimiento Correctivo y Evolutivo de las Áreas Inmobiliaria de Banco Popular. Durante el tiempo que fuimos compañeros, Carmen me demostró ser una profesional seria y responsable, con un alto grado de compromiso. Me mostró de forma gradual su adquisición del control para las actividades y responsabilidades que se le asignaron, con un crecimiento constante y confiable. Carmen genera confianza en lo referente a abordar con garantías las tareas y responsabilidades que ha asumido. Además es una persona colaborativa, que sabe trabajar en equipo y genera buen clima.",
    contacto:"Raúl"
    },
    {
     descripcion:"Mari Carmen es muy talentosa en su trabajo. Sabe resolver problemas, dialogar con el equipo y buscar las mejores soluciones. Es una persona que muestra creatividad, amabilidad y disposición a escuchar. Trabajar con ella es un regalo.",
    contacto:"Dayana"

    },
    
  ];
  getTestimonios():iTestimonios[]{
    return this.testimonios;
  }
  constructor() { }
}
