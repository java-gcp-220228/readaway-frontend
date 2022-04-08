import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GiveawayCreationComponent } from './components/giveaway-creation/giveaway-creation.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { CommentComponent } from './components/comment/comment.component';
import { CommentSectionComponent } from './components/comment-section/comment-section.component';

@NgModule({
  declarations: [
    AppComponent,
    GiveawayCreationComponent,
    SearchItemComponent,
    HeaderComponent,
    AboutComponent,
    CommentComponent,
    CommentSectionComponent
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
