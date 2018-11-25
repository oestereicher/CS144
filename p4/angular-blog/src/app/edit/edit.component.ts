import { Component, OnInit,  HostListener } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Post, BlogService } from '../blog.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  private post: Post;
  private editPost = new FormGroup({
		title: new FormControl(),  // post title input
		body: new FormControl()  // post body input
	});

  constructor(private blogService: BlogService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    ) {
    
   }

  ngOnInit() {
    this.activatedRoute.params.subscribe(() => this.getPost());
  }

  getPost(): void {
		let postid = this.activatedRoute.snapshot.paramMap.get('id');
		this.post = this.blogService.getPost(this.blogService.auth_username, Number(postid));
  }
  
  delete(): void {
		this.blogService.deletePost(this.blogService.auth_username, this.post.postid);
    this.router.navigate(['/']);
    this.activatedRoute.params.subscribe(() => this.blogService.getPosts(this.blogService.auth_username));
  }
  
  @HostListener('window:beforeunload')
  save(): void{
    this.blogService.updatePost(this.blogService.auth_username, this.post);
  }

  preview():void{

  }
}
