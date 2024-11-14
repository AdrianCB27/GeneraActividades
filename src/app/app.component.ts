import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ServicioService } from './services/servicio.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[ServicioService]
})
export class AppComponent {
  title = 'viteActividades';
}
