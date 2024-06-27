import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  standalone: true,
  imports: [FormsModule],
})
export class PostCreateComponent {
  enteredValue = '';
  newPost = 'NO CONTENT';
  onAddPost() {
    this.newPost = this.enteredValue;
  }
}
