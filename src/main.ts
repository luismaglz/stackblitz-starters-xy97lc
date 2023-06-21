import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  template: `
    <h1>Hello from {{name}}!</h1>
    JSON-LD Boarding PAsss test
  `,
})
export class App {
  name = 'Angular';
  constructor(private httpClient: HttpClient) {}
}

bootstrapApplication(App);
