import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ImageCropperModule } from 'ngx-img-cropper';
import { SharedModule } from '../shared/shared.module';
import { UserProfileRoutingModule } from './profile.routing';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    UserProfileRoutingModule,
    ImageCropperModule
  ],
  declarations: [
    UserProfileComponent
  ],
  providers: [],
  exports: []
})

export class UserProfileModule {
}
