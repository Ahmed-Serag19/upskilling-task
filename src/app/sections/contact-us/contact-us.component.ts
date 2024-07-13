import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ContactService } from '../../utils/contact.service';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from '../../components/section-header/section-header.component';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, SectionHeaderComponent],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent {
  contactForm: FormGroup;
  showError = false;
  showSuccess = false;

  constructor(private contactService: ContactService) {
    this.contactForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[a-zA-Z\s]{1,30}$/),
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
        Validators.maxLength(30),
      ]),
      phone: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^01[0-2,5][0-9]{8}$/),
      ]),
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.contactService.sendContactForm(this.contactForm.value).subscribe(
        (response: { message: string }) => {
          // Specify the type of the response
          console.log('Form submitted successfully', response);
          this.contactForm.reset();
          this.showSuccess = true;
          setTimeout(() => (this.showSuccess = false), 3000);
        },
        (error: { message: string }) => {
          console.error('Error submitting form', error);
          this.showError = true;
          setTimeout(() => (this.showError = false), 3000);
        }
      );
    } else {
      this.showError = true;
      this.contactForm.markAllAsTouched();
      setTimeout(() => (this.showError = false), 3000);
    }
  }
}
