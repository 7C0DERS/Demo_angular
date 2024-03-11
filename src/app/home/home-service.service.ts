import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  constructor(private http: HttpClient) { }
  getdata() {
    return this.http.get('http://localhost:3006/');
  }
 
post(b:any){
  return this.http.post('http://localhost:3006/create',b)
}
getbyId(a:any){
  return this.http.get(`http://localhost:3006/${a}`)
}
update(b:any,obj:any){
  return this.http.patch(`http://localhost:3006/patch/${b}`,obj)
}
delete(d:any){
  return this.http.delete(`http://localhost:3006/delete/${d}`)
}


}
