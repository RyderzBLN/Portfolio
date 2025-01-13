import { Component } from '@angular/core';
import { FooterSectionComponent } from '../shared/footer-section/footer-section.component';
import { HeaderComponent } from '../shared/header/header.component';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [FooterSectionComponent, HeaderComponent],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {

}
