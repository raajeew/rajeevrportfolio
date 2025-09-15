import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import emailjs from '@emailjs/browser';
import { emailConfig } from '../config/email.config';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  isSubmitting = false;
  showSuccessMessage = false;
  showErrorMessage = false;

  contactInfo: any = {};
  socialLinks: any[] = [];

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit() {
    this.initializeForm();

    // Initialize EmailJS
    emailjs.init(emailConfig.publicKey);

    this.http.get<any>('assets/data/contact.json').subscribe(data => {
      this.contactInfo = data.contactInfo;
      this.socialLinks = data.socialLinks;
    });
  }

  initializeForm() {
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required]]
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return field ? field.invalid && (field.dirty || field.touched) : false;
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.showSuccessMessage = false;
      this.showErrorMessage = false;

      // Prepare email parameters to match EmailJS template
      const templateParams = {
        title: this.contactForm.value.subject,
        name: `${this.contactForm.value.firstName} ${this.contactForm.value.lastName}`,
        email: this.contactForm.value.email,
        message: `Phone: ${this.contactForm.value.phone || 'Not provided'}\n\nMessage:\n${this.contactForm.value.message}`
      };

      // Send email using EmailJS
      emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        templateParams
      ).then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        this.isSubmitting = false;
        this.showSuccessMessage = true;
        this.contactForm.reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          this.showSuccessMessage = false;
        }, 5000);
      }).catch((error) => {
        console.error('Failed to send email:', error);
        this.isSubmitting = false;
        this.showErrorMessage = true;
        
        // Hide error message after 5 seconds
        setTimeout(() => {
          this.showErrorMessage = false;
        }, 5000);
      });
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.contactForm.controls).forEach(field => {
        const control = this.contactForm.get(field);
        if (control) {
          control.markAsTouched();
        }
      });
    }
  }
}
