import { Component } from '@angular/core';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css',
})
export class FavoritesComponent {
  favoriteBooks: [string, string, string, string, string] = [
    'Frankestein',
    'The Scarlet Letter',
    'The strange case of dr.jekyll and mr.hyde',
    'The Lord of the Flies',
    'Harry Potter and the Half-Blood Prince',
  ];

  favoriteGames: [string, string, string, string, string, string, string] = [
    'The Witcher 3: Wild Hunt',
    'Red Dead Redemption 1 & 2',
    'Bloodborne',
    'Dark Souls 3',
    'Elden Ring',
    'Pokemon SoulSilver & FireRed',
    'The Prince of Persia: The Sand of Times & The Two Thrones',
  ];

  favoriteTVShows: [string, string, string, string] = [
    'Game of Thrones',
    'Breaking Bad',
    'Vikings',
    'Sex Education',
  ];

  favoriteMovies: [string, string, string, string, string, string] = [
    'Mr Nobody',
    'The pursuit of happiness',
    'Focus',
    'Matrix series',
    'The Lord of the Rings saga',
    'Harry Potter saga',
  ];
}
