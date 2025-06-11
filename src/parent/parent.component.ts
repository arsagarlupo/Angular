import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent,RouterOutlet,FormsModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  message = ""
  receiveMsg($event: string) {
    this.message = $event;
  }

}
