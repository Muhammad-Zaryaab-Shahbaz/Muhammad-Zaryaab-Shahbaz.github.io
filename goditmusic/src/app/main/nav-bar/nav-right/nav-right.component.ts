import { animate, style, transition, trigger } from '@angular/animations';
import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

import { DattaConfig } from '../../../app-config';
import { BaseComponent } from '../../../base.component';

@Component({
  selector: 'app-nav-right',
  templateUrl: './nav-right.component.html',
  styleUrls: ['./nav-right.component.scss'],
  providers: [NgbDropdownConfig],
  animations: [
    trigger('slideInOutLeft', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('300ms ease-in', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ transform: 'translateX(100%)' }))
      ])
    ]),
    trigger('slideInOutRight', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('300ms ease-in', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ transform: 'translateX(-100%)' }))
      ])
    ])
  ]
})

export class NavRightComponent extends BaseComponent implements DoCheck {

  dattaConfig: any;

  constructor(
    config: NgbDropdownConfig,
    private router: Router
  ) {
    super();
    config.placement = 'bottom-right';
    this.dattaConfig = DattaConfig.config;
  }

  logout(): void {
    this.router.navigateByUrl('/auth/logout');
  }

  ngDoCheck(): void {
    this.dattaConfig['rtl-layout'] = document
      .querySelector('body')
      .classList
      .contains('datta-rtl');
  }
}
