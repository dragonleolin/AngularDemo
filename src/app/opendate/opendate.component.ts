import { Component, OnInit } from '@angular/core';
import { data } from './airStation'
@Component({
  selector: 'app-opendate',
  templateUrl: './opendate.component.html',
  styleUrls: ['./opendate.component.scss']
})
export class OpendateComponent implements OnInit {

  list = data

  constructor() { }

  ngOnInit() {
  }

}
