import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../shared/post.service';
import { Postmodel } from '../models/postmodel';
import { AuthService } from '../auth/shared/auth.service';
import {Appdata} from '../shared/appdata';
import {Chatservice} from '../shared/chatservice';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  namex : string= null;
  posts$: Array<Postmodel> = [] ;
  token : string;
  constructor(private router: Router,private postService: PostService, private auth :AuthService
  ,private appDataService:Appdata,private appService:Chatservice
  ) {
    this.postService.getAllPosts().subscribe(post => {
      this.posts$=post;
      console.log(this.posts$);
    });

    this.namex = auth.getUserName();

  }
  setbul():void{
    this.namex=null;

  }
  gotochat():void
  {
    if(this.namex!=null )
    this.router.navigate(['loginx']).then();
  }
  ngOnInit(): void {
  }

  gotoprofil():void
  { if(this.namex!=null )
    this.router.navigate(['profile']).then();
  }
  print():void
  { if(this.namex!=null )
    this.token=  this.auth.getJwtToken();
  }

  postss():void
  { if(this.namex!=null )
    this.router.navigate(['posts']).then();
  }

  name():void
  { if(this.namex!=null )
    this.namex = this.auth.getUserName();
  }



  doLogin() {
    this.appService.userLogin({name: this.namex})
      .subscribe(response => {
        this.appDataService.userId = response.id;
        this.appDataService.userName = response.userName;
        console.log(this.appDataService.userName);
        this.router.navigate(['/chat']);
      });
  }
}
