import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-ecommerce';
  router: any;

  constructor(private _router: Router) {
    this.router = _router.url;
  }

  hasRoute(route: string) {
    // console.log(this.router.includes(route)); 
    return this.router.includes(route);
  }
}
