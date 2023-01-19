import { AnimesService } from './../../shared/services/animes.service';
import { Component, OnInit } from '@angular/core';
import{AnimeInterface, Ogallery} from './../../shared/models/Anime.interface';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit 
 {
  constructor(private animesService:AnimesService)
  {}

animes?:AnimeInterface;
animesSemana:any;
animesComing:any;
animesRating:any;
animesPopulares:any;




ngOnInit(){
  // get inicial
  this.animesService.getAnimes().subscribe((res:any)=>{
    this.animes=res.data;

  })
  this.animesService.getAnimesSemana().subscribe((res:any)=>{
    this.animesSemana=res.data;

  })
  this.animesService.getAnimesComing().subscribe((res:any)=>{
    this.animesComing=res.data;

  })
  this.animesService.getAnimesRating().subscribe((res:any)=>{
    this.animesRating=res.data;

  })
  this.animesService.getAnimesPopulares().subscribe((res:any)=>{
    this.animesPopulares=res.data;

  })

}


}


