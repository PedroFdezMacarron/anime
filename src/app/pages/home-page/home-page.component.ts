import { AnimesService } from './../../shared/services/animes.service';
import { Component, OnInit } from '@angular/core';
import { AnimeInterface } from './../../shared/models/Anime.interface';
import {
  Ogallery,
  Galleries,
  ListaGalerias,
} from './../../shared/models/Anime.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(private animesService: AnimesService) {}

  miobjeto: Ogallery = {
    galleryTitle: 'hola',
    animeList: [],
  };

  title?: string;
  url?: string;

  galleries: Galleries = {
    lista: [{ title: '', url: '', datas: '' }],
  };

  animesSemana: any;
  animesComing: any;
  animesRating: any;
  animesPopulares: any;

  animes?: any;

  numero: any;

  ngOnInit() {
    // get inicial
    // array con las galerias y sus urls
    this.galleries = {
      lista: [
        {
          title: 'Animes populares esta semana',
          url: 'https://kitsu.io/api/edge/trending/anime?limit=6',
          datas: '',
        },
        {
          title: 'Animes más populares en emisión',
          url: 'https://kitsu.io/api/edge/anime?filter%5Bstatus%5D=current&page%5Blimit%5D=6&sort=-user_count',
          datas: '',
        },
        {
          title: 'Animes más esperados',
          url: 'https://kitsu.io/api/edge/anime?filter%5Bstatus%5D=upcoming&page%5Blimit%5D=6&sort=-user_count',
          datas: '',
        },
        {
          title: 'Animes mejor evaluados',
          url: 'https://kitsu.io/api/edge/trending/anime?limit=6',
          datas: '',
        },
        {
          title: 'Animes más populares',
          url: 'https://kitsu.io/api/edge/anime?page%5Blimit%5D=6&sort=-user_count',
          datas: '',
        },
      ],
    };

    for (let elem of this.galleries.lista) {
      this.animesService.getAnimes(elem.url).subscribe((res: any) => {
        this.animes = res.data;
        elem.datas = res.data;
      });
    }
  }
}
