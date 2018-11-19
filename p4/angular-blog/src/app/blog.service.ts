import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError, tap} from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private posts: Observable<Post[]>;
  private http: HttpClient;
  private api: string = "/api/";

  constructor() { }

  fetchPosts(username: string): void {
    this.posts = this.http.get<Post[]>(this.api + username)
      .pipe(
        tap(catchError(this.handleError('fetchPosts', [])))
      );
  }

  getPosts(username: string): Observable<Post[]> {
    return this.posts;
  }

  getPost(username: string, id: number): Observable<Post> {
    let postGot: Observable<Post>;
    this.posts.subscribe( posts => {
      postGot = posts.find(post => post.postid === id);
    });
    return postGot;
  }

  newPost(username: string): Observable<Post> {

    return this.http.post<Post>(this.api + username)
  }

  updatePost(username: string, post: Post): void {

  }

  deletePost(username: string, postid: number): void {

  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

export class Post {
  postid: number;
  created: Date;
  modified: Date;
  title: string;
  body: string;
}
