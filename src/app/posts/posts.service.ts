import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new BehaviorSubject<Post[]>(this.posts);

  constructor(private http: HttpClient) {}

  /**
   * Retrieves a copy of the posts array.
   * @returns a new array containing the posts
   */
  getPosts() {
    this.http.get<{ message: String; posts: Post[] }>('http://localhost:3000/api/posts').subscribe((postData) => {
      this.posts = postData.posts;
      this.postsUpdated.next([...this.posts]);
    });
  }

  /**
   * Provides an observable for components to listen to updates in the posts array.
   * @returns an observable of the current posts
   */
  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  /**
   * Adds a new post to the posts array and notifies listeners.
   * @param title - The title of the post
   * @param content - The content of the post
   */
  addPost(title: string, content: string): void {
    const newPost: Post = { id: '1', title, content };
    this.posts.push(newPost);
    this.postsUpdated.next([...this.posts]);
  }
}
