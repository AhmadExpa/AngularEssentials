import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class InitService {
  constructor(private _httpClient: HttpClient) {}
  config: any;
  init() {
    return this._httpClient
      .get('assets/config.json')
      .pipe(tap((config) => (this.config = config)));
  }
}
