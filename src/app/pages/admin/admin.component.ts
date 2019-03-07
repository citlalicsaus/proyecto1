import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ArticulosService } from '../../services/articulos.service'
import { Articulo } from '../../modelos/articulo';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ArticulosService]
})
export class AdminComponent implements OnInit {

  public articulos: Articulo[];

  modalRef: BsModalRef;
  constructor(private modalService: BsModalService,
    public as: ArticulosService) {

  }


  ngOnInit() {
    this.articulos = this.as.articulos;


  }

  public nuevo(template: TemplateRef < any > ) {
    this.modalRef = this.modalService.show(template);

  }
  public agregar() {

    this.as.nuevo({
      nombre: 'Television 1',
      marca: 'Panasonic',
      precio: 3400.32,
      title: 'Television',
      description: '30 pulgadas',
      promotion: false,
      categoria: 'E',
      url: 'assets/img/samsung.jpeg',
      id: this.articulos.length,
      fecha: new Date()
    });

    this.articulos = this.as.articulos;
    this.modalRef.hide();

  }

  public borrar(articulo: Articulo) {
    console.log("borrar 1", articulo);
    this.as.borrar(articulo);

    this.articulos = this.as.articulos;

  }

}