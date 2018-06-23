import { Injectable } from "@angular/core";
import { Listas } from "../clases/listas";

@Injectable()
export class ListaDeseosService {

    listas: Listas[] = [];

    constructor() {
        console.log("servicion iniciado!");
        this.cargarData();
    }

    actualizarData() {
        localStorage.setItem("data", JSON.stringify(this.listas));
    }

    cargarData() {
        if (localStorage.getItem("data")) {
            this.listas = JSON.parse(localStorage.getItem("data"));
        }
    }

    agregarLista(lista: Listas) {
        this.listas.push(lista);
        this.actualizarData();
    }

    eliminarLista(idx: number){
        this.listas.splice(idx, 1);
        this.actualizarData();
    }

}