import { Component,OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

import { LoaderService } from './loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'one-app-dashboard';
  constructor(private loaderService: LoaderService, private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.loaderService.show();
      } else if (event instanceof NavigationEnd) {
        this.loaderService.hide();
      }
    });
  }
}
