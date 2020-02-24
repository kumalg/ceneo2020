import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ce-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TestComponent implements OnInit {

  @Input('testInput') myInput;
  @Output() testOutput = new EventEmitter<string>()
  constructor() {
    setTimeout(() => this.testOutput.emit('new data'), 2000)
  }

  ngOnInit(): void {
    console.log(this.myInput)
  }

}
