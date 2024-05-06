import { Component } from '@angular/core';
import { FavoritesComponent } from '../favorites/favorites.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FavoritesComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  LINK: string = 'https://www.youtube.com/@vilarj';
  pages: [string, string] = ['/books/', ''];
}
