import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { ResultatsService } from './services/resultats.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public user;
  useruid:boolean=false
  isUser : boolean = false;
  constructor(private authService: AuthService, private resultService: ResultatsService,private router: Router) { }

  ngOnInit(){
    this.authService.user.subscribe(user=>{
      if(user) this.isUser = true;
      else this.isUser = false;
      this.user = user

      this.resultService.emailaccompagnateur = user.email
      if(user.uid==="EYeOFsER2HWpNeONIUgYHtePIq32"){
        this.useruid=true
      }
    })
    
  }
  

  logout(){
    this.authService.logout().then(()=>this.router.navigate(['/']));
  }



}
