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
   * SetLoggingStatus
   */
  public SetLoggingStatus(status: boolean) {
    this.isLoggedIn = status;
  }
}
