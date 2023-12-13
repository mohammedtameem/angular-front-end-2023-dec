import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-ecommerce';
  router: any;
  showFooter: boolean = false;
  constructor(private _router: Router) {
    _router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        console.log(val.url)
        if (val.url == '/dashboard' || val.url == '/') {
          this.showFooter = false;
        } else {
          this.showFooter = true;
        }
      }
    });
  }
}
