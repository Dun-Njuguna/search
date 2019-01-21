import { Component, OnInit } from '@angular/core';
import { GetinfoService} from '../getinfo.service';
import { User } from '../user';
import { Repos } from './repos';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  providers:[GetinfoService],
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {
  mm: any[];
  repoArrayNew: any[];
  rep: Repos;
  constructor(private infoService:GetinfoService){
   }

     ngOnInit() {
       this.infoService.getUser();
       this.mm=this.infoService.info;
       console.log(this.mm);
       this.infoService.getRepos();
       this.repoArrayNew=this.infoService.repoArray;
       console.log(this.repoArrayNew);
  }
  }


  // rep: Repos;
  // this.rep.name = this.repoArray[i].name;
  // this.rep.html_url = this.repoArray[i].html_url;
  // this.rep.description = this.repoArray[i].description;
