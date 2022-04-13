import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  errorMessage: string;
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: new FormControl('email', Validators.required),
      username: new FormControl('username', Validators.required),
      password: new FormControl('password', Validators.required)
    });
    this.userService.registerErrorSubject.subscribe((errMsg) => {
      this.errorMessage = errMsg;
    })
  }

  register() {
    const user = this.registerForm.value;
    console.log(user);
    this.userService.register(user.email, user.username, user.password)
  }
}
