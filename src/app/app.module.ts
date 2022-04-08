import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GiveawayCreationComponent } from './components/giveaway-creation/giveaway-creation.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { CommentComponent } from './components/comment/comment.component';
import { CommentSectionComponent } from './components/comment-section/comment-section.component';

import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { InterceptorService } from './services/interceptor.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { GiveawayDisplayComponent } from './components/giveaway-display/giveaway-display.component';
import { GiveawayTableComponent } from './components/giveaway-table/giveaway-table.component';
import { FooterComponent } from './components/footer/footer.component';
import { GiveawayTimerComponent } from './components/giveaway-timer/giveaway-timer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GiveawayButtonComponent } from './components/giveaway-button/giveaway-button.component';


@NgModule({
  declarations: [
    AppComponent,
    GiveawayCreationComponent,
    SearchItemComponent,
    HeaderComponent,
    AboutComponent,
    CommentComponent,
    CommentSectionComponent
    LoginComponent,
    RegistrationComponent
    PageNotFoundComponent,
    GiveawayDisplayComponent,
    GiveawayTableComponent,
    FooterComponent,
    GiveawayTimerComponent,
    GiveawayButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
    HttpClientModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
