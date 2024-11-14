import { Component } from '@angular/core';
import { ServicioService } from '../../services/servicio.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  public tipoActividad:string="";
  public precio?:number;
  public participantes?:number;
  constructor(private servicio:ServicioService) {
    
  }
}
