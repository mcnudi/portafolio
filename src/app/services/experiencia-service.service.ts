import { Injectable } from '@angular/core';
import { Iexperiencia } from '../interfaces/iexperiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaServiceService {
    private experiencias: Iexperiencia[] = [
    {
      empresa: 'Eviden (Grupo Atos)',
      cliente: 'Canal de Isabel II',
      fecha: 'Mar 2024',
      cargo: 'Programadora Java',
      descripcion: `
        - Desarrollé microservicios REST con JPA y SQL.
        - Participé en reuniones ágiles semanales.
      `
    },
    {
      empresa: 'Eviden (Grupo Atos)',
      cliente: 'Aguas de Barcelona',
      fecha: 'Ago 2022',
      cargo: 'Programadora Java Swing',
      descripcion: `- Resolví incidencias y optimicé la integración con servicios SOAP y consultas SQL.
                    - Mantenimiento y evolución de aplicaciones en Java Swing y Struts.`
    },
    {
      empresa: 'Atos',
      cliente: 'Ayesa / Endesa Portugal',
      fecha: 'Feb 2022',
      cargo: 'Programadora Java',
      descripcion: `-Desarrollé nuevas funcionalidades en aplicaciones de facturación energética utilizando Java y SQL.`
    },
    {
      empresa: 'Atos',
      cliente: 'AENA',
      fecha: 'Ago 2021',
      cargo: 'Programadora Java',
      descripcion: `- Mantenimiento de aplicaciones en Java con Spring y Struts, desplegadas en Weblogic y Wildfly,`
    },
    {
      empresa: 'Atos',
      cliente: 'Aliseda / Banco Popular',
      fecha: 'Abr 2015',
      cargo: 'Analista funcional y técnica',
      descripcion: `- Gestioné procesos DTSX para sincronización con Salesforce, liderando tres migraciones que redujeron
considerablemente los tiempos de procesamiento.
- Recogí requisitos funcionales, coordiné con usuarios y documenté procesos para facilitar la mantenibilidad.`
    },
    {
      empresa: 'Atos',
      cliente: 'Bankia',
      fecha: 'Oct 2012',
      cargo: 'Coordinadora y analista/programadora Java Swing',
      descripcion: `- Coordiné tareas del equipo técnico en la factoría ATOS, asegurando entregas a tiempo.
- Desarrollé nuevas funcionalidades para una aplicación de escritorio con Java Swing.
- La lógica de negocio de la aplicación estaba conectada a procesos en host, con los que
interactuábamos para consultar y modificar información bancaria en tiempo real.`
    }
    
  ];
  getExperiencia():Iexperiencia[]{
    return this.experiencias;
  }
  }
