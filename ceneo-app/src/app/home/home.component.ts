import { Component, OnInit } from '@angular/core';
import { TestService } from '../core/test.service';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'ce-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private testService: TestService, private authService: AuthService) {
    setTimeout(() => {
      this.testService.increment();
      console.log(`counter: ${this.testService.counter}`)
    }, 2000)

    // this.authService.login('alojzy')
  }

  ngOnInit(): void {
  }

}
