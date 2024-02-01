import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileUpload } from 'src/app/models/travaillleur-independant/file-upload-carte-vitale';
import { CarteVitaleScService } from 'src/app/services/travailleur-independant-autoentrepreneur/carte-vitale-sc.service';

@Component({
  selector: 'app-carte-vitale-sc',
  templateUrl: './carte-vitale-sc.component.html',
  styleUrls: ['./carte-vitale-sc.component.css']
})
export class CarteVitaleScComponent implements OnInit {


  selectedFiles: FileList;
  currentFileUpload: FileUpload;
  percentage: number;

  constructor(private carteVitaleScService:CarteVitaleScService,
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
    this.carteVitaleScService.pushFileToStorage(this.currentFileUpload).subscribe(
      percentage => {
        this.percentage = Math.round(percentage);

    if(percentage == 100){
      this.router.navigate(['travailleurIndependant/ExtraitCasierJudiciaire'])
    }
      },
      error => {
        console.log(error);
      }
    );
    

  }
}
