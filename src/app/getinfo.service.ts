import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class GetinfoService {


  info: User;
  constructor(private http: HttpClient) {
    this.info = [
    // new User ("bfgb","bfbf","fvfgb","fgbgb","fdgbf","dfb"),
  ]

  }
  getUser() {
    interface ApiResponse {
      name: any;
      login: any;
      avatar_url: any;
      followers: any;
      following: any;
      public_repos: any;
    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response => {
        console.log(response);
        this.info.name = response.name;
        this.info.login = response.login;
        this.info.avatar_url = response.avatar_url;
        this.info.followers = response.followers;
        this.info.following = response.following;
        this.info.public_repos = response.public_repos;
        console.log(this.info);
        resolve()
      }, error => {

        reject(error)
      }
      )
    })

    return promise
  }


}
