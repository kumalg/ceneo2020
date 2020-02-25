import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { TestService } from '../core/test.service';
import { of, Subject, BehaviorSubject } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';

@Component({
  selector: 'ce-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TestComponent implements OnInit {

  testData$
  @Input('inputData')
  myInput: string

  @Output()
  testOutput = new EventEmitter<string>()

  constructor(private testService: TestService) {
    this.testData$ = this.testService.testData

    const subj = new BehaviorSubject(0)

    subj.next(1)
    subj.next(2)
    subj.next(3)

    subj.subscribe(val => console.log(val))
    // console.log(subj.value)

    // const obs = of(1, 2, 3, 4)
    //   .pipe(
    //     tap(val =>  console.log(`Wartość z tapa: ${val}`)),
    //     filter(val => val > 2),
    //     map(val => val * 2)
    //   )

    // const obs = new Observable(obs => {
    //   obs.next(1)
    //   obs.next(2)
    //   obs.complete()
    //   obs.error('hurr durr')
    //   obs.next(3)
    // })

    // obs.subscribe(
    //   value => console.log(value),
    //   error => console.error(error),
    //   () => console.log('complete!')
    // )

    // console.log(`Input from constructor: ${this.myInput}`)
    // setTimeout(() => {
    //   this.testOutput.emit(Date.now().toString())
    //   this.testService.increment();
    //   console.log(`counter: ${this.testService.counter}`)
    // }, 2000)
  }

  ngOnInit(): void {
    // console.log(`Input from ngOnInit: ${this.myInput}`)
  }

}
