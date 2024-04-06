import { Injectable } from '@angular/core';
import { User } from '../interface/user.interface';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiURL = environment.apiURL;

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>(`${this.apiURL}users`);
    }
    
    getUser(id: number) {
      return this.http.get<User>(`${this.apiURL}users/${id}`);
      
  }
}
