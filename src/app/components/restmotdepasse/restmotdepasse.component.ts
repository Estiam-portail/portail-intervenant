import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-restmotdepasse',
  templateUrl: './restmotdepasse.component.html',
  styleUrls: ['./restmotdepasse.component.css']
})
export class RestmotdepasseComponent implements OnInit {

  constructor(private authService :AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  resetPassword(f){
    let data = f.value;
    let email = data.email
    console.log("daata est : ",data)
    this.authService.resetPassword(email)
    .then(()=> {return console.log("bien jour")});
    
  }

}
