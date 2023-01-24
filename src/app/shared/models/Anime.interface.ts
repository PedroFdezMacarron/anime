export interface Ogallery {
  galleryTitle: string;
  animeList: AnimeInterface[];
}

export interface Galleries {
  lista:{title:string,url:string,datas:any}[]
}

export interface ListaGalerias {title:string,url:string,datas:string}[]

export interface AnimeInterface {
  attributes: AttributesInterface;
}

interface AttributesInterface {
  posterImage: ImageInterface;
  canonicalTitle: string;
}

interface ImageInterface {
  original: string;
}


