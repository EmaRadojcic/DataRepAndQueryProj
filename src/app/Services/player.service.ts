import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Player} from '../player.model';


@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http:HttpClient) { }

 GetPlayerInformation():Observable<any>{
    return this.http.get('http://localhost:3000/api/players');
  }
//,level:string,icon:string,guild:string,joined:Date
//,level:level,icon:icon,guild:guild,joined:joined
  AddPlayerInformation(name:string,level:number,guild:string):Observable<any>{
    const player:Player = {name:name,level:level,guild:guild};
    return this.http.post('http://localhost:3000/api/players', player)
  }

  DeletePlayer(id:String):Observable<any>{
    return this.http.delete('http://localhost:3000/api/players/'+id);
  }

  GetPlayers(id:String):Observable<any>{
    return this.http.get('http://localhost:3000/api/players/'+id);
  }

  UpdatePlayers(id:String,name:string,level:number,guild:string):Observable<any>{
    const player:Player = {name:name,level:level,guild:guild};
    console.log("Edit"+id);
    return this.http.put('http://localhost:3000/api/players/'+id, player);
  }
}
