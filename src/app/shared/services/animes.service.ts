import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimesService {
  
  filterstring:string='';

  rangeValues:number[]=[1907,2023];
  rangeValuesOriginal:number[]=[1907,2023];

  avgValues:number[]=[5,100];
  avgValuesOriginal:number[]=[5,100];

  chapterValues:number[]=[1,100];
  chapterValuesOriginal:number[]=[1,100];

  filter:string='';
  textYear:string='';
  textAvg:string='';
  textChapter:string='';

  constructor(private httpClient1:HttpClient) {}

  makeFilter(){
    this.filter='';
    this.textAvg='';
    this.textChapter='';
    // si hay algo cambiado en rango años pone filtro.
    
      this.textYear='filter[year]='+this.rangeValues[0]+'..'+this.rangeValues[1];
      
      
    // si hay algo cambiado en rango puntuaciones pone filtro.

        this.textAvg='filter[averageRating]='+this.avgValues[0]+'..'+this.avgValues[1];

    // si hay algo en rango capitulos
   
      this.textChapter='filter[averageRating]='+this.avgValues[0]+'..'+this.avgValues[1]; 
 
    this.filter='?'+this.textYear+'&'+this.textAvg+'&'+this.textChapter;
    console.log('filter',this.filter);
    
    return this.filter;
  }

  setData(rangeValues:number[],avgValues:number[],chapterValues:number[]){
    this.rangeValues=[...rangeValues];
    this.avgValues=[...avgValues];
    this.chapterValues=[...chapterValues];
  };
 
  getAnimes(url:string){
    return this.httpClient1.get(url);
  }

  }




