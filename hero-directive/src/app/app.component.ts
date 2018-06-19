import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'angular';
  fontColor = 'blue';
  content1 = "{'color': 'red'}";
  content2 = "{'color': fontColor}";
  content3 = "{'color': getColor(fontColor)}";
  content4 = "{'color': fontColor === 'blue' ? 'blue' : 'red'}";

  public getColor(color) {
    return color;
  }
}
