import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GlobalService } from '../shared/global.service';

@Component({
  selector: 'app-skill-section',
  standalone: true,
  imports: [],
  templateUrl: './skill-section.component.html',
  styleUrl: './skill-section.component.scss'
})
export class SkillSectionComponent {

  constructor(public globalService: GlobalService) {}

  @ViewChild('targetElement', { static: true }) targetElement!: ElementRef;
  isVisible = false;

  ngOnInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.isVisible = true; 
          } else {
            this.isVisible = false; 
          }
        });
      },
      { threshold: 0.1 }
    );


    observer.observe(this.targetElement.nativeElement);
  }
}
