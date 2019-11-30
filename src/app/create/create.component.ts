import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { PlayerService } from '../Services/player.service';
import { stringify } from 'querystring';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  constructor(private playerService: PlayerService) {
  }

  ngOnInit() { }

  onAddPlayer(form: NgForm) {
    if (!form.valid) {
      return;
    }

    console.log(form.value);
    console.log(form.value.guild);
    //form.value.name,form.value.level,form.value.icon,form.value.guild,form.value.joined
    this.playerService.AddPlayerInformation(form.value.name, form.value.level, form.value.guild, form.value.icon).subscribe(
      () => {
      }
    );
    //refreshes page
    console.log(form.value);
    //form.resetForm();
  }

}
