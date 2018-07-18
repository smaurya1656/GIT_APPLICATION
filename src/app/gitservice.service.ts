import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable()
export class GitserviceService {
   private uname:string;
   private clientid = 'cd3344ac1b8400c176a3';
   private clientsecret = '955269f33cbf8257c025494ed97de4946f750265';


  constructor(private _http: HttpClient ) {
    this.uname = "swati"
  }

  getuser(): any{
    return this._http.get('http://api.github.com/users/'+ this.uname +'?client_id='+ this.clientid+'&clientsecret=' + this.clientsecret) ;
  }

  getrepos(): any{
    return this._http.get('http://api.github.com/users/'+ this.uname +'/repos?client_id='+ this.clientid+'&clientsecret=' + this.clientsecret) ;
  }

   updateuser(value):any{
      this.uname=value;

   }

}
