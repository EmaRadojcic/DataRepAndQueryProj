import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../user.model';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient, private router: Router) { }

 GetUserInformation():Observable<any>{
    return this.http.get('http://localhost:3000/api/users');
  }
  AddUserInformation(userName:String, pass:String):Observable<any>{
    const user:User = {userName:userName ,pass:pass};
    return this.http.post('http://localhost:3000/api/users', user)
  }

  GetUsers(id:String):Observable<any>{
    return this.http.get('http://localhost:3000/api/users/' + id );
  }

  getlogin(username,password){

    let body = {
      username: username,
      password: password
    };
    //asycn gets data if true then data is resolved and sent 
    return new Promise(resolve => {
      this.http.post('http://localhost:3000/api/users/login', body).subscribe(data => {
        resolve(data);
      });
    });

  }

}
