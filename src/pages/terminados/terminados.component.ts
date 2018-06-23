import { Component } from "@angular/core";
import { ListaDeseosService } from "../../app/services/lista-deseos.service";
import { NavController } from "ionic-angular";
import { DetalleComponent } from "../detalle/detalle.component";
import { Listas } from "../../app/clases";

@Component({
    selector: 'app-terminados',
    templateUrl: 'terminados.component.html'
})
export class TerminadosComponent {
    constructor(public _listaDeseos: ListaDeseosService,
        public navCtrl: NavController) {

    }

    verDetalle(lista: Listas, idx: number){
        this.navCtrl.push(DetalleComponent, {lista, idx});
    }
}