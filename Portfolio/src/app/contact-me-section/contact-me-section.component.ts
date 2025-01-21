import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { GlobalService } from '../shared/global.service';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-me-section',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './contact-me-section.component.html',
  styleUrl: './contact-me-section.component.scss',
})
export class ContactMeSectionComponent {
  constructor(public globalService: GlobalService, private http: HttpClient) {} 

  isCheckboxChecked = false;
  isButtonEnabled = false;

  mailTest = false;

  contactData = {
    name: '',
    email: '',
    message: '',
  };

  post = {
    endPoint: 'https://catili.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'application/json', 
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData), this.post.options)
        .subscribe({
          next: (response) => {
          
            this.userFeedback();
            this.resetForm(ngForm);
          },
          error: (error) => {
            console.error('Fehler beim Senden der E-Mail:', error);
          },
          complete: () => {
          
          },
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      console.info('MailTest-Modus aktiv. E-Mail wird nicht gesendet.');
      this.resetForm(ngForm); 
    } else {
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
