import { OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

export class BaseComponent implements OnDestroy {

  componentInView = new Subject();
  subscriptions: Subscription[] = [];
  isLoading = false;

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
    this.componentInView.next();
    this.componentInView.complete();
  }
}
