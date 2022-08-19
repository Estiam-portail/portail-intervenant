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
  constructor(private authService :AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  register(form){
    let data:User = form.value
    this.authService.register(data.email,data.password)
    .then(result =>{
      console.log(result)
    this.authService.addNewUser(result.user.uid, data.firstName, data.lastName,data.structure,data.departement,data.email).then(()=>{
      this.registerUser = true;
      // this.router.navigate(['/'])


    })
      console.log("succcess !")
      // this.router.navigate([''])
      this.registerUser = true;
      
    }
    ).catch(error=>
      console.log("vous avez rencontrer un error mon ami !" +error)
    );
    console.log(data)
  }

}
