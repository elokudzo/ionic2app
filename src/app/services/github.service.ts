import {Injectable}  from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()

export class GithubService{

    private username:string;
    private client_id ='c085a049234a38707a1f';
    private client_secret = 'dc64552044f0750cb008b6836de8e65575f24a1f';

constructor(private _http: Http){
    console.log("github service ready");

    this.username = 'elokudzo';
}

getUser(){
    return this._http.get('http://api.github.com/users/' + this.username+'?client_id=' + this.client_id +'&client_secret=' + this.client_secret)
    .map(res=> res.json());
}


getRepos(){
    return this._http.get('http://api.github.com/users/' + this.username+'/repos?client_id=' + this.client_id +'&client_secret=' + this.client_secret)
    .map(res=> res.json());
}

updateUser(username:string){
    this.username = username;
}


}