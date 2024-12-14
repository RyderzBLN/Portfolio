import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  
  selectItem(itemId: string, event: Event): void {
    const item = document.getElementById(itemId) as HTMLInputElement;
    if (item) {
      item.checked = true;
    }

    const elements = document.querySelectorAll('.select');
    elements.forEach((el) => el.classList.remove('active'));

    const element = event.target as HTMLElement;
    element.classList.add('active');
  }

  checkAndActivate() {
    for (let i = 1; i <= 3; i++) {
      const inputElement = document.getElementById(
        `item-${i}`
      ) as HTMLInputElement;
      const btnElement = document.getElementById(`btn-${i}`) as HTMLElement;

      if (inputElement && inputElement.checked) {
        btnElement.classList.add('active');
      } else if (btnElement) {
        btnElement.classList.remove('active');
      }
    }
  }
}
