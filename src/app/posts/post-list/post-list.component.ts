import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Post } from '../../models/post.model';
import { PostsService } from '../posts.service';
import { Subscription } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [
    MatExpansionModule,
    MatFormFieldModule,
    CommonModule,
    MatButtonModule,
  ],
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  private postsSubscription: Subscription = new Subscription();

  constructor(private postsService: PostsService) {}

  /**
   * Initializes the component and subscribes to post updates.
   */
  ngOnInit(): void {
    this.postsService.getPosts();
    this.postsSubscription = this.postsService
      .getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }

  /**
   * Unsubscribes from post updates to prevent memory leaks.
   */
  ngOnDestroy(): void {
    this.postsSubscription.unsubscribe();
  }
}
