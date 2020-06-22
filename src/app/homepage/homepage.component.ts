import { Component, OnInit } from '@angular/core';
import{ GitService } from '../git.service'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  user: any;
  repo: any;
  username: string;

  constructor(private GitService: GitService) {
  }
 
  ngOnInit() {
  }
  search() {
    this.GitService.changeUsernames(this.username);
    this.GitService.getUser().subscribe(user => {
      this.user = user;
    } );
    // this.users = user;
    this.GitService.getRepo().subscribe(repo => {
      this.repo = repo;
    } );
    
  }
}
