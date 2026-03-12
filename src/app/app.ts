import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  // template: `<h1>Hello from Angular! Testing build time</h1>
  //   <p>This is using multi line</p> `,
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('newapp');
}
