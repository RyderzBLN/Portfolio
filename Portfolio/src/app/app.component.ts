import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { HeaderComponent } from './shared/header/header.component';
import { AboutMeSectionComponent } from './about-me-section/about-me-section.component';
import { SkillSectionComponent } from './skill-section/skill-section.component';
import { ProjectsSectionComponent } from './projects-section/projects-section.component';
import { ReferenceSectionComponent } from './reference-section/reference-section.component';
import { ContactMeSectionComponent } from './contact-me-section/contact-me-section.component';
import { FooterSectionComponent } from "./shared/footer-section/footer-section.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    HeroSectionComponent,

    AboutMeSectionComponent,
    SkillSectionComponent,
    ProjectsSectionComponent,
    ReferenceSectionComponent,
    ContactMeSectionComponent,
    FooterSectionComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Portfolio';

  isDE: boolean = true; // Initialer Wert für isDE

  // Funktion, die den Wert von isDE aktualisiert
  updateLanguage(isDE: boolean) {
    this.isDE = isDE;
  }



}
