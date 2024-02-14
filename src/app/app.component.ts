import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'API-call';
  forms: FormGroup;

  getUserList: any[] = [];

  service = inject(AuthService)

  constructor(private formBuilder: FormBuilder){
    this.forms = this.formBuilder.group({
      id: ['0'],
      name: [''],
      email: [''],
      phone: [''],
      website: [''],
    });
    this.getUserData();

  }
  
  createNewUser(){
    const formData = this.forms.value;
    this.service.craeteUser(formData).subscribe((result: any) => {
      console.log(result);
      
    });
    // console.log(this.forms.value);
  }

  getUserData(){
    this.service.getUser().subscribe((result: any) => {
      this.getUserList = result;
    });
  }
}
