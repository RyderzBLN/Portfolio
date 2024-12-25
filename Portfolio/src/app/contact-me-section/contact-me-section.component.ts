import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { GlobalService } from '../shared/global.service';
@Component({
  selector: 'app-contact-me-section',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-me-section.component.html',
  styleUrl: './contact-me-section.component.scss'
})
export class ContactMeSectionComponent {
  constructor(public globalService: GlobalService) {}

  
contactData = {
  name: '',
  email: '',
  message: ''
}

isCheckboxChecked = false; 
isButtonEnabled = false; 

onSubmit(ngForm: NgForm){
if (ngForm.valid && ngForm.submitted) {
  console.log(this.contactData);
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