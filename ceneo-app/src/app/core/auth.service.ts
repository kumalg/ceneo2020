import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { finalize } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthService {

  private userSubj = new BehaviorSubject<User>(null)
  user$ = this.userSubj.asObservable()

  constructor(private httpClient: HttpClient) {
    const user = this.getUserFromLocalStorage()
    if (user) {
      this.userSubj.next(user)
    }
  }

  login(id: string) {
    if (!id) return null

    this.httpClient.get<User>(`${environment.apiUrl}/auth/${id}`)
      .subscribe(user => {
        this.userSubj.next(user)
        this.putUserInLocalStorage(user)
      })

  }

  logout() {
    this.userSubj.next(null)
    this.removeUserFromLocalStorage()
  }

  getUserFromLocalStorage(): User {
    const userValue = localStorage.getItem('user')
    if (!userValue) return null
    return JSON.parse(localStorage.getItem('user')) as User
  }

  putUserInLocalStorage(user: User) {
    localStorage.setItem('user', JSON.stringify(user))
  }

  removeUserFromLocalStorage() {
    localStorage.removeItem('user')
  }

}