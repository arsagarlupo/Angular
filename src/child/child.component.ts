import { Component, Output , EventEmitter} from '@angular/core';
import { log } from 'node:console';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
@Output() messageEvent = new EventEmitter<string>();
sendMessage() {
  this.messageEvent.emit("This is from Child!")
}

}
