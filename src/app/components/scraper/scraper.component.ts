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
  url:string="https://edition.cnn.com/";
  keyWordOne:string="cnn";
  keyWordTwo:string="cnn";
  keyWordThree:string="container__headline container_lead-plus-headlines__headline";



public scrapesWebsite():void{
  let webSource:any={
    url: this.url,
    keyWordOne: this.keyWordOne,
    keyWordTwo: this.keyWordTwo,
    keyWordThree: this.keyWordThree,

  }
  this.webScraperServ.scrapeUrl(webSource).subscribe(
    (reponse: scraperWeb)=>{
      console.log("=========j=====>"+reponse.bodyLength)
    }
  )
}

}
