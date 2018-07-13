import { Component } from '@angular/core';
//para ver el id del artista en el componente artista tenemos que importar esto
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {
//voy ha tener la informacion del artista ene sta variable
  artista: any = {};
  topTracks: any[]=[];
  loading:boolean;
//aqui lo inyectamos
  constructor(private router: ActivatedRoute,
              private spotify:SpotifyService ) {
    //aqui con esto lo que hacemos es que en el componente artista nos salga el id del artista
    //para luego porder trabajarlo

    this.loading = true;


   this.router.params.subscribe(params => {
     this.getArtista(params['id']);
     this.getTopTracks(params['id']);
   });
  }

getArtista( id:string){
  this.loading = true;
  this.spotify.getArtista(id)
      .subscribe( artista => {
        console.log(artista);
        this.artista = artista;
        this.loading = false;

      });
}
getTopTracks(id:string){
  this.spotify.getTopTracks(id)
      .subscribe( topTracks => {
        console.log(topTracks);
        this.topTracks=topTracks;
      });
}
}
