/* tslint:disable:no-string-literal */
import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DattaConfig } from '../../../../app-config';
import { NavigationItem } from '../../../../config/navigation';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent {
  @Input() item: NavigationItem;
  dattaConfig: any;
  themeLayout: string;

  constructor(private location: Location) {
    this.dattaConfig = DattaConfig.config;
    this.themeLayout = this.dattaConfig.layout;
  }

  // tslint:disable-next-line:cyclomatic-complexity
  closeOtherMenu(event): void {
    if (this.dattaConfig.layout === 'vertical') {
      const ele = event.target;
      if (ele !== null && ele !== undefined) {
        const parent = ele.parentElement;
        const upParent = parent.parentElement.parentElement;
        const lastParent = upParent.parentElement;
        const sections = document.querySelectorAll('.pcoded-hasmenu');
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < sections.length; i++) {
          sections[i].classList.remove('active');
          sections[i].classList.remove('pcoded-trigger');
        }

        if (parent.classList.contains('pcoded-hasmenu')) {
          parent.classList.add('pcoded-trigger');
          parent.classList.add('active');
        } else if (upParent.classList.contains('pcoded-hasmenu')) {
          upParent.classList.add('pcoded-trigger');
          upParent.classList.add('active');
        } else if (lastParent.classList.contains('pcoded-hasmenu')) {
          lastParent.classList.add('pcoded-trigger');
          lastParent.classList.add('active');
        }
      }
      if ((document.querySelector('app-navigation.pcoded-navbar').classList
        .contains('mob-open'))) {
        document.querySelector('app-navigation.pcoded-navbar').classList
          .remove('mob-open');
      }
    } else {
      // tslint:disable-next-line:cyclomatic-complexity
      setTimeout(() => {
        const sections = document.querySelectorAll('.pcoded-hasmenu');
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < sections.length; i++) {
          sections[i].classList.remove('active');
          sections[i].classList.remove('pcoded-trigger');
        }

        let currentUrl = this.location.path();
        if (this.location['_baseHref']) {
          currentUrl = `${this.location['_baseHref']}${this.location.path()}`;
        }
        const link = `a.nav-link[ href='${currentUrl}' ]`;
        const ele = document.querySelector(link);
        if (ele !== null && ele !== undefined) {
          const parent = ele.parentElement;
          const upParent = parent.parentElement.parentElement;
          const lastParent = upParent.parentElement;
          if (parent.classList.contains('pcoded-hasmenu')) {
            parent.classList.add('active');
          } else if (upParent.classList.contains('pcoded-hasmenu')) {
            upParent.classList.add('active');
          } else if (lastParent.classList.contains('pcoded-hasmenu')) {
            lastParent.classList.add('active');
          }
        }
      }, 500);
    }
  }

}
