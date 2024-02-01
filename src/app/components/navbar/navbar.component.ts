import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  adminUid
  public user;
  useruid:boolean=false
  isUser : boolean = false;
  constructor(public authService: AuthService, 
    private router: Router) { 
    //**********************************   methode user ************** */
    this.authService.user.subscribe(user=>{
      if(user) this.authService.isUser = true;
      else this.authService.isUser = false;
      this.isUser = true
      this.user = user

      this.adminUid =  localStorage.getItem("adminUid")
      console.log("Admin uid nav bar : ", this.adminUid);
      
    })
    //**********************************  fin methode user ************** */

    }
    

  async ngOnInit(){
    console.log("hiho : ", this.authService.getHexesInRows());
    
  }
  

  logout(){
    localStorage.removeItem("adminUid")
    this.authService.logout().then(()=>this.router.navigate(['/']));
  }


 
  
  

}
