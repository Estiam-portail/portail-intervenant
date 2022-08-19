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

  constructor(private authService :AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  register(form){
    let data:User = form.value
    this.authService.register(data.email,data.password).then(result =>{
    // this.authService.addNewUser(result.user.uid,data.firstName,data.lastName)
      console.log("succcess !")
      this.router.navigate([''])
    }
    ).catch(error=>
      console.log("vous avez rencontrer un error mon ami !")
    );
    console.log(data)
  }

}
