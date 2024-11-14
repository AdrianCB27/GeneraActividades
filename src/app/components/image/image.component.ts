import { Component } from '@angular/core';
import { ServicioService } from '../../services/servicio.service';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [],
  templateUrl: './image.component.html',
  styleUrl: './image.component.css'
})
export class ImageComponent {
  constructor(private servicio:ServicioService) {
    
  }

}
