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
  isCheckedItem1 = false;
  isCheckedItem2 = false;
  isCheckedItem3 = false;


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
      const inputElement = document.getElementById(`item-${i}`) as HTMLInputElement;
      const btnElement = document.getElementById(`btn-${i}`) as HTMLElement;

      if (inputElement && inputElement.checked) {
        btnElement.classList.add('active');
      } else if (btnElement) {
        btnElement.classList.remove('active');
      }
    }
  }

  nextItem() {
    for (let i = 1; i <= 3; i++) {
      const inputElement = document.getElementById(`item-${i}`) as HTMLInputElement;
      if (inputElement && inputElement.checked) {
        const nextIndex = (i % 3) + 1;
        const nextInputElement = document.getElementById(`item-${nextIndex}`) as HTMLInputElement;
        if (nextInputElement) {
          nextInputElement.checked = true;
          this.checkAndActivate();
        }
        break;
      }
    }
  }

  prevItem() {
    for (let i = 1; i <= 3; i++) {
      const inputElement = document.getElementById(`item-${i}`) as HTMLInputElement;
      if (inputElement && inputElement.checked) {
        const prevIndex = (i - 2 + 3) % 3 + 1;
        const prevInputElement = document.getElementById(`item-${prevIndex}`) as HTMLInputElement;
        if (prevInputElement) {
          prevInputElement.checked = true;
          this.checkAndActivate();
        }
        break;
      }
    }
  }
  

  }
  
  
