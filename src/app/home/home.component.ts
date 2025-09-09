import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { NombreComponent } from '../nombre/nombre.component';
import { ContactoComponent } from '../contacto/contacto.component';
import { SobremiComponent } from '../sobremi/sobremi.component';
import { Router, RouterLink } from '@angular/router';
import { ExperienciaComponent } from '../experiencia/experiencia.component';
import { TestimoniosComponent } from '../testimonios/testimonios.component';

@Component({
  selector: 'app-home',
  imports: [NombreComponent,ContactoComponent,SobremiComponent,RouterLink,ExperienciaComponent, TestimoniosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',



  
})
export class HomeComponent {
  icono:string='';
  
  router = inject(Router);
  @ViewChild('canvas') canvas!: ElementRef<HTMLCanvasElement>;
   ngAfterViewInit(): void {
    const canvasEl = this.canvas.nativeElement;
  const ctx = canvasEl.getContext('2d');
  if (!ctx) return;

  const texto = "Desarrolladora full stack Java, Spring Boot, Angular";
  let x = canvasEl.width; // arranca desde la derecha
  const speed = 3; // velocidad

  const fontSize = Math.floor(canvasEl.width / 25);
  ctx.font = `${fontSize}px Great Vibes`;
  ctx.fillStyle = "#95491d";

  const textWidth = ctx.measureText(texto).width;
  const y = canvasEl.height / 2 + fontSize / 2;

  const animate = () => {
    // limpiar canvas
    ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);

    // dibujar texto en la posición actual
    ctx.fillText(texto, x, y);

    // actualizar posición
    x -= speed;

    // reiniciar si salió de la pantalla
    if (x < -textWidth) {
      x = canvasEl.width;
    }

    requestAnimationFrame(animate);
  };

  animate();
  }
  mostrar(valor:string){
    
      this.icono=valor;
    if (valor==="sobremi"){
      //this.router.navigate(['/sobremi']);
    }else if (valor==="experiencia"){
      //this.router.navigate(['/experiencia']);
    }
    
}
  
ngOnInit(): void {
    //Aquí le dices qué quieres mostrar por defecto
    this.icono = 'test'; 
  }      
}
