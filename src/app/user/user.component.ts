import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  username: string = 'test';
  isLoggedIn: boolean = false;

  /**
   * GetUsername retrieves the username logged in
   *
   * @returns {string} - username logged in.
   */
  public GetUsername(): string {
    return this.username;
  }

  /**
   * SetLoggingStatus sets isLoggedIn internal field to whether to prompts for login.
   *
   * @param status {boolean} - Status of the person logged in.
   */
  public SetLoggingStatus(status: boolean): void {
    this.isLoggedIn = status;
  }
}
