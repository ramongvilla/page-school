import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  NAV = [
    {label:'Inicio',url:'/home'},
    {label:'Noticias',url:'/noticias'},
    {label:'Materias',url:'/materias'},
    {label:'Personal',url:'/personal'},
    {label:'Contacto',url:'/contacto'},
    {label:'En Vivo',url:'/live'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
