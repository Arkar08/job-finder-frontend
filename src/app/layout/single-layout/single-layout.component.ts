import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-single-layout',
  standalone: true,
  templateUrl: './single-layout.component.html',
  styleUrl: './single-layout.component.css',
  imports: [NavbarComponent,RouterOutlet]
})
export class SingleLayoutComponent {

}
