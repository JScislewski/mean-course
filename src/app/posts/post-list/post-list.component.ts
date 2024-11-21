import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Post } from '../../models/post.model';
import { PostsService } from '../posts.service';
@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [MatExpansionModule, MatFormFieldModule, CommonModule],
  providers: [PostsService],
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  @Input() posts: Post[] = [];
  constructor(public postsService: PostsService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
