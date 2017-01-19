import {Injectable} from '@angular/core';
import {HEROES} from './mock-heroes';
import { Hero } from '../hero';

import { Observable } from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import * as Rx from "rxjs/Rx";

@Injectable()
export class HeroService {

//use promisess here to call asynchronous call,If the data is coming from the remote server
//so that over code will not get blocked. for the waiting of the respond from the server

  constructor(){
    let myObservable = Observable.range(0,10);
    myObservable.subscribe(
        data=>{
          console.log(data);
        }
    )

    let source = Observable.create((observer) => {
      setTimeout(() => {
        console.log('timeout hit');
        observer.next('Observable 101');
      }, 1000);
      console.log('observable initialized');
    });

    source.subscribe(x => console.log("Getting the data sended by the observer " +x));

    
    //const sourceTwo = Rx.Observable.timer(0, 5000);

    //switch to new inner observable when source emits, emit items that are emitted  
    //const example = sourceTwo.switchMap(() => Rx.Observable.interval(500));

    //output: 0,1,2,3,4,5,6,7,8,9...0,1,2,3,4,5,6,7,8
    //const subscribe = example.subscribe(val => console.log(val));

  }

  getHeroes() : Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
  
  getHero(id: number): Promise<Hero> {
  return this.getHeroes()
             .then(heroes => heroes.find(hero => hero.id === id));
}

}