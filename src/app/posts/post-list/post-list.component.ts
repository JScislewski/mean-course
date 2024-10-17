import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
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
  @Input() posts: Post[] = [];
  panelOpenState: boolean = false;
}
