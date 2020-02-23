import { Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-animation-modal',
  templateUrl: './animation-modal.component.html',
  styleUrls: ['./animation-modal.component.scss'],
  // tslint:disable-next-line:use-component-view-encapsulation
  encapsulation: ViewEncapsulation.None
})
export class AnimationModalComponent {
  @ViewChild('modalBody', { static: true }) modalBody;
  @Input() contentClass: string;
  @Input() modalClass: string;
  @Input() backDrop = false;
  @Input() modalID: string;

  close(): void {
    this.modalBody.nativeElement.classList.remove('md-show');
  }

  show(): void {
    this.modalBody.nativeElement.classList.add('md-show');
  }

}
