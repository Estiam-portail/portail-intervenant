import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileUpload } from 'src/app/models/travaillleur-independant/file-upload-carte-identitie';
import { CarteIdentitieService } from 'src/app/services/travailleur-independant-autoentrepreneur/carte-identitie.service';

@Component({
  selector: 'app-carte-identitie',
  templateUrl: './carte-identitie.component.html',
  styleUrls: ['./carte-identitie.component.css']
})
export class CarteIdentitieComponent implements OnInit {

 

  selectedFiles: FileList;
  currentFileUpload: FileUpload;
  percentage: number;

  constructor(private CarteIdentitieService:CarteIdentitieService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  selectFile(event): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    const file = this.selectedFiles.item(0);
    this.selectedFiles = undefined;

    this.currentFileUpload = new FileUpload(file);
    this.CarteIdentitieService.pushFileToStorage(this.currentFileUpload).subscribe(
      percentage => {
        this.percentage = Math.round(percentage);

    if(percentage == 100){
      this.router.navigate(['travailleurIndependant/CarteVitale'])
    }
      },
      error => {
        console.log(error);
      }
    );
    

  }

}
