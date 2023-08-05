import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.css'],
})
export class SidenavbarComponent {
  constructor(private ngZone: NgZone) {}

  ngAfterViewInit() {
    this.ngZone.runOutsideAngular(() => {
      // Your Varius theme initialization code here
    });
  }
}
