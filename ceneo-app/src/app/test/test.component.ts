import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { TestService } from '../core/test.service';

@Component({
  selector: 'ce-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TestComponent implements OnInit {

  @Input('testInput') myInput;
  @Output() testOutput = new EventEmitter<string>()
  constructor(public testService: TestService) {
    setTimeout(() => {
      this.testService.incr();
      console.log('counter: ' + this.testService.counter)
    }, 2000)
  }

  ngOnInit(): void {
  }

}
