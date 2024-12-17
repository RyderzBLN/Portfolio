import { Component, ViewChild} from '@angular/core';
import { ProjectModalComponent } from './project-modal/project-modal.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule, ProjectModalComponent],
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.scss', './project-modal/project-modal.component.scss']
})
export class ProjectsSectionComponent {
  projects = [
    {
      number: '01',
      name: 'Join',

      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
      technologies: 'Angular',
      img: 'assets/img/join.png',
    },
    {
      number: '02',
      name: 'EL POLLO LOCO',

      description:
        'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      technologies: 'Angular',
      img: 'assets/img/el-pollo-loco.png'
    },
  ];

  opens = false;

  // Zugriff auf die Kindkomponente über ViewChild
  @ViewChild(ProjectModalComponent) modalComponent!: ProjectModalComponent;

  // Funktion, um das Modal zu öffnen
  openModal() {
    this.opens = true;
  }

  // Funktion, um das Modal zu schließen
  closeModal() {
    this.opens = false; // schließt das Modal
  }
  }

