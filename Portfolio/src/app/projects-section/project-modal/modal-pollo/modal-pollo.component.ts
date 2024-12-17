import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-pollo',
  standalone: true,
  imports: [],
  templateUrl: './modal-pollo.component.html',
  styleUrl: './modal-pollo.component.scss'
})
export class ModalPolloComponent {
  @Output() closeEvent = new EventEmitter<void>();
  @Output() nextEvent = new EventEmitter<void>();

  close() {
    this.closeEvent.emit();
  }

  next(){
    this.nextEvent.emit()
  }
}
