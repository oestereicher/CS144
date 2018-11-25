import {FAKEPOSTS} from "./fake-posts";
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private posts: Post[] = [];
  public auth_username: string;
  private nextID: number;
  private api: string = "http://localhost:3000/api/";

  constructor() {
    this.parseJWT(document.cookie);
    this.fetchPosts(this.auth_username);
    console.log(this.auth_username);
   }

  fetchPosts(username: string): void {
    let httpReq = new XMLHttpRequest();
    let classThis = this;
    httpReq.onreadystatechange = function() {
      if (httpReq.readyState == XMLHttpRequest.DONE) {
        console.log("REACHED");
        let res = JSON.parse(httpReq.responseText);
        console.log(res);
        let postnum = 0;
        while (postnum < res.posts.length) {
          let post = {
            postid: res.posts[postnum].postid,
            created: new Date(res.posts[postnum].created),
            modified: new Date(res.posts[postnum].modified),
            title: res.posts[postnum].title,
            body: res.posts[postnum].body
          };
          classThis.posts.push(post);
          console.log(post);
          console.log("PLEASEEEE");
          postnum++;
        }
        //classThis.nextID = Math.max.apply(Math, classThis.posts.map(function(post) { return post.postid })) + 1;
        classThis.nextID = classThis.posts.length? Math.max.apply(Math, classThis.posts.map(function(post) { return post.postid })) + 1: 0;
        console.log(classThis.nextID);
        console.log("YAS OMG FINALLY");
      }
      console.log(classThis.posts);
      console.log("HERE ARE POSTS BITHCEs");
    };

    httpReq.open('GET', this.api + username, true);
    httpReq.withCredentials = true;
    httpReq.send();
  }

  getPosts(username: string): Post[] {
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
    
    let postid = this.nextID;
    httpReq.open("POST", this.api + username + "/" + postid.toString(), true);
    this.nextID++;
    httpReq.setRequestHeader("Content-type", "application/json");
    console.log("THE NEW POST LOOKS LIKE THIS", JSON.stringify(newPost));
    console.log(newPost);
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
      httpReq.open("PUT", this.api + username + "/" + post.postid.toString());
      httpReq.setRequestHeader("Content-type", "application/json");
      httpReq.send(JSON.stringify(this.posts[index]));
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
      //this.posts.splice(index, 1);
      console.log(this.posts);
      httpReq.open('DELETE', this.api + username + "/" + postid.toString(), true);
      httpReq.send();
    }
  }

  //extra functions
  postToIndex(id: number): number {
    for (let i = 0; i < this.posts.length; i++) {
      if (this.posts[i].postid == id) {
        return i;
      }
    }
    return -1;
  }

  parseJWT(token: string): void{
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let decoded = JSON.parse(atob(base64));
    this.auth_username = decoded.usr;
  }
}



export class Post {
  postid: number;
  created: Date;
  modified: Date;
  title: string;
  body: string;
}