import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

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
import { GiveawayButtonComponent } from './components/giveaway-button/giveaway-button.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { GiveawayWinnerComponent } from './components/giveaway-winner/giveaway-winner.component';



@NgModule({
  declarations: [
    AppComponent,
    GiveawayCreationComponent,
    SearchItemComponent,
    HeaderComponent,
    AboutComponent,
    CommentComponent,
    CommentSectionComponent,
    LoginComponent,
    RegistrationComponent,
    PageNotFoundComponent,
    GiveawayDisplayComponent,
    GiveawayTableComponent,
    FooterComponent,
    GiveawayTimerComponent,
    GiveawayButtonComponent,
    HomeComponent,
    ProfileComponent,
    GiveawayWinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule

  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
