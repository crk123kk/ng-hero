import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../share/service/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero;

  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes() {
    //   this.heroService.getInfo();
    this.heroService.getInfo().subscribe(res=> {
        console.log(res);
        console.log(res.heroes);
        this.heroes = res.heroes;
    });
  }
}
