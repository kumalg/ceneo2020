import { Component } from '@angular/core';

@Component({
  selector: 'ce-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  inputData = 'Text from input';
  title = 'ceneo-app';

  handleTestOutput(event: Event) {
    console.log(event)
  }

  handleClick(event: Event) {
    console.log(event)
  }
}
