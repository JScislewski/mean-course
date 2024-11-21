import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new BehaviorSubject<Post[]>(this.posts);

  /**
   * Retrieves a copy of the posts array.
   * @returns a new array containing the posts
   */
  getPosts(): Post[] {
    return [...this.posts];
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
    const newPost: Post = { title, content };
    this.posts.push(newPost);
    this.postsUpdated.next([...this.posts]);
  }
}
