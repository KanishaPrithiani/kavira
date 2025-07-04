import { Component } from '@angular/core';
import { AuthserviceService } from '../authservice.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  imports: [FormsModule, NgIf],
  templateUrl: './signup.html',
  styleUrl: './signup.scss'
})
export class Signup {
username = '';
  email = '';
  password = '';
  error = '';

  constructor(private auth: AuthserviceService, private router: Router, private toastr: ToastrService) {}

  signup() {
    this.auth.signup({
      username: this.username,
      email: this.email,
      password: this.password,
    }).subscribe({
      next: () => {
        this.toastr.success('Signup successful!', 'Welcome 🥳');
        this.router.navigate(['/login'])
      },
      error: (err) => {
        this.error = err.error.error || 'Signup failed';
        this.toastr.error(this.error, 'Error');
      },
    });
  }
}
