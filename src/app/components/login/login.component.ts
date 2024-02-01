import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  //*************************     RestPassword methode   ,...      ******************************/
  resetPassword(f) {
    let data = f.value;
    let email = data.email
    console.log("email : ", email)
    this.authService.resetPassword(email)
      .then(() => { return console.log("bien jour") });
    
    alert("un lien est envoyer a l'email : " + email)
    this.router.navigate([''])


  }
  

  //*****************   login fucntion ********************/
  onLogin(f: any) {
    let data = f
    this.authService.login(data.email, data.password).then(result => {
      console.log("login data : ", result);
      
      this.router.navigateByUrl('/');
      this.authService.getHexesInRows()
      console.log('uid admin is : ', result.user["uid"]);
      localStorage.setItem("adminUid", result.user["uid"])
    }).catch(err => {
      console.log("vous avez un error ")
    })
  }
  //*****************  fin login fucntion ********************/

  
  signWithGoogle(){
    this.authService.signInWithGoogle().then(result => {
      this.router.navigateByUrl('/');
      console.log('hello chere google ');
      console.log('uid admin is : ', result.user["uid"]);
      localStorage.setItem("adminUid", result.user["uid"])
      
    })
  }
  
}
