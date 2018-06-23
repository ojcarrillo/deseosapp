import { Component } from "@angular/core";
import { ListaDeseosService } from "../../app/services/lista-deseos.service";
import { ListaItem, Listas } from "../../app/clases/index";
import { AlertController, NavController } from 'ionic-angular';

@Component({
    selector: 'app-agregar',
    templateUrl: 'agregar.component.html'
})
export class AgregarComponent {

    nombreLista: string = '';
    nombreItem: string = '';

    items: ListaItem[] = [];

    constructor(public _listaDeseos: ListaDeseosService,
        public alertCtrl: AlertController,
        public navCtrl: NavController) {

    }

    agregarItem() {
        if (this.nombreItem.length == 0) {
            return;
        }
        let item = new ListaItem();
        item.nombre = this.nombreItem;
        this.items.push(item);
        this.nombreItem = '';
    }

    eliminarItem(idx: number) {
        this.items.splice(idx, 1);
    }

    agregarLista(){
        if(this.nombreLista.length == 0){
            let alert = this.alertCtrl.create({
                'title':'Error',
                subTitle:'El nombre de la lista es necesario',
                buttons:['OK']
            });
            alert.present();
            return;
        }
        let lista = new Listas(this.nombreLista);
        lista.items = this.items;
        this._listaDeseos.agregarLista(lista);
        this.navCtrl.pop();
    }
}