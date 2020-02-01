import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbButtonsModule, NgbDropdownModule, NgbTabsetModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { ConfigurationComponent } from './configuration/configuration.component';
import { MainComponent } from './main.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavLeftComponent } from './nav-bar/nav-left/nav-left.component';
import { NavSearchComponent } from './nav-bar/nav-left/nav-search/nav-search.component';
import { NavRightComponent } from './nav-bar/nav-right/nav-right.component';
import { NavCollapseComponent } from './navigation/nav-content/nav-collapse/nav-collapse.component';
import { NavContentComponent } from './navigation/nav-content/nav-content.component';
import { NavGroupComponent } from './navigation/nav-content/nav-group/nav-group.component';
import { NavItemComponent } from './navigation/nav-content/nav-item/nav-item.component';
import { NavLogoComponent } from './navigation/nav-logo/nav-logo.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbButtonsModule,
    NgbTabsetModule
  ],
  declarations: [
    MainComponent,
    ConfigurationComponent,
    NavBarComponent,
    NavLeftComponent,
    NavSearchComponent,
    NavRightComponent,
    NavCollapseComponent,
    NavContentComponent,
    NavGroupComponent,
    NavItemComponent,
    NavLogoComponent,
    NavigationComponent
  ],
  exports: [MainComponent]
})

export class MainModule {
}
