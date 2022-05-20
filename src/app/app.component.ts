import { Component } from '@angular/core';
import { tokenValue } from './token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = tokenValue();
}



