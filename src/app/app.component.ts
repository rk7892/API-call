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
      id: [''],
      name: [''],
      email: [''],
      phone: [''],
      website: [''],
    });
    
    this.getUserData();

  }
  
  createNewUser(){
    const formData = this.forms.value;
    
    this.service.createUser(formData).subscribe((res: any) =>{
    console.log(res);
    console.log(formData);
    
    })

    

    // const formData = this.forms.value;
    // this.service.createUser(formData).subscribe((res: any) => {
    // // this.getUserList = result;
    // this.getUserData();
    // console.log(this.forms.value);
    // console.log(res);
    // })
  }


  getUserData(){
    this.service.getUser().subscribe((result: any) => {
      this.getUserList = result;
    });
  }


}
