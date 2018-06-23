import { Pipe, PipeTransform } from '@angular/core';
import { Listas } from '../clases';

@Pipe({
  name: 'pendientes',
  pure: false
})
export class PendientesPipe implements PipeTransform {

  transform(listas: Listas[], estado:boolean=false): Listas[] {
    let listasSel:Listas[] = [];
    for(let lista of listas){
      if(lista.terminada == estado){
        listasSel.push(lista);
      }
    }
    return listasSel;
  }

}
