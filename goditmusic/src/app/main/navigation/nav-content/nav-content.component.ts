import { Location } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { DattaConfig } from '../../../app-config';
import { appNavigation } from '../../../config/navigation';

import { BaseComponent } from '../../../base.component';

@Component({
  selector: 'app-nav-content',
  templateUrl: './nav-content.component.html',
  styleUrls: ['./nav-content.component.scss']
})
export class NavContentComponent extends BaseComponent implements OnInit, AfterViewInit {
  // tslint:disable-next-line:no-output-on-prefix
  @Output() readonly onNavCollapsedMob = new EventEmitter();

  dattaConfig: any;
  navigation = [];
  prevDisabled: string;
  nextDisabled: string;
  contentWidth: number;
  wrapperWidth: number;
  scrollWidth: number;
  windowWidth: number;
  location;

  @ViewChild('navbarContent', { static: false }) navbarContent: ElementRef;
  @ViewChild('navbarWrapper', { static: false }) navbarWrapper: ElementRef;

  constructor(
    private locLocation: Location
  ) {
    super();
    this.location = locLocation as any;
    this.dattaConfig = DattaConfig.config;
    this.windowWidth = window.innerWidth;
    this.prevDisabled = 'disabled';
    this.nextDisabled = '';
    this.scrollWidth = 0;
    this.contentWidth = 0;
  }

  ngOnInit(): void {
    this.setNavigation();

    if (this.windowWidth < 992) {
      this.dattaConfig.layout = 'vertical';
      setTimeout(() => {
        document.querySelector('.pcoded-navbar').classList
          .add('menupos-static');
        // tslint:disable-next-line:ban-ts-ignore
        // @ts-ignore
        (document.querySelector('#nav-ps-datta')).style.maxHeight = '100%';
      }, 500);
    }
  }

  ngAfterViewInit(): void {
    if (this.dattaConfig.layout === 'horizontal') {
      this.contentWidth = this.navbarContent.nativeElement.clientWidth;
      this.wrapperWidth = this.navbarWrapper.nativeElement.clientWidth;
    }
  }

  setNavigation(): void {
    this.navigation = appNavigation[0].children.filter(item => item);
  }

  scrollPlus(): void {
    this.scrollWidth = this.scrollWidth + (this.wrapperWidth - 80);
    if (this.scrollWidth > (this.contentWidth - this.wrapperWidth)) {
      this.scrollWidth = this.contentWidth - this.wrapperWidth + 80;
      this.nextDisabled = 'disabled';
    }
    this.prevDisabled = '';
    // tslint:disable-next-line:ban-ts-ignore
    // @ts-ignore
    (document.querySelector('#side-nav-horizontal')).style.marginLeft = `-${this.scrollWidth}px`;
  }

  scrollMinus(): void {
    this.scrollWidth = this.scrollWidth - this.wrapperWidth;
    if (this.scrollWidth < 0) {
      this.scrollWidth = 0;
      this.prevDisabled = 'disabled';
    }
    this.nextDisabled = '';
    // tslint:disable-next-line:ban-ts-ignore
    // @ts-ignore
    (document.querySelector('#side-nav-horizontal')).style.marginLeft = `-${this.scrollWidth}px`;
  }

  // tslint:disable-next-line:cyclomatic-complexity
  fireLeave(): void {
    const sections = document.querySelectorAll('.pcoded-hasmenu');
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < sections.length; i++) {
      sections[i].classList.remove('active');
      sections[i].classList.remove('pcoded-trigger');
    }

    let currentUrl = this.location.path();
    if (this.location._baseHref) {
      currentUrl = `${this.location._baseHref}${this.location.path()}`;
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
  }

  navMob(): void {
    if (this.windowWidth < 992 && document.querySelector('app-navigation.pcoded-navbar').classList
      .contains('mob-open')) {
      this.onNavCollapsedMob.emit();
    }
  }

  // tslint:disable-next-line:cyclomatic-complexity
  fireOutClick(): void {
    let currentUrl = this.location.path();
    if (this.location._baseHref) {
      currentUrl = `${this.location._baseHref}${this.location.path()}`;
    }
    const link = `a.nav-link[ href='${currentUrl}' ]`;
    const ele = document.querySelector(link);
    if (ele !== null && ele !== undefined) {
      const parent = ele.parentElement;
      const upParent = parent.parentElement.parentElement;
      const lastParent = upParent.parentElement;
      if (parent.classList.contains('pcoded-hasmenu')) {
        if (this.dattaConfig.layout === 'vertical') {
          parent.classList.add('pcoded-trigger');
        }
        parent.classList.add('active');
      } else if (upParent.classList.contains('pcoded-hasmenu')) {
        if (this.dattaConfig.layout === 'vertical') {
          upParent.classList.add('pcoded-trigger');
        }
        upParent.classList.add('active');
      } else if (lastParent.classList.contains('pcoded-hasmenu')) {
        if (this.dattaConfig.layout === 'vertical') {
          lastParent.classList.add('pcoded-trigger');
        }
        lastParent.classList.add('active');
      }
    }
  }

}
