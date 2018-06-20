import { Injectable } from '@angular/core';
import  'rxjs/add/operator/map'
import { Http } from '@angular/http';

@Injectable()
export class HeroService {

  constructor(
    public _http: Http
  ) {}

  getHeroes() {
    return this._http.get('/assets/mock/mock.json').map(res => this.handleResponse(res));
  }

  handleResponse(res) {
    return res.json();
  }

  getHero(id: number) {
    return this._http.get('/assets/mock/mock.json').map(res => this.handleResponse2(res,id));
  }

  handleResponse2(res,id) {
    // console.log('===============');
    // console.log(res.json().heroes.find(hero => hero.id === id))
    // console.log('===============');
    return res.json().heroes.find(hero => hero.id === id);
  }
}