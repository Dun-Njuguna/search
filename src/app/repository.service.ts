import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Repos } from './repos';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
  userName = "Dun-Njuguna";
  client_id = "4ca1e5e523ddb90f1aac";
  client_secret = "bfc49d77e8c5ec5a9afb927a71f159f23c15c1b8";
  repoArray;
  mm: any;
  xx: any[];
  constructor(private http: HttpClient) { }

  getRepos(i) {

    interface ApiResponse {
      name: any;
      html_url: any;
      description: any;
    }

    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(environment.apiUrl1 + this.userName + "/repos" + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret).toPromise().then(response => {
        console.log(response);
        this.repoArray = response;
        console.log(this.repoArray);
        resolve()
      }, error => {

        reject(error)
      }
      )
    })
    return promise
  }
}
