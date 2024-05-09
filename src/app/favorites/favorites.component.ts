import { Component } from '@angular/core';
import { FavoriteGamesComponent } from './favorite-games/favorite-games.component';
import { FavoriteLiteratureComponent } from './favorite-literature/favorite-literature.component';
import { FavoriteMoviesComponent } from './favorite-movies/favorite-movies.component';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [
    FavoriteLiteratureComponent,
    FavoriteMoviesComponent,
    FavoriteGamesComponent,
  ],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css',
})
export class FavoritesComponent {}
