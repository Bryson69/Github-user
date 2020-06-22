import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GitService {

  private URL = 'https://api.github.com/users/';
  private username = 'any'

  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.get(this.URL + this.username).pipe(map( resolve => resolve));
  }

  getRepo() {
    return this.http.get(this.URL + this.username + '/repos').pipe(map( resolve => resolve));
  }
  changeUsernames(username: string){
    this.username = username;
  }
}