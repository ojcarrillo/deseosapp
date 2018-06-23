import { Component } from "@angular/core";
import { ListaDeseosService } from "../../app/services/lista-deseos.service";
import { NavController } from "ionic-angular";
import { AgregarComponent } from "../agregar/agregar.component";
import { DetalleComponent } from "../detalle/detalle.component";
import { Listas } from "../../app/clases";

@Component({
    selector: 'app-pendientes',
    templateUrl: 'pendientes.component.html'
})
export class PendientesComponent {

    constructor(public _listaDeseos: ListaDeseosService,
        public navCtrl: NavController) {

    }

    irAgregar() {
        this.navCtrl.push(AgregarComponent);
    }

    verDetalle(lista: Listas, idx: number){
        this.navCtrl.push(DetalleComponent, {lista, idx});
    }
}