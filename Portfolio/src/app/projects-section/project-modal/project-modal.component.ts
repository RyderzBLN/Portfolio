import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, Input} from '@angular/core';


@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.scss',
})
export class ProjectModalComponent {
  @Output() closeEvent = new EventEmitter<void>();
  @Output() nextEvent = new EventEmitter<void>();

  close() {
    this.closeEvent.emit();
  }

  next(){
    this.nextEvent.emit()
  }
}