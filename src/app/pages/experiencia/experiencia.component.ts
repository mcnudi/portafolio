import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Iexperiencia } from '../../interfaces/iexperiencia';
import { MatDialog } from '@angular/material/dialog';
import { DescripcionComponent } from '../descripcion/descripcion.component';


@Component({
  selector: 'app-experiencia',
  //imports: [CommonModule, TimelineModule],
  imports: [CommonModule, ExperienciaComponent],
  templateUrl: './experiencia.component.html',
  styleUrl: './experiencia.component.css'
})
export class ExperienciaComponent {

  i:number=0;
  private dialog = inject (MatDialog);
  experiencias: Iexperiencia[] = [
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

ngOnInit():void{
  this.experiencias.sort((a,b)=>
    new Date(b.fecha).getTime() - new Date(a.fecha).getTime()
);
}

//personas.sort((a, b) => a.edad - b.edad);

  descripcion(exp:Iexperiencia){
this.dialog.open(DescripcionComponent, {
      width: '500px',
      data: exp
    });
  }
 
  lastYear: string = '';

showYear(fecha: string): boolean {
  const year = new Date(fecha).getFullYear().toString();
  if (this.lastYear !== year) {
    this.lastYear = year;
    return true;
  }
  return false;
}
}
