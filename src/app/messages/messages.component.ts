import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  //Constructor with a parameter that declares a public messageService property. Angular will inject the singleton MessageService into that property when it creates the HeroService.

  //messageService property must be public because it will be binded to the template. Angular only binds to public component properties.
  constructor(public messageService: MessageService) {}

  ngOnInit() {
  }

}
