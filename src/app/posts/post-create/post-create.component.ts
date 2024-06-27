import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-post-create',
  standalone: true,
  templateUrl: './post-create.component.html',
  styleUrl: './post-create.component.css',
  imports: [MatInputModule, FormsModule, MatCardModule, MatButtonModule],
})
export class PostCreateComponent {
  enteredValue = '';
  newPost = 'NO CONTENT';
  onAddPost() {
    this.newPost = this.enteredValue;
  }
}
