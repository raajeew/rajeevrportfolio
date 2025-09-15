import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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

      // Simulate API call
      setTimeout(() => {
        this.isSubmitting = false;
        
        // Simulate success (you would replace this with actual API call)
        const success = Math.random() > 0.2; // 80% success rate for demo
        
        if (success) {
          this.showSuccessMessage = true;
          this.contactForm.reset();
          
          // Hide success message after 5 seconds
          setTimeout(() => {
            this.showSuccessMessage = false;
          }, 5000);
        } else {
          this.showErrorMessage = true;
          
          // Hide error message after 5 seconds
          setTimeout(() => {
            this.showErrorMessage = false;
          }, 5000);
        }
      }, 2000);
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
