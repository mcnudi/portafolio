import { Component, OnInit } from '@angular/core';
import { TimelineEvent, TimelineModule } from '@progress/kendo-angular-layout';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experiencia',
  imports: [CommonModule, TimelineModule],
  templateUrl: './experiencia.component.html',
  styleUrl: './experiencia.component.css'
})
export class ExperienciaComponent {

  public events:any[] = [
    {
      title: 'Atos – Bankia',
      subtitle: 'Coordinadora técnica y analista/programadora Java Swing',
      date: new Date(2012, 9, 1),
    },
    {
      title: 'Atos – Aliseda / Banco Popular',
      subtitle: 'Analista funcional y técnica',
      date: new Date(2015, 3, 1),
    },
    {
      title: 'Atos – AENA',
      subtitle: 'Programadora Java',
      date: new Date(2021, 7, 1),
    },
    {
      title: 'Atos – Ayesa / Endesa Portugal | Feb 2022 – Jul 2022',
      subtitle: 'Programadora Java',
      date: new Date(2022, 1, 1),
    },
    {
      title: 'Eviden (Grupo Atos) – Aguas de Barcelona',
      subtitle: 'Programadora Java Swing',
      date: new Date(2022, 7, 1),
    },
    {
      title: 'Eviden (Grupo Atos) – Canal de Isabel II',
      subtitle: 'Programadora Java',
      date: new Date(2024, 2, 1),
      
      description: `
        - Desarrollé microservicios REST con JPA y SQL.
        - Participé en reuniones ágiles semanales.
      `
    }
  ]
  
}
