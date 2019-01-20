import { Component, OnInit } from '@angular/core';
import { GetinfoService} from '../getinfo.service';
import { User } from '../user';
@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  providers:[GetinfoService],
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {
  mm: any[];
  constructor(private infoService:GetinfoService){
   }

     ngOnInit() {
       this.infoService.getUser();
       this.mm=this.infoService.info;
       
  }
  }
