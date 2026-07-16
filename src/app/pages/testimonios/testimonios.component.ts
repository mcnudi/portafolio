import { Component, inject } from '@angular/core';
import { TestimoniosService } from '../../services/testimonios.service';

@Component({
  selector: 'app-testimonios',
  imports: [],
  templateUrl: './testimonios.component.html',
  styleUrl: './testimonios.component.css'
})
export class TestimoniosComponent {
  testimoniosService = inject(TestimoniosService);

  testimonios = this.testimoniosService.getTestimonios();


}
