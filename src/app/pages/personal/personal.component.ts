import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
  directorName = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'

  MAESTROS = [
    {name:'Lorem ipsum dolor sit amet consectetur adipisicing elit.', pic:''},
    {name:'Lorem ipsum dolor sit amet consectetur adipisicing elit.', pic:''},
    {name:'Lorem ipsum dolor sit amet consectetur adipisicing elit.', pic:''},
    {name:'Lorem ipsum dolor sit amet consectetur adipisicing elit.', pic:''},
    {name:'Lorem ipsum dolor sit amet consectetur adipisicing elit.', pic:''},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
