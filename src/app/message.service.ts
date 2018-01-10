import { Injectable } from '@angular/core';

/*
@Injectable()
export class MessageService {

  constructor() { }

}
*/

//The service exposes its cache of messages and two methods: one to add() a message to the cache and another to clear() the cache.
@Injectable()
export class MessageService {
  messages: string[] = [];
 
  add(message: string) {
    this.messages.push(message);
  }
 
  clear() {
    this.messages = [];
  }
}
