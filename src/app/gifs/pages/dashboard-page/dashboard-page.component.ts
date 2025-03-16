import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { environment } from '@environments/environment.development';

@Component({
  selector: 'app-dashboard-page',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css'
})
export default class DashboardPageComponent {
mititulo=environment.titulo
}
