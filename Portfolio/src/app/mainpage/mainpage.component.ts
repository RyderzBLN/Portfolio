import { Component } from '@angular/core';
import { HeroSectionComponent } from "../hero-section/hero-section.component";
import { AboutMeSectionComponent } from "../about-me-section/about-me-section.component";
import { SkillSectionComponent } from "../skill-section/skill-section.component";
import { ProjectsSectionComponent } from "../projects-section/projects-section.component";
import { ReferenceSectionComponent } from "../reference-section/reference-section.component";
import { ContactMeSectionComponent } from "../contact-me-section/contact-me-section.component";
import { FooterSectionComponent } from "../shared/footer-section/footer-section.component";

@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [HeroSectionComponent, AboutMeSectionComponent, SkillSectionComponent, ProjectsSectionComponent, ReferenceSectionComponent, ContactMeSectionComponent, FooterSectionComponent],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.scss'
})
export class MainpageComponent {

}
