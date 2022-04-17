import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Giveaway } from 'src/app/interfaces/giveaway';
import { GiveawayService } from 'src/app/services/giveaway.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  id: number = +localStorage.getItem('user_id');
  wonGiveaways: Giveaway[] = [];
  createdGiveaways: Giveaway[] = [];
  username: string;



  constructor(private giveawayService: GiveawayService, private router: Router) { 
  }
  ngOnInit(): void {
    this.giveawayService.getGiveawayByCreatorId(this.id).subscribe((giveaways) => {
      
      for( let data of giveaways) {
        console.log(data);
        data.isbn = 'https://covers.openlibrary.org/b/isbn/' + data.isbn + '-M.jpg?default=false';
        this.createdGiveaways.push(data);
      }     
    });

    this.giveawayService.getGiveawaysByWinnerId(this.id).subscribe((giveaways) => {
      
      for( let data of giveaways) {
        data.isbn = 'https://covers.openlibrary.org/b/isbn/' + data.isbn + '-M.jpg?default=false';
        this.wonGiveaways.push(data);
      }     
    });
    this.username = localStorage.getItem('username');
    if (this.username) {
        return;
    } else {
      this.router.navigate(['login']);
    }

  }

  giveawayDisplay(giveawayid: number) {
    this.router.navigate([`/giveaways/${giveawayid}`]);
  }

}
  

