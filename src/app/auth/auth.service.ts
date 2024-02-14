import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http = inject(HttpClient);

  constructor() { }

  createUser(formData: any) {
    return this.http.post('assets/API.json', formData)
  }

  // getUser(){
  //   return this.http.get('https://jsonplaceholder.typicode.com/users')
  // }
  getUser() {
    return this.http.get('assets/API.json');
  }

}
