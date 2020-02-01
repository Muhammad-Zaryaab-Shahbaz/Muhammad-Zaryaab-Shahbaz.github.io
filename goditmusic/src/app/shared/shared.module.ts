import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClickOutsideModule } from 'ng-click-outside';
import { PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { CardModule } from './components/card/card.module';
import { FooterComponent } from './components/footer/footer.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PerfectScrollbarModule,
    ReactiveFormsModule,
    ClickOutsideModule,
    CardModule
  ],
  exports: [
    FooterComponent,
    CommonModule,
    FormsModule,
    PerfectScrollbarModule,
    ReactiveFormsModule,
    ClickOutsideModule,
    CardModule
  ],
  declarations: [
    FooterComponent
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class SharedModule {

}
