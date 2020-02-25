import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { finalize } from 'rxjs/operators';

@Injectable()
export class TestService {

  counter = 0;
  constructor(private httpClient: HttpClient) {
  }

  increment () {
    this.counter++;
  }

  get testData() {
    return this.httpClient.get<any>('http://localhost:3000/test')
    // .pipe(finalize(() => this.showLoader = false))
  }
}
