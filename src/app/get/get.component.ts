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

  mm: any[];
  nn: any[];
  repoArrayNew: any[];
  rep: Repos;
  repoServices: any[];
  constructor(private infoService:GetinfoService, private repoService:RepositoryService){

   }

     ngOnInit(i) {
       this.infoService.getUser();
       this.mm=this.infoService.info;
       this.repoService.getRepos();
       
  }
  }
