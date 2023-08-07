import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { matchPassword } from './matchpassword.validator';
import { environment } from 'src/environments/environment';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  loginForm!: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';
  // api: any;
  constructor(private formBuilder: FormBuilder, private api: CommonService) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
        name: ['', Validators.required],
        email: ['', Validators.required],
        number: ['', Validators.required],
        designation: ['', Validators.required],
        organization: ['', Validators.required],
        company: ['', Validators.required],
        password: ['', Validators.required],
        c_password: ['', Validators.required],
      },
      {
        validators: matchPassword, // Apply the custom validator
      }
    );
  }

  userSignup() {
    const formData: any = this.loginForm.value;
    this.api.post('user', formData).subscribe(
      (response) => {
        this.successMessage = 'Data inserted not successfully!';
        this.errorMessage = ''; // Clear any previous error message
        this.resetForm();
        setTimeout(() => {
          this.successMessage = '';
        }, 3000);
      },
      (error) => {
        console.error('Error inserting data:', error);
        this.errorMessage = '!Something went wrong,  Data not inseted ' + error.message;
        this.successMessage = ''; // Clear any previous success message
      }
    );
  }
  resetForm() {
    // this.loginForm.reset();
  }
}
