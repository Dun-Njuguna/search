import { Component, OnInit } from '@angular/core';
import { GetinfoService } from '../getinfo.service';
import { RepositoryService } from '../repository.service';
import { User } from '../user';
import { Repos } from '../repos';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  providers:[
    GetinfoService,
    RepositoryService,
  ],
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {
  userName;
  mm;
  nn: any[];
  repoArrayNew: any[];
  rep: Repos;
  repoServices: any[];
  constructor(private infoService:GetinfoService, private repoService:RepositoryService){
    this.repoService.getRepos();

   }

     ngOnInit() {

       this.infoService.updateUserName(this.userName);
       console.log(this.userName);

       this.repoService.updateUserName(this.userName);
       console.log(this.userName);

       this.infoService.getUser();
       this.mm=this.infoService.info;
  }
  }
