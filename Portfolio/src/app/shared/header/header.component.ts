import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {


  isDE: boolean = true; // Standardmäßig Deutsch aktiv

  toggleLanguage() {
    this.isDE = !this.isDE; // Einfacher Wechsel zwischen true und false
  }
}
