import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { GlobalService } from '../global.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
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

  @HostListener('document:click', ['$event.target'])
  onDocumentClick(target: HTMLElement): void {
    const menuElement = document.querySelector('.side-menu');
    const hamburgerMenu = document.querySelector('.hamburger-menu');

    if (
      this.isMenuOpen &&
      menuElement &&
      hamburgerMenu &&
      !menuElement.contains(target) &&
      !hamburgerMenu.contains(target)
    ) {
      this.isMenuOpen = false;
    }

    if (menuElement && menuElement.contains(target)) {
      this.isMenuOpen = false;
    }
  }
}
