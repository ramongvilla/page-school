import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.scss'],
})
export class MateriasComponent implements OnInit {
  indexGrado:number = 0;
  MATERIAS = [
    {
      grado: '1er Grado',
      materias: [
        {
          name: 'Lengua Materna (español)',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '',
        },
        {
          name: 'Matemáticas',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '',
        },
        {
          name: 'Lengua Extranjera (Inglés)',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '',
        },
        {
          name: 'Conicimiento del medio',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '',
        },
        {
          name: 'Artes',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '',
        },
        {
          name: 'Educación Física',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '',
        },
      ],
    },
    {
      grado: '2do Grado',
      materias: [
        {
          name: 'Lengua Materna (español)',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '',
        },
        {
          name: 'Matemáticas',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '',
        },
        {
          name: 'Lengua Extranjera (Inglés)',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '',
        },
        {
          name: 'Conicimiento del medio',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '',
        },
        {
          name: 'Artes',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '',
        },
        {
          name: 'Educación Física',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '',
        },
      ],
    },
    {
      grado: '3er Grado',
      materias: [
        {
          name: 'Español',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '',
        },
        {
          name: 'Matemáticas',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '',
        },
        {
          name: 'Segunda Lengua: Inglés',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '',
        },
        {
          name: 'Ciencias Naturales',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '',
        },
        {
          name: 'La entidad Donde Vivo',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '',
        },
        {
          name: 'Formación Cívica y Ética',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '',
        },
        {
          name: 'Artes',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '',
        },
        {
          name: 'Educación Fisica',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '',
        },
      ],
    },
    {
      grado: '4to Grado',
      materias: [
        {
          name: 'Español',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '',
        },
        {
          name: 'Matemáticas',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '',
        },
        {
          name: 'Segunda Lengua: Inglés',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '',
        },
        {
          name: 'Ciencias Naturales',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '',
        },
        {
          name: 'Geografía',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '',
        },
        {
          name: 'Historia',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '',
        },
        {
          name: 'Formación Cívica y Ética',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '',
        },
        {
          name: 'Artes',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '',
        },
        {
          name: 'Educación Fisica',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '',
        },
      ],
    },
    {
      grado: '5to Grado',
      materias: [
        {
          name: 'Español',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '',
        },
        {
          name: 'Matemáticas',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '',
        },
        {
          name: 'Segunda Lengua: Inglés',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '',
        },
        {
          name: 'Ciencias Naturales',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '',
        },
        {
          name: 'Geografía',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '',
        },
        {
          name: 'Historia',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '',
        },
        {
          name: 'Formación Cívica y Ética',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '',
        },
        {
          name: 'Artes',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '',
        },
        {
          name: 'Educación Fisica',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '',
        },
      ],
    },
    {
      grado: '6to Grado',
      materias: [
        {
          name: 'Español',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '',
        },
        {
          name: 'Matemáticas',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '',
        },
        {
          name: 'Segunda Lengua: Inglés',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '',
        },
        {
          name: 'Ciencias Naturales',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '',
        },
        {
          name: 'Geografía',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '',
        },
        {
          name: 'Historia',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '',
        },
        {
          name: 'Formación Cívica y Ética',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '',
        },
        {
          name: 'Artes',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '',
        },
        {
          name: 'Educación Fisica',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '',
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
