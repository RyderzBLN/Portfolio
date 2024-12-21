import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { GlobalService } from '../global.service';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  constructor(public globalService: GlobalService) {}
  isMenuOpen = false;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; 
  }

  toggleLanguage() {
    this.globalService.isDE = !this.globalService.isDE;
  
  }
}
