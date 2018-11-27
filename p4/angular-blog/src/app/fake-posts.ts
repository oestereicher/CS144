import {Post} from './blog.service';
let date = new Date();
export const FAKEPOSTS: Post[]= [
    {postid:1, created: date, modified: date, title: 'Post 1', body: 'body'},
    {postid:2, created: date, modified: date, title: 'Post 2', body: 'body'},
    {postid:3, created: date, modified: date, title: 'Post 3', body: 'body'}

];