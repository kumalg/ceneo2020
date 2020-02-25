import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { TestService } from '../core/test.service';

@Component({
  selector: 'ce-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TestComponent implements OnInit {

  @Input('inputData')
  myInput: string

  @Output()
  testOutput = new EventEmitter<string>()

  constructor(private testService: TestService) {
    console.log(`Input from constructor: ${this.myInput}`)
    setTimeout(() => {
      this.testOutput.emit(Date.now().toString())
      this.testService.increment();
      console.log(`counter: ${this.testService.counter}`)
    }, 2000)
  }

  ngOnInit(): void {
    console.log(`Input from ngOnInit: ${this.myInput}`)
  }

}
