import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-modal',
  templateUrl: './ui-modal.component.html',
  styleUrls: ['./ui-modal.component.scss']
})
export class UiModalComponent implements OnInit {
  @Input() dialogClass: string;
  @Input() hideHeader = false;
  @Input() hideFooter = false;
  @Input() containerClick = true;
  visible = false;
  visibleAnimate = false;

  ngOnInit(): void {
    //
  }

  show(): void {
    this.visible = true;
    setTimeout(() => this.visibleAnimate = true, 100);
    document
      .querySelector('body').classList
      .add('modal-open');
  }

  hide(): void {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
    document
      .querySelector('body').classList
      .remove('modal-open');
  }

  onContainerClicked(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('modal') && this.containerClick) {
      // this.hide();
    }
  }

}