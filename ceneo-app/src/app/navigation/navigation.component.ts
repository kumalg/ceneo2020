import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Component({
  selector: 'ce-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  user$: Observable<User>

  userIdModel: string = ''

  constructor(private authServce: AuthService) {
    this.user$ = this.authServce.user$
  }

  ngOnInit(): void {
  }

  login() {
    console.log('login ' + this.userIdModel)
    this.authServce.login(this.userIdModel)
  }

  logout() {
    this.authServce.logout()
  }

}
