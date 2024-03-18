import { Component } from '@angular/core';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email :string ="";
  password :string ="";
  Register!:FormGroup;

  constructor(private fb:FormBuilder){}
  ngOnInit():void{
    this.Register=this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required]
    });
  }

}
