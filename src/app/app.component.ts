import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { DialogPosition, DialogsService } from 'rl-dialogs';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PC configurator ';

  public isAuthenticate = this.authService.isAuthenticated

  constructor(private authService: AuthService, private dialogsService: DialogsService) { }

  public openSignIn(): void {
    void this.dialogsService.show<SignInComponent>(SignInComponent.generateId(), SignInComponent,
      { }, {
        position: DialogPosition.Right,
        closeOnClickOutside: false,
      })
  }

  public openSignUp(): void {
    void this.dialogsService.show<SignUpComponent>(SignUpComponent.generateId(), SignUpComponent,
      { }, {
        position: DialogPosition.Right,
        closeOnClickOutside: false,
      })
  }

  public signOut(): void {
    this.authService.signOut()
  }
}
