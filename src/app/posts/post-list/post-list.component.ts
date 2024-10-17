import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Post } from '../../models/post.model';
@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [MatExpansionModule, MatFormFieldModule, CommonModule],
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent {
  posts: Post[] = [
    // { title: 'First Post', content: "This is the first post's content" },
    // { title: 'Second Post', content: "This is the second post's content" },
    // { title: 'Third Post', content: "This is the third post's content" },
  ];
  panelOpenState: boolean = false;
}
