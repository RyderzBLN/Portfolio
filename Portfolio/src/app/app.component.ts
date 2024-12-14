import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { HeaderComponent } from './shared/header/header.component';
import { AboutMeSectionComponent } from './about-me-section/about-me-section.component';
import { SkillSectionComponent } from './skill-section/skill-section.component';
import { ProjectsSectionComponent } from './projects-section/projects-section.component';
import { ReferenceSectionComponent } from './reference-section/reference-section.component';
import { ContactMeSectionComponent } from './contact-me-section/contact-me-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeroSectionComponent,
    HeaderComponent,
    AboutMeSectionComponent,
    SkillSectionComponent,
    ProjectsSectionComponent,
    ReferenceSectionComponent,
    ContactMeSectionComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Portfolio';
}
