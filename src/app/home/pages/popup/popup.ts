import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-popup',
  imports: [],
  templateUrl: './popup.html',
  styleUrl: './popup.scss',
})
export class Popup {
 @Input() isOpen = false;       // modal visibility controlled from parent
  @Input() title = '';
  @Input() body = '';

  @Output() save = new EventEmitter<void>(); // parent listens to save
  @Output() close = new EventEmitter<void>(); // parent listens to close
}
