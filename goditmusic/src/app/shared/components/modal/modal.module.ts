import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AnimationModalComponent } from './animation-modal/animation-modal.component';
import { UiModalComponent } from './ui-modal/ui-modal.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    UiModalComponent,
    AnimationModalComponent
  ],
  exports: [
    UiModalComponent,
    AnimationModalComponent
  ]
})
export class ModalModule { }
