import { Component } from '@angular/core';
import { HomeServiceService } from './home-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
username:any ='hathil'
secondname:any='mano'
textColor: string = ''
userName: string = '';
buttonClicked:any =false
fulldata:any
backendData!:FormGroup
forntendData!:FormGroup
getsinglename:any=''
getsingleemail:any=''
getphone:any
getsingleid:any
constructor(private api:HomeServiceService,private fb:FormBuilder) { }
ngOnInit(): void {
  this.backendData = this.fb.group({
    name:['',Validators.required],
    email:['',Validators.required],
    phone:['',Validators.required]
  })
  this.forntendData=this.fb.group({
    domainname:['',Validators.required],
  })
  this.api.getdata().subscribe((x)=>{
    this.fulldata = x
  this.fulldata.forEach((surya:any) => {
      this.getsinglename=surya.name
      this.getsingleemail=surya.email
      this.getphone=surya.id
    });
console.log(this.fulldata,'datas')
  })
//   this.api.getbyid().subscribe((data)=>{
//     console.log(data,'single')
//   })
// }
// onButtonClick() {
//   if(this.buttonClicked ==false){
//     this.buttonClicked = true;
//   }else{
// this.buttonClicked=false
//   }
// console.log('hi i clicked the button')
// }

}
dilligensubmit(){
  // console.log(this.backendData.get('email')?.value)
  const b={
    "name":this.backendData.get('name')?.value,
    "email":this.backendData.get('email')?.value,
    "phone":this.backendData.get('phone')?.value
  }
  this.api.post(b).subscribe((x)=>{
    console.log('this post  api working',x);
    this.api.getdata().subscribe((x)=>{
      this.fulldata = x
  console.log(this.fulldata,'aftersubmit')
    })
  })
this.backendData.reset()
}
display(c:any){

this.api.getbyId(c.id).subscribe((x:any)=>{
  console.log(x);
  this.getsinglename=x.name
  this.getsingleemail=x.email
  this.getphone=x.phone


  this.backendData.get('name')?.setValue(this.getsinglename)
  this.backendData.get('email')?.setValue(this.getsingleemail)
  this.backendData.get('phone')?.setValue(this.getphone)
 

})
this.getsingleid=c.id
}
update(){
  const t={
    "name":this.backendData.get('name')?.value,
    "email":this.backendData.get('email')?.value,
    "phone":this.backendData.get('phone')?.value
  }
this.api.update(this.getsingleid,t).subscribe((x)=>{
  console.log(x,'succes update');
  this.api.getdata().subscribe((x)=>{
    this.fulldata = x
console.log(this.fulldata,'aftersubmit')
  })
})
}
d(r:any){
console.log(r.id)
this.api.delete(r.id).subscribe((x)=>{
  console.log('deleted');
  this.api.getdata().subscribe((x)=>{
    this.fulldata = x
console.log(this.fulldata,'aftersubmit')
  })
})
}
}
