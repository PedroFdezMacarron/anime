import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimesService {

  constructor(private httpClient1:HttpClient) { }



getAnimes(){
  return this.httpClient1.get("https://kitsu.io/api/edge/trending/anime?limit=6");
}

getAnimesSemana(){
  return this.httpClient1.get("https://kitsu.io/api/edge/anime?filter%5Bstatus%5D=current&page%5Blimit%5D=6&sort=-user_count");
}
getAnimesComing(){
  return this.httpClient1.get("https://kitsu.io/api/edge/anime?filter%5Bstatus%5D=upcoming&page%5Blimit%5D=6&sort=-user_count");
}

getAnimesRating(){
  return this.httpClient1.get("https://kitsu.io/api/edge/trending/anime?limit=6"); 
}
getAnimesPopulares(){
  return this.httpClient1.get("https://kitsu.io/api/edge/anime?page%5Blimit%5D=6&sort=-user_count"); 
}

}
