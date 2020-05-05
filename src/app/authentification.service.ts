import { Injectable } from '@angular/core';
import { LoginUser } from 'src/Modals/login-user';
import * as firebase from "firebase"
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  onLogin(loginUser:LoginUser) {
    return firebase.auth().signInWithEmailAndPassword(loginUser.email,loginUser.password);
  }
  onRegistry(loginUser:LoginUser) {
    return firebase.auth().createUserWithEmailAndPassword(loginUser.email,loginUser.password);
  }
  constructor() { }
}
