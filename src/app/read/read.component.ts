import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../Services/player.service';
import {Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  MyPlayers: any = [];
  constructor(private playerService: PlayerService,private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit() {

    //player info array
    this.playerService.GetPlayerInformation().subscribe((data) => {
      this.MyPlayers = data.players;
      console.log(this.MyPlayers);
    })
  }


  //delete player with mathing id
  onDelete(id: String) {
    console.log("Deleting player with id: " + id);
    this.playerService.DeletePlayer(id).subscribe(
      () => {
        this.ngOnInit();
      }
    );
  }

}
