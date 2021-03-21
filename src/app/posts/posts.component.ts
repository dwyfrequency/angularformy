import { Component, OnInit } from '@angular/core';
import { Post } from '../shared/interfaces/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts?: Post[] = [];

  constructor() {}

  ngOnInit(): void {}

  addPost(post: Post) {
    console.log({ addPostPartent: post });
    this.posts?.push(post);
    console.log(this.posts);
  }
}
