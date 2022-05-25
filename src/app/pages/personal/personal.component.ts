import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
  directorName = 'Jose Luis Valero Esparza'
  puesto = 'Director'

  MAESTROS = [
    {name:'David Alexis Gamez Hernandez',puesto:'Docente de Idiomas', pic:'../../../assets/svg/DavidAlexis.svg'},
    {name:'ilda Rosas Marfileño',puesto:'Docente', pic:'../../../assets/svg/ildaRosas.svg'},
    {name:'Miguel Angel Herrera Medina',puesto:'Docente', pic:'../../../assets/svg/MiguelAngel.svg'},
    {name:'Miguel Joab Guajardo Aranda',puesto:'Docente', pic:'../../../assets/svg/MiguelJoab.svg'},
    {name:'Rosa Maria Fernández Treviño',puesto:'Docente', pic:'../../../assets/svg/RosaMaria.svg'},
    {name:'Rosa Maria Sanchez Banda',puesto:'Docente', pic:'../../../assets/svg/MariaSanchez.svg'},
    {name:'Andrea Patricia Martinez Escobar .',puesto:'Docente', pic:'../../../assets/svg/AndreaPatricia.svg'},
    {name:'Mario Pecina Martinez',puesto:'Docente', pic:'../../../assets/svg/MarioPecina.svg'},
    {name:'María Guadalupe Cuevas Landa',puesto:'Docente', pic:'../../../assets/svg/MaríaGuadalupe.svg'},
    {name:'Paula Castillo',puesto:'Educación Especial', pic:'../../../assets/svg/PaulaCastillo.svg'},
    {name:'Taurino Perez SantaMaria',puesto:'Docente', pic:'../../../assets/svg/TaurinoPerez.svg'},
    {name:'Jose Rodriguez Quintanilla',puesto:'Docente', pic:'../../../assets/svg/JoseRodriguez.svg'},
    {name:'Algo Gonzalez Montalve ',puesto:'Intendencia', pic:'../../../assets/svg/AlgoGonzalez.svg'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
