import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public user;
  useruid:boolean=false
  isUser : boolean = false;
  constructor(public authService: AuthService, 
    private router: Router) { 
    }
    

  ngOnInit(){
    
    //**********************************   methode user ************** */
    this.authService.user.subscribe(user=>{
      if(user) this.authService.isUser = true;
      else this.authService.isUser = false;
      this.user = user
      
      // this.resultService.emailaccompagnateur = user.email

      if(user.uid==="EYeOFsER2HWpNeONIUgYHtePIq32"){
        this.useruid=true
      }
    })
    
    //**********************************  fin methode user ************** */

  }
  

  logout(){
    this.authService.logout().then(()=>this.router.navigate(['/']));
  }

    
  

}
