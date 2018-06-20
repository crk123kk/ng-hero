import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../share/service/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(
          heroes => this.heroes = heroes.heroes.slice(1, 5)
        );
  }
}