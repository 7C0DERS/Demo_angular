import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  fontcolor:any
  verify!:FormGroup
  name="hat"
constructor(private f5y:FormBuilder){

}
  ngOnInit(): void {
    this.verify = this.f5y.group({
    fromName: ['', Validators.required],
    toName: ['', Validators.required],
    gender:['',Validators.required]
  });
  console.log('im early cominggg');
  
}
// button(){
//   console.log('after i clicked')
// }
onSubmit(formData: any) {
  console.log('Form submitted with data:', formData);
}
submit(){
 console.log( this.verify.get('fromName')?.value,
 this.verify.get('toName')?.value);
 
}
register(){
  console.log(this.verify.get('gender')?.value)
  console.log(this.verify.get('toName')?.value)
  console.log(this.verify.get('fromName')?.value)
}
// getsingle(data:any){
//   this.perId=data.id
// console.log(data);
// this.api.getbyid(data.id).subscribe((datas)=>{
//   console.log(datas,'single')

// this.verify.get('fromName')?.setValue(data.name)
// this.verify.get('toName')?.setValue(data.email)





// })
// this.api.delete(data.id).subscribe(x=>{
//   console.log(x,'de');
  
// })

}

// getbyid(id:any) {
//   return this.http.get(`http://localhost:3006/${id}`);
// }
// patchapi(id:any,body:any){
//   return this.http.patch(`http://localhost:3006/patch/${id}`,body)
// }
// delete(id:any){
//   return this.http.delete(`http://localhost:3006/delete/${id}`)
// }
