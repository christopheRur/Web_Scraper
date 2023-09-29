import { Component, OnInit } from '@angular/core';
import { scraperWeb } from 'src/app/scraperWeb';
import { ScraperServiceService } from 'src/app/scraper-service.service';

@Component({
  selector: 'app-scraper',
  templateUrl: './scraper.component.html',
  styleUrls: ['./scraper.component.scss']
})
export class ScraperComponent implements OnInit {

  constructor(private webScraperServ:ScraperServiceService) { }

  ngOnInit(): void {

  }
  site:string='https://edition.cnn.com';
  keyWordOne:string='cnn';
  keyWordTwo:string='container__headline container_lead-plus-headlines__headline';
  keyWordThree:string='zone__inner has-pseudo-class-fix-layout--wide-center';

  respOne!: Set<string>;
  respTwo!: Set<string>;
  respThree!: Set<string>;
  links!:Set<string>;
  images!:Set<string>;
  numericalValues!:Set<number>;


  title:string='';
  keysFound:number=0;
  status:number=0;
  time:string='';
  key1Found: boolean = false;
  key2Found:Boolean = false;
  key3Found:Boolean= false;
  bodyLength:number=0;



public scrapesWebsite():void{
  let webSource:any={
    url: this.site,
    keyWordOne: this.keyWordOne,
    keyWordTwo: this.keyWordTwo,
    keyWordThree: this.keyWordThree,

  }
  this.webScraperServ.scrapeUrl(webSource).subscribe(
    (response: scraperWeb)=>{
      this.setAllValues(response);

    }
  )
}

private setAllValues(response:scraperWeb):void{
  this.respOne=response.setOne

  this.respOne=response.setOne;
  this.respTwo=response.setTwo;
  this.respThree=response.setThree;
  this.links=response.links;
  this.images=response.images;
  this.numericalValues=response.numericalValues;

  this.title=response.title
  this.keysFound=response.keysFound;
  this.status=response.status;
  this.time=response.time;
  this.key1Found=response.key1Found;
  this.key2Found=response.key2Found;
  this.key3Found=response.key3Found;
  this.bodyLength=response.bodyLength;
console.info("------------------->>>>>>>>>>"+response.images)
}

}
