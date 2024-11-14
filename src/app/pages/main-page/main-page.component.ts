import { Component } from '@angular/core';
import { FormularioComponent } from '../../components/formulario/formulario.component';
import { ImageComponent } from '../../components/image/image.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { ServicioService } from '../../services/servicio.service';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [FormularioComponent,ImageComponent,NavbarComponent,FormsModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
  providers:[ServicioService]
})
export class MainPageComponent {
constructor() {
  
}
}
