import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import {Router, ActivatedRoute} from '@angular/router';
import {PlayerService} from '../Services/player.service'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
player:any=[];
  constructor(private playerService:PlayerService, private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.playerService.GetPlayers(this.route.snapshot.params['id']).subscribe(
      (data) =>{
          this.player = data;
          console.log(this.player);
      }
    );

  }
  onEditPlayer(form:NgForm){
    console.log(form.value.name);
    this.playerService.UpdatePlayers(this.player._id,form.value.name,form.value.level,form.value.guild,form.value.icon).
    subscribe();
  }
}
