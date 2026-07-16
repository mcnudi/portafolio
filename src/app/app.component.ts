import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabeceraComponent } from './pages/cabecera/cabecera.component';
import { ParteIzquierdaComponent } from './pages/parte-izquierda/parte-izquierda.component';
import { DialogoComponent } from './pages/dialogo/dialogo.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CabeceraComponent,ParteIzquierdaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portafolio';
  private dialog = inject (MatDialog);

  chatbox():void {
    this.dialog.open(DialogoComponent, {
      width: '3000px',
      height:'1100px',
      position: { right: '30px' }
    });
  }
}
