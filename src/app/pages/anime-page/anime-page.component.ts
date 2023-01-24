import { Component , OnInit } from '@angular/core';
import { AnimesService } from './../../shared/services/animes.service';
import { AnimeInterface } from './../../shared/models/Anime.interface';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';



@Component({
  selector: 'app-anime-page',
  templateUrl: './anime-page.component.html',
  styleUrls: ['./anime-page.component.scss']
})

export class AnimePageComponent implements OnInit {
  
  searchForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private animesService: AnimesService) {}

  animes?:any;
  element:any={datas:"",title:"animes"};
  searchname:any;
  val:number=0;
  rangeValues:number[]=[0,0];
  avgValues:number[]=[];
  chapterValues:number[]=[1,100];
  filter:string='';
  textYear:string='';
  textAvg:string='';

  
  // https://kitsu.docs.apiary.io/#introduction/json:api

  url:string= 'https://kitsu.io/api/edge/anime?fields%5Banime%5D=slug%2CcanonicalTitle%2Ctitles%2CposterImage%2Cdescription%2CaverageRating%2CstartDate%2CpopularityRank%2CratingRank%2CyoutubeVideoId&page%5Boffset%5D=0&page%5Blimit%5D=20&sort=-user_count';
  
  productForm!: FormGroup;



  ngOnInit() {
    console.log("init");
    this.searchname="";
    this.rangeValues=[1907,2023];
    this.avgValues=[5,100];
    this.productForm = this.formBuilder.group({
      name: [this.searchname, [Validators.required]]    
    });    
    this.searchForm = this.formBuilder.group({
      searchname: [this.searchname]
    });
    this.element={datas:"",title:"lista de animes"};
    this.animesService.getAnimes(this.url).subscribe((res: any) => {
      this.animes = res.data;
      console.log(this.animes);        
      this.element.datas=this.animes;
    });
  }

  handleChangeYear(e:any) {
    //e.value is the new value
    this.rangeValues=[...e.values];  
    this.animesService.setData(this.rangeValues,this.avgValues,this.chapterValues);
    this.filter=this.animesService.makeFilter();
    this.url="https://kitsu.io/api/edge/anime"+this.filter;    
    this.search(this.url);
  }

  handleChangeAvg(e:any) {
    //e.value is the new value
    this.avgValues=[...e.values];  
    this.animesService.setData(this.rangeValues,this.avgValues,this.chapterValues);
    this.filter=this.animesService.makeFilter();
    this.url="https://kitsu.io/api/edge/anime"+this.filter;   
    this.search(this.url);
  } 

  handleChangeChap(e:any) {
    //e.value is the new value
    this.chapterValues=[...e.values]; 
    this.animesService.setData(this.rangeValues,this.avgValues,this.chapterValues);
    this.url="https://kitsu.io/api/edge/anime"+this.animesService.makeFilter();   
    this.search(this.url);
  } 

  search(text:string){
    this.url=text;
    this.animesService.getAnimes(this.url).subscribe((res: any) => {
      this.animes = res.data;
      console.log(this.animes);        
      this.element.datas=this.animes;
    });
  }

  btnSearch(text:string){
    this.url="https://kitsu.io/api/edge/anime?filter[text]="+text;
    // this.url="https://kitsu.io/api/edge/anime?fields%5Banime%5D=slug%2CcanonicalTitle%2Ctitles%2CposterImage%2Cdescription%2CaverageRating%2CstartDate%2CpopularityRank%2CratingRank%2CyoutubeVideoId&filter%5Btext%5D=" + text + "&page%5Blimit%5D=20&page%5Boffset%5D=20"
    this.search(this.url);
  }


}



// [12:50] Abel Cabeza
// `anime?page%5Boffset%5D=0&page%5Blimit%5D=20${text ? "&filter%5Btext%5D=" + text : ""}&sort=-user_count`

// [12:50] Abel Cabeza
// filter%5Byear%5D=1907..2008

// "https://kitsu.io/api/edge/anime?fields%5Banime%5D=slug%2CcanonicalTitle%2Ctitles%2CposterImage%2Cdescription%2CaverageRating%2CstartDate%2CpopularityRank%2CratingRank%2CyoutubeVideoId&filter%5Byear%5D=1907..1907&page%5Boffset%5D=0&page%5Blimit%5D=20&sort=-user_count"


// handleChangeYear(e:any) {
//   //e.value is the new value
//   console.log(e.values[0],"-",e.values[1]);
//   this.textYear='?filter[year]='+e.values[0]+'..'+e.values[1]
//   // this.url=`https://kitsu.io/api/edge/anime?fields%5Banime%5D=slug%2CcanonicalTitle%2Ctitles%2CposterImage%2Cdescription%2CaverageRating%2CstartDate%2CpopularityRank%2CratingRank%2CyoutubeVideoId&filter%5Byear%5D=${e.values[0]}..${e.values[1]}&page%5Boffset%5D=0&page%5Blimit%5D=20&sort=-user_count`;
//   this.url="https://kitsu.io/api/edge/anime"+this.textYear;
//   console.log(this.url);
//   this.search(this.url);
// } 

// handleChangeAvg(e:any) {
//   //e.value is the new value
//   console.log(e.values[0],"-",e.values[1]);
//   this.textAvg='?filter[averageRating]='+e.values[0]+'..'+e.values[1]    
//   this.url="https://kitsu.io/api/edge/anime"+this.textAvg+"&"+this.textYear;
//   console.log(this.url);
//   this.search(this.url);
// }
