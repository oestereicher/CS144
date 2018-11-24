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

  ngOnInit() {
  }

  getPosts():void{
    this.posts = this.blogService.getPosts('CS144');
  }

 parseJWT(token) :void{
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(atob(base64));
  }
}
