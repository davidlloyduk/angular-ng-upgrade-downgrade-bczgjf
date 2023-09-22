import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  getUser() {
    return {
      display: 'Tomas',
      username: 'tomastrajan',
      twitter: '@tomastrajan'
    }
  }

}

export interface User {
  display: string;
  username: string;
  twitter: string;
}