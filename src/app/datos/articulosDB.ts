import { Articulo } from '../modelos/articulo'

export const articulosDB: Articulo[] = [{
    nombre: 'Television 1',
    marca: 'Panasonic',
    precio: 3400,
    title: 'Television',
    description: '30 pulgadas',
    promotion: false,
    categoria: 'E',
    url: 'assets/img/samsung.jpeg'
  },
  {
    nombre: 'Television 2',
    marca: 'LG',
    precio: 5000,
    title: 'Television',
    description: '34 pulgadas',
    promotion: true,
    categoria: 'E',
    url: 'assets/img/lg.jpg'

  },
  {
    nombre: 'Television 3',
    marca: 'lg',
    precio: 4000,
    title: 'Telivision',
    description: '34 pulgadas',
    promotion: false,
    categoria: 'E',
    url: 'assets/img/panasonic.jpg'

  }, {
    nombre: 'Television 4',
    marca: 'Sony',
    precio: 4500,
    title: 'Television',
    description: '25 pulgadas',
    promotion: true,
    categoria: 'E'
  },
  {
    nombre: 'Sabritas 1',
    marca: 'Barcel',
    precio: 5,
    title: 'Sabritas',
    description: 'Papitas',
    promotion: false,
    categoria: 'A'
  }, {
    nombre: 'Sabritas 2',
    marca: 'Barcel',
    precio: 5,
    title: 'Sabritas',
    description: 'Papitas',
    promotion: true,
    categoria: 'A'
  }

];
