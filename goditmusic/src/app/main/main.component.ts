import { Location } from '@angular/common';
import { Component, NgZone } from '@angular/core';
import { DattaConfig } from '../app-config';

@Component({
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  dattaConfig: any;
  navCollapsed: boolean;
  navCollapsedMob: boolean;
  windowWidth: number;
  location;

  constructor(private zone: NgZone, private _location: Location) {
    this.location = this._location as any;
    this.dattaConfig = DattaConfig.config;

    // let currentUrl = this.location.path();
    if (this.location._baseHref) {
      // currentUrl = `${this.location._baseHref}${this.location.path()}`;
    }

    // Following is the example if we want to collapse menu on specific pages.
    // if (currentUrl === this.location._baseHref + '/layout/collapse-menu' || currentUrl === this.location._baseHref + '/layout/box') {
    //   this.dattaConfig['collapse-menu'] = true;
    // }

    this.windowWidth = window.innerWidth;
    this.navCollapsed = (this.windowWidth >= 992) ? this.dattaConfig['collapse-menu'] : false;
    this.navCollapsedMob = false;
  }

  navMobClick(): void {
    if (this.navCollapsedMob && !(document.querySelector('app-navigation.pcoded-navbar').classList
      .contains('mob-open'))) {
      this.navCollapsedMob = !this.navCollapsedMob;
      setTimeout(() => {
        this.navCollapsedMob = !this.navCollapsedMob;
      }, 100);
    } else {
      this.navCollapsedMob = !this.navCollapsedMob;
    }
  }

}
