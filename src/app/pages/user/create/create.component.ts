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
  api: any;
  constructor(private formBuilder: FormBuilder,api:CommonService) {}

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
  

  login() {
    if (this.loginForm.valid) {
      var formData = this.loginForm.value;
       console.log(formData.name);

      this.api.post('user',formData).subscribe((data: any) => {
        console.log(data);
        if (data.code == 200) {
          
        // this.gallery = data.res;
        }
      })
    }
  }
}
