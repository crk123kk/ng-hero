import { Injectable } from '@angular/core';
import  'rxjs/add/operator/map'
import { Http } from '@angular/http';

@Injectable()
export class HeroService {

  constructor(
    public _http: Http
  ) { }

  getInfo() {
    return this._http.get('/assets/mock/mock.json').map(res => this.handleResponse1(res));
  }

  handleResponse1(res) {
    return res.json();
  }
}