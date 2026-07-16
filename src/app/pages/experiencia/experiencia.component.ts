import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Iexperiencia } from '../../interfaces/iexperiencia';
import { MatDialog } from '@angular/material/dialog';
import { DescripcionComponent } from '../descripcion/descripcion.component';
import { ExperienciaServiceService } from '../../services/experiencia-service.service';


@Component({
  selector: 'app-experiencia',
  imports: [CommonModule],
  templateUrl: './experiencia.component.html',
  styleUrl: './experiencia.component.css'
})
export class ExperienciaComponent {

  i:number=0;
  private dialog = inject (MatDialog);
  experienciasServ = inject(ExperienciaServiceService);
  experiencias=this.experienciasServ.getExperiencia();

ngOnInit():void{
  this.experiencias.sort((a,b)=>
    new Date(b.fecha).getTime() - new Date(a.fecha).getTime()
);
}


  descripcion(exp:Iexperiencia){
this.dialog.open(DescripcionComponent, {
      width: '800px',
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
