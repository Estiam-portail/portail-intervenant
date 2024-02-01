import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from 'src/app/models/user.interface';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerUser : boolean = false;
  constructor( private authService:AuthService, private router: Router) { }

  ngOnInit(): void {
    
  }

  onRegister(f:any){
    let data:User = f
    this.authService.register(data.email,data.password)
    .then(result =>{
      console.log("uid .... ;;;;   ;! : " ,result.user.uid)
    this.authService.addNewUser(result.user.uid, data.nom, data.prenom,data.email).then(()=>{
      this.registerUser = true;
      // this.router.navigate(['/'])
      console.log("succcess add user !")
    })
      console.log("succcess !")
      this.router.navigate([''])
      this.registerUser = true;
      
    }
    ).catch(error=>
      console.log("vous avez rencontrer un error mon ami !" +error)
    );
    console.log(data)
  }

}
