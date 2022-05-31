import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-talleres',
  templateUrl: './talleres.component.html',
  styleUrls: ['./talleres.component.scss']
})
export class TalleresComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  MAESTROS = [
    {name:'Equipo de futbol',pic:'../../../assets/svg/soccer.svg'},
    {name:'Club de Ajedrez',pic:'../../../assets/svg/ajedres.svg'},
    {name:'Taller de reciclaje',pic:'../../../assets/svg/reciclaje.svg'},
  ]

}
