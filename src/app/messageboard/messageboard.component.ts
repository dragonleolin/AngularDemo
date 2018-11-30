import { Component, OnInit } from '@angular/core';
import { Message } from './message';

@Component({
  selector: 'app-messageboard',
  templateUrl: './messageboard.component.html',
  styleUrls: ['./messageboard.component.scss']
})
export class MessageboardComponent implements OnInit {

  //用來綁定留言版的名稱
  name = '';

  //用來綁定留言版的內容
  content = '';

  messages: Message[] = [];

  constructor() { }

  ngOnInit() {
  }

  //新增留言
  addMessage(): void{
    if(!this.name.trim() || !this.content.trim()){
      return;
    }

    const message = new Message(this.name, this.content);
    this.messages.push(message);

    this.content = '';

  }





}
