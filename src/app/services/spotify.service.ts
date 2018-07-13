import { Injectable } from '@angular/core';
//AQui importamos http client para pedir servicios
import {HttpClient, HttpHeaders} from '@angular/common/http';

//con el map recojemos toda la informacion y pedimos lo que necessitamos
import { map } from 'rxjs/operators';

@Injectable({
  // teniendo el provideIn no tenemos que importarlos en el modulo porque esto nos lo
  // hcae automaticamente
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) {
  console.log('spotify listo');
}
// en este getQuery hacemos es unificar la parte del link que es fija
getQuery(query:string){
  const url=`https://api.spotify.com/v1/${ query }`;
// aqui cojemos unicamente las url y los headers para utilizarlos luego en ambos componentes
  const headers = new HttpHeaders({
    'Authorization':'Bearer BQC2ojbxHCX0mYzw9Hl2goxedGcjx5X3TJX3gGObzgV0XRTTz8epR2uT03FhD663Mqt5zeu2_mkkhFab-_8'
  });

  return  this.http.get(url, { headers });

}
getNewReleases(){

  return this.getQuery('browse/new-releases?limit=20')
             .pipe( map( data => data['albums'].items));

}
getArtistas(termino:string){
  return this.getQuery(`search?query=${termino}&type=artist&market=CO&offset=0&limit=15`)
             .pipe( map(data => data['artists'].items));
}
getArtista( id:string){
  return this.getQuery(`artists/${ id }`);
            // .pipe( map(data => data['artists'].items));
}
getTopTracks( id:string){
  return this.getQuery(`artists/${id}/top-tracks?country=us`)
             .pipe( map(data => data['tracks']));
}
}
