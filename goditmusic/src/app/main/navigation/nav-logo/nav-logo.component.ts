import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nav-logo',
  templateUrl: './nav-logo.component.html',
  styleUrls: ['./nav-logo.component.scss']
})
export class NavLogoComponent {
  @Input() navCollapsed: boolean;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() readonly onNavCollapse = new EventEmitter();
  windowWidth: number;

  constructor() {
    this.windowWidth = window.innerWidth;
  }

  navCollapse(): void {
    if (this.windowWidth >= 992) {
      this.navCollapsed = !this.navCollapsed;
      this.onNavCollapse.emit();
    }
  }

}
