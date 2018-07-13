import { Component, Input} from '@angular/core';
import { Router} from '@angular/router';
//tenemos que importarlo

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent {
// en este input recojemos lo que nos mandan los componentes y lo ponemos en la tarjetas para minimizar codigos
  @Input() items: any[] = [];


  constructor( private router:Router) { }
  //aqui creamos el obejto que va ha recoger el id del artista
  verArtista( item:any ){

    let artistaId;
    //aqui si el item que ya viene con el id es = que el de artist le pasamos ha artistaId loq ue lleva item.id
    if( item.type === 'artist'){
      artistaId= item.id;
    }else{//aqui para la parte del home 
      artistaId=item.artists[0].id;
    }
    this.router.navigate([ '/artist',artistaId ])
  }


}
