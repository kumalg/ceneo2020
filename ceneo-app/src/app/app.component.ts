import { Component } from '@angular/core';

@Component({
  selector: 'ce-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  inputData = { testNumber: 1, testString: 'dwa' };
  title = 'ceneo-app';

  handleTestOutput(data) {
    console.log(data)
  }
  handleClick(data) {
    console.log(data)
  }
}
