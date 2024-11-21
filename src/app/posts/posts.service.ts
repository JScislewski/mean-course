import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostsService {
  private posts: Post[] = []; // Stores the list of posts
  private postsUpdated = new BehaviorSubject<Post[]>(this.posts); // Default value for the BehaviorSubject

  /**
   * Retrieves a copy of the posts array.
   * @returns a new array containing the posts
   */
  getPosts(): Post[] {
    return [...this.posts]; // Return a shallow copy to prevent external modification
  }

  /**
   * Provides an observable for components to listen to updates in the posts array.
   * @returns an observable of the current posts
   */
  getPostUpdateListener() {
    return this.postsUpdated.asObservable(); // Subscribable to updates
  }

  /**
   * Adds a new post to the posts array and notifies listeners.
   * @param title - The title of the post
   * @param content - The content of the post
   */
  addPost(title: string, content: string): void {
    const newPost: Post = { title, content }; // Using shorthand property initialization
    this.posts.push(newPost); // Add new post to the array
    this.postsUpdated.next([...this.posts]); // Notify all subscribers with the updated posts
  }
}
