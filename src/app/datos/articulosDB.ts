import { Articulo } from '../modelos/articulo'

export const articulosDB: Articulo[] = [{
    nombre: 'Television 1',
    marca: 'Panasonic',
    precio: 3400.32,
    title: 'Television',
    description: '30 pulgadas',
    promotion: false,
    categoria: 'E',
    url: 'assets/img/samsung.jpeg',
    id: 1,
    fecha: new Date()
  },
  {
    nombre: 'Television 2',
    marca: 'LG',
    precio: 5000.232312,
    title: 'Television',
    description: '34 pulgadas',
    promotion: true,
    categoria: 'E',
    url: 'assets/img/lg.jpg',
    id: 2,
    fecha: new Date()


  },
  {
    nombre: 'Television 3',
    marca: 'lg',
    precio: 4000.121212,
    title: 'Telivision',
    description: '34 pulgadas',
    promotion: false,
    categoria: 'E',
    url: 'assets/img/panasonic.jpg',
    id: 3,
    fecha: new Date()

  }, {
    nombre: 'Television 4',
    marca: 'Sony',
    precio: 4500.3432,
    title: 'Television',
    description: '25 pulgadas',
    promotion: true,
    categoria: 'E',
    id: 4,
    fecha: new Date()

  },
  {
    nombre: 'Sabritas 1',
    marca: 'Barcel',
    precio: 5.3234,
    title: 'Sabritas',
    description: 'Papitas',
    promotion: false,
    categoria: 'A',
    id: 5,
    fecha: new Date()


  }, {
    nombre: 'Sabritas 2',
    marca: 'Barcel',
    precio: 5.134,
    title: 'Sabritas',
    description: 'Papitas',
    promotion: true,
    categoria: 'A',
    id: 6,
    fecha: new Date()

  }

];
