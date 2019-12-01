import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { LoginService } from '../Services/login.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any = [];

  constructor(private loginService: LoginService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    
  }

  //register
  onAddUser(form: NgForm) {
    if (!form.valid) {
      return;
    }
    //adds user information from form
    console.log(form.value);
    this.loginService.AddUserInformation(form.value.username, form.value.pass).subscribe(
      () => {
      }
    );
    //console.log(form.value);
    form.resetForm();
  }

  //login 
  onLoginUser(form: NgForm) {
    //if form is invalid then return
    if (!form.valid) {
      alert("Invalid");  
      return;
    }
    console.log(form.value)
    let p = this.loginService.getlogin(form.value.usernamelogin, form.value.passlogin);
    p.then(data => {
      //if data does through then navigate to next link
      this.router.navigateByUrl('/read');
    });
    form.resetForm();
  }
}
