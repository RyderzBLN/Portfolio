import { Component, AfterViewInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements AfterViewInit {
  currentIndex = 0;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.updateCarousel();
    this.setupInputChangeListener();
  }

  setupInputChangeListener() {
    const inputs = document.querySelectorAll('input[type="radio"]');
    inputs.forEach(input => {
      this.renderer.listen(input, 'change', () => {
        document.body.classList.toggle('blue');
      });
    });
  }

  updateCarousel() {
    const items = document.querySelectorAll('.carousel-item');
    const container = document.querySelector('.carousel-container') as HTMLElement;
    const totalItems = items.length;

    items.forEach((item, index) => {
      item.classList.remove('active', 'left', 'right');
      if (index === this.currentIndex) {
        item.classList.add('active');
      } else if (index === (this.currentIndex - 1 + totalItems) % totalItems) {
        item.classList.add('left');
      } else if (index === (this.currentIndex + 1) % totalItems) {
        item.classList.add('right');
      }
    });

    // Adjust the transform to center the active item
    const offset = (container.clientWidth / 2) - (items[this.currentIndex].clientWidth / 2);
    container.style.transform = `translateX(calc(-${this.currentIndex * 100}% + ${offset}px))`;
  }

  next() {
    const items = document.querySelectorAll('.carousel-item');
    this.currentIndex = (this.currentIndex + 1) % items.length;
    this.updateCarousel();
  }

  prev() {
    const items = document.querySelectorAll('.carousel-item');
    this.currentIndex = (this.currentIndex - 1 + items.length) % items.length;
    this.updateCarousel();
  }
}