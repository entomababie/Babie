import { Injectable } from '@angular/core';
import { Hero } from './hero';
//import { HEROES } from './mock-heroes';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class HeroService {

//The HeroService.getHeroes method used to return a Hero[]. Now it returns an Observable<Hero[]>.
/*getHeroes(): Hero[] {
    return HEROES;
  }*/

private heroesUrl = 'api/heroes';  // URL to web api

  //Hero
  //modified from mock heroes to getting heroes from the server
  /*
  getHeroes(): Observable<Hero[]> {
    // Todo: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }*/

/** GET heroes from the server */
getHeroes (): Observable<Hero[]> {
  return this.http.get<Hero[]>(this.heroesUrl)
    .pipe(
      tap(heroes => this.log('fetched heroe')),
      catchError(this.handleError('getHeroes', []))
    );
}

  //Hero Detail
  /*
  getHero(id: number): Observable<Hero> {
    // Todo: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }*/

  /** GET hero by id. Will 404 if id not found */
getHero(id: number): Observable<Hero> {
  const url = `${this.heroesUrl}/${id}`;
  return this.http.get<Hero>(url).pipe(
    tap(_ => this.log(`fetched hero id=${id}`)),
    catchError(this.handleError<Hero>(`getHero id=${id}`))
  );
}

  //Constructor with a parameter that declares a private messageService property. Angular will inject the singleton MessageService into that property when it creates the HeroService.
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** Log a HeroService message with the MessageService */
private log(message: string) {
  this.messageService.add('HeroService: ' + message);
}

/**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
 
    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead
 
    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);


    console.log("Richard");
 
    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

updateHero (hero: Hero): Observable<any> {
  return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
    tap(_ => this.log(`updated hero id=${hero.id}`)),
    catchError(this.handleError<any>('updateHero'))
  );
}
  

  

}
