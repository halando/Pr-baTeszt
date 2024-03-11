import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  regModel:any={}
  constructor(private auth:AuthService){}
  register(){
   
     this.auth.register(this.regModel)
   }
}
