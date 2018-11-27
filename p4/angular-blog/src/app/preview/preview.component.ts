import { Component, OnInit } from '@angular/core';
import { Parser, HtmlRenderer } from 'commonmark';
import { Router, ActivatedRoute } from '@angular/router';

import { Post, BlogService } from '../blog.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  private post: Post;
  private title: "";
  private body: "";

  constructor(private blogService: BlogService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(() => this.preview());
  }

  preview(): void{
    let postid = this.activatedRoute.snapshot.paramMap.get('id');
    this.post = this.blogService.getPost(this.blogService.auth_username, Number(postid));
    var reader = new Parser();
    var writer = new HtmlRenderer();
    if (this.post != null) {
      var tempTitle = reader.parse(this.post.title);
      this.title = writer.render(tempTitle);

      var tempBody = reader.parse(this.post.body);
      this.body = writer.render(tempBody);
    }
  }

  back(): void{
    this.router.navigate(['/edit/' + this.post.postid]);
  }
}
