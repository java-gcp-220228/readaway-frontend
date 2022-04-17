import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { GiveawayDisplayComponent } from './components/giveaway-display/giveaway-display.component';
import { GiveawayTableComponent } from './components/giveaway-table/giveaway-table.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { GiveawayCreationComponent } from './components/giveaway-creation/giveaway-creation.component';
import { GiveawayWinnerComponent } from './components/giveaway-winner/giveaway-winner.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'giveaways', component: GiveawayTableComponent},
  { path: 'register', component: RegistrationComponent },
  { path: "login", component: LoginComponent},
  { path: 'giveaways/:id', component: GiveawayDisplayComponent},
  { path: 'giveaway/create', component: GiveawayCreationComponent},
  { path: 'giveaways/winner/:id', component: GiveawayWinnerComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
