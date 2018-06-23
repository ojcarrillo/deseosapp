import { Component } from "@angular/core";
import { ListaDeseosService } from "../../app/services/lista-deseos.service";
import { NavController, NavParams, AlertController } from "ionic-angular";
import { Listas, ListaItem } from "../../app/clases/index";

@Component({
    selector: 'app-detalle',
    templateUrl: 'detalle.component.html'
})
export class DetalleComponent {

    idx: number;
    lista: Listas;

    constructor(public _listaDeseos: ListaDeseosService,
        public navCtrl: NavController,
        public navParams: NavParams,
        public alertCtrl: AlertController) {
        console.log(navParams);
        this.idx = this.navParams.get("idx");
        this.lista = this.navParams.get("lista");
    }

    actualizar(item: ListaItem) {
        item.completado = !item.completado;
        let todosMarcados = true;
        for(let item of this.lista.items){
            if(!item.completado){
                todosMarcados = false;
                break;
            }
        }
        this.lista.terminada=todosMarcados;
        this._listaDeseos.actualizarData();
    }

    borrarLista() {
        let confirm = this.alertCtrl.create({
            'title': 'Aviso',
            subTitle: '¿Desea eliminar la lista?',
            buttons: [
                {
                    text: 'Si',
                    handler: ()=>{
                        this._listaDeseos.eliminarLista(this.idx);
                        this.navCtrl.pop();
                    }
                }, 'No'
            ]
        });
        confirm.present();
    }
}