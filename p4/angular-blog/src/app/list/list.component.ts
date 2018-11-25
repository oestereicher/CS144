import { Component, OnInit } from '@angular/core';
import { BlogService, Post } from '../blog.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private blogService: BlogService,
      private activatedRoute: ActivatedRoute,
      private router: Router,
    ) { }
  posts: Post[];
  username: string;
  selectedPost: Post;

  ngOnInit() {
    this.posts = this.blogService.getPosts(this.blogService.auth_username);
    console.log("init was called again in list component");
  }

  getPosts():void{
    this.posts = this.blogService.getPosts(this.username);
  }

  newPost(): void {
		let newPost = this.blogService.newPost(this.blogService.auth_username);
		let newPostID = newPost.postid;
		this.router.navigate(['/edit/' + newPostID.toString()]);
	}

 parseJWT(token) :void{
   token = document.cookie; //WRONG
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let decoded = JSON.parse(atob(base64));
    this.username = decoded.usr;
  }
}
