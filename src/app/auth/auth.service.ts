import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authenticatedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  // eslint-disable-next-line @typescript-eslint/member-ordering
  public isAuthenticated: Observable<any> = this.authenticatedSubject.asObservable()

  constructor() { }

  public signIn(): void {

  }

  public signUp(): void {

  }

  public signOut(): void {

  }

}
