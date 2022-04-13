import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { GiveawayDisplayComponent } from './components/giveaway-display/giveaway-display.component';
import { HomeComponent } from './home/home.component';
import { GiveawayTableComponent } from './giveaway-table/giveaway-table.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'giveaways', component: GiveawayTableComponent},
  { path: 'giveaways/:id', component: GiveawayDisplayComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent},
  { path: "login", component: LoginComponent},
//  { path: 'login', redirectTo: "/login", pathMatch: "full" }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
