import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GiveawayCreationComponent } from './components/giveaway-creation/giveaway-creation.component';
import { SearchItemComponent } from './components/search-item/search-item.component';

@NgModule({
  declarations: [
    AppComponent,
    GiveawayCreationComponent,
    SearchItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
