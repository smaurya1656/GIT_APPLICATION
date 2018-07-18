import { Component, OnInit } from '@angular/core';
import {GitserviceService} from "../gitservice.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user : any;
  repos: any[];
  uname: string;
  constructor(private gs: GitserviceService) {

  }
  searchUser(){
    this.gs.updateuser(this.uname);

    this.gs.getuser()
      .subscribe((user => {this.user = user;
      }));

    this.gs.getrepos()
      .subscribe((repos => {this.repos = repos}));

     console.log(this.user);

  }

  ngOnInit() {
      this.user=false;


  }

}
