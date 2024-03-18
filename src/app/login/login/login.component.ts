import { Component } from '@angular/core';
import { EmailValidator, FormBuilder,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
email :string ="";
password :string ="";
login!:FormGroup;

constructor(private fb:FormBuilder){}
ngOnInit():void{
  this.login=this.fb.group({
    email:['',Validators.required],
    password:['',Validators.required]
  });
}
}
