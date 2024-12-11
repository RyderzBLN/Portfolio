import { Component } from '@angular/core';
import { CarouselComponent } from './carousel/carousel.component';

@Component({
  selector: 'app-reference-section',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './reference-section.component.html',
  styleUrl: './reference-section.component.scss'
})
export class ReferenceSectionComponent {

}
