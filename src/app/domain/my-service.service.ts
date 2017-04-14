import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class MyServiceService {

  constructor() { }

  fetchText(): Observable<string> {
    return Observable.of('foo').delay(1000);
  }

}
