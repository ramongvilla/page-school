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
          titleNews: 'Lorem ipsum dolor sit amet',
          description:
            'Fugit omnis maiores quaerat culpa. Sequi nemo quos, cumque delectus doloremque excepturi officiis velit inventore in quas eum iure mollitia repellendus reiciendis.',
          illustration: '../../../assets/svg/news1.svg',
        },
      // ],
    },
    {
      titleSection: 'Ultimas Noticias',
      align: 'right',
      section:
        {
          titleNews: 'Lorem ipsum dolor sit amet',
          description:
            'Fugit omnis maiores quaerat culpa. Sequi nemo quos, cumque delectus doloremque excepturi officiis velit inventore in quas eum iure mollitia repellendus reiciendis.',
          illustration: '../../../assets/svg/news2.svg',
        },
      // ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
