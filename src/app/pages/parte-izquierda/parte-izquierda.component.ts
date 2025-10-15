import { Component, inject } from '@angular/core';
import { ContactoComponent } from '../contacto/contacto.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parte-izquierda',
  imports: [ContactoComponent],
  templateUrl: './parte-izquierda.component.html',
  styleUrl: './parte-izquierda.component.css'
})
export class ParteIzquierdaComponent {
 // icono:string='';
  router = inject(Router);
  mostrar(valor:string){
    
      //this.icono=valor;
      if (valor==="sobremi"){
        this.router.navigate(['/sobremi']);

      }
      else if (valor==='experiencia'){
        this.router.navigate(['/experiencia']);
      }
      else if (valor==='formacion'){
        this.router.navigate(['/formacion']);
      }
       
    }
    
  
/*ngOnInit(): void {
    //Aquí le dices qué quieres mostrar por defecto
    this.icono = 'test'; 
  }  */
}
