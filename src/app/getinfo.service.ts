import { Injectable } from '@angular/core';
import { Http, Headers} from 'angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class GetinfoService {
  private username = 'Dun-Njuguna';
  private client_id = '4ca1e5e523ddb90f1aac';
  private client_secret = '31a7bf38049c0968a3f399d8ede44f730c28805b';
  constructor( private _http:Http) {
    console.log("fdghjkl")
   }
   getUser(){
     return this._http.get('https://api.github.com/users/'+this.username)
        .map(res => res.json())
   }
}
