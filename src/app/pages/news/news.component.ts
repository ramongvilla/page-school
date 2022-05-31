import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  NEWS = [
    {
      titleSection: 'Noticias Proximas',
      align: 'left',
      section:
        {
          titleNews: 'Generación 2016-2022',
          description:
            'Felicidades a la generación 2016-2022, se les desea un camino de mucho éxito y prosperidad, esta siempre será su escuela" y la foto que mandare mas tardar mañana',
          illustration: './../../assets/svg/descargas.jpeg',
        },
      // ],
    },
    {
      titleSection: 'Ultimas Noticias',
      align: 'right',
      section:
        {
          titleNews: 'Reinscripción',
          description:
            ' Recuerda realizar el proceso de inscripción / Reinscripción antes del 5 de Julio (Revisar PDF)',
          illustration: '../../../assets/svg/news2.svg',
        },
      // ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
