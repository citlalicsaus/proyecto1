import { Articulo } from '../modelos/articulo';

export const articulosBD: Articulo[] = [
    {
        nombre: 'Television',
        marca: 'Samsung',
        precio: 4000.12334,
        title: 'Television',
        description: '34 pulgadas',
        promotion: true,
        categoria: 'E',
        url:'assets/img/sawsung.png',
        id:1,
        fecha: new Date()
    },
    {
        nombre: 'Television 2',
        marca: 'LG',
        precio: 5000.34564,
        title: 'Television 2',
        description: '52 pulgadas',
        promotion: false,
        categoria: 'E',
        url:'assets/img/lg.png',
        id:2,
        fecha: new Date()
    },
    {
        nombre: 'Television 3',
        marca: 'Panasonic',
        precio: 6000.676767,
        title: 'Television 3',
        description: '34 pulgadas',
        promotion: true,
        categoria: 'E',
        url:'assets/img/pana.png',
        id:3,
        fecha: new Date()

    },
    {
        nombre: 'Television 4',
        marca: 'marca x',
        precio: 6000.768768,
        title: 'Television',
        description: '60 pulgadas',
        promotion: true,
        categoria: 'E',
        id:4,
        fecha: new Date()
    },
    {
        nombre: 'Sabritas',
        marca: 'Barcel',
        precio: 5.9879789,
        title: 'Papitas',
        description: 'Desc Papitas',
        promotion: true,
        categoria: 'A',
        url:'assets/img/sabritas.png',
        id:5,
        fecha: new Date()
    }

];