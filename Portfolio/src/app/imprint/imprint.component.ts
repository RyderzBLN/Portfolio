import { Component } from '@angular/core';
import { FooterSectionComponent } from '../shared/footer-section/footer-section.component';
import { HeaderComponent } from '../shared/header/header.component';
import { GlobalService } from '../shared/global.service';
import { RouterLink} from '@angular/router';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [FooterSectionComponent, RouterLink],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {
constructor(public globalService: GlobalService) {}
toggleLanguage() {
  this.globalService.isDE = !this.globalService.isDE;
}
}
