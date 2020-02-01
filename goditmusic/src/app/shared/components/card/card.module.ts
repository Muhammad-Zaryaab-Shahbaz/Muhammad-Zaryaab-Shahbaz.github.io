import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { AnimationService, AnimatorModule } from 'css-animator';
import { CardComponent } from './card.component';

@NgModule({
  imports: [
    CommonModule,
    NgbDropdownModule,
    AnimatorModule
  ],
  declarations: [CardComponent],
  exports: [CardComponent],
  providers: [AnimationService]
})
export class CardModule { }
