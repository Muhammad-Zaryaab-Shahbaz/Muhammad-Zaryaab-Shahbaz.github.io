import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { DattaConfig } from '../../../../app-config';
import { NavigationItem } from '../../../../config/navigation';

@Component({
  selector: 'app-nav-collapse',
  templateUrl: './nav-collapse.component.html',
  styleUrls: ['./nav-collapse.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({
          transform: 'translateY(-100%)',
          display: 'block'
        }),
        animate('250ms ease-in', style({transform: 'translateY(0%)'}))
      ]),
      transition(':leave', [
        animate('250ms ease-in', style({transform: 'translateY(-100%)'}))
      ])
    ])
  ]
})
export class NavCollapseComponent {
  visible;
  @Input() item: NavigationItem;
  dattaConfig: any;
  themeLayout: string;

  constructor() {
    this.visible = false;
    this.dattaConfig = DattaConfig.config;
    this.themeLayout = this.dattaConfig.layout;
  }

  // tslint:disable-next-line:cyclomatic-complexity
  navCollapse(e): void {
    this.visible = !this.visible;

    let parent = e.target;
    if (this.themeLayout === 'vertical') {
      parent = parent.parentElement;
    }

    const sections = document.querySelectorAll('.pcoded-hasmenu');
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < sections.length; i++) {
      if (sections[i] !== parent) {
        sections[i].classList.remove('pcoded-trigger');
      }
    }

    let firstParent = parent.parentElement;
    let preParent = parent.parentElement.parentElement;
    if (firstParent.classList.contains('pcoded-hasmenu')) {
      do {
        firstParent.classList.add('pcoded-trigger');
        // first_parent.parentElement.classList.toggle('pcoded-trigger');
        firstParent = firstParent.parentElement.parentElement.parentElement;
      } while (firstParent.classList.contains('pcoded-hasmenu'));
    } else if (preParent.classList.contains('pcoded-submenu')) {
      do {
        preParent.parentElement.classList.add('pcoded-trigger');
        preParent = preParent.parentElement.parentElement.parentElement;
      } while (preParent.classList.contains('pcoded-submenu'));
    }
    parent.classList.toggle('pcoded-trigger');
  }

}
