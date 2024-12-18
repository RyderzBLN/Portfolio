import { Component} from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { GlobalService } from '../shared/global.service';


@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})

export class HeroSectionComponent {
  constructor(public globalService: GlobalService) {}

}

