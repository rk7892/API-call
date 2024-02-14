import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http = inject(HttpClient);

  constructor() { }

  craeteUser(formData: any){
    return this.http.post('https://jsonplaceholder.typicode.com/users', formData)
  }

  getUser(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }

}
