import { Component, EventEmitter, Output } from '@angular/core';
import { DattaConfig } from '../../app-config';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  readonly;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() readonly onNavCollapsedMob = new EventEmitter();
  dattaConfig: any;
  navCollapsedMob;
  headerStyle: string;
  menuClass: boolean;
  collapseStyle: string;

  constructor() {
    this.dattaConfig = DattaConfig.config;
    this.navCollapsedMob = false;
    this.headerStyle = '';
    this.menuClass = false;
    this.collapseStyle = 'none';
  }

  toggleMobOption(): void {
    this.menuClass = !this.menuClass;
    this.headerStyle = (this.menuClass) ? 'none' : '';
    this.collapseStyle = (this.menuClass) ? 'block' : 'none';
  }

}
