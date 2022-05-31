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
          img: '../../../assets/svg/espanol.svg',
        },
        {
          name: 'Matemáticas',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '../../../assets/svg/matematicas.svg',
        },
        {
          name: 'Lengua Extranjera (Inglés)',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '../../../assets/svg/ingles.svg',
        },
        {
          name: 'Conicimiento del medio',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '../../../assets/svg/medio.svg',
        },
        {
          name: 'Artes',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '../../../assets/svg/artes.svg',
        },
        {
          name: 'Educación Física',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '../../../assets/svg/efisica.svg',
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
          img: '../../../assets/svg/espanol.svg',
        },
        {
          name: 'Matemáticas',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '../../../assets/svg/matematicas.svg',
        },
        {
          name: 'Lengua Extranjera (Inglés)',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '../../../assets/svg/ingles.svg',
        },
        {
          name: 'Conicimiento del medio',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '../../../assets/svg/medio.svg',
        },
        {
          name: 'Artes',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '../../../assets/svg/artes.svg',
        },
        {
          name: 'Educación Física',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '../../../assets/svg/efisica.svg',
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
          img: '../../../assets/svg/espanol.svg',
        },
        {
          name: 'Matemáticas',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '../../../assets/svg/matematicas.svg',
        },
        {
          name: 'Segunda Lengua: Inglés',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '../../../assets/svg/ingles.svg',
        },
        {
          name: 'Ciencias Naturales',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '../../../assets/svg/ciencias.svg',
        },
        {
          name: 'La entidad Donde Vivo',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '../../../assets/svg/entidad.svg',
        },
        {
          name: 'Formación Cívica y Ética',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '../../../assets/svg/cye.svg',
        },
        {
          name: 'Artes',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '../../../assets/svg/artes.svg',
        },
        {
          name: 'Educación Fisica',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '../../../assets/svg/efisica.svg',
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
          img: '../../../assets/svg/espanol.svg',
        },
        {
          name: 'Matemáticas',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '../../../assets/svg/matematicas.svg',
        },
        {
          name: 'Segunda Lengua: Inglés',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '../../../assets/svg/ingles.svg',
        },
        {
          name: 'Ciencias Naturales',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '../../../assets/svg/ciencias.svg',
        },
        {
          name: 'Geografía',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '../../../assets/svg/geografia.svg',
        },
        {
          name: 'Historia',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '../../../assets/svg/historia.svg',
        },
        {
          name: 'Formación Cívica y Ética',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '../../../assets/svg/cye.svg',
        },
        {
          name: 'Artes',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '../../../assets/svg/artes.svg',
        },
        {
          name: 'Educación Fisica',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '../../../assets/svg/efisica.svg',
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
          img: '../../../assets/svg/espanol.svg',
        },
        {
          name: 'Matemáticas',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '../../../assets/svg/matematicas.svg',
        },
        {
          name: 'Segunda Lengua: Inglés',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '../../../assets/svg/ingles.svg',
        },
        {
          name: 'Ciencias Naturales',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '../../../assets/svg/ciencias.svg',
        },
        {
          name: 'Geografía',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '../../../assets/svg/geografia.svg',
        },
        {
          name: 'Historia',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '../../../assets/svg/historia.svg',
        },
        {
          name: 'Formación Cívica y Ética',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '../../../assets/svg/cye.svg',
        },
        {
          name: 'Artes',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '../../../assets/svg/artes.svg',
        },
        {
          name: 'Educación Fisica',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '../../../assets/svg/efisica.svg',
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
          img: '../../../assets/svg/espanol.svg',
        },
        {
          name: 'Matemáticas',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '../../../assets/svg/matematicas.svg',
        },
        {
          name: 'Segunda Lengua: Inglés',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '../../../assets/svg/ingles.svg',
        },
        {
          name: 'Ciencias Naturales',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '../../../assets/svg/ciencias.svg',
        },
        {
          name: 'Geografía',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '../../../assets/svg/geografia.svg',
        },
        {
          name: 'Historia',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '../../../assets/svg/historia.svg',
        },
        {
          name: 'Formación Cívica y Ética',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '../../../assets/svg/cye.svg',
        },
        {
          name: 'Artes',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '../../../assets/svg/artes.svg',
        },
        {
          name: 'Educación Fisica',
          descripton:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore labore totam sequi sunt eius cupiditate? Quis consectetur tenetur accusamus provident cupiditate qui voluptatibus harum, quae esse deleniti, sequi illum!',
          img: '../../../assets/svg/efisica.svg',
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
