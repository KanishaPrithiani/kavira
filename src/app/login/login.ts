import { Component } from '@angular/core';
import { AuthserviceService } from '../authservice.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  imports: [ FormsModule, NgIf],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  username = '';
  password = '';
  error = '';

  constructor(private auth: AuthserviceService, private router: Router, private toastr: ToastrService) {}

  login() {
    this.auth.login({ username: this.username, password: this.password }).subscribe({
      next: (res: any) => {
        this.auth.saveToken(res.token);
        this.toastr.success('Login successful!', 'Welcome 🎉');
        console.log(res)
        localStorage.setItem('userId', res.user.id);
        localStorage.setItem('uname', res.user.username)
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.error = err.error.error || 'Login failed';
      },
    });
  }
}
