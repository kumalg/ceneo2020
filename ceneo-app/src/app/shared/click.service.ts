import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClickService {

  private _clickCounter = 0

  get clickCounter () {
    return this._clickCounter
  }

  constructor() { }

  click () {
    this._clickCounter++
  }
}
