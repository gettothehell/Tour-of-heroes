import { Injectable } from '@angular/core';


import {HEROES} from "../core/mock-heroes";
import { Hero } from '../core/hero';

import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';

import { MessageService } from '../Services/message.service';


@Injectable()
export class HeroService {

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
  getHero(id: number): Observable<Hero> {
    // Todo: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

  constructor(private messageService: MessageService) { }

}
