import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})

export class CarouselComponent {
  activeButton: string | null = null;

  selectItem(itemId: string, event: Event): void {
    const item = document.getElementById(itemId) as HTMLInputElement;
    if (item) {
      item.checked = true;
    }

    // Entferne die Klasse 'active' von allen Elementen
    const elements = document.querySelectorAll('.select');
    elements.forEach((el) => el.classList.remove('active'));

    // Füge die Klasse 'active' zum angeklickten Element hinzu
    const element = event.target as HTMLElement;
    element.classList.add('active');
  }
}