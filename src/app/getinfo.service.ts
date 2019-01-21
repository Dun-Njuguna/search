import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Repos } from './repos';

@Injectable({
  providedIn: 'root'
})
export class GetinfoService {
  userName = "Dun-Njuguna";
  client_id = "4ca1e5e523ddb90f1aac";
  client_secret = "bfc49d77e8c5ec5a9afb927a71f159f23c15c1b8";
  info: User;
  constructor(private http: HttpClient) {
    this.info = [
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
      this.http.get<ApiResponse>(environment.apiUrl + this.userName +'?client_id='+this.client_id +'&client_secret='+this.client_secret).toPromise().then(response => {
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
