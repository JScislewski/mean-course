import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-post-create',
  standalone: true,
  templateUrl: './post-create.component.html',
  styleUrl: './post-create.component.css',
  imports: [MatInputModule, FormsModule, MatCardModule, MatButtonModule],
})
export class PostCreateComponent {
  enteredTitle = '';
  enteredContent = '';

  onAddPost() {
    const post: Post = { title: this.enteredTitle, content: this.enteredContent };
  }
}
