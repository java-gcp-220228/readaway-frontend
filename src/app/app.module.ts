import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { MatGridListModule } from '@angular/material/grid-list'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { GiveawayDisplayComponent } from './components/giveaway-display/giveaway-display.component';
import { GiveawayTableComponent } from './components/giveaway-table/giveaway-table.component';
import { FooterComponent } from './components/footer/footer.component';
import { GiveawayTimerComponent } from './components/giveaway-timer/giveaway-timer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GiveawayEntriesComponent } from './components/giveaway-entries/giveaway-entries.component';
import { GiveawayButtonComponent } from './components/giveaway-button/giveaway-button.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    GiveawayDisplayComponent,
    GiveawayTableComponent,
    FooterComponent,
    GiveawayTimerComponent,
    GiveawayEntriesComponent,
    GiveawayButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
