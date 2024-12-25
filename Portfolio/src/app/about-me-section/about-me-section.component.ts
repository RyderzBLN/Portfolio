import { Component, ViewChild, ElementRef } from '@angular/core';
import { GlobalService } from '../shared/global.service';

@Component({
  selector: 'app-about-me-section',
  standalone: true,
  imports: [],
  templateUrl: './about-me-section.component.html',
  styleUrl: './about-me-section.component.scss'
})
export class AboutMeSectionComponent {
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
  
  
     
    }
}
