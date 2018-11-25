import { Component, OnInit } from '@angular/core';
import { BlogService, Post } from '../blog.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private blogService: BlogService) { }
  posts: Post[];
  username: string;

  ngOnInit() {
    this.posts = this.blogService.getPosts(this.blogService.auth_username);
    console.log("INSIDE LIST COMPOMENT PRINTING");
    console.log(this.posts);
  }

  getPosts():void{
    this.posts = this.blogService.getPosts(this.username);
  }

 parseJWT(token) :void{
   token = document.cookie; //WRONG
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let decoded = JSON.parse(atob(base64));
    this.username = decoded.usr;
  }
}
