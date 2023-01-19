import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})

export class GalleryComponent {
@Input() animes:any;

// galleryTit=this.objetoA.galleryTitle;

// animes=[...objetoA.animeList];
galleryTit:string='Galería';

}
