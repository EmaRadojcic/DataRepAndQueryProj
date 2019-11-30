import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../Services/player.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-warrior-read',
  templateUrl: './warrior-read.component.html',
  styleUrls: ['./warrior-read.component.css']
})
export class WarriorReadComponent implements OnInit {

  MyPlayers: any = [];
  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.playerService.GetPlayerInformation().subscribe((data) => {
      this.MyPlayers = data.players;
      console.log(this.MyPlayers);
    })
  }

  onDelete(id:String){
    console.log("Deleting player with id: "+id);
    this.playerService.DeletePlayer(id).subscribe(
      ()=>{
        this.ngOnInit();
      }
    );
  }


}
