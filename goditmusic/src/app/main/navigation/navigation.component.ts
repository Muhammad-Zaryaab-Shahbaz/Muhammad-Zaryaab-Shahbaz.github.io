import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DattaConfig } from '../../app-config';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  // tslint:disable-next-line:no-output-on-prefix
  @Output() readonly onNavCollapse = new EventEmitter();
  // tslint:disable-next-line:no-output-on-prefix
  @Output() readonly onNavCollapsedMob = new EventEmitter();
  dattaConfig: any;
  navCollapsed;
  navCollapsedMob;
  windowWidth: number;

  constructor() {
    this.dattaConfig = DattaConfig.config;
    this.windowWidth = window.innerWidth;
    this.navCollapsed = (this.windowWidth >= 992) ? this.dattaConfig['collapse-menu'] : false;
    this.navCollapsedMob = false;
  }

  ngOnInit(): void {
    //
  }

  navCollapse(): void {
    if (this.windowWidth >= 992) {
      this.navCollapsed = !this.navCollapsed;
      this.onNavCollapse.emit();
    }
  }

  navCollapseMob(): void {
    if (this.windowWidth < 992) {
      this.onNavCollapsedMob.emit();
    }
  }
}
