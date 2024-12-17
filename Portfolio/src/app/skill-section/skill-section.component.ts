import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-skill-section',
  standalone: true,
  imports: [],
  templateUrl: './skill-section.component.html',
  styleUrl: './skill-section.component.scss'
})
export class SkillSectionComponent {
  @ViewChild('targetElement', { static: true }) targetElement!: ElementRef;
  isVisible = false;

  ngOnInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.isVisible = true; // Animation starten
          } else {
            this.isVisible = false; // Animation entfernen (optional)
          }
        });
      },
      { threshold: 0.1 } // Aktivieren, wenn 10% sichtbar sind
    );

    // Ziel-Element beobachten
    observer.observe(this.targetElement.nativeElement);
  }
}
