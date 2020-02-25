import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClickService {

  // private _clickCounter = 0

  // get clickCounter () {
  //   return this._clickCounter
  // }

  private clickSubj = new BehaviorSubject(0)
  click$ = this.clickSubj.asObservable()

  constructor() { }

  click () {
    // this._clickCounter++
    this.clickSubj.next(this.clickSubj.value + 1)
  }
}
