import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabeceraComponent } from './pages/cabecera/cabecera.component';
import { ParteIzquierdaComponent } from './pages/parte-izquierda/parte-izquierda.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CabeceraComponent,ParteIzquierdaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portafolio';
}
