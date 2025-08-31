import { Component } from '@angular/core';
import { NombreComponent } from '../nombre/nombre.component';
import { ContactoComponent } from '../contacto/contacto.component';
import { SobremiComponent } from '../sobremi/sobremi.component';
import { RouterLink } from '@angular/router';
import { ExperienciaComponent } from '../experiencia/experiencia.component';

@Component({
  selector: 'app-home',
  imports: [NombreComponent,ContactoComponent,SobremiComponent,RouterLink,ExperienciaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'

  
})
export class HomeComponent {
  icono:string="";

  mostrar(valor:string){
    if (valor==="contacto" || valor==="sobremi"|| valor==="experiencia")
      console.log(valor);
      this.icono=valor;
}
}
