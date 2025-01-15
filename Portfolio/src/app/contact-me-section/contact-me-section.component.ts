import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { GlobalService } from '../shared/global.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-contact-me-section',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './contact-me-section.component.html',
  styleUrl: './contact-me-section.component.scss',
})
export class ContactMeSectionComponent {
  constructor(public globalService: GlobalService) {}

  contactData = {
    name: '',
    email: '',
    message: '',
  };

  isCheckboxChecked = false;
  isButtonEnabled = false;

  onSubmit(ngForm: NgForm) {
    if (ngForm.valid && ngForm.submitted) {
      console.log(this.contactData);
      this.userFeedback();
      setTimeout(() => {
        this.resetForm(ngForm);
        this.toggleCheckbox();
      }, 5000);
    } else if (!ngForm.valid) {
      this.triggerEffect();
    }
  }

  userFeedback() {
    const feedback = document.querySelector('.user-feedback');
    if (feedback) {
      feedback.classList.add('visible');
      setTimeout(() => {
        feedback.classList.remove('visible');
      }, 5500);
    }
  }

  resetForm(ngForm: NgForm) {
    this.contactData = {
      name: '',
      email: '',
      message: '',
    };
    ngForm.resetForm();
  }

  triggerEffect() {
    const button = document.querySelector('.button');
    if (button) {
      button.classList.add('effekt');
      setTimeout(() => {
        button.classList.remove('effekt');
      }, 350);
    }
  }

  toggleCheckbox() {
    this.isCheckboxChecked = !this.isCheckboxChecked;
    this.isButtonEnabled = this.isCheckboxChecked;
  }

  getButtonText(): string {
    return this.globalService.isDE ? 'Senden' : 'Send';
  }
}
