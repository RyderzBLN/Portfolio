import { Component, Output, EventEmitter } from '@angular/core';
import { GlobalService } from '../../../shared/global.service';

@Component({
  selector: 'app-modal-pollo',
  standalone: true,
  imports: [],
  templateUrl: './modal-pollo.component.html',
  styleUrl: './modal-pollo.component.scss'
})
export class ModalPolloComponent {
  constructor(public globalService: GlobalService) {}

  @Output() closeEvent = new EventEmitter<void>();
  @Output() nextEvent = new EventEmitter<void>();

  close() {
    this.closeEvent.emit();
  }

  next(){
    this.nextEvent.emit()
  }
}
