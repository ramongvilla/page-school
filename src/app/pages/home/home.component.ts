import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  STATIC_NEWS = [
    { title: 'Technology', patagraph: 'Pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', illustration: '../../../assets/images/img8.png' },
    { title: 'Education', patagraph: 'Pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', illustration: '../../../assets/images/img9.png' },
    // { title:'',patagraph:'',illustration:''}, img8 img 9
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
