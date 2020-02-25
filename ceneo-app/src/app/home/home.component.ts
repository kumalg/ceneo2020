import { Component, OnInit } from '@angular/core';
import { TestService } from '../core/test.service';

@Component({
  selector: 'ce-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private testService: TestService) {
    setTimeout(() => {
      this.testService.increment();
      console.log(`counter: ${this.testService.counter}`)
    }, 2000)
  }

  ngOnInit(): void {
  }

}
