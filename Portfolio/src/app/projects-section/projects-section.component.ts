import { Component } from '@angular/core';
import { ProjectModalComponent } from './project-modal/project-modal.component';
import { CommonModule } from '@angular/common';
import { ModalPolloComponent } from './project-modal/modal-pollo/modal-pollo.component';
import { GlobalService } from '../shared/global.service';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule, ProjectModalComponent, ModalPolloComponent],
  templateUrl: './projects-section.component.html',
  styleUrls: [
    './projects-section.component.scss',
    './project-modal/project-modal.component.scss', 
    './project-modal/modal-pollo/modal-pollo.component.scss'
  ],
})
export class ProjectsSectionComponent {
  constructor(public globalService: GlobalService) {}
  opens = false;
  modalIndex: number = 0;

  openModal(index: number) {
    this.opens = true;
    this.modalIndex = index;
  }

  closeModal() {
    this.opens = false;
    this.modalIndex = 0;

    
  }

  nextProject() {
    this.modalIndex++;
    if (this.modalIndex > 1) {
      this.modalIndex = 0;
    }
  
    
  }
}
