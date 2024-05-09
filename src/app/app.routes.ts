import { Routes } from '@angular/router';
import { FavoriteGamesComponent } from './favorites/favorite-games/favorite-games.component';
import { FavoriteLiteratureComponent } from './favorites/favorite-literature/favorite-literature.component';
import { FavoriteMoviesComponent } from './favorites/favorite-movies/favorite-movies.component';

export const routes: Routes = [
  {
    path: 'app-favorite-games',
    redirectTo: '/favorite-games',
    component: FavoriteGamesComponent,
  },
  {
    path: 'app-favorite-literature',
    redirectTo: '/favorite-literature',
    component: FavoriteLiteratureComponent,
  },
  {
    path: 'app-favorite-movies',
    redirectTo: '/favorite-movies',
    component: FavoriteMoviesComponent,
  },
];
