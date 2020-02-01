import { Component, OnInit } from '@angular/core';
import { ToastyConfig, ToastyService } from 'ng2-toasty';
import { takeUntil } from 'rxjs/operators';
import { BaseComponent } from './base.component';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseComponent implements OnInit {
  constructor(
    private ts: ToastyConfig,
    private tts: ToastyService,
    private as: AppService
  ) {
    super();
  }

  ngOnInit(): void {
    this.ts.theme = 'bootstrap';

    this.as.meteorError$
      .pipe(takeUntil(this.componentInView))
      .subscribe((err: any) => {
        let title = 'Request Error';
        if (err.error && typeof err.error === 'string') {
          title = err.error.toString();
        }
        this.tts.error({ title, msg: err.reason });
      });

    this.as.handleSuccess$
      .pipe(takeUntil(this.componentInView))
      .subscribe((msg: { title?: string, text: string }) => {
        this.tts.success({ title: msg.title || 'Success', msg: msg.text });
      });
  }
}
