import {FAKEPOSTS} from "./fake-posts";
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private posts: Post[] = [];
  private nextID: number;
  private api: string = "http://localhost:3000/api/";

  constructor() { }

  fetchPosts(username: string): void {
    let httpReq = new XMLHttpRequest();
    let classThis = this;
    httpReq.onreadystatechange = function() {
      if (httpReq.readyState == XMLHttpRequest.DONE) {
        let res = JSON.parse(httpReq.responseText);
        let postnum = 0;
        while (postnum < res.length) {
          let post = {
            postid: res[postnum].postid,
            created: new Date(res[postnum].created),
            modified: new Date(res[postnum].modified),
            title: res[postnum].title,
            body: res[postnum].body
          };
          classThis.posts.push(post);
          postnum++;
        }
      }
    };

    httpReq.open('GET', this.api + username, true);
    httpReq.send();
  }

  getPosts(username: string): Post[] {
    //console.log("I PRINTED FAKEPOSTS");
    //console.log(FAKEPOSTS);
    //return FAKEPOSTS;
    return this.posts;
  }

  getPost(username: string, id: number): Post {
    return this.posts.find(function(post) {
      return post.postid == id;
    })
  }

  newPost(username: string): Post {
    let newPost = {
      postid: this.nextID,
      created: new Date(),
      modified: new Date(),
      title: "",
      body: ""
    };
    this.posts.push(newPost);
    let httpReq = new XMLHttpRequest();
    httpReq.onreadystatechange = function() {
      if (httpReq.readyState == XMLHttpRequest.DONE && httpReq.status == 201) {
        console.log("good job making new post woot");
      }
      else if (httpReq.readyState == XMLHttpRequest.DONE) {
        window.alert("error creating new post rip lmao");
        window.location.href = "http://localhost:3000/edit/";
      }
    };
    //TODO: pick a postid to create new post with
    let postid = 69;
    httpReq.open("POST", this.api + username + "/" + postid.toString());
    httpReq.setRequestHeader("Content-type", "application/json");
    httpReq.send(JSON.stringify(newPost));
    return newPost;
  }

  updatePost(username: string, post: Post): void {
    let index = this.postToIndex(post.postid);
    if (index != -1) {
      this.posts[index].title = post.title;
      this.posts[index].body = post.body;
      this.posts[index].modified = new Date();
      let httpReq = new XMLHttpRequest();
      httpReq.onreadystatechange = function() {
        if (httpReq.readyState == XMLHttpRequest.DONE && httpReq.status == 200) {
          console.log("successful update wooo");
        }
        else if (httpReq.readyState == XMLHttpRequest.DONE) {
          window.alert("error updating post");
          window.location.href = "http://localhost:3000/edit/" + post.postid;
        }
      }

    }
  }

  deletePost(username: string, postid: number): void {
    let index = this.postToIndex(postid);
    if (index != -1) {
      let httpReq = new XMLHttpRequest();
      httpReq.onreadystatechange = function() {
        if (httpReq.readyState == XMLHttpRequest.DONE && httpReq.status == 204) {
          console.log("successful delete guud job");
        }
        else if (httpReq.readyState == XMLHttpRequest.DONE) {
          window.alert("error deleting post");
          window.location.href = "http://localhost:3000/";
        }
      };

      this.posts = this.posts.filter(function(post) {
        return post.postid !== postid;
      });
      httpReq.open('DELETE', this.api + username + "/" + postid.toString(), true);
      httpReq.send();
    }
  }


  postToIndex(id: number): number {
    for (let i = 0; i < this.posts.length; i++) {
      if (this.posts[i].postid == id) {
        return i;
      }
    }
    return -1;
  }


}

export class Post {
  postid: number;
  created: Date;
  modified: Date;
  title: string;
  body: string;
}