import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService :AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login(f){
    let data = f.value
    console.log(data)
    this.authService.login(data.email, data.password).then(result=>{
      console.log(result)
      console.log("Vous avez bien connecter !")
      this.router.navigate([''])
    }).catch(err=>{
      console.log("vous avez un error habibi ")
    })

  }

}
