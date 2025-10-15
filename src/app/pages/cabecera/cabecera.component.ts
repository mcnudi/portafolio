import { Component, ElementRef, ViewChild} from '@angular/core';
import { NombreComponent } from '../nombre/nombre.component';

@Component({
  selector: 'app-cabecera',
  imports: [NombreComponent],
  templateUrl: './cabecera.component.html',
  styleUrl: './cabecera.component.css'
})
export class CabeceraComponent {
 @ViewChild('canvas') canvas!: ElementRef<HTMLCanvasElement>;
   ngAfterViewInit(): void {
    const canvasEl = this.canvas.nativeElement;
  const ctx = canvasEl.getContext('2d');
  if (!ctx) return;

  const texto = "Desarrolladora full stack Java, Spring Boot, Angular";
  let x = canvasEl.width; // arranca desde la derecha
  const speed = 3; // velocidad

  const fontSize = Math.floor(canvasEl.width / 6);
  ctx.font = `${fontSize}px Great Vibes`;
  ctx.fillStyle = "#95491d";

  const textWidth = ctx.measureText(texto).width;
  const y = canvasEl.height / 2 + fontSize / 2;

  const animate = () => {
    // limpiar canvas
    ctx.clearRect(0, 0, canvasEl.width+500, canvasEl.height);

    // dibujar texto en la posición actual
    ctx.fillText(texto, x, y);

    // actualizar posición
    x -= speed;

    // reiniciar si salió de la pantalla
    if (x < -textWidth) {
      x = canvasEl.width
    }

    requestAnimationFrame(animate);
  };

  animate();
  }
}
