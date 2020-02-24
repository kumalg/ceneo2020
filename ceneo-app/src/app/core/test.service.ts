import { Injectable } from '@angular/core';

@Injectable()
export class TestService {

  private test = 'private1!!';
  counter = 0;
  constructor() { }

  incr() {
    this.counter++;
  }
}
