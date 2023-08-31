import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ScraperComponent } from './components/scraper/scraper.component';

@NgModule({
  declarations: [
    AppComponent,
    ScraperComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule,
    RouterModule.forRoot([{path:'scraper',component: ScraperComponent},
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
