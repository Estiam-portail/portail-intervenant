import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUser : boolean = false;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  resetPassword(f) {
    let data = f.value;
    let email = data.email
    console.log("email : ", email)
    this.authService.resetPassword(email)
      .then(() => { return console.log("bien jour") });

    alert("un lien est envoyer a l'email : " + email)
    this.router.navigate([''])
    

  }

  login(f) {
    
    let data = f.value
    console.log(data)
    this.authService.login(data.email, data.password).then(result => {
      // console.log("result :" , result.user.uid)
      localStorage.setItem('uid',result.user.uid)
      let uid = localStorage.getItem('uid')
      console.log("uid   :  " ,uid);
      
      console.log("Vous avez bien connecter !")
      this.loginUser = true
      
    }).catch(err => {
      console.log("vous avez un error habibi ")
    })
  }

}
