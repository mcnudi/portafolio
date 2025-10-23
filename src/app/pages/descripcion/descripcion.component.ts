import { Component, inject, Inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { Iexperiencia } from '../../interfaces/iexperiencia';

@Component({
  selector: 'app-descripcion',
  imports: [MatDialogModule, MatCardModule],
  templateUrl: './descripcion.component.html',
  styleUrl: './descripcion.component.css'
})
export class DescripcionComponent {
data = inject<Iexperiencia>(MAT_DIALOG_DATA);
}
