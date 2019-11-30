import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

 GetUserInformation():Observable<any>{
    return this.http.get('http://localhost:3000/api/users');
  }
  AddUserInformation(userName:String, pass:String):Observable<any>{
    const user:User = {userName:userName ,pass:pass};
    return this.http.post('http://localhost:3000/api/users', user)
  }

  GetUsers(id:String):Observable<any>{
    return this.http.get('http://localhost:3000/api/users/');
  }


}
