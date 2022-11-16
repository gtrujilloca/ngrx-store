import { Component, OnInit } from '@angular/core';
import { SignupRoutingModule } from './signup-routing.module';

@Component({
  standalone: true,
  imports: [
    SignupRoutingModule
  ],
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
