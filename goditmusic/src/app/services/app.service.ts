import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  get meteorError$(): Observable<any> {
    return this._toasterMsgErrorSubject.asObservable();
  }

  get handleSuccess$(): Observable<{ title?: string, text: string }> {
    return this._toasterMsgSuccessSubject.asObservable();
  }

  private _toasterMsgErrorSubject = new Subject<any>();
  private _toasterMsgSuccessSubject = new Subject<{ title?: string, text: string }>();

  handleMeteorError(value: any): void {
    this._toasterMsgErrorSubject.next(value);
  }

  handleSuccess(value: { title?: string, text: string }): void {
    this._toasterMsgSuccessSubject.next(value);
  }
}
